import Section from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Metric from '@/components/ui/Metric';
import Testimonial from '@/components/ui/Testimonial';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/lib/data/projects';
import { services } from '@/lib/data/services';
import { publications } from '@/lib/data/publications';
import { testimonials } from '@/lib/data/testimonials';
import { Network, Settings, HeartPulse, Server, Activity, Brain, FileText, TrendingDown } from 'lucide-react';

export default function HomePage() {
  const destacados = projects.slice(0,3);
  return (
    <>
      <section id="home" className="pt-32 pb-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            De la bata al código. <span className="text-emerald-400">IA aplicada a la Sanidad.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Médico con especialización en IA aplicada a salud. Combino criterio clínico real con capacidad técnica en ML, NLP e interoperabilidad (FHIR/HL7) para trabajar en la intersección entre medicina y tecnología.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mb-10">
            <a href="/contacto" className="px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition">
              Contactar
            </a>
            <a href="/cv/CV_Alejandro_Zakzuk_2026.pdf" download className="px-6 py-3 rounded-lg border border-emerald-400/50 text-emerald-400 hover:border-emerald-400 transition">
              Descargar CV
            </a>
            <a href="#proyectos" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition">
              Ver proyectos
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-2 text-sm mt-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Network className="w-4 h-4 text-emerald-400" />
              HL7/FHIR
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Settings className="w-4 h-4 text-emerald-400" />
              MLOps
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <HeartPulse className="w-4 h-4 text-emerald-400" />
              Medicina Preventiva
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Server className="w-4 h-4 text-emerald-400" />
              Cloud y datos clínicos
            </span>
          </div>
        </div>
      </section>

      {/* Sobre (resumen clínico-tecnológico) */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Un perfil clínico con visión tecnológica</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            Soy médico especializado en Inteligencia Artificial aplicada a la sanidad. Mi experiencia integra el conocimiento clínico con la analítica avanzada de datos para diseñar soluciones que generan valor para pacientes, profesionales, cuidadores y entornos de salud digital.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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
          </div>
        </div>
      </section>

      <Section id="propuesta-valor">
        <h2 id="propuesta" className="scroll-mt-24 text-3xl font-bold mb-8 text-center">¿Por qué trabajar conmigo?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition">
            <Activity className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Del dato al impacto clínico</h3>
            <p className="text-sm text-gray-300">Transformo información médica en soluciones accionables que reducen tiempos, errores y costes.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition">
            <Network className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Interoperabilidad real, no teórica</h3>
            <p className="text-sm text-gray-300">Experiencia aplicando HL7/FHIR en entornos hospitalarios y residenciales, con métricas de mejora en eficiencia.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition">
            <Brain className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Modelos validados con rigor médico</h3>
            <p className="text-sm text-gray-300">Prototipos de IA con métricas claras (AUC, sensibilidad, especificidad) para decisiones de confianza.</p>
          </div>
        </div>
      </Section>

      <Section id="proyectos" title="Proyectos destacados" subtitle="Casos reales con problema → solución → impacto.">
        <div className="grid md:grid-cols-3 gap-6">
          {destacados.map(p => (
            <ProjectCard key={p.slug}
              title={p.title} context={p.context} solution={p.solution} impact={p.impact}
              tags={p.tags} cover={p.cover} href={`/proyectos/${p.slug}`} />
          ))}
        </div>
        <div className="mt-8">
          <a href="/proyectos" className="text-emerald-400 hover:underline">Ver todos los proyectos →</a>
        </div>
      </Section>

      <Section id="lo-que-aporto" title="Lo que aporto" subtitle="Valor diferencial en la intersección de salud y tecnología.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="font-bold text-emerald-400 mb-2">Criterio clínico para validar IA</h3>
            <p className="text-sm text-gray-400">Más de 6 años de práctica hospitalaria real. Entiendo el problema antes de diseñar la solución.</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="font-bold text-emerald-400 mb-2">Pipeline técnico completo</h3>
            <p className="text-sm text-gray-400">Desde la pregunta clínica hasta el modelo desplegado: Python, ML, NLP, XAI/SHAP, FHIR.</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="font-bold text-emerald-400 mb-2">Marco regulatorio europeo</h3>
            <p className="text-sm text-gray-400">RGPD, EU AI Act, EHDS. No como checklist, sino como parte del diseño desde el inicio.</p>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="font-bold text-emerald-400 mb-2">Disponibilidad inmediata en Madrid</h3>
            <p className="text-sm text-gray-400">Buscando incorporación a equipo en consultoría, pharma, healthtech o innovación hospitalaria.</p>
          </div>
        </div>
      </Section>

      

      <Section id="publicaciones" title="Publicaciones y divulgación">
        <div className="grid md:grid-cols-3 gap-6">
          {publications.slice(0,3).map(p => (
            <Card key={p.id}>
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{p.type} · {p.venue} · {p.year}</div>
              {Array.isArray(p.tags) && (
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {p.tags.map((t:string) => (
                    <span key={t} className="px-2 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
                  ))}
                </div>
              )}
              <a href={p.link} className="mt-3 inline-block text-emerald-400 hover:underline">Ver →</a>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <a href="/publicaciones" className="text-emerald-400 hover:underline">Ver todas →</a>
        </div>
      </Section>

      {testimonials && testimonials.length >= 2 && (
        <Section id="testimonios" title="Testimonios">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0,3).map(t => (
              <Testimonial key={t.name} quote={t.quote} name={t.name} role={t.role} />
            ))}
          </div>
        </Section>
      )}

      

      <Section id="cta" title="¿Quieres hablar sobre una oportunidad?" subtitle="">
        <div className="flex gap-3">
          <a href="/contacto" className="px-5 py-2 rounded-full bg-emerald-500/90 text-black font-medium">Escríbeme</a>
          <a href="/cv/CV_Alejandro_Zakzuk_2026.pdf" download className="px-5 py-2 rounded-full border border-white/10">Descargar CV</a>
        </div>
      </Section>
    </>
  );
}
