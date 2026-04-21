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
  alternates: {
    canonical: 'https://alejandrozakzuk.com',
    languages: { 'es-ES': 'https://alejandrozakzuk.com' }
  },
  title: {
    default: 'Aram Zakzuk, MD · Healthcare & Clinical AI Consultant · Madrid',
    template: '%s · Aram Zakzuk, MD'
  },
  description: 'Healthcare & Clinical AI Consultant en Madrid. Médico con 6 años de práctica clínica + Máster en IA aplicada a Sanidad (CEMP) + Máster en Salud Digital (Universidad Europea). Evaluación de soluciones Clinical AI, asesoramiento regulatorio EU AI Act / MDR / SaMD y estrategia de adopción para consultoras y HealthTech.',
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
    title: 'Aram Zakzuk, MD · Healthcare & Clinical AI Consultant',
    description: 'Médico con 6 años de práctica clínica + doble máster en IA aplicada a Sanidad y Salud Digital. Evaluación regulatoria EU AI Act, estrategia de adopción Clinical AI y traducción clínica–técnica para consultoras y HealthTech.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aram Zakzuk, MD · Healthcare & Clinical AI Consultant',
    description: 'Evaluación Clinical AI, EU AI Act / MDR / SaMD y estrategia de adopción para consultoras y HealthTech. Madrid.',
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
              '@id': 'https://alejandrozakzuk.com/#person',
              name: 'Aram Zakzuk',
              honorificPrefix: 'Dr.',
              honorificSuffix: 'MD',
              jobTitle: 'Healthcare & Clinical AI Consultant',
              description: 'Médico con 6 años de práctica clínica y doble máster en IA aplicada a Sanidad (CEMP) y Salud Digital / eHealth (Universidad Europea). Consultor para organizaciones sanitarias, consultoras y HealthTech en evaluación de Clinical AI, asesoramiento regulatorio EU AI Act / MDR / SaMD y estrategia de adopción clínica.',
              address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressRegion: 'Comunidad de Madrid', addressCountry: 'ES' },
              url: 'https://alejandrozakzuk.com',
              image: 'https://alejandrozakzuk.com/og-default.png',
              email: 'mailto:zakzukaram@gmail.com',
              sameAs: [SOCIAL.linkedin, SOCIAL.github, 'https://huggingface.co/aram1585'],
              hasOccupation: {
                '@type': 'Occupation',
                name: 'Healthcare & Clinical AI Consultant',
                occupationLocation: { '@type': 'City', name: 'Madrid' },
                skills: 'EU AI Act, MDR, SaMD, HL7 FHIR, SNOMED-CT, EHDS, Clinical Decision Support Systems, Healthcare Data Analytics'
              },
              alumniOf: [
                { '@type': 'CollegeOrUniversity', name: 'Universidad del Rosario', sameAs: 'https://www.urosario.edu.co/' },
                { '@type': 'CollegeOrUniversity', name: 'Centro Europeo de Másters y Posgrados (CEMP)' },
                { '@type': 'CollegeOrUniversity', name: 'Universidad Europea de Madrid', sameAs: 'https://universidadeuropea.com/' },
                { '@type': 'CollegeOrUniversity', name: 'Stanford University', sameAs: 'https://www.stanford.edu/' }
              ],
              knowsLanguage: [
                { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
                { '@type': 'Language', name: 'English', alternateName: 'en' },
                { '@type': 'Language', name: 'French', alternateName: 'fr' }
              ],
              knowsAbout: [
                'Clinical AI', 'Inteligencia Artificial Clínica', 'Clinical Decision Support Systems', 'CDSS',
                'EU AI Act', 'Reglamento 2024/1689', 'Medical Device Regulation', 'MDR', 'Software as a Medical Device', 'SaMD',
                'EHDS', 'Espacio Europeo de Datos Sanitarios', 'HL7 FHIR', 'SNOMED-CT', 'LOINC',
                'Salud Digital', 'eHealth', 'Transformación Digital Sanitaria',
                'Medical Affairs', 'Healthcare Data Analytics', 'Explainable AI', 'XAI', 'SHAP',
                'Medicina Interna', 'Atención Primaria', 'Urgencias',
                'HealthTech', 'MedTech', 'Life Sciences', 'Digital Health'
              ],
              makesOffer: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Evaluación y estrategia de adopción de Clinical AI', serviceType: 'Clinical AI Consulting' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asesoramiento regulatorio EU AI Act · MDR · SaMD', serviceType: 'Regulatory Consulting' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Viabilidad clínica de CDSS, datos e interoperabilidad sanitaria', serviceType: 'Healthcare Data & Interoperability Consulting' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Traducción clínica–técnica en transformación digital sanitaria', serviceType: 'Healthcare Digital Transformation Advisory' } }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
