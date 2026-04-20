import Section from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Metric from '@/components/ui/Metric';
import Testimonial from '@/components/ui/Testimonial';
import ProjectBento from '@/components/sections/ProjectBento';
import Newsletter from '@/components/sections/Newsletter';
import { projects } from '@/lib/data/projects';
import { services } from '@/lib/data/services';
import { publications } from '@/lib/data/publications';
import { testimonials } from '@/lib/data/testimonials';
import { Network, Settings, Server, Brain, Stethoscope, ShieldCheck, LineChart, Code2, Database, Cpu, Activity, Workflow } from 'lucide-react';

export default function HomePage() {
  const destacados = projects.slice(0,3);
  return (
    <>
      {/* HERO — asimétrico, editorial, col-span 5/7 */}
      <section id="home" className="pt-20 pb-28 rule-b">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 items-end">

            {/* Columna izquierda: metadatos editoriales */}
            <aside className="col-span-12 md:col-span-4 lg:col-span-3 space-y-6 md:border-r md:border-ink md:pr-8 md:self-stretch md:pb-4">
              <div className="eyebrow">№ 01 / Portafolio · 2026</div>
              <div className="caption leading-relaxed">
                Madrid · Europa<br />
                Consulta disponible Q2 2026
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <a href="/contacto" className="btn-ink">Contactar →</a>
                <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">Descargar CV</a>
              </div>
            </aside>

            {/* Columna derecha: título display */}
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <h1 className="display-xl word-reveal">
                <span style={{ animationDelay: '0ms' }}>Clinical</span>{' '}
                <span style={{ animationDelay: '100ms' }}>
                  <span className="hl-accent">AI</span>
                </span>
                <br />
                <span style={{ animationDelay: '200ms' }}>que sobrevive</span>
                <br />
                <span style={{ animationDelay: '300ms' }} className="italic">al hospital</span>{' '}
                <span style={{ animationDelay: '400ms' }}>real.</span>
              </h1>
            </div>

            {/* Pie: lead + chips sobre regla */}
            <div className="col-span-12 pt-10 md:pt-16 rule-t grid grid-cols-12 gap-y-8 md:gap-x-8">
              <p className="col-span-12 md:col-span-7 lead" data-aos="fade-up">
                Médico con 6,5 años de práctica clínica real + Clinical AI Specialist. Diseño CDSS y Software as a Medical Device (SaMD) bajo <span className="font-mono text-sm">EU AI Act · MDR · RGPD · EHDS</span>, con interoperabilidad HL7 FHIR y explicabilidad XAI/SHAP. El perfil que el ecosistema HealthTech europeo busca y rara vez encuentra.
              </p>
              <div className="col-span-12 md:col-span-5 md:border-l md:border-ink md:pl-8 flex flex-wrap gap-2 content-start">
                <span className="chip-ed"><Stethoscope aria-hidden /> Médico · 6,5a</span>
                <span className="chip-ed"><Brain aria-hidden /> CDSS</span>
                <span className="chip-ed"><Settings aria-hidden /> SaMD</span>
                <span className="chip-ed"><Server aria-hidden /> EU AI Act</span>
                <span className="chip-ed"><ShieldCheck aria-hidden /> MDR · ISO 13485</span>
                <span className="chip-ed"><Network aria-hidden /> HL7 FHIR</span>
                <span className="chip-ed"><Database aria-hidden /> SNOMED-CT · LOINC</span>
                <span className="chip-ed"><Cpu aria-hidden /> Machine Learning</span>
                <span className="chip-ed"><LineChart aria-hidden /> XAI / SHAP</span>
                <span className="chip-ed"><Code2 aria-hidden /> Python</span>
                <span className="chip-ed"><Activity aria-hidden /> NLP clínico</span>
                <span className="chip-ed"><Workflow aria-hidden /> Azure</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Section id="proyectos" index="№ 04 — Proyectos" title="Casos de estudio seleccionados" subtitle="De la pregunta clínica a la solución técnica. Cada proyecto documenta un hospital, un dataset, una métrica y una decisión regulatoria.">
        <ProjectBento projects={destacados} />

        <div className="mt-12">
          <a href="/proyectos" className="ed-link font-mono text-sm uppercase tracking-widest">Índice completo de proyectos →</a>
        </div>
      </Section>

      {/* SOBRE — editorial con métricas display grandes */}
      <section id="about" className="py-24 rule-b">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-8 mb-20">
            <div className="col-span-12 md:col-span-3">
              <div className="section-index">№ 02 — Perfil</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display-l mb-6">Ejerzo la medicina.<br /><span className="italic">Construyo</span> software.</h2>
              <p className="lead">
                Trabajo en la intersección exacta para traducir registros clínicos en sistemas de decisión. Reduzco latencia, coste y error humano — con responsabilidad regulatoria.
              </p>
            </div>
          </div>

          {/* Métricas display: tipografía XXL, tabular, asimétrica */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-8 mb-24">
            <div className="col-span-12 md:col-span-5 md:col-start-1 border-t border-ink pt-6">
              <div className="eyebrow mb-4">CDSS en producción</div>
              <div className="metric-numeral font-display">0.942</div>
              <p className="caption mt-3">AUC-ROC en estratificación de riesgo diabético (TFM · 253K registros CDC · XAI/SHAP).</p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-7 border-t border-ink pt-6">
              <div className="eyebrow mb-4">Práctica clínica</div>
              <div className="metric-numeral font-display">6,5<span className="text-muted">a</span></div>
              <p className="caption mt-3">En urgencias, medicina interna y atención primaria (Méderi · 2018–2024).</p>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-3 border-t border-ink pt-6">
              <div className="eyebrow mb-4">Regulación</div>
              <div className="metric-numeral font-display italic">EU AI Act</div>
              <p className="caption mt-3">RGPD · EHDS · MDR · ISO 13485 · SaMD · Marcado CE como restricciones de diseño.</p>
            </div>
          </div>

          {/* Valor diferencial — cuatro columnas con regla superior, sin cards */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-8">
            <div className="col-span-12 md:col-span-4">
              <div className="section-index">№ 03 — Tesis</div>
              <h3 className="display-m mt-4">El valor<br /> diferencial.</h3>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">01 · Criterio</div>
                <h4 className="display-m text-xl mb-2">Criterio clínico para validar IA</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>Arquitectura respaldada por precisión estadística y lógica médica irrefutable tras 6 años de práctica real.</p>
              </div>
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">02 · Pipeline</div>
                <h4 className="display-m text-xl mb-2">Pipeline técnico completo</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>Desde extracción de datos hasta modelo desplegado. Python · ML · NLP · XAI/SHAP.</p>
              </div>
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">03 · Producción</div>
                <h4 className="display-m text-xl mb-2">Interoperabilidad real</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>Estándares HL7 y FHIR conectando hardware y software bajo presión hospitalaria real.</p>
              </div>
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">04 · Regulación</div>
                <h4 className="display-m text-xl mb-2">Marco regulatorio europeo</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>RGPD · EU AI Act · EHDS. Restricciones de diseño desde el día 1, no checklist legal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <Section id="publicaciones" index="№ 05 — Publicaciones" title="Publicaciones y divulgación">
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
                <a href={p.link} className="mt-3 inline-block ed-link font-mono text-xs uppercase tracking-widest">Leer →</a>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-8" data-aos="fade-in" data-aos-delay="400">
          <a href="/publicaciones" className="ed-link font-mono text-sm uppercase tracking-widest">Archivo completo →</a>
        </div>
      </Section>

      {testimonials && testimonials.length > 0 && (
        <Section id="testimonios" index="№ 06 — Testimonios" title="Voces">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <div data-aos="zoom-in-up" data-aos-delay={150 * (index + 1)} key={t.name + index}>
                <Testimonial quote={t.quote} name={t.name} role={t.role} />
              </div>
            ))}
          </div>
        </Section>
      )}

      <Newsletter />

      
      {/* CTA final — asimétrico, sin card */}
      <section id="cta" className="py-28">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 items-end">
            <div className="col-span-12 md:col-span-3">
              <div className="section-index">№ 07 — Contacto</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display-xl">
                ¿Necesitas <span className="italic"><span className="hl-accent">Clinical AI</span></span><br />con criterio médico real?
              </h2>
              <p className="lead mt-6 max-w-2xl">
                Líderes de innovación, CEOs HealthTech y equipos de Medical Affairs: reserva 15 minutos para revisar el caso de uso, el dato y el encaje regulatorio.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/contacto#agenda" className="btn-ink">Reservar llamada de 15 min →</a>
                <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">Descargar CV · PDF</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
