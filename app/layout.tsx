import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { AOSProvider } from '@/components/AOSProvider'
import ClinicalTicker from '@/components/layout/ClinicalTicker'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import { SOCIAL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL('https://alejandrozakzuk.com'),
  title: {
    default: 'Aram Zakzuk · Médico · Salud Digital · IA aplicada a Sanidad',
    template: '%s · Aram Zakzuk'
  },
  description: 'Médico (Universidad del Rosario, 6,5 años hospital) + Máster en Salud Digital (Universidad Europea) + Máster en IA aplicada a Sanidad (CEMP). Asesoramiento estratégico para la transformación digital del sistema sanitario: licitaciones públicas, EHDS, Medical Affairs y despliegue de IA clínica.',
  keywords: [
    'Salud Digital',
    'eHealth',
    'Transformación Digital Sanitaria',
    'Consultoría HealthTech',
    'EHDS',
    'Espacio Europeo de Datos Sanitarios',
    'Licitaciones públicas sanidad',
    'Ministerio de Sanidad',
    'Medical Affairs',
    'IA aplicada a Sanidad',
    'Clinical AI',
    'Clinical Decision Support Systems',
    'CDSS',
    'SaMD',
    'EU AI Act',
    'MDR',
    'HL7 FHIR',
    'SNOMED-CT',
    'Madrid'
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com',
    siteName: 'Aram Zakzuk · Médico · Salud Digital · IA en Sanidad',
    title: 'Aram Zakzuk · Médico · Salud Digital · IA aplicada a Sanidad',
    description: 'Un perfil, tres capas: Medicina, Máster en Salud Digital y Máster en IA aplicada a Sanidad. Asesoramiento estratégico para hospitales, consultoras y administración pública.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aram Zakzuk · Médico · Salud Digital · IA aplicada a Sanidad',
    description: 'Medicina + Salud Digital + IA en Sanidad. Estrategia, licitaciones públicas, EHDS y Medical Affairs.',
    images: ['/og-default.png']
  },
  authors: [{ name: 'Aram Zakzuk', url: 'https://alejandrozakzuk.com' }],
  category: 'healthcare'
}

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['opsz', 'SOFT'],
})

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="ink" className={`${fraunces.variable} ${plex.variable} ${mono.variable}`}>
      <body className="relative min-h-screen antialiased flex flex-col">
        <GoogleAnalytics />
        <AOSProvider />
        <Navbar />
        <ClinicalTicker />
        <main className="flex-1 pt-[calc(4rem+2rem)]">{children}</main>
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Person', 'Physician'],
              name: 'Aram Zakzuk',
              honorificPrefix: 'Dr.',
              jobTitle: 'Médico · Consultor en Salud Digital · Especialista en IA aplicada a Sanidad',
              description: 'Médico con doble máster (Salud Digital / eHealth por Universidad Europea e IA aplicada a Sanidad por CEMP). Asesoramiento estratégico a hospitales, consultoras y administración pública en transformación digital sanitaria, licitaciones, EHDS y despliegue de IA clínica.',
              address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
              url: 'https://alejandrozakzuk.com',
              image: 'https://alejandrozakzuk.com/og-default.png',
              sameAs: [SOCIAL.linkedin, SOCIAL.github],
              alumniOf: [
                { '@type': 'CollegeOrUniversity', name: 'Universidad del Rosario' },
                { '@type': 'CollegeOrUniversity', name: 'Universidad Europea de Madrid' },
                { '@type': 'CollegeOrUniversity', name: 'Centro Europeo de Másters y Posgrados (CEMP)' },
                { '@type': 'CollegeOrUniversity', name: 'Stanford University' }
              ],
              knowsAbout: [
                'Medicina Interna',
                'Atención Primaria',
                'Urgencias',
                'Salud Digital',
                'eHealth',
                'Transformación Digital Sanitaria',
                'EHDS',
                'Licitaciones públicas en sanidad',
                'Medical Affairs',
                'Clinical Decision Support Systems',
                'Machine Learning aplicado a medicina',
                'Healthcare Data Analytics',
                'EU AI Act',
                'MDR',
                'SaMD',
                'HL7 FHIR',
                'SNOMED-CT'
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
