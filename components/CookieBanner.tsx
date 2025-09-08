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
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="card max-w-xl p-4 text-sm text-muted">
        <p>
          Usamos cookies analíticas respetuosas con la privacidad (desactivadas por defecto). Puedes aceptar para habilitarlas. Más info en{' '}
          <a className="underline hover:text-white" href="/cookies.html">Cookies</a>.
        </p>
        <div className="mt-3 flex gap-3">
          <button
            className="btn-primary text-sm"
            onClick={() => { localStorage.setItem(KEY, 'true'); setConsented(true); setVisible(false) }}
          >Aceptar</button>
          <button
            className="btn-outline text-sm"
            onClick={() => { localStorage.setItem(KEY, 'false'); setVisible(false) }}
          >Rechazar</button>
        </div>
      </div>
    </div>
  )
}

