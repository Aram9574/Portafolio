'use client'

import { useEffect } from 'react'
import { analyticsEvents } from '@/lib/analytics'

/**
 * Rastreador global de clics para eventos clave de GA4.
 *
 * Muchos enlaces (descargar CV, abrir demo) viven en páginas de servidor, donde
 * no se puede usar onClick. En vez de instrumentar cada enlace uno por uno, se
 * detectan aquí por su destino: así queda cubierto todo el sitio, incluido el
 * contenido de blog en markdown y cualquier enlace que se añada en el futuro.
 *
 * Eventos que emite:
 *   download_cv  → clic en un PDF de /cv/
 *   open_demo    → clic en una demo de Hugging Face Spaces
 */
export default function AutoEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest?.('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      if (!href) return

      // Los enlaces con data-analytics="manual" ya emiten su propio evento
      // (onClick del componente); saltarlos evita contar la conversión dos veces.
      if (anchor.dataset.analytics === 'manual') return

      // Descarga del CV (cualquier PDF servido desde /cv/).
      if (/^\/cv\/.+\.pdf$/i.test(href)) {
        const label = (anchor.textContent || 'CV').trim().slice(0, 60)
        analyticsEvents.downloadCV(label)
        return
      }

      // Demo pública en Hugging Face Spaces.
      const demoMatch = href.match(/huggingface\.co\/spaces\/[^/]+\/([^/?#]+)/i)
      if (demoMatch) {
        analyticsEvents.openDemo(demoMatch[1])
      }
    }

    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
