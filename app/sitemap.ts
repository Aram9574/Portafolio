import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/projects'
import { publications } from '@/lib/data/publications'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.example.com'
  const staticRoutes = ['','/sobre-mi','/proyectos','/habilidades','/experiencia','/publicaciones','/contacto']
    .map((p) => ({ url: base + p, lastModified: new Date() }))
  const projectRoutes = projects.map(p => ({ url: `${base}/proyectos/${p.slug}`, lastModified: new Date() }))
  const pubRoutes = publications.map(p => ({ url: `${base}/publicaciones/${p.id}`, lastModified: new Date() }))
  return [...staticRoutes, ...projectRoutes, ...pubRoutes]
}
