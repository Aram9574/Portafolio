'use client'

import { useEffect, useState } from 'react'

/**
 * Barra de progreso de lectura sticky bajo la navbar.
 * Usa requestAnimationFrame (sin listener no throttled) y respeta
 * prefers-reduced-motion fijando la barra al 0% sin animar.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let ticking = false
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      const pct = total > 0 ? (scrollTop / total) * 100 : 0
      setProgress(Math.min(100, Math.max(0, pct)))
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-16 left-0 right-0 z-30 h-[3px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full origin-left"
        style={{
          width: `${progress}%`,
          background: 'var(--accent)',
          transition: 'width 80ms linear',
          willChange: 'width',
        }}
      />
    </div>
  )
}
