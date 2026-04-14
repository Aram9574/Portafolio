export const metadata = { 
  title: 'Sobre mí · Aram Zakzuk · Clinical AI Specialist',
  description: 'Médico con formación en IA aplicada a salud (CEMP) y Salud Digital (Universidad Europea). Experiencia clínica real combinada con ML, NLP y estándares FHIR/HL7.'
}

import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Globe, Code, Database, Layout, MessageSquare, Shield } from 'lucide-react'
import EducationSection from '@/components/sections/EducationSection'
import SkillsGrid from '@/components/sections/SkillsGrid'

import Image from 'next/image'

export default function SobreMiPage() {
  return (
    <>
      {/* Hero sobre mí */}
      <Section id="sobre-mi-hero" className="pt-24">
        <div className="grid md:grid-cols-3 items-center gap-20">
          <div className="w-full md:col-span-1 flex justify-center md:justify-start" data-aos="fade-right">
            <div className="w-[21rem] h-[21rem] md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-primary to-accent">
              <div className="w-full h-full rounded-full bg-surface overflow-hidden relative">
                <Image 
                  src="/images/profile.png" 
                  alt="Aram Zakzuk" 
                  fill 
                  sizes="(min-width: 768px) 384px, 100vw"
                  className="object-cover" 
                  priority
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2" data-aos="fade-left">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Sobre mí</h1>
            <p className="text-muted md:text-lg leading-relaxed">
              Médico con 6 años de práctica clínica real en entornos hospitalarios de alta demanda. Formación técnica avanzada en Machine Learning aplicado a medicina, NLP clínico, interoperabilidad sanitaria (FHIR · HL7 · SNOMED-CT) y regulación europea (RGPD · EU AI Act · EHDS · MDR).
              <br /><br />
              El perfil que el ecosistema HealthTech busca y rara vez encuentra: criterio clínico para validar soluciones de IA que otros no pueden cuestionar desde dentro, combinado con capacidad técnica para construirlas.
              <br /><br />
              Trabajo en consultoría HealthTech, Clinical AI e innovación en entornos hospitalarios y salud digital. Disponible en Madrid de forma presencial y en toda Europa de forma remota.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="200">
              <a href="/contacto" className="px-5 py-2 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition hover:-translate-y-1">Contactar</a>
              <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition hover:-translate-y-1">Ver CV</a>
            </div>
          </div>
        </div>
      </Section>

      



      {/* Educación y certificaciones */}
      <div className="pt-6 md:pt-10">
        <EducationSection />
      </div>

      {/* Habilidades agrupadas */}
      <Section id="habilidades" title="Habilidades">
        <SkillsGrid />
      </Section>

      
      {/* Fortalezas */}
      <Section id="fortalezas" title="Fortalezas">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6" data-aos="fade-up" data-aos-delay="100">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <Globe className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Traducción clínico-técnica</h3>
            <p className="text-muted text-sm">Puente entre necesidades médicas y soluciones técnicas, asegurando que los modelos respondan a problemas reales.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="150">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <Code className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Diseño de pipelines ML</h3>
            <p className="text-muted text-sm">Desde la extracción de datos hasta el despliegue, con foco en reproducibilidad y escalabilidad.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <Database className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interoperabilidad (HL7/FHIR)</h3>
            <p className="text-muted text-sm">Nivel básico-intermedio en estándares para intercambio de información clínica.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="250">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <Layout className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Desarrollo web con Django/DRF</h3>
            <p className="text-muted text-sm">Creación de aplicaciones y APIs para gestión de datos clínicos.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="300">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <MessageSquare className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comunicación científica</h3>
            <p className="text-muted text-sm">Explicación clara de conceptos técnicos a audiencias clínicas y viceversa.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="350">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <Shield className="text-emerald-400 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cumplimiento y ética</h3>
            <p className="text-muted text-sm">Visión general de RGPD, protección de datos y consideraciones éticas en IA clínica.</p>
          </Card>
        </div>
      </Section>

      {/* Lenguas y valores */}
      <Section id="lenguas-valores">
        <div className="grid md:grid-cols-2 gap-40">
          <div data-aos="fade-right">
            <h2 className="scroll-mt-24 text-3xl font-bold mb-6">Lenguas</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm text-muted">
                  <span>Español</span>
                  <span>Nativo</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full w-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm text-muted">
                  <span>Inglés</span>
                  <span>C1</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm text-muted">
                  <span>Francés</span>
                  <span>B2</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '70%' }} />
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="scroll-mt-24 text-3xl font-bold mb-6">Valores</h2>
            <ul className="space-y-3 text-muted">
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
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">¿Hablamos de una oportunidad?</h2>
          <p className="text-muted-foreground mb-8">Estaré encantado de conocer tu equipo y cómo puedo aportar valor.</p>
        </div>
        <div className="flex gap-3 justify-center" data-aos="fade-up" data-aos-delay="100">
          <a href="/contacto" className="px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition hover:-translate-y-1">Contactar</a>
          <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-emerald-400/50 text-emerald-400 hover:border-emerald-400 transition hover:-translate-y-1 hover:bg-emerald-400/10">Ver CV</a>
        </div>
      </Section>
    </>
  )
}
