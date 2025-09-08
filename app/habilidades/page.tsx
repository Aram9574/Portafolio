export const metadata = { title: 'Habilidades' }

export default function HabilidadesPage() {
  return (
    <div className="container py-12">
      <h1 className="section-title">Habilidades</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="text-white font-semibold mb-3">Técnicas</h2>
          <div className="flex flex-wrap gap-2">
            {['Python','Pandas','NumPy','scikit-learn','SQL','Django/DRF','Bootstrap','Azure','Git/GitHub','HL7/FHIR','Streamlit','MLOps básico'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-white font-semibold mb-3">Clínicas y soft</h2>
          <ul className="list-disc list-inside text-sm text-muted space-y-1">
            <li>Medicina Familiar y Preventiva</li>
            <li>Interpretación de métricas clínicas</li>
            <li>Diseño de flujos y seguridad del paciente</li>
            <li>Comunicación, docencia, trabajo con equipos clínico-técnicos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

