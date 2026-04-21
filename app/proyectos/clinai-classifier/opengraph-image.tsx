import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'ClinAI Classifier — Clasificador EU AI Act'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#EFE8D9', padding: '64px', fontFamily: 'serif', color: '#111110' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', opacity: 0.7 }}>
          <div style={{ display: 'flex' }}>Case Study · Aram Zakzuk, MD</div>
          <div style={{ display: 'flex' }}>EU AI Act</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', height: 6, width: 120, background: '#1F6F5C' }} />
          <div style={{ display: 'flex', fontSize: 72, lineHeight: 1.05, fontWeight: 500, letterSpacing: -2 }}>ClinAI Classifier</div>
          <div style={{ display: 'flex', fontSize: 28, opacity: 0.75, letterSpacing: -0.3 }}>El clasificador EU AI Act que nadie había escrito</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, opacity: 0.7, borderTop: '1px solid #111110', paddingTop: 24 }}>
          <div style={{ display: 'flex' }}>alejandrozakzuk.com/proyectos/clinai-classifier</div>
          <div style={{ display: 'flex' }}>Open source · Hugging Face</div>
        </div>
      </div>
    ),
    size
  )
}
