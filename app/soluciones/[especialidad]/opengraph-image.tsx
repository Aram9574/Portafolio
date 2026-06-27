import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Aram Zakzuk — IA clínica por especialidad'

const nombres: Record<string, string> = {
  radiologia: 'Radiología',
  cardiologia: 'Cardiología',
  oncologia: 'Oncología',
}

export default function Image({ params }: { params: { especialidad: string } }) {
  const nombre = nombres[params.especialidad] ?? 'IA clínica'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#EFE8D9',
          padding: '64px',
          fontFamily: 'serif',
          color: '#111110',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', opacity: 0.7 }}>
          <div style={{ display: 'flex' }}>Soluciones · Aram Zakzuk, MD</div>
          <div style={{ display: 'flex' }}>EU AI Act · MDR</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', height: 6, width: 120, background: '#1F6F5C' }} />
          <div style={{ display: 'flex', fontSize: 60, lineHeight: 1.1, fontWeight: 500, letterSpacing: -1 }}>
            IA clínica en {nombre}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, opacity: 0.7, borderTop: '1px solid #111110', paddingTop: 24 }}>
          <div style={{ display: 'flex' }}>alejandrozakzuk.com/soluciones</div>
          <div style={{ display: 'flex' }}>Clinical AI Specialist · MD</div>
        </div>
      </div>
    ),
    size
  )
}
