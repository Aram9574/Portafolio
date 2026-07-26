import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email requerido' }, { status: 400 });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      // En desarrollo, sin webhook, simulamos éxito para poder probar el formulario.
      if (process.env.NODE_ENV !== 'production') {
        console.warn('⚠️ N8N_WEBHOOK_URL no definido. Simulando éxito (solo dev). Correo:', email);
        return NextResponse.json({ success: true, warning: 'Simulated locally' }, { status: 200 });
      }
      // En producción NUNCA fingimos éxito: perderíamos el lead en silencio.
      // Fallamos de forma visible para no engañar al usuario ni ocultar el fallo de config.
      console.error('N8N_WEBHOOK_URL no configurado en producción. Lead NO capturado:', email);
      return NextResponse.json(
        { error: 'El servicio de suscripción no está disponible ahora mismo.' },
        { status: 503 }
      );
    }

    // Llamada real al Webhook de tu cuenta de n8n o Make
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        source: 'Portafolio - Lead Magnet IA Clinical',
        timestamp: new Date().toISOString()
      }),
    });

    if (!n8nResponse.ok) {
      throw new Error(`N8N webhook falló con status ${n8nResponse.status}`);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error procesando lead magnet:', error);
    return NextResponse.json({ error: 'Fallo interno al capturar lead' }, { status: 500 });
  }
}
