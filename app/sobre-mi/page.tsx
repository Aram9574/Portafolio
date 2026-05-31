import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil · Aram Zakzuk, MD · Clinical AI · Madrid',
  description:
    'Médico (homologado en España) con doble máster en IA aplicada a Sanidad y Salud Digital. Clinical AI, EU AI Act, MDR, SaMD, HL7 FHIR. Disponible para roles senior en HealthTech, MedTech y Pharma Digital.',
  alternates: { canonical: '/sobre-mi' },
  openGraph: {
    type: 'profile',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com/sobre-mi',
    title: 'Perfil · Aram Zakzuk, MD · Clinical AI Specialist',
    description:
      'La combinación escasa que separa los proyectos que llegan a producción de los que se quedan en piloto. Médico + doble máster en IA y Salud Digital + marco regulatorio europeo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfil · Aram Zakzuk, MD',
    description:
      'Médico + doble máster en IA aplicada a Sanidad y Salud Digital. Madrid. Disponible para HealthTech, MedTech y Pharma Digital.',
  },
}

import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Globe, Code, Database, Layout, ChatCenteredText, Shield } from '@phosphor-icons/react/dist/ssr'
import EducationSection from '@/components/sections/EducationSection'
import ExperienceItem from '@/components/sections/ExperienceItem'
import CVDownloader from '@/components/ui/CVDownloader'
import { Brain, TreeStructure, Microscope } from '@phosphor-icons/react/dist/ssr'

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
            text: 'Aram Zakzuk es médico (Universidad del Rosario, homologado en España) con 6 años de formación clínica + práctica hospitalaria en Méderi (Bogotá). Cuenta con Máster en IA aplicada a Sanidad (CEMP), Máster en Salud Digital / eHealth (Universidad Europea de Madrid) y especialización en AI in Healthcare por Stanford University. Reside en Madrid.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Qué tipo de rol busca?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Posiciones senior en Clinical AI, Medical Affairs digital, Healthcare Data Analytics y asesoría regulatoria EU AI Act / MDR / SaMD dentro de organizaciones de HealthTech, MedTech, Pharma Digital, MedDevice e innovación hospitalaria. Madrid, remoto o híbrido.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Es desarrollador de software o data scientist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No de forma exclusiva. La capacidad técnica en Machine Learning clínico, XAI/SHAP, HL7 FHIR y EU AI Act es real (proyectos como ClinAI Classifier, CDSS diabético con AUC-ROC 0.942 y análisis CDC BRFSS están publicados con código y demo). Pero el diferencial es la combinación con criterio médico hospitalario y dominio regulatorio europeo.'
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
          name: '¿En qué sectores aporta valor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'HealthTech, MedTech, Pharma Digital, MedDevice, Life Sciences, innovación hospitalaria y CROs. Cualquier organización donde se diseñen, validen o desplieguen sistemas de IA en salud que necesiten pasar el filtro clínico y regulatorio europeo.'
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
                alt="Aram Zakzuk, MD · Clinical AI Specialist"
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
              Soy médico (Universidad del Rosario, homologado en España) con 6 años de formación clínica y práctica hospitalaria, doble máster en IA aplicada a Sanidad (CEMP) y Salud Digital / eHealth (Universidad Europea), y especialización Stanford AI in Healthcare. La combinación escasa que separa los proyectos que llegan a producción de los que se quedan en piloto.
            </p>
            <div className="mt-6 flex flex-col gap-5" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-wrap gap-3">
                <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ink">Descargar CV →</a>
                <a href="/contacto" className="btn-ghost">Contactar</a>
              </div>
              <div>
                <div className="eyebrow mb-3">CV · tres versiones</div>
                <CVDownloader />
              </div>
            </div>
          </div>
        </div>
      </Section>



      {/* Lo que aporto · Áreas de impacto · Sectores */}
      <Section id="aporte">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="section-index">№ 02 — Lo que aporto</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">01</div>
              <h3 className="font-display text-xl text-ink mb-2">Criterio médico para cuestionar la IA</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Evalúo y cuestiono soluciones de IA en salud antes de desplegarlas. El criterio clínico que solo se construye con turnos en urgencias, medicina interna y atención primaria.</p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">02</div>
              <h3 className="font-display text-xl text-ink mb-2">Capacidad técnica real</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Me siento con un equipo de ingenieros y entiendo exactamente lo que construyen. Python, Machine Learning, XAI/SHAP, FHIR. No es teoría: hay proyectos públicos con código.</p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">03</div>
              <h3 className="font-display text-xl text-ink mb-2">Marco regulatorio europeo</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Conocimiento operativo del EU AI Act, MDR, SaMD, ISO 13485, RGPD y EHDS. Para que las decisiones sean sostenibles más allá del piloto.</p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">04</div>
              <h3 className="font-display text-xl text-ink mb-2">Traducción entre tres mundos</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Ingenieros, comité médico y compliance regulatorio. Hablo los tres idiomas sin que se pierda nada en el camino — la capacidad que rara vez coincide en la misma persona.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 mt-20">
          <div className="col-span-12 md:col-span-3">
            <div className="section-index">№ 03 — Áreas de impacto</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">A</div>
              <h3 className="font-display text-xl text-ink mb-2">Clinical AI · CDSS · Healthcare Data Analytics</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Diseño, validación y despliegue de sistemas de IA en salud con métricas clínicamente honestas y explicabilidad real, no decorativa.</p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">B</div>
              <h3 className="font-display text-xl text-ink mb-2">EU AI Act · MDR · SaMD · ISO 13485</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Clasificación de riesgo bajo el Reglamento 2024/1689, análisis de conformidad y hoja de ruta para que el sistema pase el primer filtro serio del mercado europeo.</p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">C</div>
              <h3 className="font-display text-xl text-ink mb-2">Medical Affairs · validación clínica</h3>
              <p className="text-ink-2 text-sm leading-relaxed">Encaje asistencial real con facultativos, diseño de evidencia clínica y rediseño de flujos. Lo que distingue un producto que se usa de uno que se mantiene archivado.</p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">D</div>
              <h3 className="font-display text-xl text-ink mb-2">Interoperabilidad sanitaria · EHDS</h3>
              <p className="text-ink-2 text-sm leading-relaxed">HL7 FHIR, SNOMED-CT, LOINC y preparación EHDS. Una solución que no habla con la HCE no es una solución, es un demo.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-rule pt-6 flex flex-wrap items-start gap-y-4 gap-x-6">
          <div className="eyebrow shrink-0">Sectores objetivo</div>
          <div className="flex flex-wrap gap-2">
            {['HealthTech','MedTech','Pharma Digital','MedDevice','Life Sciences','Innovación hospitalaria','CROs','Salud Digital','Digital Health'].map((s) => (
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
            title="Clinical AI Specialist · Independent Projects"
            context="Febrero 2025 – Presente · Madrid · Remoto"
            bullets={[
              'Diseño, desarrollo y validación de soluciones de Clinical AI con cumplimiento regulatorio europeo (EU AI Act · MDR · RGPD · EHDS) e integración en flujos clínicos reales.',
              'ClinAI Classifier (2026): herramienta open source que clasifica sistemas de IA sanitarios bajo el EU AI Act. Pipeline de dos etapas (LLM + motor de reglas estático con invariante de no-degradación). Genera informe PDF auditable. Demo en Hugging Face + repositorio público en GitHub.',
              'CDSS de estratificación de riesgo diabético (TFM, MSc IA Aplicada a Sanidad): Random Forest · AUC-ROC 0.942 · explicabilidad clínica XAI/SHAP · cumplimiento RGPD + EU AI Act + EHDS · desplegado en Hugging Face.',
              'Clasificación multiclase de riesgo metabólico sobre 253.680 registros reales (CDC BRFSS): pipeline completo con análisis de equidad algorítmica por subgrupos demográficos.',
              'Stack: Python · Scikit-learn · FastAPI · Streamlit · Claude API · Docker · Microsoft Azure. Marco regulatorio aplicado: EU AI Act · MDR · RGPD · EHDS · ISO 13485 · SaMD.'
            ]}
            metrics={[
              { value: '6 años', label: 'formación clínica' },
              { value: '2 MSc', label: 'IA + Salud Digital' },
              { value: 'EU AI Act', label: 'regulación' }
            ]}
          />

          <ExperienceItem
            icon="hospital"
            title="Médico Interno Rotatorio · Méderi (FirstAidKit Universitario Mayor)"
            context="Diciembre 2023 – Diciembre 2024 · Bogotá, Colombia"
            bullets={[
              '12 meses de práctica clínica continua en hospital universitario de tercer nivel: medicina interna, urgencias, pediatría, ginecología y obstetricia, neurología, psiquiatría y atención primaria.',
              'Gestión asistencial de más de 40 pacientes por turno en servicios de alta demanda. Coordinación de equipos clínicos de hasta 4 médicos.',
              'Diseño de protocolos asistenciales adoptados transversalmente en múltiples servicios — base aplicable a optimización de procesos mediante CDSS y Healthcare Data Analytics.',
              'Exposición directa a los puntos de fallo del sistema sanitario real: fragmentación de datos clínicos, ausencia de interoperabilidad y toma de decisiones sin CDSS operativos.'
            ]}
            metrics={[
              { value: '40+', label: 'pacientes/turno' },
              { value: 'MI · URG · AP', label: 'servicios' },
              { value: '3.er nivel', label: 'hospital' }
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
              <Globe weight="light" className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Criterio clínico real</h3>
            <p className="text-ink-2 text-sm">Formación médica de 6 años + práctica hospitalaria continua en urgencias, medicina interna y atención primaria. El criterio que permite cuestionar una solución de IA antes de implementarla, no después.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="150">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Shield weight="light" className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Marco regulatorio europeo</h3>
            <p className="text-ink-2 text-sm">EU AI Act, MDR, SaMD, ISO 13485, RGPD y EHDS. Clasificación y análisis de conformidad para que las decisiones sean sostenibles, no solo cumplibles.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Layout weight="light" className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Encaje asistencial real</h3>
            <p className="text-ink-2 text-sm">Identificación de puntos de fallo, rediseño de flujos asistenciales y gestión del cambio. Los algoritmos mejoran solos; los flujos clínicos no.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="250">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <ChatCenteredText weight="light" className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Traducción entre tres mundos</h3>
            <p className="text-ink-2 text-sm">El puente entre ingenieros, comité médico y compliance regulatorio. La misma conversación en tres idiomas distintos, sin perder rigor en ninguno.</p>
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
                  <span>A2 / B1</span>
                </div>
                <div className="w-full bg-ink/10 h-1">
                  <div className="bg-ink h-1" style={{ width: '45%' }} />
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
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-4">¿Buscas este perfil para tu equipo?</h2>
          <p className="text-muted mb-8">Disponible para roles senior en HealthTech, MedTech, Pharma Digital, MedDevice e innovación hospitalaria. Madrid · Remoto · Híbrido.</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up" data-aos-delay="100">
          <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ink">Descargar CV</a>
          <a href="/contacto" className="btn-ghost">Contactar</a>
          <a href="/posiciones" className="btn-ghost">Ver roles que me interesan</a>
        </div>
      </Section>
    </>
  )
}
