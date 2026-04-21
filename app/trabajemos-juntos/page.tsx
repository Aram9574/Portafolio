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

type Engagement = {
  id: string
  title: string
  when: string
  duration: string
  deliverable: string
  model: string
}

const engagements: Engagement[] = [
  {
    id: 'discovery',
    title: 'Discovery · 15 min',
    when: 'Primer contacto. Validamos si tiene sentido trabajar juntos.',
    duration: '15 minutos',
    deliverable: 'Diagnóstico inicial y próximos pasos claros.',
    model: 'Sin coste',
  },
  {
    id: 'revision-puntual',
    title: 'Revisión puntual',
    when: 'Necesitas una segunda opinión sobre un caso concreto: clasificación EU AI Act, auditoría de proveedor, revisión de pliego.',
    duration: '1–2 semanas',
    deliverable: 'Informe ejecutivo escrito + sesión de 60 min para presentar.',
    model: 'Precio cerrado · Tarifa por proyecto',
  },
  {
    id: 'discovery-completo',
    title: 'Discovery completo',
    when: 'Tu organización está diseñando o evaluando un proyecto de IA clínica y necesita criterio médico + regulatorio desde el inicio.',
    duration: '4–6 semanas',
    deliverable: 'Evaluación de encaje asistencial, análisis regulatorio, recomendaciones priorizadas y memoria técnica para dirección.',
    model: 'Precio cerrado · Fase inicial de advisory',
  },
  {
    id: 'advisory-continuado',
    title: 'Advisory continuado',
    when: 'Tu equipo necesita una voz clínica y regulatoria de referencia a lo largo de un proyecto largo (despliegue hospitalario, producto HealthTech, pliego complejo).',
    duration: 'Mínimo 3 meses',
    deliverable: 'Disponibilidad mensual acordada · revisiones puntuales · acompañamiento en comités y decisiones.',
    model: 'Retainer mensual · Horas asignadas',
  },
]

export default function TrabajemosJuntosPage() {
  return (
    <>
      <Section
        id="trabajemos-juntos"
        index="№ 00 — Entrada"
        title="¿Cómo podemos trabajar juntos?"
        subtitle="Cuatro caminos de entrada según tu organización, cuatro formatos de trabajo según lo que necesitas. El primer paso siempre es una conversación de 15 minutos."
      >
        {/* AUDIENCIAS */}
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
      </Section>

      {/* FORMATOS DE TRABAJO */}
      <Section
        id="formatos"
        index="№ 01 — Formatos"
        title="Formatos de trabajo"
        subtitle="Cuatro modalidades según la profundidad del encargo. El discovery inicial es siempre gratuito."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {engagements.map((e, i) => (
            <article
              key={e.id}
              className="border border-rule bg-paper p-8 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={100 * (i + 1)}
            >
              <div className="eyebrow mb-3">Formato {String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-display text-2xl text-ink mb-3">{e.title}</h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">{e.when}</p>
              <dl className="space-y-3 text-sm border-t border-rule pt-4 mt-auto">
                <div className="flex gap-4">
                  <dt className="caption shrink-0 w-28">Duración</dt>
                  <dd className="text-ink">{e.duration}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="caption shrink-0 w-28">Entregable</dt>
                  <dd className="text-ink">{e.deliverable}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="caption shrink-0 w-28">Modelo</dt>
                  <dd className="text-ink">{e.model}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink-2 max-w-3xl">
          Las tarifas concretas se ajustan al alcance del proyecto, al tipo de organización (hospital público,
          consultora, HealthTech) y al grado de urgencia. En el discovery de 15 minutos validamos encaje y,
          si tiene sentido, preparo una propuesta cerrada con tarifa en 48–72 horas.
        </p>
      </Section>

      {/* CTA FINAL */}
      <Section id="cta-final">
        <div className="border-t border-ink pt-10 text-center" data-aos="fade-up">
          <p className="text-ink-2 mb-4">¿Ninguna opción encaja? Escríbeme directamente.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contacto#agenda" className="btn-ink">Reservar discovery de 15 min →</a>
            <a href={`mailto:${SOCIAL.email}`} className="btn-ghost">
              {SOCIAL.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
