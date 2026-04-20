// Per-page metadata removed to avoid client boundary conflict

import { ContactForm } from '@/components/ContactForm'
import Section from '@/components/ui/Section'
import { Mail, MapPin, Linkedin, Github } from 'lucide-react'
import { SOCIAL } from '@/lib/site'
import CopyButton from '@/components/ui/CopyButton'
import Script from 'next/script'

export default function ContactoPage() {
  return (
    <>
      <Section id="contacto" title="Contacto" subtitle="Clinical AI con criterio médico real. Respondo en 24 h laborables.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-rule bg-paper p-6" data-aos="fade-right">
            <h2 className="text-ink font-semibold">Datos directos</h2>
            <ul className="mt-2 text-sm text-ink-2 space-y-2">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-ink" aria-hidden="true" />
                <div className="flex items-center">
                  <span className="sr-only">Email: </span>
                  <a className="ed-link" href={`mailto:${SOCIAL.email}`}>{SOCIAL.email}</a>
                  <CopyButton text={SOCIAL.email} />
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-ink" aria-hidden="true" />
                <span>{SOCIAL.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-ink" aria-hidden="true" />
                <span>
                  <span className="sr-only">LinkedIn: </span>
                  <a className="ed-link" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">Seguir en LinkedIn</a>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Github className="w-4 h-4 text-ink" aria-hidden="true" />
                <span>
                  <span className="sr-only">GitHub: </span>
                  <a className="ed-link" href={SOCIAL.github} target="_blank" rel="noreferrer">@Aram9574</a>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex justify-center md:justify-start">
              <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="lazyOnload" />
              <div 
                className="badge-base LI-profile-badge" 
                data-locale="es_ES" 
                data-size="medium" 
                data-theme="light" 
                data-type="VERTICAL" 
                data-vanity="aramzakzuk" 
                data-version="v1"
              >
                <a className="badge-base__link LI-simple-link" href="https://es.linkedin.com/in/aramzakzuk?trk=profile-badge">
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

      <Section id="agenda" title="Agenda" subtitle="Reserva una breve llamada de descubrimiento.">
        <div className="border border-rule bg-paper p-2" data-aos="zoom-in" data-aos-offset="-100">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Calendly"
              src="https://calendly.com/zakzukaram"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
