// Per-page metadata removed to avoid client boundary conflict

import { ContactForm } from '@/components/ContactForm'
import Section from '@/components/ui/Section'
import { Mail, MapPin, Linkedin, Github } from 'lucide-react'
import { SOCIAL } from '@/lib/site'
import Script from 'next/script'

export default function ContactoPage() {
  return (
    <>
      <Section id="contacto" title="Contacto" subtitle="¿Hablamos de una oportunidad?">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6" data-aos="fade-right">
            <h2 className="text-white font-semibold">Datos directos</h2>
            <ul className="mt-2 text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>
                  <span className="sr-only">Email: </span>
                  <a className="hover:text-white" href={`mailto:${SOCIAL.email}`}>{SOCIAL.email}</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>{SOCIAL.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>
                  <span className="sr-only">LinkedIn: </span>
                  <a className="hover:text-white" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">Seguir en LinkedIn</a>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Github className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>
                  <span className="sr-only">GitHub: </span>
                  <a className="hover:text-white" href={SOCIAL.github} target="_blank" rel="noreferrer">@Aram9574</a>
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
                <a className="badge-base__link LI-simple-link" href="https://linkedin.com/in/aramzakzuk">
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
        <div className="rounded-2xl border border-white/10 bg-white/5 p-2" data-aos="zoom-in" data-aos-offset="-100">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Calendly"
              src="https://calendly.com/zakzukaram"
              className="w-full h-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
