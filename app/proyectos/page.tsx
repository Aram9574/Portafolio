import Link from 'next/link'
import { projects } from '@/lib/data/projects'

export const metadata = { title: 'Proyectos' }

const filters = ['Todos', 'ML', 'Interoperabilidad', 'ERP/Apps', 'Otros'] as const

export default function ProyectosPage() {
  return (
    <div className="container py-12">
      <h1 className="section-title mb-6">Proyectos</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <span key={f} className="chip">{f}</span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link href={`/proyectos/${p.slug}`} key={p.slug} className="card p-6 block">
            <h3 className="text-white font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-muted">{p.subtitle}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

