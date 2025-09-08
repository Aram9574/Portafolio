import Link from 'next/link'
import { publications } from '@/lib/data/publications'

export const metadata = { title: 'Publicaciones' }

export default function PublicacionesPage() {
  return (
    <div className="container py-12">
      <h1 className="section-title">Publicaciones</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((p) => (
          <Link key={p.slug} href={`/publicaciones/${p.slug}`} className="card p-6 block">
            <div className="text-xs text-muted">{new Date(p.date).toLocaleDateString('es-ES')}</div>
            <h3 className="text-white font-semibold mt-1">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

