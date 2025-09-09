import Link from 'next/link'
import { SOCIAL } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
        <div>
          <h4 className="text-white font-medium mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>{SOCIAL.location}</li>
            <li><a className="hover:text-white" href={`mailto:${SOCIAL.email}`}>{SOCIAL.email}</a></li>
            <li><a className="hover:text-white" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-white" href={SOCIAL.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="hover:text-white" href={SOCIAL.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Enlaces rápidos</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-white" href="/sobre-mi">Sobre mí</Link></li>
            <li><Link className="hover:text-white" href="/proyectos">Proyectos</Link></li>
            <li><Link className="hover:text-white" href="/publicaciones">Publicaciones</Link></li>
            <li><Link className="hover:text-white" href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link className="hover:text-white" href="/legal/privacidad">Política de privacidad</Link></li>
            <li><Link className="hover:text-white" href="/legal/cookies">Política de cookies</Link></li>
            <li><Link className="hover:text-white" href="/legal/aviso-legal">Aviso legal</Link></li>
            <li><Link className="hover:text-white" href="/legal/accesibilidad">Accesibilidad</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-muted">
        © {year} Alejandro Zakzuk. Todos los derechos reservados. ·{' '}
        <a className="hover:text-white" href="/privacy.html">Privacidad</a> ·{' '}
        <a className="hover:text-white" href="/cookies.html">Cookies</a>
      </div>
    </footer>
  )
}
