"use client";
import { useEffect, useState } from 'react'

const KEY = 'cookie-consent-v1'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const v = localStorage.getItem(KEY)
    if (!v) setVisible(true)
    else setConsented(v === 'true')
  }, [])

  useEffect(() => {
    if (!consented) return
    if (process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) {
      const s = document.createElement('script')
      s.setAttribute('defer', '')
      s.setAttribute('data-domain', process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN)
      s.src = 'https://plausible.io/js/script.js'
      document.body.appendChild(s)
    }
  }, [consented])

  if (!visible) return null
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="border border-rule bg-paper p-4 text-xs text-ink-2">
        <p>
          Usamos cookies técnicas necesarias y, opcionalmente, analítica anónima (desactivada por defecto). Más info en{' '}
          <a className="ed-link" href="/cookies.html">Cookies</a>.
        </p>
        <div className="mt-3 flex gap-2">
          <button
            className="btn-ink text-xs px-3 py-1.5"
            onClick={() => { localStorage.setItem(KEY, 'true'); setConsented(true); setVisible(false) }}
          >Aceptar</button>
          <button
            className="btn-ghost text-xs px-3 py-1.5"
            onClick={() => { localStorage.setItem(KEY, 'false'); setVisible(false) }}
          >Rechazar</button>
        </div>
      </div>
    </div>
  )
}
