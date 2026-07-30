'use client'

import Script from 'next/script'

/**
 * Google Analytics 4 con Consent Mode v2.
 * - Por defecto TODAS las categorías de consentimiento están "denied".
 * - El CookieBanner llama a window.gtag('consent','update', ...) cuando el
 *   usuario acepta. GA4 solo emite pings y cookies tras esa actualización.
 * - Esto cumple con LSSI art. 22.2, RGPD y directrices AEPD.
 */
export default function GoogleAnalytics() {
  // El Measurement ID de GA4 es público (aparece en el HTML), así que lo dejamos
  // cableado como valor por defecto para que funcione sin configurar Vercel.
  // Se puede sobreescribir con la variable de entorno NEXT_PUBLIC_GA_ID.
  const id = process.env.NEXT_PUBLIC_GA_ID || 'G-TX3LPT5TME'
  if (!id) return null

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
    </>
  )
}
