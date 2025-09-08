import { Hero } from '@/components/Hero'
import Link from 'next/link'
import { Cpu, Activity, Database } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* About / Quién soy */}
      <section id="about" className="py-16 md:py-20" data-aos="fade-up">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex justify-center" data-aos="fade-right">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full p-1" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
                <div className="w-full h-full rounded-full overflow-hidden" style={{ background: 'var(--surface)' }}>
                    <img src="https://picsum.photos/seed/aram/640/640" alt="Alejandro Zakzuk, MD" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-semibold mb-4">Quién soy</h2>
              <p className="text-muted mb-6 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="120">
                Médico con especialización en IA para la Sanidad. Formación en Integración del Conocimiento Médico y Resolución de Problemas Clínicos; profundización en Medicina Familiar y Preventiva. Enfoque práctico: llevar modelos y automatizaciones a problemas reales (triaje, riesgo, adherencia, gestión de camas, registros), con base en datos, interoperabilidad y seguridad.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="220">
                <div className="p-4 rounded-lg" style={{ background: 'var(--bg)' }}>
                  <h3 className="text-primary text-2xl font-semibold">+10</h3>
                  <p className="text-muted text-sm">modelos ML prototipados</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'var(--bg)' }}>
                  <h3 className="text-primary text-2xl font-semibold">HL7/FHIR</h3>
                  <p className="text-muted text-sm">en ERP geriátrico</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'var(--bg)' }}>
                  <h3 className="text-primary text-2xl font-semibold">+5</h3>
                  <p className="text-muted text-sm">publicaciones en IA clínica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid (3 featured) */}
      <section id="proyectos" className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-10 text-center" data-aos="fade-up">Proyectos destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6" data-aos="fade-up">
                <div className="mb-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img src="https://picsum.photos/seed/ml1/800/480" alt="Clasificación de cáncer de mama" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Clasificación de cáncer de mama</h3>
                  <p className="text-muted text-sm mb-4">Modelo baseline con regresión logística. Matriz de confusión y métricas por clase; próximos pasos: calibración, re-muestreo y modelos no lineales.</p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {['Python','scikit-learn','Matplotlib'].map(s => (
                      <li key={s} className="chip flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path stroke="currentColor" d="M12 2v20M2 12h20"/>
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link href="/proyectos/cancer-mama-ml" className="text-primary text-sm font-medium inline-flex items-center">Leer caso <span className="ml-1">→</span></Link>
                </div>
              </div>
            <div className="card p-6" data-aos="fade-up" data-aos-delay="120">
                <div className="mb-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img src="https://picsum.photos/seed/med2/800/480" alt="Riesgo cardiovascular" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Riesgo cardiovascular a 10 años</h3>
                  <p className="text-muted text-sm mb-4">Preprocesamiento, imputación, normalización, selección de características y evaluación. En exploración: balanceo de clases, umbrales y XGBoost.</p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {['Python','scikit-learn','Pandas'].map(s => (
                      <li key={s} className="chip flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path stroke="currentColor" d="M12 2v20M2 12h20"/>
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link href="/proyectos/riesgo-cardiovascular" className="text-primary text-sm font-medium inline-flex items-center">Leer caso <span className="ml-1">→</span></Link>
                </div>
              </div>
            <div className="card p-6" data-aos="fade-up" data-aos-delay="220">
                <div className="mb-4">
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img src="https://picsum.photos/seed/erp3/800/480" alt="GeriCare ERP" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">GeriCare ERP (Django/DRF)</h3>
                  <p className="text-muted text-sm mb-4">MVP para residencias: pacientes, medicación, valoraciones (Morse), inventario, reportes CSV; diseño pensando en RGPD e interoperabilidad.</p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {['Django','DRF','PostgreSQL','Bootstrap'].map(s => (
                      <li key={s} className="chip flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path stroke="currentColor" d="M12 2v20M2 12h20"/>
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link href="/proyectos/gericare-erp" className="text-primary text-sm font-medium inline-flex items-center">Leer caso <span className="ml-1">→</span></Link>
                </div>
              </div>
          </div>
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="320">
            <Link href="/proyectos" className="inline-flex items-center px-5 py-3 rounded-xl border border-teal-400 text-teal-300 font-semibold hover:bg-white/5 transition">Ver todos los proyectos <span className="ml-2">→</span></Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="skills" className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-10 text-center" data-aos="fade-up">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center" data-aos="fade-up">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgba(0,194,168,0.1)] flex items-center justify-center text-primary">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Consultoría en IA clínica</h3>
                <p className="text-muted text-sm">Problema → hipótesis de datos → PoC. Identificación de oportunidades para aplicar IA en procesos clínicos.</p>
              </div>
              <div className="card p-8 text-center" data-aos="fade-up" data-aos-delay="120">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgba(0,194,168,0.1)] flex items-center justify-center text-primary">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Prototipado ML</h3>
                <p className="text-muted text-sm">Pipeline, métricas, explicabilidad básica. Desarrollo de modelos predictivos para problemas clínicos específicos.</p>
              </div>
              <div className="card p-8 text-center" data-aos="fade-up" data-aos-delay="220">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgba(0,194,168,0.1)] flex items-center justify-center text-primary">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interoperabilidad HL7/FHIR</h3>
                <p className="text-muted text-sm">Mapas de datos, endpoints, validaciones mínimas. Implementación de estándares para intercambio de información clínica.</p>
              </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section id="experience" className="py-16 md:py-20" data-aos="fade-up">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-10 text-center">Stack técnico</h2>
          <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['Python','SQL','Pandas','scikit-learn','Django','DRF','Bootstrap','Azure','Git/GitHub','HL7/FHIR','Notion','Streamlit'].map(s => (
              <li key={s} className="chip flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path stroke="currentColor" d="M12 2v20M2 12h20"/>
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 md:py-20 bg-[linear-gradient(135deg,rgba(0,194,168,0.1),rgba(111,125,255,0.1))]" data-aos="fade-up">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">¿Colaboramos?</h2>
          <p className="text-muted text-lg mb-8">Cuéntame tu reto clínico o de datos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-primary">Escríbeme</Link>
              <Link href="/contacto" className="inline-flex items-center px-5 py-3 rounded-xl border border-teal-400 text-teal-300 font-semibold hover:bg-white/5 transition">Agenda 15'</Link>
            </div>
        </div>
      </section>
    </div>
  )
}
