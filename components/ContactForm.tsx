"use client";
import { useEffect, useRef, useState } from 'react'

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [message, setMessage] = useState<string>('')
  const statusRef = useRef<HTMLDivElement>(null)

  function validate(form: HTMLFormElement) {
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
    const nextErrors: Record<string, string> = {}
    if (!data.nombre?.trim()) nextErrors.nombre = 'Tu nombre es requerido.'
    if (!data.email?.trim()) {
      nextErrors.email = 'El email es requerido.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = 'Introduce un email válido.'
    }
    if (!data.mensaje?.trim()) nextErrors.mensaje = 'Escribe un mensaje.'
    if (!('privacidad' in data)) nextErrors.privacidad = 'Debes aceptar la política de privacidad.'
    return { ok: Object.keys(nextErrors).length === 0, nextErrors, data }
  }

  useEffect(() => {
    if (state === 'sent' || state === 'error') statusRef.current?.focus()
  }, [state])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const { ok, nextErrors, data } = validate(form)
    setErrors(nextErrors)
    if (!ok) {
      const first = form.querySelector('[aria-invalid="true"]') as HTMLElement | null
      first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json?.ok === false) {
        throw new Error(json?.error || 'No se pudo enviar el mensaje')
      }
      setMessage('Mensaje enviado. Te responderé pronto.')
      setState('sent')
      form.reset()
    } catch {
      setMessage('Hubo un error al enviar. Intenta de nuevo en un momento.')
      setState('error')
    }
  }
  return (
    <form className="card p-6" onSubmit={onSubmit} noValidate>
      <h2 className="text-white font-semibold">Escríbeme</h2>
      {/* Banner de estado */}
      {(state === 'sent' || state === 'error') && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className={`mt-4 rounded-lg px-3 py-2 text-sm ${state==='sent' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' : 'bg-red-500/10 text-red-300 border border-red-500/30'}`}
        >
          {message}
        </div>
      )}
      <div className="mt-4 grid grid-cols-1 gap-4">
        {/* Honeypot anti-spam */}
        <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" />

        <label className="text-sm">
          <span className="block text-muted mb-1">Nombre</span>
          <input
            name="nombre"
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={errors.nombre ? 'err-nombre' : undefined}
            onBlur={(e)=>{ if (!e.currentTarget.value.trim()) setErrors(prev=>({ ...prev, nombre: 'Tu nombre es requerido.' })); else setErrors(prev=>({ ...prev, nombre: '' })) }}
            className={`w-full rounded-xl bg-black/20 border px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,194,168,0.4)] ${errors.nombre ? 'border-red-500/50' : 'border-white/10'}`}
          />
          {errors.nombre && <div id="err-nombre" className="mt-1 text-xs text-red-300">{errors.nombre}</div>}
        </label>
        <label className="text-sm">
          <span className="block text-muted mb-1">Email</span>
          <input
            type="email"
            name="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'err-email' : undefined}
            onBlur={(e)=>{ const v=e.currentTarget.value.trim(); if (!v) setErrors(p=>({ ...p, email: 'El email es requerido.' })); else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) setErrors(p=>({ ...p, email: 'Introduce un email válido.' })); else setErrors(p=>({ ...p, email: '' })) }}
            className={`w-full rounded-xl bg-black/20 border px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,194,168,0.4)] ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
          />
          {errors.email && <div id="err-email" className="mt-1 text-xs text-red-300">{errors.email}</div>}
        </label>
        <label className="text-sm">
          <span className="block text-muted mb-1">Mensaje</span>
          <textarea
            name="mensaje"
            rows={5}
            aria-invalid={Boolean(errors.mensaje)}
            aria-describedby={errors.mensaje ? 'err-mensaje' : undefined}
            onBlur={(e)=>{ if (!e.currentTarget.value.trim()) setErrors(prev=>({ ...prev, mensaje: 'Escribe un mensaje.' })); else setErrors(prev=>({ ...prev, mensaje: '' })) }}
            className={`w-full rounded-xl bg-black/20 border px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,194,168,0.4)] ${errors.mensaje ? 'border-red-500/50' : 'border-white/10'}`}
          />
          {errors.mensaje && <div id="err-mensaje" className="mt-1 text-xs text-red-300">{errors.mensaje}</div>}
        </label>
        <label className="flex items-center gap-2 text-xs text-muted">
          <input
            name="privacidad"
            type="checkbox"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setErrors(prev => ({
                ...prev,
                privacidad: e.target.checked ? '' : 'Debes aceptar la política de privacidad.'
              }))
            }
          />
          <span>
            Acepto el tratamiento de mis datos según la
            {' '}<a className="underline hover:text-white" href="/legal/privacidad" target="_blank" rel="noreferrer">política de privacidad</a>.
          </span>
        </label>
        {errors.privacidad && <div className="-mt-2 text-xs text-red-300">{errors.privacidad}</div>}
        <button disabled={state==='sending'} className="inline-flex items-center px-5 py-3 rounded-xl bg-teal-500 text-slate-900 font-semibold shadow hover:bg-teal-400 transition disabled:opacity-60">
          {state==='idle' && 'Enviar'}
          {state==='sending' && 'Enviando…'}
          {state==='sent' && 'Enviar otro mensaje'}
          {state==='error' && 'Reintentar envío'}
        </button>
      </div>
    </form>
  )
}
