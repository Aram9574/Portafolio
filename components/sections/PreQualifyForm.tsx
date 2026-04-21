"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

type Audience = 'hospital' | 'consultora' | 'publico' | 'healthtech' | 'otro'
type ProjectKind = 'proyecto_concreto' | 'exploracion' | 'pliego' | 'advisory' | 'otro'
type Timeline = 'inmediato' | 'trimestre' | 'q3q4_2026' | 'flexible'

const AUDIENCES: { value: Audience; label: string }[] = [
  { value: 'hospital', label: 'Hospital / aseguradora' },
  { value: 'consultora', label: 'Consultora' },
  { value: 'publico', label: 'Administración pública' },
  { value: 'healthtech', label: 'HealthTech / MedTech / Farma' },
  { value: 'otro', label: 'Otro' },
]

const PROJECTS: { value: ProjectKind; label: string }[] = [
  { value: 'proyecto_concreto', label: 'Proyecto concreto con timeline' },
  { value: 'exploracion', label: 'Exploración estratégica' },
  { value: 'pliego', label: 'Pliego o licitación específica' },
  { value: 'advisory', label: 'Advisory recurrente' },
  { value: 'otro', label: 'Otro' },
]

const TIMELINES: { value: Timeline; label: string }[] = [
  { value: 'inmediato', label: 'Inmediato (< 4 semanas)' },
  { value: 'trimestre', label: 'Este trimestre' },
  { value: 'q3q4_2026', label: 'Q3 / Q4 2026' },
  { value: 'flexible', label: 'Flexible' },
]

const CALENDLY_BASE = 'https://calendly.com/zakzukaram'

type Props = {
  initialAudience?: Audience
}

export default function PreQualifyForm({ initialAudience }: Props) {
  const [audience, setAudience] = useState<Audience | ''>(initialAudience ?? '')
  const [project, setProject] = useState<ProjectKind | ''>('')
  const [timeline, setTimeline] = useState<Timeline | ''>('')
  const [submitted, setSubmitted] = useState(false)
  const iframeSectionRef = useRef<HTMLDivElement>(null)

  // Read ?audience= from URL on mount to pre-fill from trabajemos-juntos CTA.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const qa = params.get('audience') as Audience | null
    if (qa && AUDIENCES.some((a) => a.value === qa)) {
      setAudience(qa)
    }
  }, [])

  const calendlyUrl = useMemo(() => {
    if (!submitted) return CALENDLY_BASE
    const params = new URLSearchParams()
    if (audience) params.set('a1', audience)
    if (project) params.set('a2', project)
    if (timeline) params.set('a3', timeline)
    const qs = params.toString()
    return qs ? `${CALENDLY_BASE}?${qs}` : CALENDLY_BASE
  }, [submitted, audience, project, timeline])

  const canSubmit = audience !== '' && project !== '' && timeline !== ''

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitted(true)
    requestAnimationFrame(() => {
      iframeSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  function skipToIframe(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    iframeSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div id="prequalify" className="border border-rule bg-paper p-6 md:p-8 scroll-mt-24">
        {!submitted ? (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <h3 className="font-display text-2xl text-ink mb-2">Antes de reservar, tres preguntas rápidas</h3>
              <p className="text-sm text-ink-2">
                Tu contexto llega conmigo a la llamada y aprovechamos mejor los 15 minutos.
              </p>
            </div>

            {/* Pregunta 1: audiencia */}
            <fieldset className="mb-8">
              <legend className="eyebrow mb-3">01 · Soy…</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {AUDIENCES.map((a) => {
                  const checked = audience === a.value
                  return (
                    <label
                      key={a.value}
                      className={`flex items-center gap-3 border-2 px-4 py-3 cursor-pointer transition bg-paper ${
                        checked ? 'border-ink' : 'border-ink/20 hover:border-ink/60'
                      }`}
                    >
                      <input
                        type="radio"
                        name="audience"
                        value={a.value}
                        checked={checked}
                        onChange={() => setAudience(a.value)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 border-2 border-ink shrink-0 flex items-center justify-center ${
                          checked ? 'bg-ink' : 'bg-paper'
                        }`}
                        aria-hidden="true"
                      >
                        {checked && <span className="w-1.5 h-1.5 bg-bone" />}
                      </span>
                      <span className="text-sm text-ink">{a.label}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            {/* Pregunta 2: tipo de proyecto */}
            <div className="mb-8">
              <label htmlFor="pq-project" className="eyebrow block mb-3">
                02 · Tipo de proyecto
              </label>
              <select
                id="pq-project"
                name="project"
                value={project}
                onChange={(e) => setProject(e.target.value as ProjectKind | '')}
                className="w-full bg-paper border-2 border-ink text-ink text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-paper"
              >
                <option value="">Selecciona una opción…</option>
                {PROJECTS.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Pregunta 3: timeline */}
            <fieldset className="mb-8">
              <legend className="eyebrow mb-3">03 · Timeline objetivo</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TIMELINES.map((t) => {
                  const checked = timeline === t.value
                  return (
                    <label
                      key={t.value}
                      className={`flex items-center gap-3 border-2 px-4 py-3 cursor-pointer transition bg-paper ${
                        checked ? 'border-ink' : 'border-ink/20 hover:border-ink/60'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={t.value}
                        checked={checked}
                        onChange={() => setTimeline(t.value)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 border-2 border-ink shrink-0 flex items-center justify-center ${
                          checked ? 'bg-ink' : 'bg-paper'
                        }`}
                        aria-hidden="true"
                      >
                        {checked && <span className="w-1.5 h-1.5 bg-bone" />}
                      </span>
                      <span className="text-sm text-ink">{t.label}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-rule">
              <button
                type="submit"
                disabled={!canSubmit}
                className="btn-ink disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar a la agenda →
              </button>
              <a
                href="#agenda"
                onClick={skipToIframe}
                className="ed-link font-mono text-xs uppercase tracking-widest"
              >
                Prefiero reservar sin contexto →
              </a>
            </div>
          </form>
        ) : (
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-ink shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-ink font-semibold">Perfecto. Tu contexto llegará conmigo a la llamada.</p>
              <p className="text-sm text-ink-2 mt-1">Abajo tienes la agenda con tu contexto precargado.</p>
            </div>
          </div>
        )}
      </div>

      {/* Iframe sección (ancla real de agenda) */}
      <div ref={iframeSectionRef} id="agenda" className="mt-10 border border-rule bg-paper p-2 scroll-mt-24">
        <div className="aspect-[16/9] w-full">
          <iframe
            key={calendlyUrl}
            title="Calendly"
            src={calendlyUrl}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}
