import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/projects'
import { blogPosts } from '@/lib/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alejandrozakzuk.com'
  const staticRoutes = ['','/sobre-mi','/proyectos','/habilidades','/experiencia','/publicaciones','/blog','/servicios','/credenciales','/trabajemos-juntos','/contacto']
    .map((p) => ({ url: base + p, lastModified: new Date() }))
  const projectRoutes = projects.map(p => ({ url: `${base}/proyectos/${p.slug}`, lastModified: new Date() }))
  const blogRoutes = blogPosts.map(p => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date) }))
  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
