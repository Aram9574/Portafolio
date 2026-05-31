"use client";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // Easing personalizado 'premium': cubic-bezier(0.32, 0.72, 0, 1).
      // La curva real está definida en app/globals.css (sobrescribe la default de AOS).
      easing: 'premium',
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

