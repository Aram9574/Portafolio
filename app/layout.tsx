import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { AOSProvider } from '@/components/AOSProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import BackgroundSpotlight from '@/components/layout/BackgroundSpotlight'
import NoiseOverlay from '@/components/layout/NoiseOverlay'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { SOCIAL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL('https://alejandrozakzuk.com'),
  title: {
    default: 'Aram Zakzuk · Clinical AI Specialist · Médico · HealthTech · Madrid',
    template: '%s · Aram Zakzuk'
  },
  description: 'Médico con formación avanzada en Machine Learning clínico, NLP, FHIR/HL7 y regulación europea (EU AI Act · RGPD). Consultoría HealthTech y Clinical AI en Madrid y Europa.',
  keywords: ['IA en salud', 'inteligencia artificial sanitaria', 'machine learning clínico', 'interoperabilidad HL7 FHIR', 'Django salud', 'consultoría IA sanitaria', 'Madrid'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com',
    siteName: 'Aram Zakzuk | AI in Healthcare',
    title: 'Aram Zakzuk · Clinical AI Specialist · Médico · HealthTech · Madrid',
    description: 'Médico con formación avanzada en Machine Learning clínico, NLP, FHIR/HL7 y regulación europea (EU AI Act · RGPD). Consultoría HealthTech y Clinical AI en Madrid y Europa.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aram Zakzuk · Clinical AI Specialist · Médico · HealthTech · Madrid',
    description: 'Médico con formación avanzada en Machine Learning clínico, NLP, FHIR/HL7 y regulación europea (EU AI Act · RGPD). Consultoría HealthTech y Clinical AI en Madrid y Europa.',
    images: ['/og-default.png']
  },
  authors: [{ name: 'Aram Zakzuk', url: 'https://alejandrozakzuk.com' }],
  category: 'technology'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="dark">
      <body className="relative min-h-screen antialiased flex flex-col cursor-none md:cursor-auto">
        <CustomCursor />
        <SmoothScrollProvider>
          <AOSProvider />
          <BackgroundSpotlight />
          <NoiseOverlay />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <CookieBanner />
        </SmoothScrollProvider>
        {/* Schema.org Person & E-E-A-T Medical Authority */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Person', 'Physician'],
              name: 'Aram Zakzuk',
              honorificPrefix: 'Dr.',
              jobTitle: 'HealthTech Developer & MD',
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
