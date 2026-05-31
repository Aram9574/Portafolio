import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import Section from '@/components/ui/Section'
import { Envelope, MapPin, LinkedinLogo, GithubLogo } from '@phosphor-icons/react/dist/ssr'
import { SOCIAL } from '@/lib/site'
import CopyButton from '@/components/ui/CopyButton'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Contacto · Aram Zakzuk, MD · Clinical AI · Madrid',
  description:
    'Escríbeme por email o LinkedIn. Disponible para roles senior en Clinical AI, Medical Affairs digital, Healthcare Data Analytics y asesoría regulatoria EU AI Act en HealthTech, MedTech y Pharma Digital. Respondo en 24 h laborables.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alejandrozakzuk.com/contacto',
    title: 'Contacto · Aram Zakzuk, MD',
    description:
      'Médico + Clinical AI Specialist disponible para HealthTech, MedTech y Pharma Digital. Madrid.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto · Aram Zakzuk, MD',
    description:
      'Disponible para roles senior en Clinical AI · HealthTech · MedTech · Pharma Digital. Madrid.',
  },
}

export default function ContactoPage() {
  return (
    <>
      <Section
        id="contacto"
        title="Contacto"
        subtitle="Escríbeme por email o LinkedIn. Si abrís vacante en Clinical AI, Medical Affairs digital, Healthcare Data Analytics o regulación EU AI Act / MDR, adjunta una breve descripción y respondo en 24 h laborables."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-rule bg-paper p-6" data-aos="fade-right">
            <h2 className="text-ink font-semibold">Datos directos</h2>
            <ul className="mt-2 text-sm text-ink-2 space-y-2">
              <li className="flex items-center gap-3">
                <Envelope weight="light" className="w-4 h-4 text-ink" aria-hidden="true" />
                <div className="flex items-center">
                  <span className="sr-only">Email: </span>
                  <a className="ed-link" href={`mailto:${SOCIAL.email}`}>{SOCIAL.email}</a>
                  <CopyButton text={SOCIAL.email} />
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MapPin weight="light" className="w-4 h-4 text-ink" aria-hidden="true" />
                <span>{SOCIAL.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <LinkedinLogo weight="light" className="w-4 h-4 text-ink" aria-hidden="true" />
                <span>
                  <span className="sr-only">LinkedIn: </span>
                  <a className="ed-link" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">Seguir en LinkedIn</a>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <GithubLogo weight="light" className="w-4 h-4 text-ink" aria-hidden="true" />
                <span>
                  <span className="sr-only">GitHub: </span>
                  <a className="ed-link" href={SOCIAL.github} target="_blank" rel="noreferrer">@Aram9574</a>
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="/cv/CV_Aram_Zakzuk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink"
              >
                Descargar CV →
              </a>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <div
                className="badge-base LI-profile-badge"
                data-locale="es_ES"
                data-size="medium"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="aramzakzuk"
                data-version="v1"
              >
                <a className="badge-base__link LI-simple-link" href="https://es.linkedin.com/in/aramzakzuk?trk=profile-badge" target="_blank" rel="noreferrer">
                  Aram Zakzuk
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="afterInteractive"
        async
        defer
      />
    </>
  )
}
