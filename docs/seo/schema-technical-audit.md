# Schema / Hreflang / Sitemap — Technical Audit

Sitio: https://alejandrozakzuk.com
Fecha: 2026-04-21
Alcance: JSON-LD en 11 archivos, hreflang bilingüe (es-ES / en), sitemap dinámico.
Lighthouse baseline: Performance 94 · A11y 100 · BP 100 · SEO 100.

---

## PARTE 1 — Auditoría JSON-LD existente

Leyenda elegibilidad rich-result: ✅ elegible · ⚠️ parcial · ❌ no elegible (o no aplica rich snippet)

### 1.1 `app/layout.tsx` — Person + Physician
- **Type detectado**: `["Person","Physician"]` con `@id` canónico. Carga en todas las páginas.
- **Required (Person/Physician)**: `name` ✅, `url` ✅. Physician no desbloquea rich result si no hay `MedicalBusiness/PostalAddress` completa (sí tiene PostalAddress parcial).
- **Recomendados presentes**: `jobTitle`, `sameAs`, `alumniOf`, `knowsLanguage`, `knowsAbout`, `makesOffer`, `hasOccupation`, `image`, `email`, `address`.
- **Faltantes clave**:
  - `gender` (útil en Person KG).
  - `nationality` (`Country`).
  - `worksFor` → `Organization` (si hay entidad fiscal autónomo, podría ser `ProfessionalService` con `@id #business`).
  - `PostalAddress.streetAddress` / `postalCode` (hoy solo locality/region/country → Google no promueve LocalBusiness sin street+postal).
  - Physician generalmente requiere `medicalSpecialty` (enum `MedicalSpecialty`).
- **Rich result eligibility**: ⚠️ Parcial. Como `Person` sí es candidato a Knowledge Panel. Como `Physician/LocalBusiness` no es elegible para local pack sin dirección postal completa.
- **Fix prioritario 🟡**: añadir `medicalSpecialty: ["Internal Medicine","Primary Care"]`, `gender`, `nationality: "CO"`, y si quieres local SEO Madrid, considerar mover `Physician` a una entidad separada `ProfessionalService` con dirección completa.

### 1.2 `app/sobre-mi/page.tsx` — AboutPage + FAQPage
- **Types**: `AboutPage` + `FAQPage` en `@graph` (correcto).
- **Required FAQPage**: `mainEntity` (array de `Question` con `acceptedAnswer.Answer.text`) ✅. 5 Q&A válidas.
- **Required AboutPage**: `url` ✅, `about` referenciado a `#person` ✅.
- **Faltantes**: `AboutPage.breadcrumb` (BreadcrumbList), `AboutPage.dateModified`, `AboutPage.primaryImageOfPage`.
- **Rich result eligibility**:
  - FAQPage: ✅ elegible (aunque recuerda: desde agosto 2023 Google limitó FAQ rich results a sitios de gobierno/salud autoritativos — este perfil sí encaja como autoridad sanitaria).
  - AboutPage: ❌ no tiene rich result propio, pero refuerza entidad.
- **Fix 🟢**: añadir `breadcrumb` y `dateModified`.

### 1.3 `app/en/page.tsx` — AboutPage + FAQPage (EN)
- **Types**: idéntica estructura que /sobre-mi. 3 Q&A.
- **Faltantes**: `inLanguage: 'en-US'` está ✅. Falta `breadcrumb`. FAQ con menos entradas que la versión ES (asimetría de contenido, pero es aceptable).
- **Rich result**: ✅ FAQPage elegible.
- **Fix 🟢**: paridad con ES — añadir 2 preguntas más para simetría de cobertura (EU AI Act, organizaciones que asesora).

### 1.4 `app/blog/page.tsx` — Blog + BlogPosting array
- **Types**: `Blog` con array `blogPost[]` de tipo `BlogPosting`.
- **Required Blog**: `name` ✅, `url` ✅. `author/publisher` ✅ vía `@id`.
- **Required BlogPosting** (dentro del array): `headline` ✅, `author` ✅, `datePublished` ✅. Falta `image` en los items del array (Google lo marca como strongly recommended para BlogPosting rich result).
- **Faltantes**: `image` en cada `BlogPosting` del array, `dateModified`.
- **Rich result**: ⚠️ Parcial. El listado NO suele generar rich card; lo que sí puede activar es el carrusel `itemListElement`. Alternativa mejor: envolver en `ItemList` + `ListItem`.
- **Fix 🟡**: añadir `image: /blog/${slug}/opengraph-image.png` a cada item.

