export const metadata = { title: 'Sobre mí' }

import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Globe, Code, Database, Layout, MessageSquare, Shield, Network, Brain, FileText, TrendingDown } from 'lucide-react'
import EducationSection from '@/components/sections/EducationSection'
import SkillsGrid from '@/components/sections/SkillsGrid'

export default function SobreMiPage() {
  return (
    <>
      {/* Hero sobre mí */}
      <Section id="sobre-mi-hero" className="pt-24">
        <div className="grid md:grid-cols-3 items-center gap-20">
          <div className="w-full md:col-span-1 flex justify-center md:justify-start" data-aos="fade-right">
            <div className="w-[21rem] h-[21rem] md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-primary to-accent">
              <div className="w-full h-full rounded-full bg-surface overflow-hidden">
                <img src="/images/profile.jpg" alt="Alejandro Zakzuk" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="md:col-span-2" data-aos="fade-left">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Sobre mí</h1>
            <p className="text-muted md:text-lg leading-relaxed">
              Soy Alejandro Zakzuk, médico con vocación clínica y visión tecnológica. Desde el inicio de mi carrera comprendí que la medicina por sí sola no basta para enfrentar los grandes retos de los sistemas de salud, como la saturación hospitalaria, la falta de interoperabilidad y el desperdicio de datos que podrían mejorar la atención y salvar vidas.
              <br /><br />
              Mi respuesta a ese desafío fue especializarme en inteligencia artificial aplicada a la salud, uniendo la rigurosidad médica con la fuerza de la ciencia de datos. Esta doble mirada, clínica y tecnológica, me permite transformar la complejidad de los flujos hospitalarios en modelos predictivos, plataformas digitales e iniciativas de interoperabilidad que generan valor real para pacientes, profesionales y gestores. He trabajado en proyectos que abarcan desde la predicción de ocupación hospitalaria hasta el desarrollo de un sistema de gestión para residencias de mayores basado en estándares internacionales.
              <br /><br />
              Mi propósito es ser un puente entre la medicina y la tecnología. Aspiro a liderar proyectos que impulsen la innovación en salud digital con visión estratégica, ética y centrada en el paciente. Creo en un futuro donde la inteligencia artificial no sustituya al profesional, sino que amplifique su capacidad de decisión y haga posible una atención más humana, precisa y cercana.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contacto" className="px-5 py-2 rounded-lg border border-white/10">Contactar</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Sobre (resumen clínico-tecnológico) */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Un perfil clínico con visión tecnológica</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            Soy médico con especialización en Inteligencia Artificial aplicada a la Sanidad. Mi experiencia combina el conocimiento clínico con la analítica avanzada de datos para diseñar soluciones de impacto en hospitales, residencias y entornos de salud digital.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition">
              <Brain className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-emerald-400 mb-2">+10</div>
              <p className="text-sm text-gray-300">Modelos diseñados para problemas clínicos reales</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition">
              <Network className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
              <div className="text-xl font-bold text-emerald-400 mb-2">HL7/FHIR</div>
              <p className="text-sm text-gray-300">Integración aplicada en ERP</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition">
              <FileText className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-emerald-400 mb-2">+5</div>
              <p className="text-sm text-gray-300">Aportes en IA clínica</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition">
              <TrendingDown className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-emerald-400 mb-2">-38%</div>
              <p className="text-sm text-gray-300">Menos tiempo de registro en MVP real</p>
            </div>
          </div>
        </div>
      </section>



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
              <Globe className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Traducción clínico-técnica</h3>
            <p className="text-muted text-sm">Puente entre necesidades médicas y soluciones técnicas, asegurando que los modelos respondan a problemas reales.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="150">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <Code className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Diseño de pipelines ML</h3>
            <p className="text-muted text-sm">Desde la extracción de datos hasta el despliegue, con foco en reproducibilidad y escalabilidad.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <Database className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interoperabilidad (HL7/FHIR)</h3>
            <p className="text-muted text-sm">Nivel básico-intermedio en estándares para intercambio de información clínica.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="250">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <Layout className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Desarrollo web con Django/DRF</h3>
            <p className="text-muted text-sm">Creación de aplicaciones y APIs para gestión de datos clínicos.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="300">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <MessageSquare className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comunicación científica</h3>
            <p className="text-muted text-sm">Explicación clara de conceptos técnicos a audiencias clínicas y viceversa.</p>
          </Card>
          <Card className="p-6" data-aos="fade-up" data-aos-delay="350">
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-400/10 flex items-center justify-center">
              <Shield className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cumplimiento y ética</h3>
            <p className="text-muted text-sm">Visión general de RGPD, protección de datos y consideraciones éticas en IA clínica.</p>
          </Card>
        </div>
      </Section>

      {/* Lenguas y valores */}
      <Section id="lenguas-valores">
        <div className="grid md:grid-cols-2 gap-12">
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
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">¿Colaboramos?</h2>
          <p className="text-muted-foreground mb-8">Cuéntame tu reto clínico u operativo.</p>
        </div>
        <div className="flex gap-3 justify-center">
          <a href="/contacto" className="px-5 py-2 rounded-full bg-emerald-500/90 text-black font-medium">Escríbeme</a>
          <a href="/contacto#agenda" className="px-5 py-2 rounded-full border border-white/10">Agenda 15’</a>
        </div>
      </Section>
    </>
  )
}
