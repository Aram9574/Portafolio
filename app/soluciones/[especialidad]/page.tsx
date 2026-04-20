import Section from '@/components/ui/Section'
import LeadMagnet from '@/components/sections/LeadMagnet'
import { CheckCircle2, Server, Database, Shield } from 'lucide-react'

// PROGRAMMATIC SEO: Array de especialidades B2B para generar páginas a escala orgánicamente
const especialidades = [
  { slug: 'radiologia', nombre: 'Radiología', pain: 'sistemas PACS y diagnóstico por imagen' },
  { slug: 'cardiologia', nombre: 'Cardiología', pain: 'señales ECG y telemetría en tiempo real' },
  { slug: 'oncologia', nombre: 'Oncología', pain: 'estratificación de riesgo y matching biológico' },
]

export function generateStaticParams() {
  return especialidades.map((esp) => ({
    especialidad: esp.slug,
  }))
}

export function generateMetadata({ params }: { params: { especialidad: string } }) {
  const data = especialidades.find((e) => e.slug === params.especialidad) || especialidades[0]
  return {
    title: `Despliegue de IA en ${data.nombre} · Aram Zakzuk`,
    description: `Soluciones de IA clínica y modelos predictivos para ${data.nombre}. Optimiza ${data.pain} cumpliendo la normativa MDR y EU AI Act.`,
  }
}

export default function SolucionesProgramaticas({ params }: { params: { especialidad: string } }) {
  const data = especialidades.find((e) => e.slug === params.especialidad) || especialidades[0]

  return (
    <>
      <Section className="pt-32 text-center" id="hero-seo">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-rule bg-accent text-ink text-xs font-semibold mb-6 font-mono uppercase tracking-wide">
          <Database className="w-4 h-4" /> Solución Vertical B2B
        </div>
        <h1 className="display-xl text-ink mb-6">
          Inteligencia Artificial Clínica aplicada a <span className="hl-accent">{data.nombre}</span>
        </h1>
        <p className="lead text-ink-2 max-w-2xl mx-auto mb-8">
          Acelera y despliega modelos robustos para {data.pain}. Sin fricciones técnicas, 100% interoperable bajo HL7/FHIR y validado por criterio médico.
        </p>
      </Section>

      <Section id="core-values" className="bg-paper py-16 rule-y">
        <h2 className="text-center display-m text-ink mb-10">Pilares del despliegue en {data.nombre}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border border-rule bg-bone">
            <Server className="w-8 h-8 text-ink mb-4" />
            <h3 className="font-bold mb-2 text-lg text-ink">Integración EHR</h3>
            <p className="text-sm text-ink-2">Implementación de lectura y escritura directo sobre sistemas hospitalarios existentes sin romper flujos.</p>
          </div>
          <div className="p-6 border border-rule bg-bone">
            <Shield className="w-8 h-8 text-ink mb-4" />
            <h3 className="font-bold mb-2 text-lg text-ink">Compliance EU</h3>
            <p className="text-sm text-ink-2">Certificación software as a medical device (SaMD) y seguridad dictada por el marco RGPD.</p>
          </div>
          <div className="p-6 border border-rule bg-bone">
            <CheckCircle2 className="w-8 h-8 text-ink mb-4" />
            <h3 className="font-bold mb-2 text-lg text-ink">Validación Clínica</h3>
            <p className="text-sm text-ink-2">Algoritmos supervisados, métricas transparentes (XAI) e interfaz preparada para el profesional de salud.</p>
          </div>
        </div>
      </Section>

      <LeadMagnet />
      
      {/* AEO Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `IA en ${data.nombre} | Aram Zakzuk`,
        "description": `Protocolos de despliegue IA seguros en ${data.nombre}`,
        "specialty": data.nombre
      })}} />
    </>
  )
}
