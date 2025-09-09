import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { AOSProvider } from '@/components/AOSProvider'
import BackgroundSpotlight from '@/components/layout/BackgroundSpotlight'
import NoiseOverlay from '@/components/layout/NoiseOverlay'

export const metadata: Metadata = {
  metadataBase: new URL('https://alejandrozakzuk.com'),
  title: {
    default: 'Alejandro Zakzuk, MD | AI in Healthcare',
    template: '%s · Alejandro Zakzuk, MD'
  },
  description: 'Médico especializado en IA aplicada a la salud. Diseño y despliego soluciones basadas en datos para mejorar la decisión clínica, optimizar flujos hospitalarios e impulsar la interoperabilidad.',
  keywords: ['IA en salud', 'inteligencia artificial sanitaria', 'machine learning clínico', 'interoperabilidad HL7 FHIR', 'Django salud', 'consultoría IA sanitaria', 'Madrid'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com',
    siteName: 'Alejandro Zakzuk, MD | AI in Healthcare',
    title: 'De la bata al código. IA aplicada a la Sanidad.',
    description: 'Portafolio y proyectos de IA clínica, interoperabilidad y ERP.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'De la bata al código. IA aplicada a la Sanidad.',
    description: 'Portafolio y proyectos de IA clínica, interoperabilidad y ERP.',
    images: ['/og-default.png']
  },
  authors: [{ name: 'Alejandro Zakzuk, MD', url: 'https://alejandrozakzuk.com' }],
  category: 'technology'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="dark">
      <body className="relative min-h-screen antialiased flex flex-col">
        <AOSProvider />
        <BackgroundSpotlight />
        <NoiseOverlay />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <CookieBanner />
        {/* Schema.org Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Alejandro Zakzuk, MD',
              jobTitle: 'AI in Healthcare',
              address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
              url: 'https://www.example.com',
              sameAs: ['https://www.linkedin.com/in/azakzuk-md', 'https://github.com/azakzuk']
            })
          }}
        />
      </body>
    </html>
  )
}
