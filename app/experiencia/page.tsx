export const metadata = { title: 'Experiencia' }

export default function ExperienciaPage() {
  const roles = [
    { rol: 'Proyecto ML clínico', centro: 'Portafolio', fechas: '2024', kpis: ['AUC 0.82 baseline', 'Matriz por clase', 'Plan de calibración']},
    { rol: 'ERP geriátrico (MVP)', centro: 'Portafolio', fechas: '2024', kpis: ['Módulos clave', 'Reportes CSV', 'Roadmap FHIR']}
  ]
  return (
    <div className="container py-12">
      <h1 className="section-title">Experiencia</h1>
      <div className="mt-8 space-y-4">
        {roles.map((r) => (
          <div key={r.rol} className="card p-6">
            <div className="flex flex-wrap justify-between gap-2">
              <div className="text-white font-semibold">{r.rol}</div>
              <div className="text-muted text-sm">{r.centro} · {r.fechas}</div>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm text-muted space-y-1">
              {r.kpis.map(k => <li key={k}>{k}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

