export const metadata = { title: 'Educación' }

export default function EducacionPage() {
  return (
    <div className="container py-12">
      <h1 className="section-title">Educación</h1>
      <div className="mt-8 space-y-4">
        <div className="card p-6">
          <h2 className="text-white font-semibold">Grado en Medicina</h2>
          <p className="mt-2 text-sm text-muted">Año, universidad, enfoque.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-white font-semibold">Maestría: Integración del Conocimiento Médico</h2>
          <p className="mt-2 text-sm text-muted">Resolución de Problemas Clínicos: competencias y resultados.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-white font-semibold">Maestría: IA aplicada a la Sanidad (desde feb/2025)</h2>
          <p className="mt-2 text-sm text-muted">Módulos y herramientas clave.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-white font-semibold">Cursos relevantes</h2>
          <p className="mt-2 text-sm text-muted">Python/CS50P, ML scikit-learn, HL7/FHIR intro.</p>
        </div>
      </div>
    </div>
  )
}

