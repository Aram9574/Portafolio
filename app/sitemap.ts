import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/projects'
import { blogPosts } from '@/lib/data/blog'

/**
 * Fechas de última actualización por ruta.
 * Se actualizan manualmente cuando el contenido de la ruta cambia de forma
 * material (no por tweaks de estilo o fixes de typo). Google descarta el
 * lastModified si ve que siempre es la fecha del build.
 */
const ROUTE_UPDATED: Record<string, string> = {
  '/': '2026-04-21',
  '/en': '2026-04-21',
  '/sobre-mi': '2026-04-21',
  '/trabajemos-juntos': '2026-04-21',
  '/proyectos': '2026-04-21',
  '/credenciales': '2026-04-20',
  '/publicaciones': '2026-04-15',
  '/blog': '2026-04-21',
  '/contacto': '2026-04-20',
  '/habilidades': '2026-04-18',
  '/experiencia': '2026-04-18',
  '/one-pager': '2026-04-21',
  '/soluciones/radiologia': '2026-04-19',
  '/soluciones/cardiologia': '2026-04-19',
  '/soluciones/oncologia': '2026-04-19',
}

/**
 * Fechas de case studies estáticos. Coinciden con publishedDate dentro de
 * cada page.tsx para consistencia.
 */
const PROJECT_UPDATED: Record<string, string> = {
  'clinai-classifier': '2026-04-15',
  'tfm-deteccion-metabolica': '2026-03-20',
  'prediccion-ocupacion-hospitalaria': '2025-12-15',
  'erp-geriatrico-fhir': '2025-09-10',
}

function dateFor(path: string, fallback: string): Date {
  const iso = ROUTE_UPDATED[path] ?? fallback
  return new Date(iso)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alejandrozakzuk.com'
  const buildFallback = '2026-04-21'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                       lastModified: dateFor('/', buildFallback),                      changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/en`,               lastModified: dateFor('/en', buildFallback),                    changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/sobre-mi`,         lastModified: dateFor('/sobre-mi', buildFallback),              changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/trabajemos-juntos`,lastModified: dateFor('/trabajemos-juntos', buildFallback),     changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/one-pager`,        lastModified: dateFor('/one-pager', buildFallback),             changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/proyectos`,        lastModified: dateFor('/proyectos', buildFallback),             changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/credenciales`,     lastModified: dateFor('/credenciales', buildFallback),          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/publicaciones`,    lastModified: dateFor('/publicaciones', buildFallback),         changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/blog`,             lastModified: dateFor('/blog', buildFallback),                  changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/contacto`,         lastModified: dateFor('/contacto', buildFallback),              changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/habilidades`,      lastModified: dateFor('/habilidades', buildFallback),           changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/experiencia`,      lastModified: dateFor('/experiencia', buildFallback),           changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/soluciones/radiologia`,  lastModified: dateFor('/soluciones/radiologia', buildFallback),  changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/soluciones/cardiologia`, lastModified: dateFor('/soluciones/cardiologia', buildFallback), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/soluciones/oncologia`,   lastModified: dateFor('/soluciones/oncologia', buildFallback),   changeFrequency: 'monthly', priority: 0.4 }
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map(p => ({
    url: `${base}/proyectos/${p.slug}`,
    lastModified: new Date(PROJECT_UPDATED[p.slug] ?? buildFallback),
    changeFrequency: 'monthly',
    priority: 0.7
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
