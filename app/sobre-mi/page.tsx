import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '¿Quién es Aram Zakzuk, MD? · Consultor Clinical AI Madrid',
  description:
    '¿Qué perfil necesita tu proyecto de IA clínica? Médico con 6 años en urgencias + doble máster en IA y Salud Digital + base regulatoria europea. Madrid.',
  alternates: { canonical: '/sobre-mi' },
  openGraph: {
    type: 'profile',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com/sobre-mi',
    title: 'Sobre mí · Aram Zakzuk, MD · Healthcare & Clinical AI Consultant',
    description:
      'El perfil que las organizaciones sanitarias y las consultoras buscan cuando necesitan que alguien entienda el problema antes de proponer la solución.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre mí · Aram Zakzuk, MD',
    description:
      'Médico + doble máster en IA aplicada a Sanidad y Salud Digital. Consultor independiente en Madrid.',
  },
}

import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Globe, Code, Database, Layout, MessageSquare, Shield } from 'lucide-react'
import EducationSection from '@/components/sections/EducationSection'
import ExperienceItem from '@/components/sections/ExperienceItem'
import CVDownloader from '@/components/ui/CVDownloader'
import { Brain, Network, Microscope } from 'lucide-react'

import Image from 'next/image'

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://alejandrozakzuk.com/sobre-mi#aboutpage',
      url: 'https://alejandrozakzuk.com/sobre-mi',
      name: 'Sobre mí · Aram Zakzuk, MD',
      about: { '@id': 'https://alejandrozakzuk.com/#person' },
      inLanguage: 'es-ES'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://alejandrozakzuk.com/sobre-mi#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Quién es Aram Zakzuk?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aram Zakzuk es médico con 6 años de práctica clínica en Méderi (Colombia) y Healthcare & Clinical AI Consultant basado en Madrid. Cuenta con Máster en IA aplicada a Sanidad (CEMP), Máster en Salud Digital / eHealth (Universidad Europea) y especialización en AI in Healthcare por Stanford University.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Qué servicios ofrece como consultor en IA clínica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Evaluación y estrategia de adopción de soluciones Clinical AI, asesoramiento regulatorio EU AI Act, MDR y SaMD, análisis de viabilidad clínica de CDSS, Healthcare Data Analytics e interoperabilidad sanitaria (HL7 FHIR, SNOMED-CT, EHDS), y traducción entre criterio médico y equipos técnicos en proyectos HealthTech y MedTech.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Es desarrollador de software o data scientist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Aram Zakzuk es consultor. Su capacidad técnica en Machine Learning clínico, XAI/SHAP y EU AI Act fundamenta su criterio como asesor, no constituye su oferta de servicio. Los proyectos técnicos propios (CDSS diabético con AUC-ROC 0.942, ClinAI Classifier, análisis CDC BRFSS) son validación de criterio, no producto comercial.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Qué es el EU AI Act y a qué sistemas sanitarios aplica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El EU AI Act (Reglamento 2024/1689) es la regulación europea de Inteligencia Artificial. Clasifica los sistemas de IA en cuatro niveles de riesgo (prohibido, alto, limitado, mínimo). La mayoría de sistemas de IA sanitarios caen en Anexo III como alto riesgo, requiriendo gestión de riesgos, documentación técnica, gobernanza de datos y supervisión humana. Se combina con MDR y SaMD cuando el sistema tiene finalidad médica.'
          }
        },
        {
          '@type': 'Question',
          name: '¿A qué organizaciones asesora?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Organizaciones sanitarias (hospitales, aseguradoras, administración pública), consultoras tipo Crowe, Deloitte, Accenture y Minsait, y empresas HealthTech, MedTech y Life Sciences que necesiten criterio clínico y regulatorio europeo en proyectos de IA en salud.'
          }
        }
      ]
    }
  ]
}

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Hero sobre mí */}
      <Section id="sobre-mi-hero" className="pt-24">
        <div className="grid md:grid-cols-3 items-center gap-20">
          <div className="w-full md:col-span-1 flex justify-center md:justify-start" data-aos="fade-right">
            <div className="w-[21rem] h-[21rem] md:w-96 md:h-96 border border-rule bg-paper overflow-hidden relative">
              <Image
                src="/images/profile-2026.png"
                alt="Aram Zakzuk, MD · Healthcare & Clinical AI Consultant"
                fill
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-2" data-aos="fade-left">
            <h1 className="font-display text-4xl md:text-5xl text-ink mb-6">Un perfil. Tres capas.</h1>
            <p className="text-ink-2 md:text-lg leading-relaxed">
              Médico con 6 años de práctica clínica real y doble formación avanzada en IA aplicada a medicina y Salud Digital. El perfil que las organizaciones sanitarias y las consultoras buscan cuando necesitan que alguien entienda el problema antes de proponer la solución.
            </p>
            <div className="mt-6 flex flex-col gap-5" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-wrap gap-3">
                <a href="/contacto" className="btn-ink">Contactar</a>
              </div>
              <div>
                <div className="eyebrow mb-3">Descargar CV · tres versiones</div>
                <CVDownloader />
              </div>
            </div>
          </div>
        </div>
      </Section>



      {/* Lo que aporto · Dónde aporto valor · Sectores */}
      <Section id="aporte">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="section-index">№ 02 — Aporte</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="eyebrow mb-4">Lo que aporto</div>
            <p className="lead">
              Criterio clínico real para evaluar, cuestionar e implementar soluciones de IA en salud. La capacidad de sentarme con un equipo de ingenieros y entender lo que construyen. La capacidad de sentarme con un comité médico y explicarles por qué no funciona. Y el conocimiento del marco regulatorio europeo para que las decisiones sean sostenibles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 mt-20">
          <div className="col-span-12 md:col-span-3">
            <div className="section-index">№ 03 — Dónde aporto valor</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">01</div>
              <h3 className="font-display text-xl text-ink mb-2">Evaluación y estrategia de adopción de Clinical AI</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Auditoría de soluciones de IA clínica, análisis de encaje asistencial y diseño de estrategia de adopción en entornos hospitalarios reales.</p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">02</div>
              <h3 className="font-display text-xl text-ink mb-2">Asesoramiento regulatorio EU AI Act · MDR · SaMD</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Clasificación bajo el Reglamento 2024/1689, análisis de conformidad y hoja de ruta de cumplimiento para proyectos HealthTech y MedTech.</p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">03</div>
              <h3 className="font-display text-xl text-ink mb-2">Viabilidad clínica de CDSS, datos e interoperabilidad</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Análisis clínico de Clinical Decision Support Systems, Healthcare Data Analytics e interoperabilidad sanitaria (HL7 FHIR · SNOMED-CT · EHDS).</p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">04</div>
              <h3 className="font-display text-xl text-ink mb-2">Traducción clínica–técnica en transformación digital</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Puente entre criterio médico y equipos técnicos en proyectos de transformación digital sanitaria, comités de dirección y licitaciones públicas.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-rule pt-6 flex flex-wrap items-start gap-y-4 gap-x-6">
          <div className="eyebrow shrink-0">Sectores</div>
          <div className="flex flex-wrap gap-2">
            {['HealthTech','MedTech','Life Sciences','Salud Digital','Digital Health','Industria Farmacéutica','Medical Device'].map((s) => (
              <span key={s} className="chip-ed">{s}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* Experiencia destacada */}
      <Section id="experiencia-destacada" title="Experiencia">
        <div className="space-y-8">
          <ExperienceItem
            icon="lab"
            title="Healthcare & Clinical AI Consultant · Autónomo"
            context="Enero 2025 - Presente · Madrid · Remoto e híbrido"
            bullets={[
              'Asesoramiento a consultoras y HealthTech en evaluación de soluciones Clinical AI: encaje clínico, riesgo regulatorio y estrategia de adopción en entornos asistenciales reales.',
              'Clasificación regulatoria bajo EU AI Act (Reglamento 2024/1689), MDR y SaMD. Análisis de conformidad y requisitos priorizados para equipos de producto.',
              'Análisis de viabilidad clínica de CDSS, Healthcare Data Analytics e interoperabilidad sanitaria (HL7 FHIR · SNOMED-CT · EHDS).',
              'Proyectos propios que fundamentan el criterio: CDSS de riesgo diabético (AUC-ROC 0.942), ClinAI Classifier (open source) y clasificación multiclase sobre 253.680 registros del CDC BRFSS.'
            ]}
            metrics={[
              { value: '6 años', label: 'clínica real' },
              { value: '2 MSc', label: 'IA + Salud Digital' },
              { value: 'EU AI Act', label: 'regulación' }
            ]}
          />

          <ExperienceItem
            icon="hospital"
            title="Médico · Medicina Interna · Urgencias · Atención Primaria"
            context="Julio 2018 - Diciembre 2024 · Méderi · Colombia"
            bullets={[
              '6 años y medio de práctica clínica continua en entornos de alta demanda asistencial.',
              'Gestión autónoma de más de 40 pacientes por turno en urgencias y medicina interna. Coordinación de equipos de hasta 4 médicos.',
              'Diseño de protocolos asistenciales adoptados transversalmente en múltiples servicios. Formación y supervisión de estudiantes en rotación clínica.',
              'Exposición directa a los puntos de fallo del sistema sanitario real: fragmentación de datos, ausencia de interoperabilidad y toma de decisiones sin CDSS operativos.'
            ]}
            metrics={[
              { value: '6 años', label: 'Experiencia' },
              { value: '40+', label: 'Pacientes/turno' },
              { value: 'MI · URG · AP', label: 'Servicios' }
            ]}
          />
        </div>
      </Section>
      <div className="pt-6 md:pt-10">
        <EducationSection />
      </div>

      {/* Fortalezas — cuatro ejes, alineados con el perfil consultor */}
      <Section id="fortalezas" title="Fortalezas">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6" data-aos="fade-up" data-aos-delay="100">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Globe className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Criterio clínico real</h3>
            <p className="text-ink-2 text-sm">Seis años en urgencias, medicina interna y atención primaria. El criterio que permite cuestionar una solución de IA antes de implementarla, no después.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="150">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Shield className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Marco regulatorio europeo</h3>
            <p className="text-ink-2 text-sm">EU AI Act, MDR, SaMD, ISO 13485, RGPD y EHDS. Clasificación y análisis de conformidad para que las decisiones sean sostenibles, no solo cumplibles.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Layout className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Estrategia de adopción clínica</h3>
            <p className="text-ink-2 text-sm">Identificación de puntos de fallo en la implementación, rediseño de flujos asistenciales y gestión del cambio donde el comité médico toma la decisión.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="250">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <MessageSquare className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Traducción clínica–técnica</h3>
            <p className="text-ink-2 text-sm">El puente entre ingenieros, comité médico y comprador público. La misma conversación en tres idiomas distintos, sin perder rigor en ninguno.</p>
          </Card>
        </div>
      </Section>

      {/* Lenguas y valores */}
      <Section id="lenguas-valores">
        <div className="grid md:grid-cols-2 gap-40">
          <div data-aos="fade-right">
            <h2 className="scroll-mt-24 font-display text-3xl text-ink mb-6">Lenguas</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm text-ink-2">
                  <span>Español</span>
                  <span>Nativo</span>
                </div>
                <div className="w-full bg-ink/10 h-1">
                  <div className="bg-ink h-1 w-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm text-ink-2">
                  <span>Inglés</span>
                  <span>C1</span>
                </div>
                <div className="w-full bg-ink/10 h-1">
                  <div className="bg-ink h-1" style={{ width: '85%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm text-ink-2">
                  <span>Francés</span>
                  <span>B2</span>
                </div>
                <div className="w-full bg-ink/10 h-1">
                  <div className="bg-ink h-1" style={{ width: '70%' }} />
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="scroll-mt-24 font-display text-3xl text-ink mb-6">Valores</h2>
            <ul className="space-y-3 text-ink-2">
              {[
                'Rigor científico y metodológico',
                'Impacto clínico medible',
                'Protección de datos y privacidad',
                'Documentación clara y reproducible',
                'Colaboración interdisciplinar',
              ].map(v => (
                <li key={v} className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-0.5">•</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA al final */}
      <Section id="cta">
        <div className="text-center" data-aos="fade-up">
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-4">¿Integrar IA clínica con criterio médico real?</h2>
          <p className="text-muted mb-8">Revisamos el caso de uso, el dato disponible y el encaje bajo EU AI Act en 15 minutos.</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up" data-aos-delay="100">
          <a href="/contacto#agenda" className="btn-ink">Reservar llamada</a>
          <a href="/trabajemos-juntos" className="btn-ghost">Ver cómo trabajamos juntos</a>
          <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver CV</a>
        </div>
      </Section>
    </>
  )
}
