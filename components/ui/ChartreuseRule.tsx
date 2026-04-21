'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Línea horizontal chartreuse que se "traza" de izquierda a derecha cuando
 * entra en viewport. Decorativa; reemplaza una regla estática para dar
 * ritmo editorial sin ruido.
 */
export default function ChartreuseRule({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative h-[3px] w-full bg-ink/10 ${className}`} aria-hidden="true">
      <div
        className="absolute inset-y-0 left-0"
        style={{
          width: visible || reduced ? '100%' : '0%',
          background: 'var(--accent)',
          transition: reduced ? 'none' : 'width 900ms cubic-bezier(0.65, 0, 0.35, 1)',
          willChange: 'width',
        }}
      />
    </div>
  )
}
