import Link from 'next/link'

type Props = {
  href: string
  title: string
  subtitle: string
  bullets: string[]
  stack: string[]
}

export function ProjectCard({ href, title, subtitle, bullets, stack }: Props) {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl text-white font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted">{subtitle}</p>
        <ul className="mt-4 list-disc list-inside text-sm text-muted space-y-1">
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <li key={s} className="chip flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path stroke="currentColor" d="M12 2v20M2 12h20"/>
            </svg>
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <a href={href} className="inline-flex items-center px-4 py-2 rounded-xl border border-teal-400 text-teal-300 font-semibold hover:bg-white/5 transition text-sm">Leer caso</a>
      </div>
    </div>
  )
}
