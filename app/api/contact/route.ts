import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { nombre, email, mensaje } = await req.json()
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ ok: false, error: 'Datos incompletos' }, { status: 400 })
    }
    // TODO: integrar con un servicio (SMTP, Resend, etc.)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

