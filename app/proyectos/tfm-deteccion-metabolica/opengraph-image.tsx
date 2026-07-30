import { ImageResponse } from 'next/og'
import { OgFrame } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'CDSS de riesgo diabético — AUC-ROC 0.942'

export default function Image() {
  return new ImageResponse(
    (
      <OgFrame
        eyebrowLeft="Case study · Aram Zakzuk, MD"
        eyebrowRight="CDSS · TFM"
        title="CDSS de riesgo diabético con AUC-ROC 0.942"
        subtitle="253.680 registros reales · XAI/SHAP · RGPD + EU AI Act + EHDS"
        footerLeft="alejandrozakzuk.com/proyectos/tfm-deteccion-metabolica"
        footerRight="Random Forest · Hugging Face"
        titleSize={60}
      />
    ),
    size
  )
}
