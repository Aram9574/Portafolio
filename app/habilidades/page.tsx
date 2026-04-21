
import Section from '@/components/ui/Section'
import { Stethoscope, Layout, Brain, Network, ShieldCheck, Database } from 'lucide-react'

export const metadata = {
  title: 'Habilidades · Medicina, Salud Digital e IA aplicada a Sanidad',
  description: 'Tres capas: criterio médico (6 años hospital), estrategia de Salud Digital (Máster Universidad Europea) e IA aplicada a Sanidad (Máster CEMP + Stanford). EU AI Act, HL7 FHIR, EHDS.'
}

const SKILLS = [
  {
    title: 'Medicina y criterio clínico',
    icon: Stethoscope,
    items: ['Medicina Interna', 'Urgencias', 'Atención Primaria', 'Medicina Familiar y Preventiva', 'Protocolos asistenciales', 'Docencia médica', 'Seguridad del paciente']
  },
  {
    title: 'Estrategia y Salud Digital',
    icon: Layout,
    items: ['Transformación digital sanitaria', 'EHDS', 'Gestión de proyectos sanitarios', 'Telemedicina · M-Health', 'Licitaciones públicas', 'Fondos europeos (Horizonte · Recovery)', 'Medical Affairs', 'Business case sanitario']
  },
  {
    title: 'Regulación y SaMD',
    icon: ShieldCheck,
    items: ['EU AI Act', 'MDR', 'ISO 13485', 'SaMD', 'Marcado CE', 'RGPD', 'Real-World Evidence']
  },
  {
    title: 'Interoperabilidad y terminologías',
    icon: Network,
    items: ['HL7 FHIR R4', 'SNOMED-CT', 'LOINC', 'Integración EHR / HIS', 'EHDS · Espacio Europeo de Datos Sanitarios']
  },
  {
    title: 'IA aplicada a Sanidad',
    icon: Brain,
    items: ['Clinical Decision Support Systems (CDSS)', 'Machine Learning clínico', 'Deep Learning', 'NLP clínico', 'XAI / SHAP', 'Healthcare Data Analytics', 'Python · Scikit-learn']
  },
  {
    title: 'Infraestructura y datos',
    icon: Database,
    items: ['Microsoft Azure (Data Fundamentals)', 'SQL', 'FastAPI', 'Streamlit', 'Docker', 'Hugging Face', 'Claude API']
  }
]

export default function HabilidadesPage() {
  return (
    <Section id="habilidades" title="Habilidades" subtitle="Medicina, Salud Digital e IA en Sanidad. Tres capas que sustentan el asesoramiento estratégico, regulatorio y técnico en la transformación del sistema sanitario.">
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {SKILLS.map((skill, index) => (
          <div
            key={skill.title}
            className="p-6 border border-rule bg-paper hover:bg-bone transition group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 border border-rule bg-bone text-emerald-400 transition-colors">
                <skill.icon className="w-5 h-5" />
              </div>
              <h2 className="font-display text-xl text-ink">{skill.title}</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.items.map(item => (
                <span
                  key={item}
                  className="chip-ed text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center" data-aos="fade-up">
        <h3 className="font-display text-xl text-ink mb-6">Enfoque Clínico-Humano</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto text-muted text-sm">
          <span>Medicina Familiar y Preventiva</span>
          <span className="text-ink-2/40">/</span>
          <span>Seguridad del Paciente</span>
          <span className="text-ink-2/40">/</span>
          <span>Docencia Médica</span>
          <span className="text-ink-2/40">/</span>
          <span>Traducción Clínico-Técnica</span>
        </div>
      </div>
    </Section>
  )
}
