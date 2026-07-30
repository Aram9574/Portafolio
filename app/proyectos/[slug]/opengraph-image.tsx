import { ImageResponse } from 'next/og'
import { projects } from '@/lib/data/projects'
import { OgFrame } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Aram Zakzuk — Case Study'

export default function Image({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  const title = project?.title ?? 'Case Study · Aram Zakzuk, MD'
  const tag = project?.tags?.[0] ?? 'Clinical AI'

  return new ImageResponse(
    (
      <OgFrame
        eyebrowLeft="Case study · Aram Zakzuk, MD"
        eyebrowRight={tag}
        title={title.length > 110 ? title.slice(0, 107) + '…' : title}
        footerLeft="alejandrozakzuk.com/proyectos"
        footerRight="Clinical AI Specialist · MD"
        titleSize={60}
      />
    ),
    size
  )
}
