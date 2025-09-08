import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
        <div>
          <h4 className="text-white font-medium mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>Madrid, España</li>
            <li><a className="hover:text-white" href="mailto:zakzukaram@gmail.com">zakzukaram@gmail.com</a></li>
            <li><a className="hover:text-white" href="https://www.linkedin.com/in/azakzuk-md" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-white" href="https://github.com/azakzuk" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Enlaces rápidos</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-white" href="/proyectos">Proyectos</Link></li>
            <li><Link className="hover:text-white" href="/sobre-mi">Sobre mí</Link></li>
            <li><Link className="hover:text-white" href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-white" href="/privacy.html">Privacidad</Link></li>
            <li><Link className="hover:text-white" href="/cookies.html">Cookies</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-muted">
        © {year} Alejandro Zakzuk. Todos los derechos reservados. ·{' '}
        <Link className="hover:text-white" href="/privacy.html">Privacidad</Link> ·{' '}
        <Link className="hover:text-white" href="/cookies.html">Cookies</Link>
      </div>
    </footer>
  )
}
