export const metadata = {
  title: 'Sobre mí · Clinical AI Specialist',
  description: 'Médico con 6,5 años de práctica clínica en Méderi (Colombia) + Clinical AI Specialist. CDSS, SaMD, EU AI Act, HL7 FHIR, XAI/SHAP. Másters en IA aplicada a Sanidad (CEMP) y Salud Digital (Universidad Europea).'
}

import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Globe, Code, Database, Layout, MessageSquare, Shield } from 'lucide-react'
import EducationSection from '@/components/sections/EducationSection'
import ExperienceItem from '@/components/sections/ExperienceItem'
import { Brain, Network, Microscope } from 'lucide-react'

import Image from 'next/image'

export default function SobreMiPage() {
  return (
    <>
      {/* Hero sobre mí */}
      <Section id="sobre-mi-hero" className="pt-24">
        <div className="grid md:grid-cols-3 items-center gap-20">
          <div className="w-full md:col-span-1 flex justify-center md:justify-start" data-aos="fade-right">
            <div className="w-[21rem] h-[21rem] md:w-96 md:h-96 border border-rule bg-paper overflow-hidden relative">
              <Image
                src="/images/profile-2026.png"
                alt="Aram Zakzuk · Clinical AI Specialist"
                fill
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-2" data-aos="fade-left">
            <h1 className="font-display text-4xl md:text-5xl text-ink mb-6">Sobre mí</h1>
            <p className="text-ink-2 md:text-lg leading-relaxed">
              Médico con 6,5 años de práctica clínica continua en Méderi (Colombia · 2018–2024) — urgencias, medicina interna y atención primaria. Más de 40 pacientes por turno.
              <br /><br />
              Hoy diseño CDSS y Software as a Medical Device (SaMD) bajo EU AI Act, MDR, RGPD y EHDS, con interoperabilidad HL7 FHIR · SNOMED-CT · LOINC y explicabilidad XAI/SHAP. Modelos desplegados con resultados verificables: AUC-ROC 0,942 sobre 253.680 registros reales del CDC.
              <br /><br />
              Consulta disponible para HealthTech, MedTech y equipos de Medical Affairs. Madrid presencial · Europa remoto.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="200">
              <a href="/contacto" className="btn-ink">Contactar</a>
              <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver CV</a>
            </div>
          </div>
        </div>
      </Section>



      {/* Experiencia destacada */}
      <Section id="experiencia-destacada" title="Experiencia">
        <div className="space-y-8">
          <ExperienceItem
            icon="lab"
            title="Clinical AI Consultant & Developer · Autónomo"
            context="Enero 2025 - Presente · HealthTech · Remoto"
            bullets={[
              'CDSS estratificación de riesgo diabético (TFM): Random Forest · AUC-ROC 0.942 · XAI/SHAP · desplegado en Hugging Face · RGPD + EU AI Act + EHDS.',
              'Clasificación multiclase de riesgo metabólico sobre 253.680 registros reales del CDC BRFSS con análisis de equidad por subgrupos demográficos.',
              'ClinAI Classifier: herramienta open source que clasifica sistemas de IA sanitarios bajo el EU AI Act (demo en Hugging Face).',
              'Stack: Python · Scikit-learn · XAI/SHAP · NLP clínico · SQL · Azure · Streamlit · FastAPI.'
            ]}
            metrics={[
              { value: '0.942', label: 'AUC-ROC' },
              { value: 'EU AI Act', label: 'Compliance' },
              { value: '253K', label: 'Registros CDC' }
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
              { value: '6.5 años', label: 'Experiencia' },
              { value: '40+', label: 'Pacientes/turno' },
              { value: 'MI · URG · AP', label: 'Servicios' }
            ]}
          />
        </div>
      </Section>
      <div className="pt-6 md:pt-10">
        <EducationSection />
      </div>

      {/* Fortalezas */}
      <Section id="fortalezas" title="Fortalezas">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6" data-aos="fade-up" data-aos-delay="100">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Globe className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Criterio clínico real</h3>
            <p className="text-ink-2 text-sm">6,5 años de práctica en urgencias, medicina interna y atención primaria. Los modelos se diseñan desde el flujo clínico, no desde el dataset.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="150">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Code className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Pipelines de CDSS</h3>
            <p className="text-ink-2 text-sm">Desarrollo end-to-end de CDSS con Python, Scikit-learn y XAI/SHAP. Desde la pregunta clínica hasta el modelo desplegado en Hugging Face.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Database className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Interoperabilidad HL7 FHIR</h3>
            <p className="text-ink-2 text-sm">HL7 FHIR R4 con mapeo SNOMED-CT y LOINC. Certificado SNOMED International (2025).</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="250">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Shield className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Regulación europea</h3>
            <p className="text-ink-2 text-sm">EU AI Act · MDR · ISO 13485 · SaMD · Marcado CE · RGPD · EHDS como restricciones de diseño desde el día uno.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="300">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <MessageSquare className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Traducción clínico-técnica</h3>
            <p className="text-ink-2 text-sm">Puente entre equipos clínicos y técnicos. Explicabilidad XAI/SHAP traducida al criterio del facultativo que la va a usar.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="350">
            <div className="w-12 h-12 mb-4 border border-rule bg-bone flex items-center justify-center">
              <Layout className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">Cloud clínico y despliegue</h3>
            <p className="text-ink-2 text-sm">Microsoft Azure (Azure Data Fundamentals), FastAPI, Streamlit, Docker, Hugging Face Spaces para CDSS interactivos.</p>
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
        <div className="flex gap-3 justify-center" data-aos="fade-up" data-aos-delay="100">
          <a href="/contacto#agenda" className="btn-ink">Reservar llamada</a>
          <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver CV</a>
        </div>
      </Section>
    </>
  )
}
