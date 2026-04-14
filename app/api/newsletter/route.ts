import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email requerido' }, { status: 400 });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    // Si no está definida la URL de N8N (desarrollo local sin configurar), simulamos éxito
    if (!n8nWebhookUrl) {
      console.warn('⚠️ N8N_WEBHOOK_URL no está definido. Simulando éxito de captura (Modo Dev). Correo capturado:', email);
      return NextResponse.json({ success: true, warning: 'Simulated locally' }, { status: 200 });
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