### 1.5 `app/blog/[slug]/page.tsx` — BlogPosting individual
- **Type**: `BlogPosting`.
- **Required**: `headline` ✅, `author` ✅, `datePublished` ✅, `image` ✅ (og-default.png genérico), `publisher` ✅, `mainEntityOfPage` ✅.
- **⚠️ Issue**: `publisher` es `Person` (`@id #person`). Google recomienda `Organization` con `logo` para BlogPosting rich result. Como consultor autónomo, válido pero sub-óptimo para Top Stories / Discover.
- **Faltantes recomendados**: `wordCount`, `articleBody` (o al menos `abstract`), `articleSection`, `isAccessibleForFree: true`. `image` específica por post (hoy usa og-default común en el JSON, aunque el og:image de metadata sí apunta al dinámico).
- **Rich result**: ⚠️ Elegible para Article pero sub-óptimo. Apuntar `image` al OG dinámico por slug.
- **Fix prioritario 🔴**: cambiar `image: \`${BASE_URL}/blog/${post.slug}/opengraph-image.png\`` (hoy apunta a `og-default.png`). Añadir `articleSection` (primera tag), `wordCount`, `isAccessibleForFree: true`.

### 1.6 `app/proyectos/[slug]/page.tsx` — SoftwareApplication
- **Type**: `SoftwareApplication`.
- **Required**: `name` ✅, `applicationCategory` ✅ (`HealthApplication`), `operatingSystem` ✅.
- **Faltantes críticos para rich result**: `offers` (con `price` o `Free`) — Google exige `offers` + `aggregateRating` O `review` para mostrar rich snippet de Software.
- **Rich result**: ❌ No elegible (faltan offers+rating/review). Schema es correcto pero sin "cosméticos" de snippet.
- **Fix 🟢**: añadir `offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }` cuando hay demo pública. Considerar migrar a `TechArticle` (coherente con las 4 páginas estáticas de case study) para unificar y maximizar elegibilidad Article.

### 1.7–1.10 `app/proyectos/{clinai-classifier, tfm-deteccion-metabolica, prediccion-ocupacion-hospitalaria, erp-geriatrico-fhir}/page.tsx` — TechArticle
- **Type**: `TechArticle`.
- **Required**: `headline` ✅, `author` ✅, `datePublished` ✅, `publisher` ✅.
- **Recomendados presentes**: `about[]`, `keywords`, `mainEntityOfPage`, `inLanguage`, `proficiencyLevel`, `dateModified`.
- **Faltantes**:
  - `image`: **solo prediccion-ocupacion-hospitalaria tiene `image`**. Los otros 3 no. TechArticle sin imagen = no rich result.
  - `dependencies` / `proficiencyLevel` (ya hay `Expert`).
  - `publisher` es `Person` (mismo issue que BlogPosting).
- **Rich result**: ⚠️ Parcial. Solo ocupacion-hospitalaria cumple mínimos. Los otros 3 están incompletos.
- **Fix prioritario 🔴**: añadir `image` a clinai-classifier, tfm-deteccion-metabolica, erp-geriatrico-fhir (sus OG dinámicos o `/images/projects/{slug}.jpg`).

### 1.11 `app/soluciones/[especialidad]/page.tsx` — WebPage
- **Type**: `WebPage`.
- **Required**: `name` ✅, `description` ✅, `author` ✅.
- **Nota**: `specialty` no es propiedad estándar de `WebPage`. Debería ser `MedicalWebPage` con `specialty: MedicalSpecialty`.
- **Faltantes**: `inLanguage`, `breadcrumb`, `lastReviewed`, `mainContentOfPage`.
- **Rich result**: ❌ `WebPage` no genera rich snippet.
- **Fix 🟡**: cambiar `@type` a `MedicalWebPage`, añadir `specialty` como enum `MedicalSpecialty` (Radiology, Cardiovascular, Oncologic), añadir `medicalAudience: { "@type": "MedicalAudience", audienceType: "Medical Professional" }`, `breadcrumb`, `inLanguage: 'es-ES'`.

### Resumen tabla

