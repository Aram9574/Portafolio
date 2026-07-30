'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'

/**
 * PostHog (product analytics: heatmaps + session replay).
 * Respeta el consentimiento del banner de cookies: no captura nada hasta que
 * el visitante acepta analítica (mismo estado que GA, clave 'cookie-consent-v1').
 * El project key es público (se expone en el cliente); se puede sobreescribir
 * con NEXT_PUBLIC_POSTHOG_KEY / NEXT_PUBLIC_POSTHOG_HOST.
 */
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_JO61t1HfLeUnKK3XTioGiuDjKAkHtpsMYb5NqQthyne'
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com'
const CONSENT_KEY = 'cookie-consent-v1'

export default function PostHogProvider() {
  useEffect(() => {
    if (!POSTHOG_KEY) return

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: 'identified_only',
      // No capturar hasta que haya consentimiento explícito.
      opt_out_capturing_by_default: true,
      capture_pageview: true,
      autocapture: true,
      // Repetición de sesión con inputs enmascarados (no grabar lo que escriben).
      session_recording: {
        maskAllInputs: true,
      },
    })

    // Exponer la instancia facilita comprobar el estado del consentimiento
    // desde la consola del navegador (window.posthog.has_opted_out_capturing()).
    ;(window as unknown as { posthog?: typeof posthog }).posthog = posthog

    const applyConsent = () => {
      const granted = localStorage.getItem(CONSENT_KEY) === 'granted'
      if (granted) posthog.opt_in_capturing()
      else posthog.opt_out_capturing()
    }

    applyConsent()
    window.addEventListener('cookie-consent-changed', applyConsent)
    return () => window.removeEventListener('cookie-consent-changed', applyConsent)
  }, [])

  return null
}
