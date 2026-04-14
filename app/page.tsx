import Section from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Metric from '@/components/ui/Metric';
import Testimonial from '@/components/ui/Testimonial';
import ProjectCard from '@/components/sections/ProjectCard';
import ProjectBento from '@/components/sections/ProjectBento';
import LeadMagnet from '@/components/sections/LeadMagnet';
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            De la bata al código. <span className="text-emerald-400">IA aplicada a la Sanidad.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            Médico con especialización en IA aplicada a salud. Combino criterio clínico real con capacidad técnica en ML, NLP e interoperabilidad (FHIR/HL7) para trabajar en la intersección entre medicina y tecnología.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mb-10" data-aos="fade-up" data-aos-delay="200">
            <a href="/contacto" className="px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition">
              Contactar
            </a>
            <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-emerald-400/50 text-emerald-400 hover:border-emerald-400 transition">
              Ver CV
            </a>
            <a href="#proyectos" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition">
              Ver proyectos
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-2 text-sm mt-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:border-emerald-400/50 hover:text-emerald-400 hover:-translate-y-0.5 transition cursor-default" data-aos="zoom-in" data-aos-delay="300">
              <Network className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              HL7/FHIR
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:border-emerald-400/50 hover:text-emerald-400 hover:-translate-y-0.5 transition cursor-default" data-aos="zoom-in" data-aos-delay="400">
              <Settings className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              MLOps
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:border-emerald-400/50 hover:text-emerald-400 hover:-translate-y-0.5 transition cursor-default" data-aos="zoom-in" data-aos-delay="500">
              <HeartPulse className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Medicina Preventiva
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:border-emerald-400/50 hover:text-emerald-400 hover:-translate-y-0.5 transition cursor-default" data-aos="zoom-in" data-aos-delay="600">
              <Server className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Cloud y datos clínicos
            </span>
          </div>
        </div>
      </section>

      <Section id="proyectos" title="Proyectos destacados" subtitle="Casos reales. De la pregunta clínica a la solución técnica.">
        <ProjectBento projects={destacados} />
        
        <div className="mt-8 text-center" data-aos="fade-in" data-aos-delay="400">
          <a href="/proyectos" className="text-emerald-400 hover:underline">Ver todos los proyectos →</a>
        </div>
      </Section>

      {/* Sobre (resumen clínico-tecnológico) fusionado con propuesta de valor */}
      <section id="about" className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Un perfil clínico con visión tecnológica</h2>
            <p className="text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Ejerzo la medicina y construyo software. Trabajo en la intersección exacta para traducir los registros clínicos en sistemas de decisión. Reduzco la latencia, el coste y el error humano.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-16 text-center">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition" data-aos="fade-up" data-aos-delay="200">
              <Brain className="w-6 h-6 text-emerald-400 mx-auto mb-3" aria-hidden="true" />
              <div className="text-2xl font-bold text-emerald-400 mb-2">+10</div>
              <p className="text-sm text-gray-300">Modelos diseñados para problemas clínicos reales</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition" data-aos="fade-up" data-aos-delay="300">
              <Network className="w-6 h-6 text-emerald-400 mx-auto mb-3" aria-hidden="true" />
              <div className="text-xl font-bold text-emerald-400 mb-2">HL7/FHIR</div>
              <p className="text-sm text-gray-300">Integración aplicada en ERP hospitalario</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition" data-aos="fade-up" data-aos-delay="400">
              <FileText className="w-6 h-6 text-emerald-400 mx-auto mb-3" aria-hidden="true" />
              <div className="text-2xl font-bold text-emerald-400 mb-2">+5</div>
              <p className="text-sm text-gray-300">Aportes en investigación médica e IA</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-center" data-aos="fade-up">El valor diferencial</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 rounded-xl border border-white/10 bg-black/20" data-aos="zoom-in" data-aos-delay="100">
              <Activity className="w-6 h-6 text-emerald-400 mb-3" aria-hidden="true" />
              <h4 className="font-bold text-white mb-2">Criterio clínico para validar IA</h4>
              <p className="text-sm text-gray-400">Construyo arquitectura respaldada por precisión estadística y lógica médica irrefutable tras 6 años de práctica real.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-black/20" data-aos="zoom-in" data-aos-delay="200">
              <Settings className="w-6 h-6 text-emerald-400 mb-3" aria-hidden="true" />
              <h4 className="font-bold text-white mb-2">Pipeline técnico completo</h4>
              <p className="text-sm text-gray-400">Desde la extracción de datos hasta el modelo desplegado: Python, ML, NLP, XAI/SHAP.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-black/20" data-aos="zoom-in" data-aos-delay="300">
              <Network className="w-6 h-6 text-emerald-400 mb-3" aria-hidden="true" />
              <h4 className="font-bold text-white mb-2">Interoperabilidad en producción</h4>
              <p className="text-sm text-gray-400">Implemento estándares HL7 y FHIR conectando hardware y software bajo presiones hospitalarias y operativas.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-black/20" data-aos="zoom-in" data-aos-delay="400">
              <FileText className="w-6 h-6 text-emerald-400 mb-3" aria-hidden="true" />
              <h4 className="font-bold text-white mb-2">Marco regulatorio europeo</h4>
              <p className="text-sm text-gray-400">RGPD, EU AI Act, EHDS. Aplicados no como checklist legal, sino como restricciones de diseño desde el día 1.</p>
            </div>
          </div>
        </div>
      </section>

      

      <Section id="publicaciones" title="Publicaciones y divulgación">
        <div className="grid md:grid-cols-3 gap-6">
          {publications.slice(0,3).map((p, i) => (
            <div data-aos="fade-up" data-aos-delay={100 * (i + 1)} key={p.id}>
              <Card>
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
            </div>
          ))}
        </div>
        <div className="mt-8" data-aos="fade-in" data-aos-delay="400">
          <a href="/publicaciones" className="text-emerald-400 hover:underline">Ver todas →</a>
        </div>
      </Section>

      {testimonials && testimonials.length > 0 && (
        <Section id="testimonios" title="Testimonios">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <div data-aos="zoom-in-up" data-aos-delay={150 * (index + 1)} key={t.name + index}>
                <Testimonial quote={t.quote} name={t.name} role={t.role} />
              </div>
            ))}
          </div>
        </Section>
      )}

      <LeadMagnet />

      
      <Section id="cta" title="¿Hablamos de una oportunidad?" subtitle="">
        <div className="flex gap-3 justify-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <a href="/contacto" className="px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition hover:-translate-y-1">Contactar</a>
          <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-emerald-400/50 text-emerald-400 hover:border-emerald-400 transition hover:-translate-y-1 hover:bg-emerald-400/10">Ver CV</a>
        </div>
      </Section>
    </>
  );
}
