Despliegue y checklist

Guía rápida para publicar y verificar la web en producción.

1) Opción recomendada: Vercel

- Importa el repo en Vercel (New Project → Import Git Repository).
- Build: usa por defecto `next build`.
- Variables de entorno (Project → Settings → Environment Variables):
  - `NEXT_PUBLIC_SITE_URL`: URL pública (p. ej. `https://tu-dominio.com` o el `.vercel.app`).
  - `RESEND_API_KEY`: API key de Resend para el formulario.
  - `CONTACT_TO`: correo destino del formulario.
  - `CONTACT_FROM` (opcional): remitente (p. ej. `Portfolio <onboarding@resend.dev>` o verificado en Resend).
- Deploy: al hacer push a `main`, Vercel despliega automáticamente.
- Dominio: añade tu dominio en Vercel (Domains) y apunta DNS (CNAME al subdominio `.vercel.app`).

2) Alternativa (servidor propio)

- Node 18+ instalado.
- `yarn install --immutable && yarn build && yarn start` detrás de un proxy (Nginx/Caddy) con TLS.
- Exporta las mismas variables de entorno del punto anterior.

3) Post‑deploy checklist

- Home (`/`): carga sin errores en consola.
- Sobre mí (`/sobre-mi`): animaciones AOS activas.
- Proyectos (`/proyectos`): funciona el filtro; no hay warnings de Suspense.
- Publicaciones (`/publicaciones`): lista y detalle (`/publicaciones/:id`) ok.
- Contacto (`/contacto`):
  - Validación de formulario; banner de éxito/error.
  - Calendly embebido en `#agenda` (usa `https://calendly.com/zakzukaram`).
  - Envío real: prueba con `curl` (sustituye valores):
    curl -s -X POST "$NEXT_PUBLIC_SITE_URL/api/contact" \
      -H 'Content-Type: application/json' \
      -d '{"nombre":"Test","email":"test@example.com","mensaje":"Hola!"}'
    Debe responder `{ ok: true }` y recibir el correo en `CONTACT_TO`.
- Límite de rate (anti-spam): segundo envío antes de 60s debe devolver 429.
- Sitemap/SEO:
  - Sitemap en `/sitemap.xml` genera URLs con base de `app/sitemap.ts`.
  - IMPORTANTE: cambia `base` en `app/sitemap.ts` y `metadataBase` en `app/layout.tsx` a tu dominio real.
- Footer legal: enlaces a `/privacy.html` y `/cookies.html` operativos (están en `public/`).

4) Notas

- El endpoint de correo usa la API HTTP de Resend (sin SDK) para minimizar dependencias.
- Animaciones: AOS para scroll; tilt y hovers suaves globales (respeta `prefers-reduced-motion`).
- Seguridad básica: honeypot y rate limit simple en memoria para `/api/contact`.

5) Troubleshooting

- Build local: `rm -rf .next && yarn install --immutable && yarn build`.
- Variables: comprueba que existen en el entorno de Vercel (Production/Preview).
- Resend: si falla, revisa remitente verificado y logs en el panel de Resend.
