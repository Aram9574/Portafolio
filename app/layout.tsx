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
    types: {
      'application/rss+xml': 'https://alejandrozakzuk.com/blog/rss.xml'
    }
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg'
  },
  title: {
    default: 'Aram Zakzuk, MD · Clinical AI · MSc IA en Sanidad · MSc Salud Digital · Madrid',
    template: '%s · Aram Zakzuk, MD'
  },
  description: 'Médico (homologado en España) con doble máster en IA aplicada a Sanidad y Salud Digital + Stanford AI in Healthcare. Clinical AI, EU AI Act, MDR, SaMD, HL7 FHIR. Disponible para roles senior en HealthTech, MedTech y Pharma Digital. Madrid y UE.',
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
    title: 'Aram Zakzuk, MD · Clinical AI Specialist',
    description: 'La combinación escasa que separa los proyectos en producción de los pilotos: criterio médico hospitalario + doble máster en IA aplicada a Sanidad y Salud Digital + marco regulatorio europeo (EU AI Act, MDR, SaMD). Disponible para HealthTech, MedTech y Pharma Digital.',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aram Zakzuk, MD · Clinical AI Specialist',
    description: 'Médico + doble máster en IA y Salud Digital + EU AI Act / MDR / SaMD. Disponible para HealthTech, MedTech y Pharma Digital. Madrid.',
    images: ['/og-default.png']
  },
  authors: [{ name: 'Aram Zakzuk', url: 'https://alejandrozakzuk.com' }],
  category: 'healthcare'
}

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-display',
  axes: ['opsz', 'SOFT'],
})

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: false, // ticker/labels, no crítico
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
              '@graph': [
                {
                  '@type': ['Person', 'Physician'],
                  '@id': 'https://alejandrozakzuk.com/#person',
                  name: 'Aram Zakzuk',
                  alternateName: 'Alejandro Zakzuk',
                  honorificPrefix: 'Dr.',
                  honorificSuffix: 'MD',
                  jobTitle: 'Clinical AI Specialist',
                  description: 'Médico (Universidad del Rosario, homologado en España) con doble máster en IA aplicada a Sanidad (CEMP) y Salud Digital / eHealth (Universidad Europea de Madrid) y especialización Stanford AI in Healthcare. Diseña y valida soluciones de Clinical AI bajo el marco regulatorio europeo (EU AI Act, MDR, SaMD, RGPD, EHDS). Disponible para roles senior en HealthTech, MedTech, Pharma Digital, MedDevice e innovación hospitalaria.',
                  address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressRegion: 'Comunidad de Madrid', addressCountry: 'ES' },
                  url: 'https://alejandrozakzuk.com',
                  image: 'https://alejandrozakzuk.com/opengraph-image.png',
                  email: 'mailto:zakzukaram@gmail.com',
                  sameAs: [SOCIAL.linkedin, SOCIAL.github, 'https://huggingface.co/aram1585'],
                  seeks: {
                    '@type': 'Demand',
                    name: 'Senior roles in Clinical AI, Medical Affairs digital, Healthcare Data Analytics, EU AI Act / MDR regulatory affairs',
                    description: 'Disponible para posiciones senior en HealthTech, MedTech, Pharma Digital, MedDevice e innovación hospitalaria. Madrid · Remoto · Híbrido.'
                  },
                  hasOccupation: {
                    '@type': 'Occupation',
                    name: 'Clinical AI Specialist',
                    occupationLocation: { '@type': 'City', name: 'Madrid' },
                    skills: 'EU AI Act, MDR, SaMD, HL7 FHIR, SNOMED-CT, EHDS, Clinical Decision Support Systems, Healthcare Data Analytics, Machine Learning, XAI, SHAP'
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
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
