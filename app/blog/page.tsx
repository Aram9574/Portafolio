import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog';

export const metadata: Metadata = {
  title: '¿EHDS, EU AI Act, CDSS? · Blog Clinical AI · Aram Zakzuk',
  description:
    '¿Cómo se traduce el EU AI Act al hospital? ¿Qué exige EHDS en 2026? Análisis largo sin relleno, escrito por un médico con doble máster. Publicación semanal.',
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': '/blog/rss.xml' },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com/blog',
    title: 'Blog · Salud Digital, EHDS, EU AI Act y Clinical AI',
    description:
      'Análisis ejecutivo y técnico sobre EHDS, EU AI Act, CDSS y transformación digital sanitaria por Aram Zakzuk.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog · Salud Digital, EHDS, EU AI Act y Clinical AI',
    description:
      'Análisis ejecutivo y técnico sobre EHDS, EU AI Act, CDSS y transformación digital sanitaria.',
  },
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <section id="blog-hero" className="pt-20 pb-20 rule-b">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 items-end">
            <aside className="col-span-12 md:col-span-4 lg:col-span-3 space-y-6 md:border-r md:border-ink md:pr-8 md:self-stretch md:pb-4">
              <div className="eyebrow">№ 00 / Blog · Editorial</div>
              <div className="caption leading-relaxed">
                Artículos largos. Pensados para decisores.
              </div>
            </aside>
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <h1 className="display-xl">
                Notas sobre <span className="italic"><span className="hl-accent">Salud Digital</span></span><br />
                e IA clínica.
              </h1>
              <p className="lead mt-8 max-w-3xl">
                Escribo para directores de innovación hospitalaria, partners
                de consultoras, equipos de Medical Affairs y responsables de
                transformación digital en administración pública. Un análisis
                por entrega, sin relleno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog-list" className="py-20">
        <div className="container">
          <ol className="grid grid-cols-1 gap-0">
            {blogPosts.map((post, index) => (
              <li
                key={post.slug}
                className={`grid grid-cols-12 gap-y-4 md:gap-x-8 py-10 ${index === 0 ? 'border-t-2 border-ink' : 'border-t border-rule'}`}
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-2">
                    № {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="caption mt-2">{formatDate(post.date)}</div>
                  <div className="caption mt-1">{post.readingTime} · lectura</div>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h2 className="display-m group-hover:italic transition-all">
                      {post.title}
                    </h2>
                    <p className="lead mt-4 text-[1.05rem]">{post.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span key={t} className="chip-ed">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <span className="ed-link font-mono text-xs uppercase tracking-widest">
                        Leer artículo →
                      </span>
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': 'https://alejandrozakzuk.com/blog#blog',
            name: 'Blog · Aram Zakzuk · Salud Digital e IA clínica',
            url: 'https://alejandrozakzuk.com/blog',
            description:
              'Análisis ejecutivo y técnico sobre EHDS, EU AI Act, CDSS y transformación digital sanitaria.',
            inLanguage: 'es-ES',
            author: { '@id': 'https://alejandrozakzuk.com/#person' },
            publisher: { '@id': 'https://alejandrozakzuk.com/#person' },
            blogPost: blogPosts.map((p) => ({
              '@type': 'BlogPosting',
              '@id': `https://alejandrozakzuk.com/blog/${p.slug}#post`,
              headline: p.title,
              description: p.description,
              datePublished: p.date,
              url: `https://alejandrozakzuk.com/blog/${p.slug}`,
              inLanguage: 'es-ES',
              author: { '@id': 'https://alejandrozakzuk.com/#person' },
              publisher: { '@id': 'https://alejandrozakzuk.com/#person' },
            })),
          }),
        }}
      />
    </>
  );
}
