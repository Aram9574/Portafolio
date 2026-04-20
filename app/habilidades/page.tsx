
import Section from '@/components/ui/Section'
import { Brain, Network, ShieldCheck, Database } from 'lucide-react'

export const metadata = {
  title: 'Habilidades Técnicas y Clínicas · Aram Zakzuk',
  description: 'Stack tecnológico y clínico: Python para Data Science, interoperabilidad FHIR, modelos de NLP clínico y marco regulatorio europeo para IA.'
}

const SKILLS = [
  {
    title: 'Clinical AI & Machine Learning',
    icon: Brain,
    items: ['Python', 'Scikit-learn', 'Random Forest', 'Deep Learning', 'NLP clínico', 'XAI / SHAP', 'Healthcare Data Analytics', 'CDSS']
  },
  {
    title: 'Interoperabilidad y terminologías',
    icon: Network,
    items: ['HL7 FHIR R4', 'SNOMED-CT', 'LOINC', 'Integración EHR / HIS', 'EHDS']
  },
  {
    title: 'Regulación y SaMD',
    icon: ShieldCheck,
    items: ['EU AI Act', 'MDR', 'ISO 13485', 'SaMD', 'Marcado CE', 'RGPD', 'Real-World Evidence']
  },
  {
    title: 'Infraestructura y despliegue',
    icon: Database,
    items: ['Microsoft Azure', 'SQL', 'FastAPI', 'Streamlit', 'Docker', 'Hugging Face', 'Claude API']
  }
]

export default function HabilidadesPage() {
  return (
    <Section id="habilidades" title="Habilidades" subtitle="El arsenal técnico para transformar la asistencia sanitaria.">
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
