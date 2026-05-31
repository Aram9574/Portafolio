import type { Metadata } from 'next';
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
import { TreeStructure, HardDrives, Brain, Stethoscope, ShieldCheck, ChartLine, Cpu, FlowArrow, Heartbeat, SealCheck } from '@phosphor-icons/react/dist/ssr';
import ChartreuseRule from '@/components/ui/ChartreuseRule';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://alejandrozakzuk.com',
    languages: {
      'es-ES': 'https://alejandrozakzuk.com',
      en: 'https://alejandrozakzuk.com/en',
      'x-default': 'https://alejandrozakzuk.com'
    }
  }
};

export default function HomePage() {
  const destacados = projects.slice(0,3);
  return (
    <>
      {/* HERO — asimétrico, editorial, col-span 5/7 */}
      <section id="home" className="pt-24 pb-32 md:pt-32 md:pb-40 rule-b">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 items-end">

            {/* Columna izquierda: metadatos editoriales */}
            <aside className="col-span-12 md:col-span-4 lg:col-span-3 space-y-6 md:border-r md:border-ink md:pr-8 md:self-stretch md:pb-4">
              <div className="eyebrow">№ 01 / MD · Clinical AI · Madrid</div>
              <div className="caption leading-relaxed">
                Disponible · Madrid · UE
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ink">Descargar CV →</a>
                <a href="/contacto" className="btn-ghost">Contactar</a>
              </div>
            </aside>

            {/* Columna derecha: título display */}
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <h1 className="display-xl word-reveal">
                <span style={{ animationDelay: '0ms' }}>Medicina,</span>{' '}
                <span style={{ animationDelay: '100ms' }} className="italic">Salud Digital</span>{' '}
                <span style={{ animationDelay: '200ms' }}>e</span>{' '}
                <span style={{ animationDelay: '300ms' }}>
                  <span className="hl-accent">IA en Sanidad</span>.
                </span>
                <br />
                <span style={{ animationDelay: '400ms' }} className="italic">La combinación escasa</span>{' '}
                <span style={{ animationDelay: '500ms' }}>que separa</span>
                <br />
                <span style={{ animationDelay: '600ms' }}>los proyectos en producción</span>{' '}
                <span style={{ animationDelay: '700ms' }}>de los pilotos.</span>
              </h1>
            </div>

            {/* Pie: lead + chips sobre regla */}
            <div className="col-span-12 pt-10 md:pt-16 rule-t grid grid-cols-12 gap-y-8 md:gap-x-8">
              <div className="col-span-12 md:col-span-7 space-y-4" data-aos="fade-up">
                <p className="lead">
                  Soy médico (Universidad del Rosario, homologado en España) con doble máster en IA aplicada a Sanidad (CEMP) y Salud Digital / eHealth (Universidad Europea). Diseño y valido soluciones de Clinical AI bajo el marco regulatorio europeo (EU AI Act · MDR · RGPD · EHDS).
                </p>
                <p className="caption normal-case tracking-normal leading-relaxed italic" style={{ fontSize: '0.95rem' }}>
                  Busco rol senior en HealthTech, MedTech, Pharma Digital, MedDevice o innovación hospitalaria. Madrid · Remoto · Híbrido.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 md:border-l md:border-ink md:pl-8 flex flex-col gap-5 content-start">
                <div>
                  <div className="eyebrow mb-2">Medicina</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip-ed"><Stethoscope weight="light" aria-hidden /> Médico · 6a</span>
                    <span className="chip-ed"><Heartbeat weight="light" aria-hidden /> MI · URG · AP</span>
                  </div>
                </div>
                <div>
                  <div className="eyebrow mb-2">Salud Digital</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip-ed"><HardDrives weight="light" aria-hidden /> EHDS</span>
                    <span className="chip-ed"><ShieldCheck weight="light" aria-hidden /> EU AI Act · MDR</span>
                    <span className="chip-ed"><TreeStructure weight="light" aria-hidden /> HL7 FHIR</span>
                    <span className="chip-ed"><FlowArrow weight="light" aria-hidden /> Transformación digital</span>
                  </div>
                </div>
                <div>
                  <div className="eyebrow mb-2">IA aplicada a Sanidad</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip-ed"><Brain weight="light" aria-hidden /> CDSS · SaMD</span>
                    <span className="chip-ed"><ChartLine weight="light" aria-hidden /> XAI / SHAP</span>
                    <span className="chip-ed"><Cpu weight="light" aria-hidden /> Machine Learning</span>
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
              <SealCheck weight="light" className="w-4 h-4 text-ink shrink-0" aria-hidden />
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

      <div className="container"><ChartreuseRule className="my-2" /></div>

      <Section id="proyectos" index="№ 04 — Proyectos" title="Proyectos que fundamentan el criterio" subtitle="Validación técnica propia. El criterio no se improvisa: se construye con datos reales, métricas verificables y cumplimiento regulatorio desde el día uno. Código abierto, demos públicas.">
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
                Criterio médico, visión de Salud Digital y capacidad técnica en IA aplicada a sanidad. Tres capas que rara vez coinciden en la misma persona y que, juntas, son lo que separa los proyectos que llegan a producción de los que se quedan en piloto.
              </p>
            </div>
          </div>

          {/* Métricas display: tres capas de la triada */}
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-8 mb-24">
            <div className="col-span-12 md:col-span-4 border-t border-ink pt-6">
              <div className="eyebrow mb-4">Medicina</div>
              <div className="metric-numeral font-display">6<span className="text-muted">a</span></div>
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
                <h4 className="display-m text-xl mb-2">Criterio médico para cuestionar la IA</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>6 años en hospital de tercer nivel. Evalúo y cuestiono soluciones de IA en salud antes de que se desplieguen, no después del primer incidente.</p>
              </div>
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">02 · Técnica</div>
                <h4 className="display-m text-xl mb-2">Capacidad técnica real</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>Me siento con un equipo de ingenieros y entiendo exactamente lo que construyen. Machine Learning, XAI/SHAP, HL7 FHIR, EU AI Act. No es teoría: hay código y demos públicas.</p>
              </div>
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">03 · Regulación</div>
                <h4 className="display-m text-xl mb-2">Marco regulatorio europeo</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>EU AI Act · MDR · ISO 13485 · SaMD · RGPD · EHDS. Conocimiento operativo del marco que decide si un sistema llega o no a producción en Europa.</p>
              </div>
              <div className="border-t border-ink pt-5">
                <div className="eyebrow mb-3">04 · Traducción</div>
                <h4 className="display-m text-xl mb-2">El puente entre tres mundos</h4>
                <p className="caption leading-relaxed normal-case tracking-normal" style={{fontSize: '0.875rem'}}>Hablo con ingenieros, con comité médico y con compliance regulatorio en su propio idioma, sin que se pierda nada en el camino. Esa es la capacidad escasa.</p>
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
        {(() => {
          const FEATURED_SLUGS = [
            'como-preparar-centro-sanitario-ehds',
            'eu-ai-act-clasificacion-cdss-5-pasos',
            'lo-que-consultoras-deben-preguntar-ia-clinica',
            'cdss-metricas-que-importan',
          ];
          const featured = FEATURED_SLUGS
            .map((s) => blogPosts.find((p) => p.slug === s))
            .filter((p): p is NonNullable<typeof p> => Boolean(p));
          const list = featured.length === 4 ? featured : blogPosts.slice(0, 4);
          return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-2 border-ink">
          {list.map((post, i) => (
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
          );
        })()}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href="/blog" className="btn-ink">Ver todos los artículos →</a>
          {blogPosts.length > 4 && (
            <span className="caption">
              {blogPosts.length} artículos en total
            </span>
          )}
        </div>
      </Section>

      {testimonials && testimonials.slice(1).length > 0 && (
        <Section id="testimonios" index="№ 07 — Testimonios" title="Voces">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(1).map((t, index) => (
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
                ¿Buscas este perfil para tu <span className="italic"><span className="hl-accent">equipo</span></span>?<br />Hablemos.
              </h2>
              <p className="lead mt-6 max-w-2xl">
                Disponible para roles senior en Clinical AI, Medical Affairs digital, Healthcare Data Analytics y asesoría regulatoria EU AI Act / MDR. HealthTech, MedTech, Pharma Digital, MedDevice e innovación hospitalaria. Madrid · Remoto · Híbrido.
              </p>
              <div className="mt-10 flex flex-col gap-6">
                <div className="flex flex-wrap gap-4 items-center">
                  <a href="/cv/CV_Aram_Zakzuk.pdf" target="_blank" rel="noopener noreferrer" className="btn-ink">Descargar CV →</a>
                  <a href="/contacto" className="btn-ghost">Contactar</a>
                  <a href="/posiciones" className="ed-link font-mono text-xs uppercase tracking-widest">Ver roles que me interesan →</a>
                </div>
                <div>
                  <div className="eyebrow mb-3">CV en tres versiones</div>
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
