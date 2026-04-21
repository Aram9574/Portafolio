import { ImageResponse } from 'next/og'
import { blogPosts } from '@/lib/data/blog'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Aram Zakzuk — Clinical AI Consultant'

export default function Image({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  const title = post?.title ?? 'Aram Zakzuk — Clinical AI Consultant'
  const tag = post?.tags?.[0] ?? 'Clinical AI'
  const date = post?.date
    ? new Date(post.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
    : ''

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
          padding: '64px',
          fontFamily: 'serif',
          color: '#111110',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', opacity: 0.7 }}>
          <div style={{ display: 'flex' }}>Aram Zakzuk · MD · AI</div>
          <div style={{ display: 'flex' }}>{tag}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', height: 6, width: 120, background: '#C4F542' }} />
          <div style={{ display: 'flex', fontSize: 64, lineHeight: 1.1, fontWeight: 500, letterSpacing: -1 }}>
            {title.length > 110 ? title.slice(0, 107) + '…' : title}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20, opacity: 0.7, borderTop: '1px solid #111110', paddingTop: 24 }}>
          <div style={{ display: 'flex' }}>alejandrozakzuk.com/blog</div>
          <div style={{ display: 'flex' }}>{date}</div>
        </div>
      </div>
    ),
    size
  )
}
