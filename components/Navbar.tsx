"use client";
import Link from 'next/link'
import { Github, Linkedin, Youtube, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = '' }
  }, [open])
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[rgba(11,15,20,0.65)] backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white text-sm md:text-base">
          Alejandro Zakzuk
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <Link href="/#home" className="hover:text-white transition-colors">Inicio</Link>
          <Link href="/sobre-mi" className="hover:text-white transition-colors">Sobre mí</Link>
          <Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link>
          <Link href="/publicaciones" className="hover:text-white transition-colors">Publicaciones</Link>
          <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Aram9574"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/azakzuk-md"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@MedIA_ES_1"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="text-muted hover:text-white transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white/80"
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
          <div className="absolute inset-0 top-16 bg-black/70 backdrop-blur-md" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 top-16 mx-4 rounded-2xl border border-white/20 bg-[rgba(15,23,42,0.95)] shadow-xl p-4">
            <nav className="grid gap-2 text-sm">
              <Link href="/#home" className="px-3 py-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(false)}>Inicio</Link>
              <Link href="/sobre-mi" className="px-3 py-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(false)}>Sobre mí</Link>
              <Link href="/proyectos" className="px-3 py-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(false)}>Proyectos</Link>
              <Link href="/publicaciones" className="px-3 py-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(false)}>Publicaciones</Link>
              <Link href="/contacto" className="px-3 py-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(false)}>Contacto</Link>
            </nav>
            <div className="mt-3 flex items-center gap-4 px-3">
              <a href="https://github.com/Aram9574" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/azakzuk-md" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@MedIA_ES_1" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-muted hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
