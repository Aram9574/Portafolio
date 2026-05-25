#!/usr/bin/env node
/**
 * Generador de borradores de LinkedIn a partir de posts del blog.
 *
 * Flujo:
 * 1. Lista los posts publicados en content/blog/*.md
 * 2. Descarta los que ya tienen borrador (registrados en content/linkedin/_state.json)
 * 3. Coge el post más reciente sin procesar
 * 4. Llama a la API de Anthropic para adaptarlo a formato LinkedIn (sin enlace en el cuerpo)
 * 5. Escribe el borrador en content/linkedin/_email_subject.txt y _email_body.txt
 *    (archivos temporales, no versionados: el workflow los envía por email)
 * 6. Registra el slug en _state.json para no repetirlo
 *
 * Variables requeridas:
 *   ANTHROPIC_API_KEY
 *
 * Uso:
 *   node scripts/generate-linkedin-post.mjs            # modo real
 *   node scripts/generate-linkedin-post.mjs --dry-run  # sin llamar a API, genera placeholder
 *   node scripts/generate-linkedin-post.mjs --slug=mi-slug  # post de blog concreto
 *
 * Exit codes:
 *   0 — borrador generado
 *   1 — error (API, filesystem)
 *   2 — no quedan posts de blog sin procesar
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const BLOG_DIR = path.join(ROOT, 'content', 'blog');
const LINKEDIN_DIR = path.join(ROOT, 'content', 'linkedin');
const STATE_PATH = path.join(LINKEDIN_DIR, '_state.json');
const EMAIL_SUBJECT_PATH = path.join(LINKEDIN_DIR, '_email_subject.txt');
const EMAIL_BODY_PATH = path.join(LINKEDIN_DIR, '_email_body.txt');
const VOZ_PATH = path.join(ROOT, 'docs', 'voz.md');
const SITE_URL = 'https://alejandrozakzuk.com';

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const slugArg = args.find((a) => a.startsWith('--slug='));
const SPECIFIC_SLUG = slugArg ? slugArg.split('=')[1] : null;

function log(...a) {
  console.log('[generate-linkedin-post]', ...a);
}

function readState() {
  if (!fs.existsSync(STATE_PATH)) {
    return { processed: [] };
  }
  return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
}

function writeState(state) {
  fs.mkdirSync(LINKEDIN_DIR, { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2) + '\n', 'utf8');
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) fm[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
  }
  return fm;
}

function listBlogPosts() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), 'utf8');
      const fm = parseFrontmatter(raw);
      return {
        slug: fm.slug || f.replace(/\.md$/, ''),
        title: fm.title || '',
        description: fm.description || '',
        date: fm.date || '1970-01-01',
        raw,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function pickPost(posts, state) {
  if (SPECIFIC_SLUG) {
    const p = posts.find((x) => x.slug === SPECIFIC_SLUG);
    if (!p) throw new Error(`No existe post de blog con slug=${SPECIFIC_SLUG}`);
    return p;
  }
  return posts.find((p) => !state.processed.includes(p.slug)) || null;
}

// El prompt de sistema es la guía de voz canónica en docs/voz.md.
// Fuente única de verdad: editar ese archivo cambia el comportamiento de este script.
function loadSystemPrompt() {
  if (!fs.existsSync(VOZ_PATH)) {
    throw new Error(`No se encuentra la guía de voz en ${VOZ_PATH}`);
  }
  const voz = fs.readFileSync(VOZ_PATH, 'utf8');
  return `${voz}\n\n---\n\nEstás generando una publicación de LinkedIn. Aplica la sección "Formato según canal → LinkedIn" de esta guía.`;
}

const SYSTEM_PROMPT = loadSystemPrompt();

function buildUserPrompt(post) {
  return `Tienes este artículo del blog. Adáptalo a una publicación de LinkedIn siguiendo estrictamente las reglas del system prompt.

Título del artículo: ${post.title}

Artículo completo (markdown):
---
${post.raw}
---

Antes de devolver el post, repasa esta checklist mental y reescribe si algo falla:
- ¿Suena a "consultor experto que asesora"? Si sí, reescríbelo en voz de divulgador.
- ¿Hay alguna frase que presume acceso o insider knowledge ("los proyectos que reviso", "he preguntado a directores de", "he visto pilotos con coste X")? Quítala.
- ¿Hay cifras concretas que podrían estar inventadas? Sustitúyelas por orden de magnitud o lenguaje cualitativo.
- ¿La primera línea para el scroll antes de los 140 caracteres?
- ¿Cada párrafo tiene 1-2 líneas máximo, con línea en blanco entre ellos?
- ¿El total queda entre 1.000 y 1.500 caracteres?
- ¿El cierre es una pregunta o duda honesta, no una promoción del artículo?

Devuelve ÚNICAMENTE el texto del post, listo para copiar y pegar. Sin frontmatter, sin comentarios, sin comillas envolventes, sin URLs en el cuerpo.`;
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
      max_tokens: 2000,
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
  return text.trim();
}

function buildPlaceholderBody() {
  return `Placeholder generado en modo --dry-run. Aún no se ha llamado a la API.

Aquí iría el cuerpo de la publicación de LinkedIn, sin ningún enlace.

La llamada a la acción invitaría a leer el artículo y mencionaría el enlace en el primer comentario.

#SaludDigital #IAClinica #HealthTech`;
}

function buildEmailBody(post, postBody) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return `Borrador de LinkedIn generado a partir de tu post del blog.

Artículo de origen: ${post.title}

──────── COPIA ESTE TEXTO EN LA PUBLICACIÓN ────────

${postBody}

──────── ENLACE PARA EL PRIMER COMENTARIO ──────────

${url}

Recuerda: publica primero el texto y, justo después, añade ese enlace
como PRIMER COMENTARIO. No lo metas en el cuerpo del post — LinkedIn
penaliza el alcance de las publicaciones con enlaces externos.
`;
}

async function main() {
  log('Inicio. DRY_RUN=', DRY_RUN, 'slug=', SPECIFIC_SLUG || '(más reciente sin procesar)');

  const posts = listBlogPosts();
  const state = readState();
  const post = pickPost(posts, state);

  if (!post) {
    log('No quedan posts de blog sin procesar. Todos tienen ya borrador de LinkedIn.');
    process.exit(2);
  }

  log('Post seleccionado:', post.slug, '—', post.title);

  let postBody;
  if (DRY_RUN) {
    log('Modo dry-run: generando placeholder sin llamar a la API.');
    postBody = buildPlaceholderBody();
  } else {
    log('Llamando a la API de Anthropic...');
    postBody = await callClaudeAPI(SYSTEM_PROMPT, buildUserPrompt(post));
  }

  fs.mkdirSync(LINKEDIN_DIR, { recursive: true });
  fs.writeFileSync(EMAIL_SUBJECT_PATH, `Borrador LinkedIn: ${post.title}`, 'utf8');
  fs.writeFileSync(EMAIL_BODY_PATH, buildEmailBody(post, postBody), 'utf8');
  log(`Escrito: ${EMAIL_SUBJECT_PATH}`);
  log(`Escrito: ${EMAIL_BODY_PATH}`);

  if (DRY_RUN) {
    log('Modo dry-run: NO se registra el post en _state.json (la cola no se consume).');
  } else {
    if (!state.processed.includes(post.slug)) {
      state.processed.push(post.slug);
    }
    writeState(state);
    log('Estado actualizado: slug registrado como procesado.');
  }

  log('OK. Borrador de LinkedIn generado para:', post.slug);
}

main().catch((err) => {
  console.error('[generate-linkedin-post] ERROR:', err.message);
  process.exit(1);
});
