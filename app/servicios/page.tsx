import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import FAQItem from '@/components/ui/FAQItem'
import { services } from '@/lib/data/services'

export const metadata = { title: 'Servicios' }

export default function ServiciosPage() {
  return (
    <>
      <Section id="servicios" title="Paquetes" subtitle="De descubrimiento a despliegue inicial, con foco clínico y técnico.">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <Card key={s.id}>
              <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{s.summary}</p>
              <ul className="text-sm list-disc ml-5">
                {s.deliverables.slice(0,4).map(d => <li key={d}>{d}</li>)}
              </ul>
              <p className="text-xs text-muted-foreground mt-3">Duración: {s.duration} · {s.priceRange}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="proceso" title="Proceso en 4 pasos">
        <ol className="grid md:grid-cols-4 gap-4 text-sm text-muted-foreground">
          {['Brief','Datos','Prototipo','Entrega'].map((p,i) => (
            <li key={p} className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-white font-medium">{i+1}. {p}</div>
              <p className="mt-1">{p==='Brief' ? 'Problema y objetivos' : p==='Datos' ? 'Fuentes y criterios' : p==='Prototipo' ? 'MVP y validación' : 'Informe y roadmap'}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="faq" title="Preguntas frecuentes">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
          <FAQItem q="¿Trabajas con datos reales?" a="Sí, bajo acuerdos y con anonimización/pseudonimización cuando aplica." />
          <FAQItem q="¿Puedes integrarte con nuestro HIS/ERP?" a="Sí, con HL7/FHIR y APIs existentes para interoperabilidad básica." />
          <FAQItem q="¿Entregas documentación?" a="Sí, checklist de reproducibilidad y resumen ejecutivo para clínica y dirección." />
        </div>
      </Section>

      <Section id="cta" title="¿Agendamos 15 minutos?" subtitle="Exploramos problema, datos y primer alcance.">
        <a href="/contacto#agenda" className="inline-block px-5 py-2 rounded-full border border-white/10">Abrir agenda →</a>
      </Section>
    </>
  )
}