| Archivo | Type | Elegible | Fix prio |
|---|---|---|---|
| layout.tsx | Person+Physician | ⚠️ | 🟡 medicalSpecialty + address |
| sobre-mi | AboutPage+FAQPage | ✅ FAQ | 🟢 breadcrumb |
| en | AboutPage+FAQPage | ✅ FAQ | 🟢 paridad Q&A |
| blog | Blog+BlogPosting[] | ⚠️ | 🟡 image per item |
| blog/[slug] | BlogPosting | ⚠️ | 🔴 image dinámica + articleSection |
| proyectos/[slug] | SoftwareApplication | ❌ | 🟢 offers o migrar a TechArticle |
| clinai-classifier | TechArticle | ⚠️ | 🔴 image |
| tfm-deteccion-metabolica | TechArticle | ⚠️ | 🔴 image |
| prediccion-ocupacion-hospitalaria | TechArticle | ✅ | 🟢 wordCount |
| erp-geriatrico-fhir | TechArticle | ⚠️ | 🔴 image |
| soluciones/[especialidad] | WebPage | ❌ | 🟡 MedicalWebPage |

---

## PARTE 2 — Schemas faltantes de alto valor

### 2.1 BreadcrumbList 🔴 (alto ROI, fácil)

Google pinta la ruta en SERP (reemplaza URL cruda). Alto CTR.

**Dónde**: cada blog post, cada case study, cada soluciones/[especialidad].

```tsx
// Pegar dentro del componente, en cualquier case-study (ejemplo clinai-classifier):
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://alejandrozakzuk.com" },
    { "@type": "ListItem", "position": 2, "name": "Proyectos", "item": "https://alejandrozakzuk.com/proyectos" },
    { "@type": "ListItem", "position": 3, "name": "ClinAI Classifier", "item": "https://alejandrozakzuk.com/proyectos/clinai-classifier" }
  ]
}) }} />
```

Mejor: crear `components/seo/BreadcrumbLd.tsx` reutilizable que reciba `{items: {name,url}[]}`.

### 2.2 ProfessionalService en /trabajemos-juntos 🔴

Consultor independiente con entidad de servicio explícita. Habilita LocalBusiness signals.

**Dónde**: `app/trabajemos-juntos/page.tsx`.

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://alejandrozakzuk.com/#business",
  "name": "Aram Zakzuk — Healthcare & Clinical AI Consulting",
  "description": "Consultoría independiente para HealthTech, consultoras y organizaciones sanitarias en evaluación de Clinical AI, EU AI Act, MDR y SaMD.",
  "url": "https://alejandrozakzuk.com/trabajemos-juntos",
  "image": "https://alejandrozakzuk.com/og-default.png",
  "founder": { "@id": "https://alejandrozakzuk.com/#person" },
  "provider": { "@id": "https://alejandrozakzuk.com/#person" },
  "areaServed": [
    { "@type": "Country", "name": "Spain" },
    { "@type": "Place", "name": "European Union" }
  ],
  "address": { "@type": "PostalAddress", "addressLocality": "Madrid", "addressRegion": "Comunidad de Madrid", "addressCountry": "ES" },
  "priceRange": "€€€",
  "serviceType": "Healthcare AI Consulting",
  "knowsAbout": ["EU AI Act","MDR","SaMD","HL7 FHIR","Clinical Decision Support Systems"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Formatos de trabajo",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revisión express regulatoria EU AI Act", "serviceType": "Regulatory Advisory" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Evaluación de adopción Clinical AI", "serviceType": "Clinical AI Consulting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Advisory fraccional para HealthTech", "serviceType": "Fractional Advisory" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Traducción clínica–técnica en proyectos de transformación digital", "serviceType": "Healthcare Digital Transformation" } }
    ]
  }
}) }} />
```

### 2.3 Service individuales (embebidos en ProfessionalService.hasOfferCatalog) 🟡
Ya incluidos en 2.2. Si /trabajemos-juntos tiene 4 secciones dedicadas por formato, añade bloque `Service` independiente en cada sección con `@id` propio y `serviceOutput`.

### 2.4 EducationalOccupationalCredential en /credenciales 🟡

Aplica. Aram tiene: MD Urosario, MSc IA (CEMP), MSc Salud Digital (UEuropea), AI in Healthcare (Stanford).

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Credenciales académicas y profesionales",
  "itemListElement": [
    {
      "@type": "ListItem", "position": 1,
      "item": {
        "@type": "EducationalOccupationalCredential",
        "name": "Doctor of Medicine (MD)",
        "credentialCategory": "degree",
        "educationalLevel": "Professional degree",
        "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Universidad del Rosario", "sameAs": "https://www.urosario.edu.co/" },
        "about": "Medicine"
      }
    },
    {
      "@type": "ListItem", "position": 2,
      "item": {
        "@type": "EducationalOccupationalCredential",
        "name": "Máster en IA aplicada a Sanidad",
        "credentialCategory": "Master's degree",
        "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Centro Europeo de Másters y Posgrados (CEMP)" },
        "about": "Artificial Intelligence in Healthcare"
      }
    },
    {
      "@type": "ListItem", "position": 3,
      "item": {
        "@type": "EducationalOccupationalCredential",
        "name": "Máster en Salud Digital / eHealth",
        "credentialCategory": "Master's degree",
        "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Universidad Europea de Madrid", "sameAs": "https://universidadeuropea.com/" },
        "about": "Digital Health"
      }
    },
    {
      "@type": "ListItem", "position": 4,
      "item": {
        "@type": "EducationalOccupationalCredential",
        "name": "AI in Healthcare Specialization",
        "credentialCategory": "Professional certificate",
        "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Stanford University", "sameAs": "https://www.stanford.edu/" },
        "about": "AI in Healthcare"
      }
    }
  ]
}) }} />
```

