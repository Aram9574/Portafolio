"use client";
import Link from 'next/link'
import { useState } from 'react'
import { MegaMenu } from './MegaMenu'

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[rgba(11,15,20,0.65)] backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white text-sm md:text-base">
          Alejandro Zakzuk, MD
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <Link href="/#home" className="hover:text-white transition-colors">Inicio</Link>
          <div onMouseEnter={() => setOpen('sobre') } onMouseLeave={() => setOpen(null)} className="relative">
            <Link href="/#about" className="hover:text-white transition-colors">Quién soy</Link>
            {open==='sobre' && <MegaMenu section="sobre" />}
          </div>
          <div onMouseEnter={() => setOpen('proyectos') } onMouseLeave={() => setOpen(null)} className="relative">
            <Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            {open==='proyectos' && <MegaMenu section="proyectos" />}
          </div>
          <Link href="/#skills" className="hover:text-white transition-colors">Habilidades</Link>
          <Link href="/#experience" className="hover:text-white transition-colors">Experiencia</Link>
          <Link href="/educacion" className="hover:text-white transition-colors">Educación y Certificaciones</Link>
          <Link href="/publicaciones" className="hover:text-white transition-colors">Publicaciones</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contacto" className="inline-flex items-center px-5 py-3 h-10 rounded-xl border border-teal-400 text-teal-300 font-semibold hover:bg-white/5 transition">Contactar</Link>
        </div>
      </div>
    </header>
  )
}
