import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alejandrozakzuk.com'
  const staticRoutes = ['','/sobre-mi','/proyectos','/habilidades','/experiencia','/publicaciones','/servicios','/contacto']
    .map((p) => ({ url: base + p, lastModified: new Date() }))
  const projectRoutes = projects.map(p => ({ url: `${base}/proyectos/${p.slug}`, lastModified: new Date() }))
  return [...staticRoutes, ...projectRoutes]
}
