
import Section from '@/components/ui/Section'
import ExperienceItem from '@/components/sections/ExperienceItem'

export const metadata = {
  title: 'Experiencia · Clinical AI Consultant',
  description: '6,5 años de práctica clínica en Méderi (Colombia) + Clinical AI Consultant autónomo desde 2025. CDSS, SaMD y compliance EU AI Act con criterio médico real.'
}

const EXPERIENCIAS = [
  {
    icon: 'heart' as const,
    title: 'Clinical AI Consultant & Developer',
    context: 'Autónomo · HealthTech · Madrid (Remoto) · ene. 2025 – actualidad',
    bullets: [
      'Desarrollo e implementación independiente de soluciones de IA clínica: CDSS, Healthcare Data Analytics y Software as a Medical Device (SaMD).',
      'CDSS estratificación de riesgo diabético (TFM): Random Forest · AUC-ROC 0.942 · XAI/SHAP · desplegado en Hugging Face · RGPD + EU AI Act + EHDS.',
      'Clasificación multiclase de riesgo metabólico sobre 253.680 registros reales (CDC BRFSS) con análisis de equidad por subgrupos demográficos.',
      'Predicción de ocupación hospitalaria con reducción estimada de varianza del 30–40% sobre baseline naive.'
    ],
    metrics: [
      { value: '0.942', label: 'AUC-ROC CDSS' },
      { value: '253K', label: 'Registros CDC' },
      { value: 'EU AI Act', label: 'Compliance' }
    ]
  },
  {
    icon: 'hospital' as const,
    title: 'Médico · Medicina Interna · Urgencias · Atención Primaria',
    context: 'Méderi · Colombia · jul. 2018 – dic. 2024 · 6 años 6 meses',
    bullets: [
      'Práctica clínica continua en entornos de alta demanda asistencial. Gestión autónoma de más de 40 pacientes por turno en urgencias y medicina interna.',
      'Coordinación de equipos de hasta 4 médicos · seguimiento longitudinal en medicina interna, ginecología y atención primaria.',
      'Diseño de protocolos asistenciales adoptados transversalmente en múltiples servicios · formación y supervisión de estudiantes en rotación clínica.',
      'Exposición directa a los puntos de fallo del sistema sanitario real: fragmentación de datos, ausencia de interoperabilidad y toma de decisiones sin CDSS operativos.'
    ],
    metrics: [
      { value: '6.5 años', label: 'Práctica Real' },
      { value: '40+', label: 'Pacientes/turno' },
      { value: 'MI · URG · AP', label: 'Servicios' }
    ]
  }
]

export default function ExperienciaPage() {
  return (
    <Section id="experiencia" title="Experiencia" subtitle="La intersección entre la bata y el código.">
      <div className="relative max-w-4xl mx-auto">
        {/* Línea de timeline central (solo visible en desktop) */}
        <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-ink hidden md:block" />

        <div className="space-y-12">
          {EXPERIENCIAS.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative flex items-center justify-between md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="hidden md:block w-1/2" />

              {/* Marcador del timeline */}
              <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-6 w-2.5 h-2.5 bg-ink z-10" />

              <div className="w-full md:w-1/2">
                <ExperienceItem
                  {...exp}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
