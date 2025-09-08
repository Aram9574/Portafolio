import { projects } from '@/lib/data/projects'
import { notFound } from 'next/navigation'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export const dynamicParams = false

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <div className="container py-12">
      <header>
        <h1 className="section-title">{project.title}</h1>
        <p className="mt-2 text-muted max-w-3xl">{project.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </header>

      <section className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="text-white font-semibold">Contexto clínico y objetivo</h2>
            <p className="mt-2 text-sm text-muted">Descripción breve del problema, población y objetivo del proyecto.</p>
          </div>
          <div className="card p-6">
            <h2 className="text-white font-semibold">Metodología</h2>
            <ol className="mt-2 text-sm text-muted list-decimal list-inside space-y-1">
              <li>Preprocesamiento y EDA</li>
              <li>Modelado y validación</li>
              <li>Evaluación y próximos pasos</li>
            </ol>
          </div>
          <div className="card p-6">
            <h2 className="text-white font-semibold">Resultados</h2>
            <p className="mt-2 text-sm text-muted">Métricas clave y visualizaciones (AUC, sensibilidad, especificidad, matriz de confusión).</p>
          </div>
          <div className="card p-6">
            <h2 className="text-white font-semibold">Lecciones y roadmap</h2>
            <p className="mt-2 text-sm text-muted">Aspectos a mejorar y siguientes iteraciones.</p>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="card p-6">
            <h3 className="text-white font-semibold">¿Quieres algo similar?</h3>
            <p className="mt-2 text-sm text-muted">Escríbeme para explorar un piloto adaptado a tu centro.</p>
            <a href="/contacto" className="btn-primary mt-4 inline-flex">Contactar</a>
          </div>
        </aside>
      </section>
    </div>
  )
}

