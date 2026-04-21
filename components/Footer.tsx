"use client"
import Link from 'next/link'
import { useState } from 'react'
import { SOCIAL } from '@/lib/site'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { analyticsEvents } from '@/lib/analytics'

export function Footer() {
  const year = 2026
  return (
    <footer className="mt-20 border-t border-ink bg-paper">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
        <div>
          <h4 className="text-ink font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-ink-2">
            <li>{SOCIAL.location}</li>
            <li><a className="hover:text-ink underline-offset-4 hover:underline" href={`mailto:${SOCIAL.email}`}>{SOCIAL.email}</a></li>
            <li><a className="hover:text-ink underline-offset-4 hover:underline" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-ink underline-offset-4 hover:underline" href={SOCIAL.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="hover:text-ink underline-offset-4 hover:underline" href="https://huggingface.co/aram1585" target="_blank" rel="noreferrer">Hugging Face</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-ink font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm text-ink-2">
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/sobre-mi">Perfil</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/proyectos">Proyectos</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/publicaciones">Insights</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/credenciales">Credenciales</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/trabajemos-juntos">Trabajemos juntos</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-ink font-semibold mb-3">Perfil y especialidades</h4>
          <ul className="space-y-2 text-sm text-ink-2">
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/experiencia">Experiencia</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/habilidades">Habilidades</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/soluciones/radiologia">IA en Radiología</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/soluciones/cardiologia">IA en Cardiología</Link></li>
            <li><Link className="hover:text-ink underline-offset-4 hover:underline" href="/soluciones/oncologia">IA en Oncología</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-ink font-semibold mb-3">Newsletter</h4>
          <p className="text-xs text-ink-2 mb-4 leading-relaxed">
            Insights de Clinical AI, EU AI Act y HL7 FHIR. Un mail cada 15 días.
          </p>
          <FooterNewsletterForm />
        </div>
      </div>
      <div className="border-t border-ink/20 py-8">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-ink-2 mb-4 font-medium uppercase tracking-wider">
          <li><Link className="hover:text-ink transition" href="/en">English</Link></li>
          <li><a className="hover:text-ink transition" href="/blog/rss.xml">RSS</a></li>
          <li><Link className="hover:text-ink transition" href="/legal/privacidad">Privacidad</Link></li>
          <li><Link className="hover:text-ink transition" href="/legal/cookies">Cookies</Link></li>
          <li><Link className="hover:text-ink transition" href="/legal/aviso-legal">Aviso Legal</Link></li>
          <li><Link className="hover:text-ink transition" href="/legal/accesibilidad">Accesibilidad</Link></li>
        </ul>
        <div className="text-center text-[10px] text-ink-2/70">
          © {year} Aram Zakzuk. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

function FooterNewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Footer' }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
        analyticsEvents.newsletterSubscribe('Footer')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-ink text-xs py-2 font-mono">
        <CheckCircle2 className="w-4 h-4" /> Suscrito.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="email"
        required
        placeholder="tu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full pl-3 pr-14 py-2.5 bg-bone border-2 border-ink focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-1 focus:ring-offset-paper text-sm text-ink placeholder:text-ink-2/70 transition"
      />
      <button
        type="submit"
        aria-label="Suscribirse"
        disabled={status === 'loading'}
        className="absolute right-0 top-0 bottom-0 px-4 bg-ink text-bone flex items-center justify-center hover:opacity-90 transition disabled:opacity-50"
      >
        {status === 'loading' ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : (
          <Send className="w-3.5 h-3.5" />
        )}
      </button>
      {status === 'error' && (
        <p className="text-[10px] text-[var(--danger)] mt-2">Error. Reintenta.</p>
      )}
    </form>
  )
}

