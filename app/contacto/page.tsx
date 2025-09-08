// Per-page metadata removed to avoid client boundary conflict

import { ContactForm } from '@/components/ContactForm'

export default function ContactoPage() {
  return (
    <div className="container py-12">
      <h1 className="section-title">Contacto</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="text-white font-semibold">Datos directos</h2>
          <ul className="mt-2 text-sm text-muted space-y-1">
            <li>Email: <a className="hover:text-white" href="mailto:zakzukaram@gmail.com">zakzukaram@gmail.com</a></li>
            <li>LinkedIn: <a className="hover:text-white" href="https://www.linkedin.com/in/azakzuk-md" target="_blank" rel="noreferrer">/in/azakzuk-md</a></li>
            <li>GitHub: <a className="hover:text-white" href="https://github.com/azakzuk" target="_blank" rel="noreferrer">@azakzuk</a></li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
