"use client";
import { useEffect, useState } from 'react'
import Link from 'next/link'

const KEY = 'cookie-consent-v1'

type Consent = 'granted' | 'denied'

function updateGtagConsent(status: Consent) {
  if (typeof window === 'undefined') return
  // @ts-ignore
  if (typeof window.gtag !== 'function') return
  // @ts-ignore
  window.gtag('consent', 'update', {
    analytics_storage: status,
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
  })
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const v = localStorage.getItem(KEY)
    if (!v) {
      setVisible(true)
      return
    }
    // Reaplicar consentimiento en cada carga para que Consent Mode tenga estado correcto.
    updateGtagConsent(v === 'granted' ? 'granted' : 'denied')
  }, [])

  const accept = () => {
    localStorage.setItem(KEY, 'granted')
    updateGtagConsent('granted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(KEY, 'denied')
    updateGtagConsent('denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 right-4 z-50 max-w-sm"
      role="dialog"
      aria-label="Consentimiento de cookies"
      aria-live="polite"
    >
      <div className="border border-ink bg-paper p-4 text-xs text-ink-2 shadow-sm">
        <p className="leading-relaxed">
          Este sitio usa cookies técnicas necesarias para su funcionamiento. Opcionalmente, usamos{' '}
          <strong className="text-ink">analítica anónima (Google Analytics 4)</strong> para medir el uso
          del sitio, solo si das tu consentimiento. Más información en{' '}
          <Link className="ed-link" href="/legal/cookies">
            Política de cookies
          </Link>
          .
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            className="btn-ink text-xs px-3 py-1.5"
            onClick={accept}
            type="button"
          >
            Aceptar analítica
          </button>
          <button
            className="btn-ghost text-xs px-3 py-1.5"
            onClick={reject}
            type="button"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  )
}
