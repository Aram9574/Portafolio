import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const BLOG_DIR = path.join(ROOT, 'content', 'blog')
const QUEUE_PATH = path.join(BLOG_DIR, '_queue.json')

// Mismo parseo que usan los scripts de automatización: si esto se rompe,
// el blog semanal o el borrador de LinkedIn producirían basura.
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return null
  const fm = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/)
    if (m) fm[m[1]] = m[2].replace(/^"(.*)"$/, '$1')
  }
  return fm
}

const files = fs
  .readdirSync(BLOG_DIR)
  .filter((f) => f.endsWith('.md') && !f.startsWith('_'))

test('hay al menos un post de blog', () => {
  assert.ok(files.length > 0, 'no se encontró ningún .md en content/blog')
})

test('cada post empieza con frontmatter y tiene los campos obligatorios', () => {
  for (const f of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), 'utf8')
    assert.ok(raw.startsWith('---'), `${f}: no empieza con frontmatter`)
    const fm = parseFrontmatter(raw)
    assert.ok(fm, `${f}: frontmatter no parseable`)
    for (const field of ['title', 'description', 'date']) {
      assert.ok(fm[field] && fm[field].length > 0, `${f}: falta '${field}'`)
    }
    assert.match(fm.date, /^\d{4}-\d{2}-\d{2}$/, `${f}: fecha no ISO (YYYY-MM-DD): ${fm.date}`)
  }
})

test('no hay slugs de blog duplicados', () => {
  const seen = new Map()
  for (const f of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), 'utf8')
    const fm = parseFrontmatter(raw) || {}
    const slug = fm.slug || f.replace(/\.md$/, '')
    assert.ok(!seen.has(slug), `slug duplicado '${slug}' en ${f} y ${seen.get(slug)}`)
    seen.set(slug, f)
  }
})

test('_queue.json es JSON válido con array de topics', () => {
  const queue = JSON.parse(fs.readFileSync(QUEUE_PATH, 'utf8'))
  assert.ok(Array.isArray(queue.topics), '_queue.json.topics no es un array')
  for (const t of queue.topics) {
    assert.ok(t.id && t.title, `topic sin id/title: ${JSON.stringify(t).slice(0, 80)}`)
  }
})
