"use client";
import Link from 'next/link'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SOCIAL } from '@/lib/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = '' }
  }, [open])
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-ink bg-bone">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-tight text-ink italic">
          Aram Zakzuk<span className="not-italic font-mono text-[0.6rem] tracking-widest uppercase ml-2 text-muted">MD · AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[0.72rem] tracking-widest uppercase text-ink">
          <Link href="/#home" className="hover:text-muted transition-colors">Inicio</Link>
          <Link href="/sobre-mi" className="hover:text-muted transition-colors">Perfil</Link>
          <Link href="/proyectos" className="hover:text-muted transition-colors">Proyectos</Link>
          <Link href="/publicaciones" className="hover:text-muted transition-colors">Publicaciones</Link>
          <Link href="/contacto" className="hover:text-muted transition-colors">Contacto</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink hover:text-muted transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink hover:text-muted transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

        </div>
        <button
          className="md:hidden inline-flex items-center justify-center border border-ink p-2 text-ink bg-bone"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden" id="mobile-menu">
          <div className="absolute inset-0 top-16 bg-ink/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 top-16 bg-bone border-y border-ink p-6">
            <nav className="grid gap-1 font-display text-3xl">
              <Link href="/#home" className="py-2 border-b border-ink hover:italic" onClick={() => setOpen(false)}>Inicio</Link>
              <Link href="/sobre-mi" className="py-2 border-b border-ink hover:italic" onClick={() => setOpen(false)}>Perfil</Link>
              <Link href="/proyectos" className="py-2 border-b border-ink hover:italic" onClick={() => setOpen(false)}>Proyectos</Link>
              <Link href="/publicaciones" className="py-2 border-b border-ink hover:italic" onClick={() => setOpen(false)}>Publicaciones</Link>
              <Link href="/contacto" className="py-2 hover:italic" onClick={() => setOpen(false)}>Contacto</Link>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <a href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink hover:text-muted">
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink hover:text-muted">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
