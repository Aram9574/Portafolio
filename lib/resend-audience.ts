/**
 * Resuelve el ID de la audiencia de Resend donde se guardan los suscriptores.
 *
 * Orden de preferencia:
 *   1. RESEND_AUDIENCE_ID si está definido (control explícito).
 *   2. Buscar una audiencia con AUDIENCE_NAME en la cuenta.
 *   3. Crearla si no existe.
 *
 * Así la newsletter funciona sin configurar nada más que RESEND_API_KEY, que
 * ya está en producción para el formulario de contacto. El id resuelto se
 * memoriza en el módulo para no repetir llamadas en cada suscripción.
 */

const AUDIENCE_NAME = 'Portafolio · Newsletter'

let cachedId: string | null = null

type ResendAudience = { id: string; name: string }

async function listAudiences(apiKey: string): Promise<ResendAudience[]> {
  const res = await fetch('https://api.resend.com/audiences', {
    headers: { Authorization: `Bearer ${apiKey}` },
    // Las audiencias cambian poco; evita repetir la llamada en cada request.
    next: { revalidate: 300 },
  })
  if (!res.ok) throw new Error(`listAudiences ${res.status}`)
  const json = (await res.json()) as { data?: ResendAudience[] }
  return json.data ?? []
}

async function createAudience(apiKey: string): Promise<string> {
  const res = await fetch('https://api.resend.com/audiences', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: AUDIENCE_NAME }),
  })
  if (!res.ok) throw new Error(`createAudience ${res.status}`)
  const json = (await res.json()) as { id?: string }
  if (!json.id) throw new Error('createAudience sin id')
  return json.id
}

export async function resolveAudienceId(apiKey: string): Promise<string | null> {
  const explicit = process.env.RESEND_AUDIENCE_ID
  if (explicit) return explicit
  if (cachedId) return cachedId

  try {
    const audiences = await listAudiences(apiKey)
    const found = audiences.find((a) => a.name === AUDIENCE_NAME) ?? audiences[0]
    cachedId = found ? found.id : await createAudience(apiKey)
    return cachedId
  } catch (err) {
    // Si la API key no tiene permisos sobre audiencias, no rompemos la suscripción:
    // el endpoint recurre al aviso por email como red de seguridad.
    console.error('resolveAudienceId falló:', (err as Error).message)
    return null
  }
}
