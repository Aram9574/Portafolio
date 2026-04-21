'use client';
import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/Card'

type Pub = { id:string; title:string; type:string; venue:string; year:number; link:string; tags?:string[] }

const TABS = [
  { key: 'All', label: 'Todas' },
  { key: 'Artículo', label: 'Artículos' },
  { key: 'Charla', label: 'Charlas' },
]

const TOPICS = [
  'CDSS',
  'EU AI Act',
  'Salud Digital',
  'HealthTech',
  'Clinical AI',
  'Implementación',
  'Mercado',
  'Carrera',
]

export default function PublicationsBrowser({ publications }:{ publications: Pub[] }) {
  const [tab, setTab] = useState<string>('All')
  const [q, setQ] = useState('')
  const [activeTopics, setActiveTopics] = useState<string[]>([])

  const toggleTopic = (topic: string) => {
    setActiveTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    )
  }

  const list = useMemo(() => {
    const query = q.toLowerCase()
    return publications.filter((p) => {
      if (tab !== 'All' && p.type !== tab) return false

      if (activeTopics.length > 0) {
        const pubTags = (p.tags ?? []).map((t) => t.toLowerCase())
        const matchesTopic = activeTopics.some((topic) =>
          pubTags.includes(topic.toLowerCase())
        )
        if (!matchesTopic) return false
      }

      if (query) {
        const inTitle = p.title.toLowerCase().includes(query)
        const inTags = Array.isArray(p.tags) && p.tags.join(' ').toLowerCase().includes(query)
        if (!inTitle && !inTags) return false
      }

      return true
    })
  }, [tab, q, activeTopics, publications])

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

      <div className="mb-8 border-t border-rule pt-4 flex flex-wrap items-center gap-y-3 gap-x-4">
        <div className="eyebrow shrink-0">Tópicos</div>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((topic) => {
            const active = activeTopics.includes(topic)
            return (
              <button
                key={topic}
                type="button"
                onClick={() => toggleTopic(topic)}
                aria-pressed={active}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest border transition-colors ${
                  active
                    ? 'border-ink bg-ink text-bone'
                    : 'border-rule text-ink-2 bg-paper hover:text-ink hover:border-ink'
                }`}
              >
                {topic}
              </button>
            )
          })}
          {activeTopics.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTopics([])}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-muted hover:text-ink transition-colors"
            >
              Limpiar ×
            </button>
          )}
        </div>
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
