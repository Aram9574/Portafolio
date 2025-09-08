"use client";
import { useState } from 'react'

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (!data.email || !data.nombre || !data.mensaje) return
    setState('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      if (!res.ok) throw new Error('fail')
      setState('sent')
      form.reset()
    } catch {
      setState('error')
    }
  }
  return (
    <form className="card p-6" onSubmit={onSubmit}>
      <h2 className="text-white font-semibold">Escríbeme</h2>
      <div className="mt-4 grid grid-cols-1 gap-4">
        <label className="text-sm">
          <span className="block text-muted mb-1">Nombre</span>
          <input required name="nombre" className="w-full rounded-xl bg-black/20 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,194,168,0.4)]" />
        </label>
        <label className="text-sm">
          <span className="block text-muted mb-1">Email</span>
          <input required type="email" name="email" className="w-full rounded-xl bg-black/20 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,194,168,0.4)]" />
        </label>
        <label className="text-sm">
          <span className="block text-muted mb-1">Mensaje</span>
          <textarea required name="mensaje" rows={5} className="w-full rounded-xl bg-black/20 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[rgba(0,194,168,0.4)]" />
        </label>
        <label className="flex items-center gap-2 text-xs text-muted">
          <input required type="checkbox" />
          Acepto el tratamiento de mis datos según la política de privacidad.
        </label>
        <button disabled={state==='sending'} className="inline-flex items-center px-5 py-3 rounded-xl bg-teal-500 text-slate-900 font-semibold shadow hover:bg-teal-400 transition">
          {state==='idle' && 'Enviar'}
          {state==='sending' && 'Enviando…'}
          {state==='sent' && 'Mensaje enviado. Te responderé pronto.'}
          {state==='error' && 'Hubo un error. Intenta de nuevo.'}
        </button>
      </div>
    </form>
  )
}

