import { publications } from '@/lib/data/publications'
import { notFound } from 'next/navigation'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return publications.map(p => ({ slug: p.id }))
}

export const dynamicParams = false

export default function PublicationDetailPage({ params }: Props) {
  const pub = publications.find(p => p.id === params.slug)
  if (!pub) return notFound()

  return (
    <div className="container py-12">
      <div className="text-xs text-muted">{pub.year}</div>
      <h1 className="section-title mt-1">{pub.title}</h1>
      <div className="mt-6 grid md:grid-cols-[220px_1fr] gap-8">
        <aside className="card p-4 h-fit sticky top-24">
          <nav className="text-sm text-muted space-y-2">
            <a className="block hover:text-white" href="#intro">Introducción</a>
            <a className="block hover:text-white" href="#contenido">Contenido</a>
            <a className="block hover:text-white" href="#cta">Conectar</a>
          </nav>
        </aside>
        <article className="prose prose-invert max-w-none">
          <section id="intro" className="card p-6">
            <p className="text-sm text-muted">{pub.venue} · {pub.type} · {pub.year}</p>
          </section>
          <section id="contenido" className="card p-6 mt-6">
            <p className="text-sm text-muted">Contenido del artículo. Placeholder.</p>
          </section>
          <section id="cta" className="card p-6 mt-6 text-center">
            <p className="text-sm text-muted">¿Te interesa este tema? Conectemos en LinkedIn.</p>
            <a href="https://www.linkedin.com/in/azakzuk-md" target="_blank" rel="noreferrer" className="btn-primary mt-4 inline-flex">Conectar en LinkedIn</a>
          </section>
        </article>
      </div>
    </div>
  )
}
