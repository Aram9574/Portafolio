/**
 * Plantilla compartida para las imágenes Open Graph (tarjetas sociales).
 * Aplica el Design Language: crema, tinta, un solo naranja, hairlines, sans.
 * La usan todos los opengraph-image.tsx del sitio para mantener coherencia.
 */

const CREMA = '#f7f7f4'
const INK = '#26251e'
const MUTED = '#807d72'
const ACCENT = '#f54e00'
const HAIR = '#cfcdc4'

export function OgFrame({
  eyebrowLeft,
  eyebrowRight,
  title,
  subtitle,
  footerLeft,
  footerRight,
  titleSize = 76,
}: {
  eyebrowLeft: string
  eyebrowRight?: string
  title: string
  subtitle?: string
  footerLeft: string
  footerRight: string
  titleSize?: number
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: CREMA,
        padding: 72,
        fontFamily: 'sans-serif',
        color: INK,
      }}
    >
      {/* Rótulo superior con punto naranja */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 24,
          color: MUTED,
          letterSpacing: -0.2,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', width: 14, height: 14, borderRadius: 9999, background: ACCENT }} />
          <div style={{ display: 'flex' }}>{eyebrowLeft}</div>
        </div>
        <div style={{ display: 'flex' }}>{eyebrowRight ?? ''}</div>
      </div>

      {/* Título + acento */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div
          style={{
            display: 'flex',
            fontSize: titleSize,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: -2,
            color: INK,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ display: 'flex', height: 4, width: 64, background: ACCENT, borderRadius: 9999 }} />
            <div style={{ display: 'flex', fontSize: 30, color: MUTED, letterSpacing: -0.3 }}>{subtitle}</div>
          </div>
        ) : (
          <div style={{ display: 'flex', height: 4, width: 96, background: ACCENT, borderRadius: 9999 }} />
        )}
      </div>

      {/* Pie con hairline */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 22,
          color: MUTED,
          borderTop: `1px solid ${HAIR}`,
          paddingTop: 28,
        }}
      >
        <div style={{ display: 'flex' }}>{footerLeft}</div>
        <div style={{ display: 'flex' }}>{footerRight}</div>
      </div>
    </div>
  )
}
