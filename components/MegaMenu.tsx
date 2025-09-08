import Link from 'next/link'

export function MegaMenu({ section }: { section: 'sobre' | 'proyectos' }) {
  if (section === 'sobre') {
    return (
      <div className="absolute left-1/2 top-full z-30 w-[680px] -translate-x-1/2 pt-2">
        <div className="card p-6 grid grid-cols-2 gap-6">
          <div>
            <p className="text-white font-medium mb-2">Perfil</p>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link className="hover:text-white" href="/sobre-mi">Perfil profesional</Link></li>
              <li><Link className="hover:text-white" href="/habilidades">Habilidades</Link></li>
              <li><Link className="hover:text-white" href="/experiencia">Experiencia</Link></li>
              <li><Link className="hover:text-white" href="/educacion">Educación</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium mb-2">Lenguas</p>
            <p className="text-sm text-muted">Español (nativo), Inglés (C1)</p>
            <div className="mt-4">
              <Link href="/contacto" className="btn-primary text-sm">Contactar</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="absolute left-1/2 top-full z-30 w-[860px] -translate-x-1/2 pt-2">
      <div className="card p-6 grid grid-cols-3 gap-6">
        <div>
          <p className="text-white font-medium mb-2">ML</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-white" href="/proyectos/cancer-mama-ml">Cáncer de mama (clasificación)</Link></li>
            <li><Link className="hover:text-white" href="/proyectos/riesgo-cardiovascular">Riesgo cardiovascular (Framingham)</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-medium mb-2">ERP/Apps</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-white" href="/proyectos/gericare-erp">GeriCare (Django/DRF)</Link></li>
            <li><Link className="hover:text-white" href="/proyectos/automatizaciones-ia">Automatizaciones IA</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-medium mb-2">Más</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-white" href="/proyectos">Ver todos los proyectos</Link></li>
            <li><Link className="hover:text-white" href="/publicaciones">Publicaciones</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