### 2.5 VideoObject
No aplica. El sitio no tiene vídeo hosteado. Omitir.

---

## PARTE 3 — Hreflang audit

### Estado actual

**`app/layout.tsx` (global, todas las páginas heredan)**:
```ts
languages: {
  'es-ES': 'https://alejandrozakzuk.com',
  'en':    'https://alejandrozakzuk.com/en'
}
```

**`app/en/page.tsx` (sobrescribe)**:
```ts
languages: {
  'es-ES': BASE,
  'en':    `${BASE}/en`
}
```

### Hallazgos

1. **Bidireccionalidad** ✅ — ambos lados declaran los dos hreflang.
2. **x-default** ❌ **FALTA**. Google recomienda siempre incluir `x-default` apuntando al idioma fallback (normalmente el ES).
3. **Códigos de lenguaje** ⚠️ — mezcla `es-ES` (país) con `en` (solo lenguaje). Consistencia recomendada: o ambos con país (`es-ES` + `en-US` o `en-GB`) o ambos sin país (`es` + `en`). Como el contenido EN claramente está dirigido al mercado europeo/global, `en` suelto es defendible, pero sub-óptimo.
4. **Hreflang en subpáginas** ❌ **PROBLEMA SERIO**. Todas las subpáginas (blog, proyectos, sobre-mi, legales, soluciones, credenciales, contacto) heredan el `languages` del layout global, que apunta al **home** y a **/en**, no al equivalente traducido de cada subpágina. Hoy, en `/blog/eu-ai-act-clasificacion-cdss-5-pasos`, Google ve:
   - `canonical: /blog/eu-ai-act...`
   - `hreflang es-ES: /` ← ¡apunta al home!
   - `hreflang en: /en` ← ¡apunta al home inglés!
   
   Esto es técnicamente un hreflang roto. Google puede considerarlo señal confusa.
5. **HTML lang** ✅ `<html lang="es">` en layout. La página /en debería tener `<html lang="en">` pero comparte layout (Next.js limitación sin route groups por idioma).

### Fixes propuestos

**Fix 🔴 crítico**: sobrescribir `alternates.languages` en **cada** `generateMetadata` de subpágina. Como el sitio solo tiene /en para el home (no hay traducciones por subpágina), la opción correcta es **NO** heredar el hreflang global en subpáginas monolingües. Dos estrategias:

**Estrategia A (recomendada, menos trabajo)**: eliminar `languages` del layout global. Declarar `languages` SOLO en home (`app/page.tsx`) y `/en`. Las subpáginas monolingües no deben emitir hreflang.

```tsx
// app/layout.tsx — quitar el bloque languages:
alternates: {
  canonical: 'https://alejandrozakzuk.com',
  types: { 'application/rss+xml': 'https://alejandrozakzuk.com/blog/rss.xml' }
}

// app/page.tsx — añadir:
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://alejandrozakzuk.com',
    languages: {
      'es-ES': 'https://alejandrozakzuk.com',
      'en':    'https://alejandrozakzuk.com/en',
      'x-default': 'https://alejandrozakzuk.com'
    }
  }
}

// app/en/page.tsx — actualizar:
languages: {
  'es-ES':   'https://alejandrozakzuk.com',
  'en':      'https://alejandrozakzuk.com/en',
  'x-default': 'https://alejandrozakzuk.com'
}
```

**Estrategia B**: traducir las páginas clave (sobre-mi, blog index, trabajemos-juntos) a /en/ y declarar hreflang bidireccional por par. Más costoso, mejor SEO internacional.

**Fix 🟡 x-default**: añadir en ambos lados (ver arriba).

---

## PARTE 4 — Sitemap audit

### URLs declaradas vs existen en disco

