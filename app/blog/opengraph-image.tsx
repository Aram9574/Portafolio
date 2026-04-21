import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Blog — Aram Zakzuk, MD'

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
          Blog · Aram Zakzuk, MD
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', height: 6, width: 120, background: '#1F6F5C' }} />
          <div style={{ display: 'flex', fontSize: 78, lineHeight: 1.05, fontWeight: 500, letterSpacing: -2 }}>
            Notas editoriales
          </div>
          <div style={{ display: 'flex', fontSize: 32, opacity: 0.8, letterSpacing: -0.5 }}>
            EHDS · EU AI Act · CDSS · Transformación digital sanitaria
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, opacity: 0.7, borderTop: '1px solid #111110', paddingTop: 28 }}>
          <div style={{ display: 'flex' }}>alejandrozakzuk.com/blog</div>
          <div style={{ display: 'flex' }}>Publicación semanal</div>
        </div>
      </div>
    ),
    size
  )
}
