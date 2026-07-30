import { NextResponse } from 'next/server';

// Validación básica de formato de email.
function isValidEmail(email: unknown): email is string {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Email no válido' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    // 1) Preferente: guardar el contacto en una audiencia de Resend.
    if (resendKey && audienceId) {
      const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      });

      // Resend devuelve 200/201 al crear y también trata como éxito un email ya existente.
      if (res.ok) {
        return NextResponse.json({ success: true }, { status: 200 });
      }
      const detail = await res.text().catch(() => '');
      // Contacto duplicado: lo consideramos éxito (ya está suscrito).
      if (res.status === 409 || /already exists/i.test(detail)) {
        return NextResponse.json({ success: true, already: true }, { status: 200 });
      }
      console.error('Resend audience error:', res.status, detail.slice(0, 300));
      return NextResponse.json({ error: 'No se pudo completar la suscripción.' }, { status: 502 });
    }

    // 2) Alternativa: webhook n8n/Make si está configurado.
    if (n8nWebhookUrl) {
      const n8nResponse = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: source || 'Portafolio',
          timestamp: new Date().toISOString(),
        }),
      });
      if (!n8nResponse.ok) {
        throw new Error(`N8N webhook falló con status ${n8nResponse.status}`);
      }
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 3) Sin destino configurado.
    if (process.env.NODE_ENV !== 'production') {
      console.warn('⚠️ Sin RESEND_AUDIENCE_ID ni N8N_WEBHOOK_URL. Simulando éxito (solo dev). Correo:', email);
      return NextResponse.json({ success: true, warning: 'Simulated locally' }, { status: 200 });
    }
    console.error('Suscripción sin destino configurado. Lead NO capturado:', email);
    return NextResponse.json(
      { error: 'El servicio de suscripción no está disponible ahora mismo.' },
      { status: 503 }
    );
  } catch (error) {
    console.error('Error procesando suscripción:', error);
    return NextResponse.json({ error: 'Fallo interno al capturar lead' }, { status: 500 });
  }
}
