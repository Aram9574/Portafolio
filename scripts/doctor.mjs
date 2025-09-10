#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const results = []
const ok = (msg) => results.push({ level: 'ok', msg })
const warn = (msg) => results.push({ level: 'warn', msg })
const err = (msg) => results.push({ level: 'err', msg })

function readJSON(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')) } catch { return null }
}

function parseEnvFile(file) {
  const out = {}
  try {
    const txt = fs.readFileSync(file, 'utf8')
    for (const line of txt.split(/\r?\n/)) {
      if (!line || /^\s*#/.test(line)) continue
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_\.]*)\s*=\s*(.*)\s*$/)
      if (!m) continue
      let v = m[2]
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1)
      out[m[1]] = v
    }
  } catch {}
  return out
}

// 1) Node version
try {
  const nodeVer = process.versions.node
  const major = parseInt(nodeVer.split('.')[0], 10)
  if (major >= 18 && major < 22) ok(`Node ${nodeVer} (compatible)`) 
  else warn(`Node ${nodeVer} detectado. Recomendado Node >=18 <22 (usa .nvmrc: 20)`) 
} catch (e) { warn('No se pudo detectar versión de Node') }

// 2) Yarn version
try {
  const yarnVer = execSync('yarn -v', { stdio: 'pipe' }).toString().trim()
  const yMajor = parseInt(yarnVer.split('.')[0], 10)
  if (yMajor >= 4) ok(`Yarn ${yarnVer} (Berry)`) 
  else warn(`Yarn ${yarnVer}. Recomendado Yarn 4.x (corepack use yarn@4.9.4)`) 
} catch { warn('Yarn no disponible en PATH') }

// 3) next version and critical file
const pkg = readJSON(path.join(process.cwd(), 'package.json')) || {}
const declaredNext = pkg?.dependencies?.next || pkg?.devDependencies?.next
if (declaredNext) ok(`Next declarado en package.json: ${declaredNext}`)
else warn('Next no declarado en package.json')

const nextPkg = readJSON(path.join(process.cwd(), 'node_modules/next/package.json'))
if (nextPkg?.version) ok(`Next instalado: ${nextPkg.version}`)
else warn('Next no está instalado (falta node_modules/next)')

const cfgShared = path.join(process.cwd(), 'node_modules/next/dist/server/config-shared.js')
if (fs.existsSync(cfgShared)) ok('Archivo crítico presente: dist/server/config-shared.js')
else err('Falta dist/server/config-shared.js. Ejecuta: rm -rf node_modules .next && yarn install')

// 4) Env vars
const envLocal = parseEnvFile(path.join(process.cwd(), '.env.local'))
const env = { ...envLocal, ...process.env }

// Email (Resend)
if (!env.RESEND_API_KEY) warn('RESEND_API_KEY no configurado (requerido para enviar emails en producción)')
else ok('RESEND_API_KEY configurado')
if (!env.CONTACT_TO) warn('CONTACT_TO no configurado (a qué correo llegan los mensajes)')
else ok(`CONTACT_TO presente: ${env.CONTACT_TO}`)

// reCAPTCHA (opcional)
const siteKey = env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
const secret = env.RECAPTCHA_SECRET
if (siteKey && secret) ok('reCAPTCHA v3 configurado (site key y secret)')
else if (siteKey || secret) warn('reCAPTCHA v3 incompleto: define ambos NEXT_PUBLIC_RECAPTCHA_SITE_KEY y RECAPTCHA_SECRET o ninguno')
else ok('reCAPTCHA v3 no configurado (honeypot + rate limit activos)')

// SITE URL (opcional, buenas prácticas)
if (env.NEXT_PUBLIC_SITE_URL) {
  const url = env.NEXT_PUBLIC_SITE_URL
  if (/^https?:\/\//.test(url)) ok(`NEXT_PUBLIC_SITE_URL: ${url}`)
  else warn(`NEXT_PUBLIC_SITE_URL no parece una URL válida: ${url}`)
} else warn('NEXT_PUBLIC_SITE_URL no definido (recomendado para entornos de producción)')

// 5) Files presence for SEO endpoints
const robots = path.join(process.cwd(), 'app/robots.ts')
const sitemap = path.join(process.cwd(), 'app/sitemap.ts')
fs.existsSync(robots) ? ok('app/robots.ts presente') : warn('app/robots.ts no encontrado')
fs.existsSync(sitemap) ? ok('app/sitemap.ts presente') : warn('app/sitemap.ts no encontrado')

// Print summary
const icons = { ok: '✅', warn: '⚠️ ', err: '❌' }
for (const r of results) console.log(`${icons[r.level]} ${r.msg}`)

const errs = results.filter(r => r.level === 'err').length
const warns = results.filter(r => r.level === 'warn').length
console.log(`\nResumen: ${errs} errores, ${warns} avisos`)
process.exit(0)

