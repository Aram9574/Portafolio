import { NextResponse } from 'next/server';
import { resolveAudienceId } from '@/lib/resend-audience';

// Validación básica de formato de email.
function isValidEmail(email: unknown): email is string {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Red de seguridad: si no se puede guardar el contacto en la audiencia,
 * avisa por email para que el lead no se pierda nunca en silencio.
 */
async function avisarPorEmail(apiKey: string, email: string, source: string) {
  const to = process.env.CONTACT_TO;
  if (!to) return false;
  const from = process.env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to,
      subject: `Nueva suscripción a la newsletter: ${email}`,
      text: `Alguien se ha suscrito desde el portafolio.\n\nEmail: ${email}\nOrigen: ${source}\n\nNo se pudo añadir a la audiencia de Resend automáticamente, así que queda registrado aquí.`,
    }),
  });
  return res.ok;
}

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();
    const origen = typeof source === 'string' && source ? source : 'Portafolio';

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Email no válido' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    // 1) Preferente: guardar el contacto en la audiencia de Resend.
    //    El ID se resuelve solo (o se crea la audiencia) si no está configurado.
    if (resendKey) {
      const audienceId = await resolveAudienceId(resendKey);

      if (audienceId) {
        const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, unsubscribed: false }),
        });

        if (res.ok) {
          return NextResponse.json({ success: true }, { status: 200 });
        }
        const detail = await res.text().catch(() => '');
        // Contacto duplicado: ya está suscrito, lo tratamos como éxito.
        if (res.status === 409 || /already exists/i.test(detail)) {
          return NextResponse.json({ success: true, already: true }, { status: 200 });
        }
        console.error('Resend audience error:', res.status, detail.slice(0, 300));
      }

      // 2) La audiencia falló: avisamos por email para no perder el lead.
      if (await avisarPorEmail(resendKey, email, origen)) {
        return NextResponse.json({ success: true, fallback: 'email' }, { status: 200 });
      }
    }

    // 3) Alternativa: webhook n8n/Make si está configurado.
    if (n8nWebhookUrl) {
      const n8nResponse = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: origen, timestamp: new Date().toISOString() }),
      });
      if (!n8nResponse.ok) {
        throw new Error(`N8N webhook falló con status ${n8nResponse.status}`);
      }
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4) Sin ningún destino disponible.
    if (process.env.NODE_ENV !== 'production') {
      console.warn('⚠️ Sin destino de suscripción configurado. Simulando éxito (solo dev). Correo:', email);
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
