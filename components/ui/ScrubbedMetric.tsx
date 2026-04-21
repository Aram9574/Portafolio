'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  value: string
  label?: string
  /** 0-100. Proporción de la barra chartreuse tras la métrica (visual hint). */
  barPercent?: number
  /** Si value empieza por número, animamos el conteo. */
  animateCount?: boolean
  className?: string
}

/**
 * Métrica hero con reveal cinematográfico al entrar en viewport:
 *  - Fade-up del bloque completo.
 *  - Conteo del número si animateCount y el valor empieza por número.
 *  - Barra chartreuse animada a barPercent%.
 * Respeta prefers-reduced-motion mostrando el valor final estático.
 */
export default function ScrubbedMetric({
  value,
  label,
  barPercent = 80,
  animateCount = true,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [display, setDisplay] = useState<string>(value)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
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
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Count-up si aplica
  useEffect(() => {
    if (!visible || reduced || !animateCount) {
      setDisplay(value)
      return
    }
    const match = value.match(/^(-?\d+[\.,]?\d*)/)
    if (!match) {
      setDisplay(value)
      return
    }
    const target = parseFloat(match[1].replace(',', '.'))
    if (Number.isNaN(target)) {
      setDisplay(value)
      return
    }
    const suffix = value.slice(match[0].length)
    const decimals = (match[1].split(/[\.,]/)[1] || '').length
    const duration = 900
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      const current = target * eased
      const formatted =
        decimals > 0
          ? current.toFixed(decimals).replace('.', match[1].includes(',') ? ',' : '.')
          : Math.round(current).toString()
      setDisplay(`${formatted}${suffix}`)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, reduced, animateCount, value])

  const finalBar = visible ? Math.max(0, Math.min(100, barPercent)) : 0

  return (
    <div
      ref={ref}
      className={`border-l-4 border-ink pl-6 py-2 ${className}`}
      style={{
        opacity: visible || reduced ? 1 : 0,
        transform: visible || reduced ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 600ms ease-out, transform 600ms ease-out',
      }}
    >
      <div className="metric-numeral font-display" aria-label={`${value}${label ? ' — ' + label : ''}`}>
        {display}
      </div>

      {/* Barra chartreuse */}
      <div className="mt-4 h-[6px] w-full max-w-md bg-ink/10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="h-full"
          style={{
            width: `${reduced ? barPercent : finalBar}%`,
            background: 'var(--accent)',
            transition: reduced ? 'none' : 'width 1100ms cubic-bezier(0.2, 0.8, 0.2, 1) 120ms',
            willChange: 'width',
          }}
        />
      </div>

      {label && <p className="mt-3 text-sm text-ink">{label}</p>}
    </div>
  )
}
