import Link from 'next/link'

export function Hero() {
  return (
    <section id="home" className="hero-bg hero-spotlight relative flex min-h-[80vh] md:min-h-[90vh] items-center pt-28 md:pt-36 pb-16">
      <div className="container">
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base text-slate-300 tracking-wide mb-3" data-aos="fade-up">Alejandro Zakzuk, MD</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl hero-title">
            De la bata al código.
            <br />
            <span className="text-primary">IA aplicada a la Sanidad.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-slate-300 leading-relaxed mb-8 hero-sub">
            Médico especializado en Inteligencia Artificial aplicada a la Sanidad.
            Transformo datos en decisiones que mejoran la atención y optimizan procesos.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3" data-aos="fade-up" data-aos-delay="220">
            <Link href="#contact" className="inline-flex items-center px-5 py-3 rounded-xl border border-teal-400 text-teal-300 font-semibold hover:bg-white/5 transition">Contactar</Link>
            <Link href="#proyectos" className="inline-flex items-center px-5 py-3 rounded-xl bg-teal-500 text-slate-900 font-semibold shadow hover:bg-teal-400 transition">Ver proyectos</Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2 max-w-xl" data-aos="fade-up" data-aos-delay="320">
            {['Python','Azure','Django','HL7/FHIR','SQL','ML Ops'].map((b) => (
              <li key={b} className="chip flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path stroke="currentColor" d="M12 2v20M2 12h20"/>
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
