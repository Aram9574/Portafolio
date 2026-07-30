import { ImageResponse } from 'next/og'
import { OgFrame } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'ClinAI Classifier — Clasificador EU AI Act'

export default function Image() {
  return new ImageResponse(
    (
      <OgFrame
        eyebrowLeft="Case study · Aram Zakzuk, MD"
        eyebrowRight="EU AI Act"
        title="ClinAI Classifier"
        subtitle="El clasificador EU AI Act que nadie había escrito"
        footerLeft="alejandrozakzuk.com/proyectos/clinai-classifier"
        footerRight="Open source · Hugging Face"
        titleSize={76}
      />
    ),
    size
  )
}
