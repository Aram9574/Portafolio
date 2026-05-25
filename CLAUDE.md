# CLAUDE.md — Portafolio

## Contexto
Web personal de Aram Zakzuk como médico especializado en IA en Salud Digital.
Stack: Next.js 15 + TypeScript + Tailwind CSS.

## Estado
- En desarrollo activo
- Deploy: pendiente Vercel

## Convenciones
- Nombres de archivos en kebab-case (sin tildes ni espacios)
- Componentes en PascalCase
- `node_modules/`, `.next/`, `.env.local` en `.gitignore`

## Próximos pasos
- Deploy definitivo en Vercel
- Conectar dominio personal
- Optimizar Lighthouse / SEO
- Revisar contenido en español/inglés

## Notas para Claude
- El usuario es MÉDICO, no ingeniero senior. Explicar trade-offs cuando proponer arquitectura compleja.
- Backup vía `git push` a GitHub. Nunca subir el proyecto a iCloud o Drive.
- **Estilo de voz del autor:** la fuente única de verdad es `docs/voz.md`. Antes de generar, sugerir o editar contenido (blog, LinkedIn, copy del sitio, etc.) leer ese archivo y aplicarlo. Los scripts de generación automática (`scripts/generate-weekly-post.mjs`, `scripts/generate-linkedin-post.mjs`) ya lo cargan en tiempo de ejecución.
