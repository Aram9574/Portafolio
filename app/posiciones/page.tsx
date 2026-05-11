import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { Brain, ShieldCheck, LineChart, HeartPulse, Building2, MapPin, Globe2 } from 'lucide-react'
import { SOCIAL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Roles que me interesan · Aram Zakzuk, MD · Clinical AI · Madrid',
  description:
    'Disponible para roles senior en Clinical AI, Medical Affairs digital, Healthcare Data Analytics y asesoría regulatoria EU AI Act en HealthTech, MedTech, Pharma Digital, MedDevice e innovación hospitalaria. Madrid, remoto o híbrido.',
  alternates: { canonical: '/posiciones' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com/posiciones',
    title: 'Posiciones · Aram Zakzuk, MD',
    description:
      'Roles senior en HealthTech, MedTech y Pharma Digital donde aporta valor mi combinación de criterio médico + IA + regulación europea.',
  },
}

type Role = {
  id: string
  icon: typeof Brain
  title: string
  description: string
  examples: string[]
}

const roles: Role[] = [
  {
    id: 'clinical-ai',
    icon: Brain,
    title: 'Clinical AI Specialist · Clinical Lead',
    description:
      'Equipos que diseñan, validan o despliegan sistemas de IA en salud y necesitan voz clínica + capacidad técnica desde dentro, no como advisor externo.',
    examples: [
      'Clinical AI Lead en HealthTech con producto en fase de validación',
      'Clinical Specialist en empresa de CDSS, NLP médico o imaging AI',
      'Senior Clinical AI Scientist en CRO o farma con cartera de soluciones digitales',
    ],
  },
  {
    id: 'regulatory',
    icon: ShieldCheck,
    title: 'EU AI Act · MDR · SaMD · Regulatory Affairs',
    description:
      'Empresas que necesitan clasificar sus sistemas de IA bajo el Reglamento 2024/1689, preparar documentación técnica MDR/SaMD y operar el marco regulatorio europeo como ventaja competitiva, no como freno.',
    examples: [
      'AI Regulatory Lead en MedDevice con dispositivos clase IIa/IIb que incorporan IA',
      'Senior Regulatory Affairs Specialist con foco en EU AI Act + MDR',
      'Compliance Lead en HealthTech preparando marcado CE de SaMD',
    ],
  },
  {
    id: 'medical-affairs',
    icon: HeartPulse,
    title: 'Medical Affairs digital · Clinical Validation',
    description:
      'Pharma y MedTech que necesitan validación clínica real de productos digitales: encaje asistencial con facultativos, evidencia clínica, KOL engagement con criterio médico operativo.',
    examples: [
      'Medical Science Liaison con foco en digital health y AI',
      'Medical Affairs Lead para producto digital en fase de adopción hospitalaria',
      'Senior Clinical Scientist en farma digital o telemedicina',
    ],
  },
  {
    id: 'data-analytics',
    icon: LineChart,
    title: 'Healthcare Data Analytics · Real-World Evidence',
    description:
      'Equipos de datos en salud que necesitan criterio médico para diseñar pipelines clínicamente honestos, análisis de equidad algorítmica y evidencia del mundo real.',
    examples: [
      'Senior Healthcare Data Scientist con dominio clínico',
      'Real-World Evidence Lead en farma o aseguradora',
      'Clinical Analytics Manager en hospital con proyecto de transformación digital',
    ],
  },
  {
    id: 'transformacion',
    icon: Building2,
    title: 'Transformación digital sanitaria · Innovación hospitalaria',
    description:
      'Hospitales, aseguradoras, administración pública o consultoras que necesitan dirección clínica con capacidad técnica para liderar proyectos de transformación digital, EHDS e interoperabilidad.',
    examples: [
      'Digital Health Lead en hospital o grupo hospitalario',
      'Innovation Manager con perfil clínico en aseguradora o admin pública',
      'Senior Healthcare Consultant en consultora estratégica',
    ],
  },
]

const conditions = [
  { icon: MapPin, label: 'Madrid · presencial, remoto o híbrido' },
  { icon: Globe2, label: 'Disponible para reubicación dentro de la UE' },
  { icon: ShieldCheck, label: 'Médico homologado en España · documentación al día' },
]

export default function PosicionesPage() {
  return (
    <>
      <Section
        id="posiciones"
        index="№ 00 — Disponibilidad"
        title="Roles que me interesan"
        subtitle="Cinco arquetipos de posición donde aporta valor mi combinación de criterio médico + capacidad técnica en IA + dominio del marco regulatorio europeo. Si tu equipo está abriendo una vacante similar, hablemos."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r, i) => {
            const Icon = r.icon
            return (
              <article
                key={r.id}
                className="border border-rule bg-paper p-8 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
              >
                <div className="w-12 h-12 mb-5 border border-rule bg-bone flex items-center justify-center">
                  <Icon className="w-6 h-6 text-ink" aria-hidden="true" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">{r.title}</h2>
                <p className="text-ink-2 leading-relaxed mb-5">{r.description}</p>
                <ul className="space-y-2 text-sm text-ink-2 border-t border-rule pt-5">
                  {r.examples.map((q) => (
                    <li key={q} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 bg-ink shrink-0" aria-hidden="true" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </Section>

      {/* Sectores objetivo */}
      <Section
        id="sectores"
        index="№ 01 — Sectores"
        title="Sectores objetivo"
        subtitle="Las industrias donde la combinación de criterio clínico, IA y regulación europea se traduce directamente en valor para el equipo."
      >
        <div className="flex flex-wrap gap-2">
          {[
            'HealthTech',
            'MedTech',
            'Pharma Digital',
            'MedDevice',
            'Life Sciences',
            'Innovación hospitalaria',
            'CROs',
            'Digital Health · Salud Digital',
            'Aseguradoras de salud',
            'Administración pública sanitaria',
          ].map((s) => (
            <span key={s} className="chip-ed">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Condiciones */}
      <Section id="condiciones" index="№ 02 — Condiciones" title="Disponibilidad y condiciones">
        <ul className="grid md:grid-cols-3 gap-6">
          {conditions.map((c) => {
            const Icon = c.icon
            return (
              <li key={c.label} className="border-t border-ink pt-5 flex items-start gap-3">
                <Icon className="w-5 h-5 text-ink shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-ink-2 text-sm leading-relaxed">{c.label}</span>
              </li>
            )
          })}
        </ul>
      </Section>

      {/* CTA final */}
      <Section id="cta-final">
        <div className="border-t border-ink pt-10 text-center" data-aos="fade-up">
          <p className="text-ink-2 mb-4">¿Tu equipo está abriendo una vacante donde encaja este perfil?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/cv/CV_Aram_Zakzuk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink"
            >
              Descargar CV →
            </a>
            <a href={`mailto:${SOCIAL.email}`} className="btn-ghost">
              {SOCIAL.email}
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
