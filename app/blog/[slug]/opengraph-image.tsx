import { ImageResponse } from 'next/og'
import { blogPosts } from '@/lib/data/blog'
import { OgFrame } from '@/lib/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Aram Zakzuk, MD — Clinical AI Specialist'

export default function Image({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  const title = post?.title ?? 'Aram Zakzuk, MD — Clinical AI Specialist'
  const tag = post?.tags?.[0] ?? 'Clinical AI'
  const date = post?.date
    ? new Date(post.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
    : ''

  return new ImageResponse(
    (
      <OgFrame
        eyebrowLeft="Aram Zakzuk · Médico · IA"
        eyebrowRight={tag}
        title={title.length > 110 ? title.slice(0, 107) + '…' : title}
        footerLeft="alejandrozakzuk.com/blog"
        footerRight={date}
        titleSize={60}
      />
    ),
    size
  )
}
