import { ImageResponse } from 'next/og'
import { OgFrame } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Aram Zakzuk, MD — Clinical AI Specialist · Madrid'

export default function Image() {
  return new ImageResponse(
    (
      <OgFrame
        eyebrowLeft="Médico · IA en salud · Madrid"
        title="Aram Zakzuk, MD"
        subtitle="Clinical AI Specialist · MD"
        footerLeft="EU AI Act · MDR · EHDS · HL7 FHIR"
        footerRight="alejandrozakzuk.com"
        titleSize={96}
      />
    ),
    size
  )
}
