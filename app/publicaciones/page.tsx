import Section from '@/components/ui/Section'
import PublicationsBrowser from '@/components/sections/PublicationsBrowser'
import InsightsMetrics from '@/components/sections/InsightsMetrics'
import { publications } from '@/lib/data/publications'

export const metadata = { title: 'Insights' }

const FEATURED_ID = 'post-medicos-tech-puente'

export default function PublicacionesPage() {
  const featured = publications.find((p) => p.id === FEATURED_ID)

  return (
    <Section
      id="publicaciones"
      title="Insights"
      subtitle="Análisis, opinión y tesis sobre Salud Digital, IA clínica y transformación del sistema sanitario."
    >
      <InsightsMetrics />

      {featured && (
        <div className="mb-16 border-t border-ink pt-10">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 items-end">
            <div className="col-span-12 md:col-span-5">
              <div className="eyebrow mb-4">Post destacado</div>
              <div className="metric-numeral font-display">7.835</div>
              <p className="caption mt-3 normal-case tracking-normal" style={{ fontSize: '0.82rem' }}>
                Impresiones en LinkedIn · 79 reacciones · 14 comentarios · 9 compartidos.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7 md:border-l md:border-ink md:pl-8">
              <h3 className="display-m">{featured.title}</h3>
              <div className="text-xs text-muted mt-3 font-mono">
                {featured.type} · {featured.venue} · {featured.year}
              </div>
              {Array.isArray(featured.tags) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span key={t} className="chip-ed">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-6">
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link font-mono text-sm uppercase tracking-widest"
                >
                  Leer en LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <PublicationsBrowser publications={publications as any} />
    </Section>
  )
}
