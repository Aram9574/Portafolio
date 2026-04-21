import Link from 'next/link'
import { blogPosts, type BlogPost } from '@/lib/data/blog'

/**
 * Muestra hasta 3 posts relacionados por solapamiento de tags con el post actual.
 * Si no hay solapamiento suficiente, completa con posts más recientes distintos
 * al actual. Mejora linking interno y PageRank entre posts del blog.
 */
export default function RelatedPosts({ currentSlug, currentTags }: { currentSlug: string; currentTags: string[] }) {
  const scored = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const overlap = p.tags.filter((t) => currentTags.includes(t)).length
      return { post: p, overlap }
    })
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime()
    })

  const related = scored.slice(0, 3).map((s) => s.post)
  if (related.length === 0) return null

  return (
    <section aria-labelledby="related-heading" className="py-16 rule-t">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 mb-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Seguir leyendo</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 id="related-heading" className="display-m">
              Artículos relacionados
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t-2 border-ink">
          {related.map((post, i) => (
            <article
              key={post.slug}
              className={`py-8 md:py-10 md:px-6 ${i > 0 ? 'border-t border-rule md:border-t-0 md:border-l' : ''}`}
            >
              <div className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-2 mb-3">
                {new Date(post.date).toLocaleDateString('es-ES', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}{' '}
                · {post.readingTime}
              </div>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h3 className="font-display text-xl leading-snug text-ink group-hover:italic transition-all">
                  {post.title}
                </h3>
              </Link>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((t) => (
                  <span key={t} className="chip-ed">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-block ed-link font-mono text-xs uppercase tracking-widest"
              >
                Leer →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
