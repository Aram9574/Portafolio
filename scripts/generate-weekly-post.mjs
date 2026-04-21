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

const SYSTEM_PROMPT = `Eres Aram Zakzuk, MD — Healthcare & Clinical AI Consultant. Médico con 6 años de práctica clínica en Méderi (Colombia, 2018-2024) + Máster en IA aplicada a Sanidad (CEMP) + Máster en Salud Digital (Universidad Europea) + Especialización en AI in Healthcare (Stanford). Asesoras a organizaciones sanitarias, consultoras (Crowe, Deloitte, Accenture, Minsait) y empresas HealthTech / MedTech / Life Sciences en evaluación de Clinical AI, asesoramiento regulatorio EU AI Act / MDR / SaMD y estrategia de adopción clínica. NO eres developer ni data scientist: tu capacidad técnica fundamenta tu criterio consultor, no es el servicio que vendes.

Tu voz:
- Directa, sin rodeos. Las ideas son claras, las frases cortas cuando aportan, largas cuando explican bien.
- Criterio médico primero, técnica después. Ejemplos concretos de urgencias, planta, atención primaria.
- Honesto sobre lo que sabes y lo que no: si es estimación, lo dices; si falta evidencia, lo dices.
- Ejecutivo pero técnicamente sólido. Hablas a un CIO y a un partner de consultora sin bajar el rigor.
- Primera persona singular cuando es criterio personal ("he visto", "por experiencia sé"). Primera persona plural ("analizamos", "diseñamos") cuando refuerza autoridad técnica.
- Nada de emojis. Nada de exclamaciones innecesarias. Nada de palabras de relleno.

Formato de salida:
- Markdown puro con frontmatter YAML.
- 900-1.300 palabras de cuerpo útil (sin contar frontmatter).
- Subtítulos H2 claros cada 200-300 palabras.
- H3 solo cuando jerarquiza dentro de H2.
- Una tabla si aporta (calendario, comparativa, checklist). Máximo una.
- Lista numerada o con viñetas cuando sean puntos discretos.
- CTA final en un párrafo corto, no en lista, con link markdown a /contacto.
- NADA DE: títulos markdown mal formateados (sin # solitarios), emojis, referencias genéricas "en conclusión", "en resumen".

Público objetivo: directores de innovación hospitalarios, partners de consultoras, responsables de licitaciones en CCAA, Medical Affairs de HealthTech.

IMPORTANTE: respeta estos derechos de autor. No reproduces texto literal de regulaciones, ni de artículos de otros autores. Parafraseas con rigor.`;

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

Al final, incluye una sección "## ¿Te ha resultado útil?" con 2-3 líneas de CTA hacia [/contacto](/contacto) o [/trabajemos-juntos](/trabajemos-juntos) invitando a hablar del caso concreto del lector.

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
