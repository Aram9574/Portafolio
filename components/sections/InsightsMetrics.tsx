import { SOCIAL } from '@/lib/site';

const TOPICS: string[] = [
  'CDSS',
  'EU AI Act',
  'Salud Digital',
  'EHDS',
  'Medical Affairs',
  'Carrera médico-tech',
  'Interoperabilidad',
];

export default function InsightsMetrics() {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 mb-10">
        <div className="col-span-12 md:col-span-4 border-t border-ink pt-6">
          <div className="eyebrow mb-4">Impresiones acumuladas</div>
          <div className="metric-numeral font-display">+15.000</div>
          <p className="caption mt-3">
            Alcance acumulado en publicaciones de LinkedIn durante 2025–2026 sobre Salud Digital, IA clínica y regulación.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 border-t border-ink pt-6">
          <div className="eyebrow mb-4">Publicaciones</div>
          <div className="metric-numeral font-display">+80</div>
          <p className="caption mt-3">
            Posts publicados en LinkedIn: análisis de mercado, tesis técnicas, comentario regulatorio y reflexión clínica.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 border-t border-ink pt-6">
          <div className="eyebrow mb-4">Seguidores profesionales</div>
          <div className="metric-numeral font-display">2.054</div>
          <p className="caption mt-3">
            Comunidad profesional en LinkedIn: médicos, consultoras, HealthTech, administración pública y reguladores.
          </p>
        </div>
      </div>

      <div className="border-t border-rule pt-6 flex flex-wrap items-start gap-y-4 gap-x-6">
        <div className="eyebrow shrink-0">Temas que cubro</div>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <span key={t} className="chip-ed">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <a
          href={SOCIAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="ed-link font-mono text-sm uppercase tracking-widest"
        >
          Seguir en LinkedIn →
        </a>
      </div>
    </div>
  );
}
