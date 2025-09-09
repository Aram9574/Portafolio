'use client';
import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/Card'

type Pub = { id:string; title:string; type:string; venue:string; year:number; link:string; tags?:string[] }

const TABS = [
  { key: 'All', label: 'Todas' },
  { key: 'post', label: 'Posts técnicos' },
  { key: 'talk', label: 'Charlas' },
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
            <button key={t.key} onClick={() => setTab(t.key)} className={`px-3 py-1 rounded-full text-sm border ${tab===t.key ? 'border-emerald-400 text-emerald-300' : 'border-white/10 text-muted-foreground hover:text-white'} bg-white/5`}>
              {t.label}
            </button>
          ))}
        </div>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar..." className="ml-auto w-full md:w-64 rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {list.map(p => (
          <Card key={p.id}>
            <div className="text-lg font-semibold">{p.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{p.type} · {p.venue} · {p.year}</div>
            {Array.isArray(p.tags) && (
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {p.tags.map((t:string) => (
                  <span key={t} className="px-2 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
                ))}
              </div>
            )}
            <a href={p.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-emerald-400 hover:underline">Ver →</a>
          </Card>
        ))}
      </div>
    </>
  )
}

