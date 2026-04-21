import Section from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Metric from '@/components/ui/Metric';
import Testimonial from '@/components/ui/Testimonial';
import ProjectBento from '@/components/sections/ProjectBento';
import Newsletter from '@/components/sections/Newsletter';
import InsightsMetrics from '@/components/sections/InsightsMetrics';
import CVDownloader from '@/components/ui/CVDownloader';
import { projects } from '@/lib/data/projects';
import { services } from '@/lib/data/services';
import { publications } from '@/lib/data/publications';
import { testimonials } from '@/lib/data/testimonials';
import { blogPosts } from '@/lib/data/blog';
import { SOCIAL } from '@/lib/site';
import { Network, Server, Brain, Stethoscope, ShieldCheck, LineChart, Cpu, Workflow, HeartPulse, BadgeCheck } from 'lucide-react';

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
                Madrid · España
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <a href="/contacto" className="btn-ink">Contactar →</a>
                <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">Descargar CV</a>
              </div>
            </aside>

            {/* Columna derecha: título display */}
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <h1 className="display-xl word-reveal">
                <span style={{ animationDelay: '0ms' }}>Medicina,</span>{' '}
                <span style={{ animationDelay: '100ms' }} className="italic">Salud Digital</span>
                <br />
                <span style={{ animationDelay: '200ms' }}>e</span>{' '}
                <span style={{ animationDelay: '300ms' }}>
                  <span className="hl-accent">IA en Sanidad</span>.
                </span>
                <br />
                <span style={{ animationDelay: '400ms' }}>Un perfil, tres capas.</span>
              </h1>
            </div>

            {/* Pie: lead + chips sobre regla */}
            <div className="col-span-12 pt-10 md:pt-16 rule-t grid grid-cols-12 gap-y-8 md:gap-x-8">
              <p className="col-span-12 md:col-span-7 lead" data-aos="fade-up">
                Médico (Universidad del Rosario, 6,5 años hospital) + Máster en Salud Digital / eHealth (Universidad Europea) + Máster en IA aplicada a Sanidad (CEMP). Asesoramiento estratégico para la transformación digital del sistema sanitario: licitaciones públicas, EHDS, Medical Affairs y despliegue de IA clínica con criterio médico real.
              </p>
              <div className="col-span-12 md:col-span-5 md:border-l md:border-ink md:pl-8 flex flex-col gap-5 content-start">
                <div>
                  <div className="eyebrow mb-2">Medicina</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip-ed"><Stethoscope aria-hidden /> Médico · 6,5a</span>
                    <span className="chip-ed"><HeartPulse aria-hidden /> MI · URG · AP</span>
                  </div>
                </div>
                <div>
                  <div className="eyebrow mb-2">Salud Digital</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip-ed"><Server aria-hidden /> EHDS</span>
                    <span className="chip-ed"><ShieldCheck aria-hidden /> EU AI Act · MDR</span>
                    <span className="chip-ed"><Network aria-hidden /> HL7 FHIR</span>
                    <span className="chip-ed"><Workflow aria-hidden /> Transformación digital</span>
                  </div>
                </div>
                <div>
                  <div className="eyebrow mb-2">IA aplicada a Sanidad</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip-ed"><Brain aria-hidden /> CDSS · SaMD</span>
                    <span className="chip-ed"><LineChart aria-hidden /> XAI / SHAP</span>
                    <span className="chip-ed"><Cpu aria-hidden /> Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Barra de prueba social — credibilidad verificable bajo el hero */}
      <section aria-label="Prueba social verificable" className="rule-t rule-b py-5">
        <div className="container">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 md:gap-y-0 font-mono text-xs uppercase tracking-widest text-ink-2">
            <li className="flex items-center gap-2 md:border-r md:border-rule md:pr-6">
              <BadgeCheck className="w-4 h-4 text-ink shrink-0" aria-hidden />
              <span>Verificado en LinkedIn</span>
            </li>
            <li className="md:border-r md:border-rule md:px-6">
              2.000+ seguidores en LinkedIn
            </li>
            <li className="md:border-r md:border-rule md:px-6">
              Publicaciones con 7.800+ impresiones
            </li>
            <li className="md:pl-6 flex items-center justify-between gap-3">
              <span className="truncate">Stanford · SNOMED · Microsoft · CM</span>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-link shrink-0 normal-case tracking-normal text-[0.7rem]"
                aria-label="Abrir perfil de LinkedIn"
              >
                Perfil →
              </a>
            </li>
          </ul>
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
              <h2 className="display-l mb-6">Un perfil.<br /><span className="italic">Tres capas.</span></h2>
              <p className="lead">
                Criterio médico, visión estratégica de salud digital y capacidad técnica en IA aplicada a sanidad. Asesoro a hospitales, consultoras y administración pública en la transformación del sistema sanitario — del expediente electrónico al EHDS, de la política regulatoria al despliegue real.
              </p>
            </div>
          </div>

          {/* Métricas display: tres capas de la triada */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-8 mb-24">
            <div className="col-span-12 md:col-span-4 border-t border-ink pt-6">
              <div className="eyebrow mb-4">Medicina</div>
              <div className="metric-numeral font-display">6,5<span className="text-muted">a</span></div>
              <p className="caption mt-3">Práctica clínica continua en urgencias, medicina interna y atención primaria (Méderi · 2018–2024).</p>
            </div>
            <div className="col-span-12 md:col-span-4 border-t border-ink pt-6">
              <div className="eyebrow mb-4">Salud Digital</div>
              <div className="metric-numeral font-display italic">MSc</div>
              <p className="caption mt-3">Máster en Salud Digital / eHealth (Universidad Europea). Transformación digital sanitaria, EHDS y gestión de proyectos.</p>
            </div>
            <div className="col-span-12 md:col-span-4 border-t border-ink pt-6">
              <div className="eyebrow mb-4">IA en Sanidad</div>
              <div className="metric-numeral font-display">MSc</div>
              <p className="caption mt-3">Máster en IA aplicada a Sanidad (CEMP) + Stanford AI in Healthcare. TFM: CDSS con AUC-ROC 0,942.</p>
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
                <h4 className="display-m text-xl mb-2">Criterio médico ejecutivo</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>6,5 años en el sistema asistencial real. Entiendo el flujo clínico desde dentro y lo traduzco a dirección, comité médico y comprador público.</p>
              </div>
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">02 · Estrategia</div>
                <h4 className="display-m text-xl mb-2">Visión de Salud Digital</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>Transformación digital sanitaria, interoperabilidad, EHDS, licitaciones públicas y fondos europeos. Roadmap clínico-tecnológico con métricas de impacto.</p>
              </div>
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">03 · Regulación</div>
                <h4 className="display-m text-xl mb-2">Marco regulatorio europeo</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>EU AI Act · MDR · ISO 13485 · SaMD · RGPD · EHDS. Restricciones de diseño y auditoría regulatoria desde el día uno.</p>
              </div>
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">04 · Ejecución</div>
                <h4 className="display-m text-xl mb-2">IA aplicada con rigor técnico</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>CDSS, XAI/SHAP, HL7 FHIR y Machine Learning como capa de ejecución. El código existe para respaldar la decisión estratégica, no al revés.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <Section id="publicaciones" index="№ 05 — Insights" title="Insights y publicaciones">
        <InsightsMetrics />
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

      <Section id="blog" index="№ 06 — Blog" title="Notas editoriales" subtitle="Análisis ejecutivo y técnico sobre EHDS, EU AI Act, CDSS y transformación digital sanitaria. Publicación nueva cada lunes.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-2 border-ink">
          {blogPosts.slice(0, 4).map((post, i) => (
            <article
              key={post.slug}
              data-aos="fade-up"
              data-aos-delay={100 * (i + 1)}
              className={`py-8 md:py-10 md:px-8 ${i > 0 ? 'border-t border-rule md:border-t-0' : ''} ${i === 1 ? 'md:border-l md:border-rule' : ''} ${i === 2 ? 'md:border-t md:border-rule' : ''} ${i === 3 ? 'md:border-t md:border-l md:border-rule' : ''}`}
            >
              <div className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-2 mb-3">
                {new Date(post.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })} · {post.readingTime}
              </div>
              <a href={`/blog/${post.slug}`} className="block group">
                <h3 className="display-m text-2xl leading-snug group-hover:italic transition-all">
                  {post.title}
                </h3>
              </a>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((t) => (
                  <span key={t} className="chip-ed">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={`/blog/${post.slug}`}
                className="mt-5 inline-block ed-link font-mono text-xs uppercase tracking-widest"
              >
                Leer →
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href="/blog" className="btn-ink">Ver todos los artículos →</a>
          {blogPosts.length > 4 && (
            <span className="caption">
              {blogPosts.length} artículos en total
            </span>
          )}
        </div>
      </Section>

      {testimonials && testimonials.length > 0 && (
        <Section id="testimonios" index="№ 07 — Testimonios" title="Voces">
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
              <div className="section-index">№ 08 — Contacto</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display-xl">
                ¿Transformas el <span className="italic"><span className="hl-accent">sistema sanitario</span></span>?<br />Hablemos.
              </h2>
              <p className="lead mt-6 max-w-2xl">
                Hospitales, consultoras (Crowe, Deloitte, Accenture), aseguradoras y administración pública: 15 minutos para revisar contexto, objetivo estratégico y encaje clínico-regulatorio.
              </p>
              <div className="mt-10 flex flex-col gap-6">
                <div className="flex flex-wrap gap-4">
                  <a href="/contacto#agenda" className="btn-ink">Reservar llamada de 15 min →</a>
                  <a href="/trabajemos-juntos" className="btn-ghost">Ver cómo trabajamos juntos</a>
                </div>
                <div>
                  <div className="eyebrow mb-3">Descargar CV</div>
                  <CVDownloader variant="compact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
