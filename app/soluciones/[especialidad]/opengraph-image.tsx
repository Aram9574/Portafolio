import { ImageResponse } from 'next/og'
import { OgFrame } from '@/lib/og'

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
      <OgFrame
        eyebrowLeft="Soluciones · Aram Zakzuk, MD"
        eyebrowRight="EU AI Act · MDR"
        title={`IA clínica en ${nombre}`}
        footerLeft="alejandrozakzuk.com/soluciones"
        footerRight="Clinical AI Specialist · MD"
        titleSize={64}
      />
    ),
    size
  )
}
