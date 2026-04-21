import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/projects'
import { blogPosts } from '@/lib/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alejandrozakzuk.com'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                       lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/sobre-mi`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/trabajemos-juntos`,lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/proyectos`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/credenciales`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/publicaciones`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/blog`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/contacto`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/habilidades`,      lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/experiencia`,      lastModified: now, changeFrequency: 'monthly', priority: 0.5 }
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map(p => ({
    url: `${base}/proyectos/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
