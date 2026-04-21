import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { Building2, Briefcase, Landmark, Zap } from 'lucide-react'
import { SOCIAL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Trabajemos juntos · Aram Zakzuk',
  description:
    'Cuatro caminos de entrada para trabajar con Aram Zakzuk: hospitales y aseguradoras, consultoras (Crowe, Deloitte, Accenture), administración pública y CCAA, HealthTech / MedTech / Farma.',
  alternates: { canonical: '/trabajemos-juntos' },
}

type AudienceCard = {
  id: string
  icon: typeof Building2
  title: string
  copy: string
  questions: string[]
  cta: string
  href: string
}

const audiences: AudienceCard[] = [
  {
    id: 'hospital',
    icon: Building2,
    title: 'Hospitales y aseguradoras',
    copy: 'Tu centro necesita roadmap de transformación digital, preparación para EHDS o integrar IA clínica con criterio médico real.',
    questions: [
      '¿Por dónde empezamos la transformación digital?',
      '¿Cómo preparamos el centro para EHDS?',
      '¿Qué CDSS tiene sentido desplegar primero?',
    ],
    cta: 'Diagnóstico de madurez digital',
    href: '/contacto?audience=hospital#prequalify',
  },
  {
    id: 'consultora',
    icon: Briefcase,
    title: 'Grandes consultoras',
    copy: 'Vuestro equipo lidera un proyecto de salud digital y necesitáis un advisor clínico que hable el idioma de la dirección y del facultativo. Crowe, Deloitte, Accenture y similares.',
    questions: [
      '¿Valida el caso de uso clínicamente?',
      '¿Cumple EU AI Act y MDR?',
      '¿Cómo se traduce a flujo asistencial real?',
    ],
    cta: 'Sumarme como advisor clínico',
    href: '/contacto?audience=consultora#prequalify',
  },
  {
    id: 'publico',
    icon: Landmark,
    title: 'Administración pública y CCAA',
    copy: 'Licitación, pliego técnico o convocatoria europea (EHDS, Horizonte, Recovery) que requiere criterio clínico y capacidad técnica.',
    questions: [
      '¿Cómo encaja en el Reglamento 2024/1689?',
      '¿Cómo se estructura la memoria técnica?',
      '¿Qué requisitos EHDS debe cumplir?',
    ],
    cta: 'Apoyo en licitación pública',
    href: '/contacto?audience=publico#prequalify',
  },
  {
    id: 'healthtech',
    icon: Zap,
    title: 'HealthTech / MedTech / Farma',
    copy: 'Producto sanitario en desarrollo o despliegue que necesita Medical Affairs, validación clínica o compliance EU AI Act.',
    questions: [
      '¿El producto tiene fit clínico real?',
      '¿Cómo se valida con facultativos?',
      '¿Qué clasificación EU AI Act aplica?',
    ],
    cta: 'Advisory Medical Affairs',
    href: '/contacto?audience=healthtech#prequalify',
  },
]

export default function TrabajemosJuntosPage() {
  return (
    <>
      <Section
        id="trabajemos-juntos"
        index="№ 00 — Entrada"
        title="¿Cómo podemos trabajar juntos?"
        subtitle="Cuatro caminos de entrada. Elige el que mejor describa tu situación."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((a, i) => {
            const Icon = a.icon
            return (
              <article
                key={a.id}
                className="border border-rule bg-paper p-8 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
              >
                <div className="w-12 h-12 mb-5 border border-rule bg-bone flex items-center justify-center">
                  <Icon className="w-6 h-6 text-ink" aria-hidden="true" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-ink mb-3">{a.title}</h2>
                <p className="text-ink-2 leading-relaxed mb-5">{a.copy}</p>
                <ul className="space-y-2 text-sm text-ink-2 mb-8 border-t border-rule pt-5">
                  {a.questions.map((q) => (
                    <li key={q} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 bg-ink shrink-0" aria-hidden="true" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a href={a.href} className="btn-ink">
                    {a.cta} →
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16 border-t border-ink pt-10 text-center" data-aos="fade-up">
          <p className="text-ink-2 mb-4">¿Ninguna encaja? Escríbeme directamente.</p>
          <a href={`mailto:${SOCIAL.email}`} className="btn-ghost">
            {SOCIAL.email} →
          </a>
        </div>
      </Section>
    </>
  )
}
