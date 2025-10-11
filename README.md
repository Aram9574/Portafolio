# Portafolio · Alejandro Zakzuk, MD

Sitio personal construido con Next.js 14 para presentar experiencia profesional, habilidades y proyectos de Alejandro Zakzuk. Incluye secciones orientadas a salud digital, inteligencia artificial clínica y recursos descargables como el CV actualizado.

## Características principales
- Diseño moderno con animaciones AOS y Tailwind CSS responsivo.
- Páginas seccionadas para **Sobre mí**, **Experiencia**, **Proyectos**, **Publicaciones**, **Recursos** y **Contacto**.
- Datos centralizados en `lib/data` para actualizar educación, certificaciones, publicaciones y enlaces sociales.
- Metadatos y SEO configurados en `app/layout.tsx` y `lib/site.ts`.
- Descarga de CV hospedada en `public/cv`.

## Stack técnico
- **Framework:** [Next.js 14](https://nextjs.org/)
- **Librerías:** React 18, TypeScript, Tailwind CSS, AOS, Lucide Icons.
- **Gestión de estilos:** Tailwind con configuración en `tailwind.config.ts`.
- **Node.js:** >=18 y <22 (ver `.nvmrc` o `package.json`).

## Requisitos
1. Node.js 18, 19, 20 o 21 (versión recomendada: 20.x).
2. [Yarn 4 (Berry)](https://yarnpkg.com/) o `corepack` activado (`corepack enable`).

## Puesta en marcha
```bash
yarn install    # instala dependencias
yarn dev        # levanta el servidor de desarrollo en http://localhost:3000
```

### Otros scripts disponibles
- `yarn build` – genera la versión lista para producción.
- `yarn start` – sirve la build previa.
- `yarn lint` – ejecuta ESLint.
- `yarn doctor` – chequeos rápidos de entorno (script custom en `scripts/doctor.mjs`).

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
- **CV:** reemplazar `public/cv/Alejandro-Zakzuk-CV.pdf` y el duplicado `Alejandro Zakzuk CV.pdf`.

## Despliegue
El proyecto está optimizado para Vercel, aunque puede desplegarse en cualquier plataforma que soporte Next.js. Pasos sugeridos:
1. Ejecutar `yarn build` y verificar que la build termine sin errores.
2. Subir la carpeta `.next` generada o conectar el repositorio a la plataforma deseada.
3. Configurar variables de entorno si fueran necesarias (actualmente no se requieren).

---

Para mantener la documentación alineada con el sitio, actualiza este README cuando se agreguen nuevas secciones, scripts o dependencias relevantes.
