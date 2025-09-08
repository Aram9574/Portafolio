export const metadata = { title: 'Sobre mí' }

export default function SobreMiPage() {
  return (
    <div className="container py-12">
      <header className="mb-8">
        <h1 className="section-title">Alejandro Zakzuk, MD — IA aplicada a la Sanidad</h1>
        <p className="mt-2 text-muted max-w-3xl">
          Médico con especialización en IA para la Sanidad. Formación en Integración del Conocimiento Médico y Resolución de Problemas Clínicos; profundización en Medicina Familiar y Preventiva. Enfoque práctico: llevar modelos y automatizaciones a problemas reales (triaje, riesgo, adherencia, gestión de camas, registros), con base en datos, interoperabilidad y seguridad.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="text-white font-semibold mb-3">Fortalezas</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
            {['Traducción clínico-técnica','Diseño de pipelines ML','Interoperabilidad (HL7/FHIR)','Desarrollo web con Django/DRF','Comunicación científica','Cumplimiento y ética (visión general)'].map(i => (
              <li key={i} className="rounded-xl border border-white/10 px-3 py-2">{i}</li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-white font-semibold mb-3">Lenguas y valores</h2>
          <p className="text-sm text-muted">Español (nativo), Inglés (C1).</p>
          <p className="mt-2 text-sm text-muted">Valores: Rigor, impacto clínico, protección de datos, documentación clara.</p>
        </div>
      </section>
    </div>
  )
}
