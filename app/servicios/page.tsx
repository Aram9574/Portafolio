import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import FAQItem from '@/components/ui/FAQItem'
import { services } from '@/lib/data/services'

export const metadata = { title: 'Servicios', robots: 'noindex, nofollow' }

export default function ServiciosPage() {
  return (
    <>
      <Section id="servicios" title="Servicios" subtitle="Clinical AI y compliance EU AI Act para HealthTech, MedTech y equipos de Medical Affairs.">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <Card key={s.id}>
              <h3 className="text-lg font-semibold mb-1 text-ink">{s.title}</h3>
              <p className="text-sm text-ink-2 mb-3">{s.summary}</p>
              <ul className="text-sm list-disc ml-5 text-ink-2">
                {s.deliverables.slice(0,4).map(d => <li key={d}>{d}</li>)}
              </ul>
              <p className="text-xs text-muted mt-3 font-mono">Duración: {s.duration} · {s.priceRange}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="proceso" title="Proceso en 4 pasos">
        <ol className="grid md:grid-cols-4 gap-4 text-sm text-ink-2">
          {[
            { step: 'Brief clínico', desc: 'Problema real, flujo asistencial y métrica objetivo' },
            { step: 'Datos y regulación', desc: 'Fuentes, calidad y restricciones (EU AI Act · RGPD · EHDS)' },
            { step: 'Prototipo validado', desc: 'Modelo + XAI/SHAP + análisis de equidad' },
            { step: 'Entrega auditable', desc: 'Informe ejecutivo, documentación y roadmap' }
          ].map((p, i) => (
            <li key={p.step} className="bg-paper border border-rule p-4">
              <div className="text-ink font-medium">{i + 1}. {p.step}</div>
              <p className="mt-1">{p.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="faq" title="Preguntas frecuentes">
        <div className="border border-rule bg-paper p-2">
          <FAQItem q="¿Trabajas bajo el marco regulatorio europeo?" a="Sí. EU AI Act (Reglamento 2024/1689), RGPD, EHDS, MDR, ISO 13485 y SaMD son restricciones de diseño desde el día uno, no una checklist a posteriori." />
          <FAQItem q="¿Tienes criterio clínico real?" a="Sí. 6,5 años de práctica continua en medicina interna, urgencias y atención primaria en Méderi (Colombia, 2018–2024). Los modelos se diseñan desde el flujo clínico real." />
          <FAQItem q="¿Puedes integrarte con nuestro HIS/ERP?" a="Sí, con HL7 FHIR R4 y terminologías SNOMED-CT / LOINC para interoperabilidad clínica." />
          <FAQItem q="¿Los modelos son explicables?" a="Sí. XAI/SHAP para validación clínica directa por facultativos. Un score sin explicación clínica no es un CDSS usable." />
          <FAQItem q="¿Entregas documentación auditable?" a="Sí. Informe ejecutivo, documentación técnica, análisis de equidad por subgrupos y trazabilidad regulatoria." />
        </div>
      </Section>

      <Section id="cta" title="¿Agendamos 15 minutos?" subtitle="Revisamos el problema clínico, el dato disponible y el encaje regulatorio.">
        <a href="/contacto#agenda" className="btn-ink inline-flex">Reservar llamada →</a>
      </Section>
    </>
  )
}

