// Per-page metadata removed to avoid client boundary conflict

import { ContactForm } from '@/components/ContactForm'
import Section from '@/components/ui/Section'
import { Mail, MapPin, Linkedin, Youtube, Github } from 'lucide-react'
import { SOCIAL } from '@/lib/site'

export default function ContactoPage() {
  return (
    <>
      <Section id="contacto" title="Contacto" subtitle="¿Hablamos de una oportunidad?">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-white font-semibold">Datos directos</h2>
            <ul className="mt-2 text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>
                  <span className="sr-only">Email: </span>
                  <a className="hover:text-white" href={`mailto:${SOCIAL.email}`}>{SOCIAL.email}</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{SOCIAL.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-emerald-400" />
                <span>
                  <span className="sr-only">LinkedIn: </span>
                  <a className="hover:text-white" href={SOCIAL.linkedin} target="_blank" rel="noreferrer">Seguir en LinkedIn</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Youtube className="w-4 h-4 text-emerald-400" />
                <span>
                  <span className="sr-only">YouTube: </span>
                  <a className="hover:text-white" href={SOCIAL.youtube} target="_blank" rel="noreferrer">@MedIA_ES_1</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Github className="w-4 h-4 text-emerald-400" />
                <span>
                  <span className="sr-only">GitHub: </span>
                  <a className="hover:text-white" href={SOCIAL.github} target="_blank" rel="noreferrer">@Aram9574</a>
                </span>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Section id="agenda" title="Agenda" subtitle="Reserva una breve llamada de descubrimiento.">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
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
