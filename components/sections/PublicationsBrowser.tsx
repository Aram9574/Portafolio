'use client';
import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/Card'

type Pub = { id:string; title:string; type:string; venue:string; year:number; link:string; tags?:string[] }

const TABS = [
  { key: 'All', label: 'Todas' },
  { key: 'Artículo', label: 'Artículos' },
  { key: 'Charla', label: 'Charlas' },
]

export default function PublicationsBrowser({ publications }:{ publications: Pub[] }) {
  const [tab, setTab] = useState<string>('All')
  const [q, setQ] = useState('')

  const list = useMemo(() => {
    return publications.filter(p => (tab==='All' || p.type===tab) && (
      p.title.toLowerCase().includes(q.toLowerCase()) || (Array.isArray(p.tags) && p.tags.join(' ').toLowerCase().includes(q.toLowerCase()))
    ))
  }, [tab, q, publications])

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex gap-2">
          {TABS.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`px-3 py-1 text-sm border font-mono transition-colors ${tab===t.key ? 'border-ink bg-ink text-bone' : 'border-rule text-ink-2 bg-paper hover:text-ink hover:border-ink'}`}>
              {t.label}
            </button>
          ))}
        </div>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar..." className="ml-auto w-full md:w-64 bg-transparent border border-rule text-ink placeholder:text-muted focus:outline-none focus:border-ink font-mono px-3 py-2" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {list.map(p => (
          <Card key={p.id}>
            <div className="text-lg font-semibold text-ink">{p.title}</div>
            <div className="text-xs text-muted mt-1 font-mono">{p.type} · {p.venue} · {p.year}</div>
            {Array.isArray(p.tags) && (
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t:string) => (
                  <span key={t} className="chip-ed">{t}</span>
                ))}
              </div>
            )}
            <a href={p.link} target="_blank" rel="noreferrer" className="ed-link mt-3 inline-block">Leer en LinkedIn →</a>
          </Card>
        ))}
      </div>
    </>
  )
}

