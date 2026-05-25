#!/usr/bin/env node
/**
 * Generador semanal de posts del blog.
 *
 * Flujo:
 * 1. Lee content/blog/_queue.json
 * 2. Toma el primer tema con published: false
 * 3. Llama a la API de Anthropic para generar el cuerpo del post
 * 4. Escribe content/blog/<slug>.md con frontmatter + cuerpo
 * 5. Marca el tema como published: true en _queue.json
 *
 * Variables requeridas:
 *   ANTHROPIC_API_KEY
 *
 * Uso:
 *   node scripts/generate-weekly-post.mjs           # modo real
 *   node scripts/generate-weekly-post.mjs --dry-run # sin llamar a API, genera placeholder
 *   node scripts/generate-weekly-post.mjs --topic=id-especifico
 *
 * Salida exit codes:
 *   0 — post generado
 *   1 — error (API, filesystem)
 *   2 — no hay temas pendientes en la cola
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const QUEUE_PATH = path.join(ROOT, 'content', 'blog', '_queue.json');
const OUTPUT_DIR = path.join(ROOT, 'content', 'blog');
const VOZ_PATH = path.join(ROOT, 'docs', 'voz.md');

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const topicArg = args.find((a) => a.startsWith('--topic='));
const SPECIFIC_TOPIC = topicArg ? topicArg.split('=')[1] : null;

function log(...a) {
  console.log('[generate-weekly-post]', ...a);
}

function readQueue() {
  if (!fs.existsSync(QUEUE_PATH)) {
    throw new Error(`No existe la cola en ${QUEUE_PATH}`);
  }
  return JSON.parse(fs.readFileSync(QUEUE_PATH, 'utf8'));
}

function writeQueue(queue) {
  fs.writeFileSync(QUEUE_PATH, JSON.stringify(queue, null, 2) + '\n', 'utf8');
}

function pickTopic(queue) {
  if (SPECIFIC_TOPIC) {
    const t = queue.topics.find((x) => x.id === SPECIFIC_TOPIC);
    if (!t) throw new Error(`Tema con id=${SPECIFIC_TOPIC} no encontrado`);
    return t;
  }
  return queue.topics.find((t) => !t.published) || null;
}

// El prompt de sistema es la guía de voz canónica en docs/voz.md.
// Fuente única de verdad: editar ese archivo cambia el comportamiento de este script.
function loadSystemPrompt() {
  if (!fs.existsSync(VOZ_PATH)) {
    throw new Error(`No se encuentra la guía de voz en ${VOZ_PATH}`);
  }
  const voz = fs.readFileSync(VOZ_PATH, 'utf8');
  return `${voz}\n\n---\n\nEstás generando un artículo del blog. Aplica la sección "Formato según canal → Blog" de esta guía.`;
}

const SYSTEM_PROMPT = loadSystemPrompt();

function buildUserPrompt(topic) {
  return `Escribe el post completo para el blog sobre este tema:

**Título propuesto**: ${topic.title}
**Ángulo/tesis**: ${topic.angle}
**Audiencia**: ${topic.audience}
**Tags**: ${topic.tags.join(', ')}

Devuelve EXACTAMENTE este formato (markdown con frontmatter YAML):

---
slug: ${topic.id}
title: "${topic.title.replace(/"/g, '\\"')}"
description: "<resumen de 160-200 caracteres, SEO friendly, sin comillas dobles>"
date: "${new Date().toISOString().slice(0, 10)}"
readingTime: "<N min>"
tags: [${topic.tags.map((t) => `"${t}"`).join(', ')}]
---

<cuerpo del post en markdown, 900-1.300 palabras, con H2 y H3 según convenga>

Al final, incluye una sección "## ¿Te ha resultado útil?" con 2-3 líneas de CTA conversacional hacia [/contacto](/contacto) o [/trabajemos-juntos](/trabajemos-juntos). Tono: invitas a comentar el tema, no a contratarte.

Antes de devolver el artículo, repasa esta checklist mental y reescribe si algo falla:
- ¿Suena a "consultor experto que asesora a las top firmas"? Si sí, reescríbelo en voz de divulgador.
- ¿Hay alguna frase que presume acceso o cartera de clientes ("los proyectos que reviso", "he preguntado a directores", "los pilotos que valido")? Quítala o reformúlala.
- ¿Aparece la primera persona del plural ("analizamos", "diseñamos", "evaluamos")? Sustitúyela: o la quitas o la pasas a singular observador.
- ¿Hay cifras concretas que podrían estar inventadas (porcentajes específicos, costes, ahorros)? Sustitúyelas por orden de magnitud o lenguaje cualitativo.
- ¿El cierre invita a conversar, o suena a pitch comercial? Si suena a pitch, suavízalo.

No añadas nada fuera del frontmatter y el cuerpo.`;
}

async function callClaudeAPI(systemPrompt, userPrompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('Falta ANTHROPIC_API_KEY en el entorno');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: 8000,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API error ${res.status}: ${body.slice(0, 500)}`);
  }

  const json = await res.json();
  const text = json?.content?.[0]?.text;
  if (!text || typeof text !== 'string') {
    throw new Error(`Respuesta de API sin texto válido: ${JSON.stringify(json).slice(0, 300)}`);
  }
  return text;
}

function buildPlaceholderPost(topic) {
  const today = new Date().toISOString().slice(0, 10);
  return `---
slug: ${topic.id}
title: "${topic.title}"
description: "${topic.angle.slice(0, 180)}"
date: "${today}"
readingTime: "8 min"
tags: [${topic.tags.map((t) => `"${t}"`).join(', ')}]
---

> **Placeholder generado en modo --dry-run.** Aún no se ha llamado a la API.

## Contexto

${topic.angle}

## Borrador

Este es un placeholder. En producción, la API de Anthropic generaría aquí el contenido completo siguiendo el prompt de sistema.

## ¿Te ha resultado útil?

Si lideras un proyecto que toca este tema, [hablemos](/contacto).
`;
}

function validateMarkdown(raw, topic) {
  if (!raw.startsWith('---')) {
    throw new Error('La salida no empieza con frontmatter YAML');
  }
  if (!raw.includes(`slug: ${topic.id}`)) {
    throw new Error(`El slug del frontmatter no coincide con ${topic.id}`);
  }
  const wordCount = raw.split(/\s+/).length;
  if (wordCount < 400) {
    throw new Error(`Post demasiado corto: ${wordCount} palabras`);
  }
  return true;
}

async function main() {
  log('Inicio. DRY_RUN=', DRY_RUN, 'topic=', SPECIFIC_TOPIC || '(siguiente en cola)');

  const queue = readQueue();
  const topic = pickTopic(queue);
  if (!topic) {
    log('No hay temas pendientes en la cola. Añade más en content/blog/_queue.json');
    process.exit(2);
  }

  log('Tema seleccionado:', topic.id, '—', topic.title);

  const outputFile = path.join(OUTPUT_DIR, `${topic.id}.md`);
  if (fs.existsSync(outputFile)) {
    log(`El archivo ya existe: ${outputFile}. Abortando para no sobreescribir.`);
    process.exit(1);
  }

  let markdown;
  if (DRY_RUN) {
    log('Modo dry-run: generando placeholder sin llamar a la API.');
    markdown = buildPlaceholderPost(topic);
  } else {
    log('Llamando a la API de Anthropic...');
    markdown = await callClaudeAPI(SYSTEM_PROMPT, buildUserPrompt(topic));
    validateMarkdown(markdown, topic);
  }

  fs.writeFileSync(outputFile, markdown, 'utf8');
  log(`Escrito: ${outputFile}`);

  topic.published = true;
  topic.publishedSlug = topic.id;
  topic.publishedDate = new Date().toISOString().slice(0, 10);
  writeQueue(queue);
  log('Cola actualizada: tema marcado como published.');

  log('OK. Slug:', topic.id);
}

main().catch((err) => {
  console.error('[generate-weekly-post] ERROR:', err.message);
  process.exit(1);
});
