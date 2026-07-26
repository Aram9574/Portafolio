# CLAUDE.md — Portafolio

## Contexto
Web personal de Aram Zakzuk como médico especializado en IA en Salud Digital.
Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Estado
- En producción. Dominio: https://alejandrozakzuk.com
- Deploy en Vercel. Node 20 (ver `.nvmrc` y `engines` en package.json).
- Automatización activa vía GitHub Actions:
  - `weekly-blog-post.yml`: genera un post del blog cada lunes (API Anthropic) y lo commitea a `main`.
  - `linkedin-draft.yml`: genera un borrador de LinkedIn martes y jueves y lo envía por email.
- Variables de entorno: ver `.env.example` (contacto, newsletter, analítica) y los Secrets de GitHub (ANTHROPIC_API_KEY, GMAIL_*).

## Convenciones
- Nombres de archivos en kebab-case (sin tildes ni espacios)
- Componentes en PascalCase
- `node_modules/`, `.next/`, `.env.local` en `.gitignore`

## Próximos pasos
- Optimizar Lighthouse / SEO
- Versión completa en inglés (hoy solo existe `/en` como landing)
- Recargar la cola de temas del blog cuando se agote (`content/blog/_queue.json`)

## Notas para Claude
- El usuario es MÉDICO, no ingeniero senior. Explicar trade-offs cuando proponer arquitectura compleja.
- Backup vía `git push` a GitHub. Nunca subir el proyecto a iCloud o Drive.
- **Estilo de voz del autor:** la fuente única de verdad es `docs/voz.md`. Antes de generar, sugerir o editar contenido (blog, LinkedIn, copy del sitio, etc.) leer ese archivo y aplicarlo. Los scripts de generación automática (`scripts/generate-weekly-post.mjs`, `scripts/generate-linkedin-post.mjs`) ya lo cargan en tiempo de ejecución.
