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
  const id = process.env.NEXT_PUBLIC_GA_ID
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
