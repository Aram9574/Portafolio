import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'GeriCare — Prototipo FHIR — Aram Zakzuk'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#EFE8D9', padding: '64px', fontFamily: 'serif', color: '#111110' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', opacity: 0.7 }}>
          <div style={{ display: 'flex' }}>Case Study · Aram Zakzuk, MD</div>
          <div style={{ display: 'flex' }}>HL7 FHIR R4</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', height: 6, width: 120, background: '#1F6F5C' }} />
          <div style={{ display: 'flex', fontSize: 66, lineHeight: 1.05, fontWeight: 500, letterSpacing: -1 }}>GeriCare — Prototipo FHIR</div>
          <div style={{ display: 'flex', fontSize: 26, opacity: 0.75, letterSpacing: -0.3 }}>ERP sanitario modelado sobre HL7 FHIR R4 para residencias</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, opacity: 0.7, borderTop: '1px solid #111110', paddingTop: 24 }}>
          <div style={{ display: 'flex' }}>alejandrozakzuk.com/proyectos/erp-geriatrico-fhir</div>
          <div style={{ display: 'flex' }}>Python · Django · Prototipo</div>
        </div>
      </div>
    ),
    size
  )
}
