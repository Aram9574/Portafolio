import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Aram Zakzuk, MD — Healthcare & Clinical AI Consultant'

export default function Image() {
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
          padding: '72px',
          fontFamily: 'serif',
          color: '#111110',
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.7 }}>
          Madrid · España
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', fontSize: 100, lineHeight: 0.95, fontWeight: 500, letterSpacing: -3 }}>
            Aram Zakzuk, MD
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ height: 6, width: 100, background: '#1F6F5C' }} />
            <div style={{ fontSize: 36, letterSpacing: -0.5 }}>
              Healthcare & Clinical AI Consultant
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, opacity: 0.7, borderTop: '1px solid #111110', paddingTop: 28 }}>
          <span>EU AI Act · MDR · EHDS · HL7 FHIR</span>
          <span>alejandrozakzuk.com</span>
        </div>
      </div>
    ),
    size
  )
}
