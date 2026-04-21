/**
 * Breadcrumbs — inyecta JSON-LD BreadcrumbList + render visual mínimo.
 * Uso:
 *   <Breadcrumbs items={[
 *     { name: 'Blog', url: 'https://alejandrozakzuk.com/blog' },
 *     { name: 'Título del post', url: 'https://alejandrozakzuk.com/blog/slug' }
 *   ]} />
 * El primer elemento siempre es Inicio, añadido automáticamente.
 */

type Item = { name: string; url: string }

const BASE = 'https://alejandrozakzuk.com'

export default function Breadcrumbs({ items }: { items: Item[] }) {
  const full: Item[] = [{ name: 'Inicio', url: BASE }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: full.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-2 mb-4"
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {full.map((it, i) => (
            <li key={it.url} className="flex items-center gap-2">
              {i < full.length - 1 ? (
                <>
                  <a
                    href={it.url.replace(BASE, '') || '/'}
                    className="hover:text-ink transition-colors"
                  >
                    {it.name}
                  </a>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span aria-current="page" className="text-ink">
                  {it.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  )
}
