#!/usr/bin/env node
/**
 * Backfill: genera TODOS los posts pendientes en la cola.
 *
 * Asigna a cada post una fecha de lunes retroactiva, empezando desde hoy
 * y retrocediendo 7 días por cada post, para que aparezcan como si se
 * hubieran publicado semanalmente los últimos N meses.
 *
 * Uso:
 *   node scripts/generate-all-pending.mjs              # modo real
 *   node scripts/generate-all-pending.mjs --dry-run    # placeholders
 *   node scripts/generate-all-pending.mjs --limit=5    # solo los primeros 5
 *
 * Variables requeridas:
 *   ANTHROPIC_API_KEY (en modo real)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const QUEUE_PATH = path.join(ROOT, 'content', 'blog', '_queue.json');
const BLOG_DIR = path.join(ROOT, 'content', 'blog');

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const limitArg = args.find((a) => a.startsWith('--limit='));
const LIMIT = limitArg ? parseInt(limitArg.split('=')[1], 10) : Infinity;

function log(...a) {
  console.log('[batch]', ...a);
}

function readQueue() {
  return JSON.parse(fs.readFileSync(QUEUE_PATH, 'utf8'));
}

function writeQueue(queue) {
  fs.writeFileSync(QUEUE_PATH, JSON.stringify(queue, null, 2) + '\n', 'utf8');
}

/**
 * Calcula el lunes de la semana actual, en UTC.
 * Si hoy es lunes, devuelve hoy; si no, el lunes anterior.
 */
function mondayOf(date) {
  const d = new Date(date);
  const day = d.getUTCDay();
  const diff = day === 0 ? 6 : day - 1;
  d.setUTCDate(d.getUTCDate() - diff);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

/**
 * Reemplaza la fecha del frontmatter en un archivo markdown generado.
 */
function overrideDate(filePath, newDate) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(/^date:\s*"?[\d-]+"?/m, `date: "${newDate}"`);
  fs.writeFileSync(filePath, updated, 'utf8');
}

async function generateOne(topicId, targetDate) {
  const scriptArgs = ['scripts/generate-weekly-post.mjs', `--topic=${topicId}`];
  if (DRY_RUN) scriptArgs.push('--dry-run');

  const result = spawnSync('node', scriptArgs, {
    cwd: ROOT,
    stdio: ['inherit', 'pipe', 'pipe'],
    env: process.env,
  });

  const stdout = result.stdout?.toString() || '';
  const stderr = result.stderr?.toString() || '';

  if (result.status !== 0) {
    return { ok: false, error: stderr || stdout || `exit ${result.status}` };
  }

  const outputFile = path.join(BLOG_DIR, `${topicId}.md`);
  if (!fs.existsSync(outputFile)) {
    return { ok: false, error: 'archivo no escrito' };
  }

  overrideDate(outputFile, targetDate);

  return { ok: true, file: outputFile };
}

async function main() {
  const queue = readQueue();
  const pending = queue.topics.filter((t) => !t.published).slice(0, LIMIT);

  if (pending.length === 0) {
    log('No hay temas pendientes.');
    process.exit(0);
  }

  if (!DRY_RUN && !process.env.ANTHROPIC_API_KEY) {
    log('ERROR: falta ANTHROPIC_API_KEY. Exporta la variable o usa --dry-run.');
    process.exit(1);
  }

  log(`Temas pendientes: ${pending.length}`);
  log(`Modo: ${DRY_RUN ? 'DRY-RUN (placeholders)' : 'REAL (Anthropic API)'}`);

  // Asignar fechas retroactivas: el más antiguo de la cola recibe la fecha más antigua
  // (para que al ordenar desc el primero de la cola sea el más reciente visible).
  // Pero queremos que el PRIMER item de la cola sea el más RECIENTE (hoy).
  const todayMonday = mondayOf(new Date());
  const dates = pending.map((_, i) => {
    const d = new Date(todayMonday);
    d.setUTCDate(d.getUTCDate() - i * 7);
    return isoDate(d);
  });

  log(`Rango de fechas: ${dates[dates.length - 1]} → ${dates[0]}`);
  log('');

  const results = [];
  for (let i = 0; i < pending.length; i++) {
    const topic = pending[i];
    const date = dates[i];
    log(`[${i + 1}/${pending.length}] ${topic.id} (fecha: ${date})`);
    log(`         ${topic.title}`);

    const result = await generateOne(topic.id, date);
    results.push({ topic: topic.id, date, ...result });

    if (result.ok) {
      log(`         ✓ OK`);
    } else {
      log(`         ✗ FAIL: ${result.error.slice(0, 200)}`);
    }
    log('');

    // Pausa de 2s entre llamadas para no saturar la API
    if (!DRY_RUN && i < pending.length - 1) {
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  const ok = results.filter((r) => r.ok).length;
  const fail = results.filter((r) => !r.ok);

  log('='.repeat(60));
  log(`Completados: ${ok}/${results.length}`);

  if (fail.length > 0) {
    log('');
    log('Fallos:');
    fail.forEach((f) => log(`  - ${f.topic}: ${f.error.slice(0, 150)}`));
  }

  process.exit(fail.length > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error('[batch] ERROR:', err.message);
  process.exit(1);
});
