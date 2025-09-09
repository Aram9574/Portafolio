import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

declare global {
  // volatile en memoria del proceso para rate limit simple
  // eslint-disable-next-line no-var
  var __contact_last__: Map<string, number> | undefined
}

export async function POST(req: Request) {
  try {
    const { nombre, email, mensaje, website } = await req.json()
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ ok: false, error: 'Datos incompletos' }, { status: 400 })
    }
    // Honeypot anti-spam: si el campo oculto viene relleno, ignorar silenciosamente
    if (website) {
      return NextResponse.json({ ok: true })
    }

    // Rate limit: 1 por minuto por IP
    const h = headers()
    const ip = (h.get('x-forwarded-for')?.split(',')[0] || h.get('x-real-ip') || 'local').trim()
    const now = Date.now()
    if (!globalThis.__contact_last__) globalThis.__contact_last__ = new Map<string, number>()
    const last = globalThis.__contact_last__.get(ip) || 0
    if (now - last < 60_000) {
      return NextResponse.json(
        { ok: false, error: 'Has enviado un mensaje recientemente. Intenta de nuevo en 1 minuto.' },
        { status: 429 }
      )
    }
    globalThis.__contact_last__.set(ip, now)
    // Enviar email usando la API de Resend (sin dependencias adicionales)
    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO
    const from = process.env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>'

    if (!apiKey || !to) {
      return NextResponse.json(
        { ok: false, error: 'Servicio de correo no configurado' },
        { status: 500 }
      )
    }

    const subject = `Nuevo mensaje del portafolio: ${nombre}`
    const text = `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#0f172a">
        <h2 style="margin:0 0 12px">Nuevo mensaje del portafolio</h2>
        <p style="margin:0 0 8px"><strong>Nombre:</strong> ${nombre}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> ${email}</p>
        <pre style="white-space:pre-wrap; background:#f1f5f9; padding:12px; border-radius:8px; margin-top:12px">${mensaje}</pre>
      </div>
    `

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10_000)
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to, subject, text, html, reply_to: email }),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeout))

    if (!res.ok) {
      const err = await res.text().catch(() => '')
      return NextResponse.json(
        { ok: false, error: 'No se pudo enviar el correo', detail: err?.slice(0, 300) },
        { status: 502 }
      )
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Error interno' }, { status: 500 })
  }
}
