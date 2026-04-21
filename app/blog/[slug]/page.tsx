import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { blogPosts, getBlogPost } from '@/lib/data/blog';
import PostEHDS from '@/components/blog/PostEHDS';
import PostEUAIAct from '@/components/blog/PostEUAIAct';
import PostConsultoras from '@/components/blog/PostConsultoras';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: { slug: string } };

const BASE_URL = 'https://alejandrozakzuk.com';

const POST_RENDERERS: Record<string, () => JSX.Element> = {
  'como-preparar-centro-sanitario-ehds': PostEHDS,
  'eu-ai-act-clasificacion-cdss-5-pasos': PostEUAIAct,
  'lo-que-consultoras-deben-preguntar-ia-clinica': PostConsultoras,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  const url = `${BASE_URL}/blog/${post.slug}`;
  const ogUrl = `${BASE_URL}/blog/${post.slug}/opengraph-image.png`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'es_ES',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogUrl],
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) return notFound();

  const Renderer = POST_RENDERERS[post.slug];
  const isMarkdown = post.source === 'markdown' && post.markdownBody;
  if (!Renderer && !isMarkdown) return notFound();

  const url = `${BASE_URL}/blog/${post.slug}`;

  return (
    <>
      <article>
        <header className="pt-20 pb-16 rule-b">
          <div className="container">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 mb-10">
              <div className="col-span-12 md:col-span-3">
                <div className="eyebrow">Blog · Aram Zakzuk</div>
                <div className="caption mt-3">{formatDate(post.date)}</div>
                <div className="caption mt-1">{post.readingTime} · lectura</div>
                <Link
                  href="/blog"
                  className="ed-link font-mono text-xs uppercase tracking-widest mt-6 inline-block"
                >
                  ← Todos los artículos
                </Link>
              </div>
              <div className="col-span-12 md:col-span-9">
                <Breadcrumbs
                  items={[
                    { name: 'Blog', url: `${BASE_URL}/blog` },
                    { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
                  ]}
                />
                <h1 className="display-xl">{post.title}</h1>
                <p className="lead mt-8 max-w-3xl">{post.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="chip-ed">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
              <div className="col-span-12 md:col-span-3">
                <div className="md:sticky md:top-24 space-y-5">
                  <div>
                    <div className="eyebrow mb-2">Autor</div>
                    <div className="caption normal-case tracking-normal">
                      <strong className="text-ink">Aram Zakzuk</strong><br />
                      Médico · Máster en Salud Digital · Máster en IA aplicada a Sanidad
                    </div>
                  </div>
                  <div className="border-t border-rule pt-5">
                    <div className="eyebrow mb-2">Temática</div>
                    <ul className="caption normal-case tracking-normal space-y-1">
                      {post.tags.map((t) => (
                        <li key={t}>· {t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-rule pt-5">
                    <a href="/contacto#agenda" className="btn-ink w-full justify-center inline-flex">
                      Reservar llamada →
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-9 max-w-3xl">
                {Renderer ? (
                  <Renderer />
                ) : (
                  <div className="prose prose-stone max-w-none blog-markdown">
                    <ReactMarkdown>{post.markdownBody || ''}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>

      <RelatedPosts currentSlug={post.slug} currentTags={post.tags} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: 'es-ES',
            mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              '@id': `${BASE_URL}/#person`,
              name: 'Aram Zakzuk',
            },
            publisher: {
              '@type': 'Person',
              '@id': `${BASE_URL}/#person`,
            },
            image: {
              '@type': 'ImageObject',
              url: `${BASE_URL}/blog/${post.slug}/opengraph-image.png`,
              width: 1200,
              height: 630,
            },
            keywords: post.tags,
          }),
        }}
      />
    </>
  );
}
