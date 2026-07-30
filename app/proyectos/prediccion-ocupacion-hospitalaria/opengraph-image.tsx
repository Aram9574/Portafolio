import { ImageResponse } from 'next/og'
import { OgFrame } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Predicción de ocupación hospitalaria con IA'

export default function Image() {
  return new ImageResponse(
    (
      <OgFrame
        eyebrowLeft="Case study · Aram Zakzuk, MD"
        eyebrowRight="Hospital Ops"
        title="Predecir camas hospitalarias con criterio clínico-operativo"
        subtitle="Reducción estimada 30–40% varianza · HL7 FHIR R4"
        footerLeft="alejandrozakzuk.com/proyectos/prediccion-ocupacion-hospitalaria"
        footerRight="Python · Time Series"
        titleSize={60}
      />
    ),
    size
  )
}
