import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { AOSProvider } from '@/components/AOSProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import ClinicalTicker from '@/components/layout/ClinicalTicker'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import { SOCIAL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL('https://alejandrozakzuk.com'),
  title: {
    default: 'Aram Zakzuk · Clinical AI Specialist · CDSS · SaMD · EU AI Act',
    template: '%s · Aram Zakzuk'
  },
  description: 'Médico con 6,5 años de práctica clínica + Clinical AI Specialist. Diseño CDSS y Software as a Medical Device (SaMD) bajo EU AI Act · MDR · RGPD · EHDS · HL7 FHIR. Madrid y Europa.',
  keywords: ['Clinical AI', 'CDSS', 'Clinical Decision Support Systems', 'SaMD', 'EU AI Act', 'MDR', 'HL7 FHIR', 'SNOMED-CT', 'HealthTech', 'Medical Affairs', 'XAI SHAP', 'Madrid'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com',
    siteName: 'Aram Zakzuk | AI in Healthcare',
    title: 'Aram Zakzuk · Clinical AI Specialist · CDSS · SaMD · EU AI Act',
    description: 'Médico con 6,5 años de práctica clínica + Clinical AI Specialist. Diseño CDSS y SaMD bajo EU AI Act · MDR · RGPD · EHDS · HL7 FHIR.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aram Zakzuk · Clinical AI Specialist · CDSS · SaMD · EU AI Act',
    description: 'Médico con 6,5 años de práctica clínica + Clinical AI Specialist. Diseño CDSS y SaMD bajo EU AI Act · MDR · RGPD · EHDS · HL7 FHIR.',
    images: ['/og-default.png']
  },
  authors: [{ name: 'Aram Zakzuk', url: 'https://alejandrozakzuk.com' }],
  category: 'technology'
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
        <CustomCursor />
        <SmoothScrollProvider>
          <AOSProvider />
          <Navbar />
          <ClinicalTicker />
          <main className="flex-1 pt-[calc(4rem+2rem)]">{children}</main>
          <Footer />
          <CookieBanner />
        </SmoothScrollProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Person', 'Physician'],
              name: 'Aram Zakzuk',
              honorificPrefix: 'Dr.',
              jobTitle: 'Clinical AI Specialist · Médico · Consultor HealthTech',
              description: 'Médico experto en analítica de datos e inteligencia artificial clínica. Desarrollador especializado en aplicaciones SaaS para el sector salud con Next.js y ecosistemas de interoperabilidad HL7/FHIR.',
              address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
              url: 'https://alejandrozakzuk.com',
              image: 'https://alejandrozakzuk.com/og-default.png',
              sameAs: [SOCIAL.linkedin, SOCIAL.github],
              alumniOf: {
                '@type': 'MedicalOrganization',
                name: 'Hospital Universitario'
              },
              knowsAbout: ['Internal Medicine', 'HL7 FHIR', 'Machine Learning', 'Next.js', 'Python', 'Natural Language Processing', 'Data Science', 'Generative AI in Healthcare']
            })
          }}
        />
      </body>
    </html>
  )
}
