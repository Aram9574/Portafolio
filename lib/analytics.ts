type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (command: string, event: string, params?: EventParams) => void
  }
}

export function trackEvent(event: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params)
    return
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...params })
  }
}

export const analyticsEvents = {
  clickCTA: (location: string, label: string) =>
    trackEvent('click_cta', { location, label }),
  clickContact: (channel: 'email' | 'linkedin' | 'github' | 'calendly' | 'huggingface') =>
    trackEvent('click_contact', { channel }),
  downloadCV: (variant: string) =>
    trackEvent('download_cv', { variant }),
  newsletterSubscribe: (source: string) =>
    trackEvent('newsletter_subscribe', { source }),
  printOnePager: () =>
    trackEvent('print_one_pager'),
  openDemo: (project: string) =>
    trackEvent('open_demo', { project }),
} as const