| URL | Existe | Nota |
|---|---|---|
| `/` | ✅ | `app/page.tsx` |
| `/en` | ✅ | `app/en/page.tsx` |
| `/sobre-mi` | ✅ | |
| `/trabajemos-juntos` | ✅ | |
| `/one-pager` | ✅ | |
| `/proyectos` | ✅ | |
| `/credenciales` | ✅ | |
| `/publicaciones` | ✅ | |
| `/blog` | ✅ | |
| `/contacto` | ✅ | |
| `/habilidades` | ✅ | |
| `/experiencia` | ✅ | |
| `/soluciones/radiologia` | ✅ | dynamic `[especialidad]` |
| `/soluciones/cardiologia` | ✅ | |
| `/soluciones/oncologia` | ✅ | |
| `/proyectos/[slug]` | ✅ | vía `projects.map` |
| `/blog/[slug]` | ✅ | vía `blogPosts.map` |

**Faltan en el sitemap**:
- ❌ **Páginas legales**: `/legal/cookies`, `/legal/privacidad`, `/legal/accesibilidad`, `/legal/aviso-legal`. Aunque son low-priority, deben estar (señal de confianza para Google; GDPR).
- ❌ **`/blog/rss.xml`**: ya está en `<link rel="alternate">`, no es crítico en sitemap, pero válido.

### Priority values

Los valores actuales son razonables. Microajustes:
- `/sobre-mi` está en 0.9 — correcto (landing secundaria).
- `/trabajemos-juntos` 0.9 — correcto (conversión).
- `/one-pager` 0.6 — debería bajar a 0.4 (contenido derivado).
- `/blog` 0.7 — subir a 0.8 (es hub de contenido fresco).
- blog posts 0.6 — correcto. Los destacados podrían subir a 0.7 manualmente.
- soluciones 0.4 — subir a 0.7: son landings comerciales clave.
- proyectos individuales 0.6 — los 4 case studies editoriales a 0.8 (son el corazón del portafolio).

### changeFrequency

- `/` weekly ✅
- `/blog` weekly ✅
- blog posts `monthly` — correcto.
- `/publicaciones` weekly — ¿de verdad cambia semanal? Si no, pasar a `monthly`.
- `/contacto` yearly — correcto.
- Case studies `monthly` — `yearly` es más realista para case studies terminados.

Nota: Google ignora `priority` y `changefreq` desde 2023 oficialmente. Solo usa `lastmod`. **Hoy todos los `lastModified` son `new Date()` (now) excepto blog posts** → Google detecta que "todo cambia todos los días" → pierde credibilidad del sitemap. **Fix 🔴**: usar `lastmod` real por archivo (git log del archivo o campo `updated` en la data).

### Sitemap separado blog / proyectos

Con ~15 URLs estáticas + 4 proyectos + N posts, **NO es necesario** un sitemap index partido. Google recomienda partir cuando se superan 50.000 URLs o 50 MB. Mantener monolítico.

### Propuesta concreta `app/sitemap.ts`

```ts
import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/projects'
import { blogPosts } from '@/lib/data/blog'

const FEATURED_CASE_STUDIES = new Set([
  'clinai-classifier',
  'tfm-deteccion-metabolica',
  'prediccion-ocupacion-hospitalaria',
  'erp-geriatrico-fhir'
])

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alejandrozakzuk.com'
  const staticLastMod = new Date('2026-04-21') // bump manual en releases grandes

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                         lastModified: staticLastMod, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/en`,                 lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/sobre-mi`,           lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/trabajemos-juntos`,  lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/proyectos`,          lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`,               lastModified: staticLastMod, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/credenciales`,       lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/publicaciones`,      lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contacto`,           lastModified: staticLastMod, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/soluciones/radiologia`,  lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/soluciones/cardiologia`, lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/soluciones/oncologia`,   lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/one-pager`,          lastModified: staticLastMod, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/habilidades`,        lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/experiencia`,        lastModified: staticLastMod, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/legal/aviso-legal`,  lastModified: staticLastMod, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/legal/privacidad`,   lastModified: staticLastMod, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/legal/cookies`,      lastModified: staticLastMod, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/legal/accesibilidad`,lastModified: staticLastMod, changeFrequency: 'yearly',  priority: 0.2 }
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map(p => ({
    url: `${base}/proyectos/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : staticLastMod,
    changeFrequency: 'yearly',
    priority: FEATURED_CASE_STUDIES.has(p.slug) ? 0.8 : 0.6
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt || p.date),
    changeFrequency: 'yearly',
    priority: 0.6
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
```

Requiere añadir campo opcional `updatedAt` a los objetos de `lib/data/projects.ts` y `lib/data/blog.ts` para no tener `lastmod = now` en cada build.
