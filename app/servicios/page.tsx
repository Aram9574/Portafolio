import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import FAQItem from '@/components/ui/FAQItem'
import { services } from '@/lib/data/services'

export const metadata = { title: 'Servicios', robots: 'noindex, nofollow' }

export default function ServiciosPage() {
  return (
    <>
      <Section id="servicios" title="Servicios" subtitle="Estrategia de Salud Digital, licitaciones públicas, Medical Affairs y ejecución técnica en IA sanitaria. Para hospitales, consultoras, administración pública y HealthTech.">
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
            { step: 'Diagnóstico estratégico', desc: 'Contexto del cliente, objetivo, stakeholders (dirección, compra pública, clínica)' },
            { step: 'Encaje regulatorio', desc: 'EU AI Act · MDR · RGPD · EHDS como restricciones de diseño' },
            { step: 'Roadmap y memoria técnica', desc: 'Plan ejecutable, business case y soporte en licitación si aplica' },
            { step: 'Entrega ejecutiva', desc: 'Informe para dirección, documentación y plan de implementación' }
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
          <FAQItem q="¿Trabajas con grandes consultoras y administración pública?" a="Sí. El perfil está pensado para colaboraciones con consultoras (Crowe, Deloitte, Accenture y similares), hospitales, aseguradoras y administración pública en licitaciones y proyectos de transformación digital sanitaria." />
          <FAQItem q="¿Qué aporta un médico con dos másters frente a un consultor o un ingeniero?" a="Criterio clínico real (6,5 años de hospital) combinado con Máster en Salud Digital (Universidad Europea) y Máster en IA aplicada a Sanidad (CEMP). Traduzco la realidad asistencial a dirección y a pliego técnico sin perder rigor en ninguna capa." />
          <FAQItem q="¿Apoyas en licitaciones y fondos europeos?" a="Sí. Análisis de pliego, memoria técnica, arquitectura de interoperabilidad y cumplimiento regulatorio para convocatorias del Ministerio de Sanidad, CCAA, EHDS, Horizonte Europa y fondos Recovery." />
          <FAQItem q="¿Trabajas bajo el marco regulatorio europeo?" a="Sí. EU AI Act (Reglamento 2024/1689), RGPD, EHDS, MDR, ISO 13485 y SaMD son restricciones de diseño desde el día uno." />
          <FAQItem q="¿Haces también la parte técnica (CDSS, FHIR)?" a="Sí, pero como capa de ejecución cuando el caso de uso ya está validado estratégicamente. Python, Scikit-learn, XAI/SHAP, HL7 FHIR R4 y SNOMED-CT." />
        </div>
      </Section>

      <Section id="cta" title="¿Agendamos 15 minutos?" subtitle="Revisamos el contexto, el objetivo estratégico y el encaje clínico-regulatorio.">
        <a href="/contacto#agenda" className="btn-ink inline-flex">Reservar llamada →</a>
      </Section>
    </>
  )
}

