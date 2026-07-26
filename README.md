# Portafolio · Aram Zakzuk, MD

Sitio personal construido con Next.js 14 para presentar experiencia profesional, habilidades y proyectos de Aram Zakzuk. Incluye secciones orientadas a salud digital, inteligencia artificial clínica y recursos descargables como el CV actualizado.

## Características principales
- Diseño editorial con animaciones AOS, Framer Motion y scroll suave (Lenis).
- Páginas para **Sobre mí**, **Proyectos**, **Publicaciones**, **Blog**, **Credenciales**, **Soluciones** y **Contacto**.
- Blog en Markdown (`content/blog`) más entradas en `lib/data/blog.ts`, renderizado con `react-markdown`.
- Datos centralizados en `lib/data` para actualizar educación, certificaciones, publicaciones y enlaces sociales.
- Metadatos y SEO configurados en `app/layout.tsx` y `lib/site.ts`; sitemap, robots y `public/llms.txt`.
- Descarga de CV hospedada en `public/cv`.
- Automatización de contenido vía GitHub Actions (blog semanal y borrador de LinkedIn).

## Stack técnico
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Librerías:** React 18, TypeScript, Tailwind CSS, AOS, Framer Motion, Lenis, react-markdown, Phosphor Icons.
- **Gestión de estilos:** Tailwind con configuración en `tailwind.config.ts`.
- **Node.js:** >=20 (ver `.nvmrc` o `package.json`).

## Requisitos
1. Node.js 20.x (ver `.nvmrc`).
2. [Yarn 4 (Berry)](https://yarnpkg.com/) o `corepack` activado (`corepack enable`).

## Puesta en marcha
```bash
yarn install    # instala dependencias
yarn dev        # levanta el servidor de desarrollo en http://localhost:3000
```

### Otros scripts disponibles
- `yarn build` – genera la versión lista para producción.
- `yarn start` – sirve la build previa.
- `yarn lint` – ejecuta ESLint (config en `.eslintrc.json`).
- `yarn test` – tests unitarios (parser de frontmatter del blog) con `node --test`.
- `yarn test:e2e` – smoke tests E2E con Playwright (requiere `yarn dev` o build).
- `yarn doctor` – chequeos rápidos de entorno (script custom en `scripts/doctor.mjs`).
- `yarn blog:generate` / `yarn blog:dry` – genera un post del blog (real / placeholder).

### Automatización (GitHub Actions)
- `.github/workflows/weekly-blog-post.yml`: cada lunes genera un post desde `content/blog/_queue.json`.
- `.github/workflows/linkedin-draft.yml`: martes y jueves genera un borrador de LinkedIn y lo envía por email.
- `.github/workflows/ci.yml`: en cada push/PR corre lint, typecheck y build.
- Requieren los Secrets `ANTHROPIC_API_KEY`, `GMAIL_ADDRESS`, `GMAIL_APP_PASSWORD`.

## Estructura relevante
```
app/
  page.tsx                Página principal (landing)
  sobre-mi/               Sección "Sobre mí"
  proyectos/, publicaciones/, experiencia/, etc.
  contacto/               Formulario y enlaces de contacto
components/               UI reutilizable y navegación
lib/
  data/                   Fuentes de datos (educación, publicaciones, etc.)
  site.ts                 Configuración global del sitio
public/
  images/                 Imágenes del portafolio (foto de perfil, proyectos)
  cv/                     Documentos descargables
```

## Personalización rápida
- **Datos personales y enlaces:** `lib/site.ts` y `lib/data/*`.
- **Imagen de perfil:** `public/images/profile.png` (usado en `app/sobre-mi/page.tsx`).
- **LinkedIn, GitHub y CTA:** presentes en `components/Navbar.tsx`, `app/layout.tsx`, `app/contacto/page.tsx`.
- **CV:** reemplazar `public/cv/CV_Aram_Zakzuk.pdf`

## Variables de entorno
Copia `.env.example` a `.env.local` y rellena lo que necesites. Resumen:
- `NEXT_PUBLIC_GA_ID` – Google Analytics 4.
- `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` – formulario de contacto (`/api/contact`).
- `N8N_WEBHOOK_URL` – captura de newsletter (`/api/newsletter`). Sin ella en producción devuelve 503.
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET` – reCAPTCHA v3 (opcional).

## Despliegue
El proyecto está en producción en Vercel. Pasos:
1. Ejecutar `yarn build` y verificar que la build termine sin errores.
2. Conectar el repositorio a Vercel (o la plataforma que soporte Next.js).
3. Configurar las variables de entorno anteriores en el panel de la plataforma.

---

Para mantener la documentación alineada con el sitio, actualiza este README cuando se agreguen nuevas secciones, scripts o dependencias relevantes.
