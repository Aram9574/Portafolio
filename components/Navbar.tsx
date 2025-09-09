"use client";
import Link from 'next/link'
import { Github, Linkedin, Youtube } from 'lucide-react'

export function Navbar() {
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
        <div className="flex items-center gap-4">
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
      </div>
    </header>
  )
}
