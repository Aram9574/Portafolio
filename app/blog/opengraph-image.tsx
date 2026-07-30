import { ImageResponse } from 'next/og'
import { OgFrame } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Blog — Aram Zakzuk, MD'

export default function Image() {
  return new ImageResponse(
    (
      <OgFrame
        eyebrowLeft="Blog · Aram Zakzuk, MD"
        title="Notas editoriales"
        subtitle="EHDS · EU AI Act · CDSS · Transformación digital sanitaria"
        footerLeft="alejandrozakzuk.com/blog"
        footerRight="Publicación semanal"
        titleSize={78}
      />
    ),
    size
  )
}
