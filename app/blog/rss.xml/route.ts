import { blogPosts } from '@/lib/data/blog'

const BASE_URL = 'https://alejandrozakzuk.com'

function escape(xml: string): string {
  return xml
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const items = sorted
    .map((p) => {
      const url = `${BASE_URL}/blog/${p.slug}`
      const pubDate = new Date(p.date).toUTCString()
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escape(p.description)}</description>
      <author>noreply@alejandrozakzuk.com (Aram Zakzuk)</author>
      ${p.tags.map((t) => `<category>${escape(t)}</category>`).join('\n      ')}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aram Zakzuk — Healthcare &amp; Clinical AI Consultant</title>
    <link>${BASE_URL}/blog</link>
    <description>Análisis ejecutivo y técnico sobre EHDS, EU AI Act, CDSS y transformación digital sanitaria.</description>
    <language>es-ES</language>
    <atom:link href="${BASE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
