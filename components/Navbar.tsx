"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GithubLogo, LinkedinLogo, List, X } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useState } from 'react'
import { SOCIAL } from '@/lib/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isEN = pathname?.startsWith('/en')
  const langHref = isEN ? '/' : '/en'
  const langLabel = isEN ? 'ES' : 'EN'
  const langAria = isEN ? 'Ver la web en español' : 'View this site in English'
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = '' }
  }, [open])
  const navLinks = [
    { href: '/#home', label: 'Inicio' },
    { href: '/sobre-mi', label: 'Perfil' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/publicaciones', label: 'Insights' },
    { href: '/blog', label: 'Blog' },
    { href: '/credenciales', label: 'Credenciales' },
    { href: '/posiciones', label: 'Posiciones' },
    { href: '/contacto', label: 'Contacto' },
  ] as const
  const isActive = (href: string) =>
    href === '/#home' ? pathname === '/' : pathname?.startsWith(href.split('#')[0])
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-hairline bg-bone/86 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-medium tracking-tight text-ink whitespace-nowrap">
          Aram Zakzuk<span className="hidden xl:inline font-mono text-[0.7rem] tracking-normal ml-2 text-muted-2">Médico · IA en salud</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-[0.95rem] text-muted">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href as any}
              className={`transition-colors hover:text-ink ${isActive(l.href) ? 'text-ink' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={langHref}
            aria-label={langAria}
            className="text-[0.85rem] text-muted hover:text-ink transition-colors"
          >
            {langLabel}
          </Link>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-ink transition-colors"
          >
            <GithubLogo weight="regular" className="w-[18px] h-[18px]" />
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-ink transition-colors"
          >
            <LinkedinLogo weight="regular" className="w-[18px] h-[18px]" />
          </a>
        </div>
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md border border-hairline-strong p-2 text-ink bg-paper"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X weight="regular" className="w-5 h-5" /> : <List weight="regular" className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="absolute inset-0 top-16 bg-ink/30" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 top-16 bg-bone border-b border-hairline p-6">
            <nav className="grid gap-1 text-2xl font-display">
              {navLinks.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href as any}
                  className={`py-2.5 text-ink hover:text-accent transition-colors ${i < navLinks.length - 1 ? 'border-b border-hairline' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex items-center gap-5">
              <Link
                href={langHref}
                aria-label={langAria}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-ink"
              >
                {langLabel}
              </Link>
              <a href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-ink">
                <GithubLogo weight="regular" className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-ink">
                <LinkedinLogo weight="regular" className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
