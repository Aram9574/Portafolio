"use client";
import { useEffect } from 'react'

export default function TiltFX() {
  useEffect(() => {
    // Respeta usuarios con menor movimiento y evita activar en pantallas táctiles
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const els = Array.from(document.querySelectorAll<HTMLElement>([
      '[data-tilt]',
      '.btn-primary',
      '.btn-outline',
      '.card',
      '.chip',
      '.rounded-xl.border.bg-white\\/5.p-6',
      '.rounded-2xl.border.bg-white\\/5.p-6',
      'a',
      'button',
      "[role='button']",
    ].join(',')))
    const cleanup: Array<() => void> = []

      const bind = (el: HTMLElement) => {
        const isSmall = el.matches("a, button, [role='button'], .chip")
        const max = Number(el.dataset.tiltMax || (isSmall ? 3 : 6))
        const perspective = Number(el.dataset.tiltPerspective || 700)
        const damping = Number(el.dataset.tiltDamping || 0.12)
      let raf = 0
      let rx = 0, ry = 0, tx = 0, ty = 0
      let entered = false

      const onEnter = () => {
        entered = true
        el.style.willChange = 'transform'
      }
      const onMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) / (rect.width / 2)
        const dy = (e.clientY - cy) / (rect.height / 2)
        tx = Math.max(-1, Math.min(1, dx))
        ty = Math.max(-1, Math.min(1, dy))
        if (!raf) raf = requestAnimationFrame(tick)
      }
      const onLeave = () => {
        entered = false
        tx = 0; ty = 0
        if (!raf) raf = requestAnimationFrame(tick)
      }
      const tick = () => {
        rx += (ty * max - rx) * damping
        ry += (-tx * max - ry) * damping
        el.style.transform = `perspective(${perspective}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`
        if (Math.abs(rx - ty * max) > 0.01 || Math.abs(ry - -tx * max) > 0.01 || entered) {
          raf = requestAnimationFrame(tick)
        } else {
          el.style.willChange = ''
          raf = 0
        }
      }

      el.addEventListener('pointerenter', onEnter)
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
      cleanup.push(() => {
        el.removeEventListener('pointerenter', onEnter)
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
      })
    }

    els.forEach(bind)
    return () => { cleanup.forEach(fn => fn()) }
  }, [])
  return null
}
