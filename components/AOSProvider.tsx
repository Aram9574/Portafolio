"use client";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 60,
      startEvent: 'load',
      disableMutationObserver: false,
    })
    // Re-evaluar al montar para elementos ya visibles en el viewport inicial
    const t = setTimeout(() => AOS.refreshHard(), 100)
    return () => clearTimeout(t)
  }, [])
  return null
}

