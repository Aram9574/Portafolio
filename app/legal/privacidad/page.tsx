import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Política de privacidad de alejandrozakzuk.com conforme al RGPD (UE) 2016/679 y la LOPDGDD. Responsable: Aram Zakzuk, MD.',
  alternates: { canonical: '/legal/privacidad' },
  robots: { index: true, follow: true },
}

export default function PoliticaPrivacidadPage() {
  return (
    <Section id="legal-privacidad">
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
        <aside className="col-span-12 md:col-span-3 md:sticky md:top-28 md:self-start">
          <div className="eyebrow mb-4">Legal</div>
          <h1 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            Política de privacidad
          </h1>
          <p className="caption mt-4 normal-case tracking-normal text-xs">
            RGPD (UE) 2016/679 · LOPDGDD
          </p>
        </aside>

        <article className="col-span-12 md:col-span-8 md:col-start-5 space-y-10 text-ink-2 leading-relaxed">
          <p className="lead text-ink">
            Esta política describe cómo este sitio trata los datos personales de los usuarios, conforme al
            Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de
            Datos Personales y garantía de los derechos digitales (LOPDGDD).
          </p>

          <section className="space-y-4">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">01</span>Responsable del tratamiento
            </h2>
            <dl className="border border-rule divide-y divide-rule">
              <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-rule">
                <dt className="caption p-4">Responsable</dt>
                <dd className="text-ink p-4 md:col-span-2">Aram Zakzuk</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-rule">
                <dt className="caption p-4">Finalidad</dt>
                <dd className="text-ink p-4 md:col-span-2">
                  Portafolio profesional y comunicación con el titular
                </dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-rule">
                <dt className="caption p-4">Localidad</dt>
                <dd className="text-ink p-4 md:col-span-2">Madrid, España</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-rule">
                <dt className="caption p-4">Contacto</dt>
                <dd className="p-4 md:col-span-2">
                  <a className="ed-link" href="mailto:zakzukaram@gmail.com">
                    zakzukaram@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">02</span>Datos que se recogen y finalidad
            </h2>
            <p>El sitio trata datos personales únicamente en los siguientes supuestos:</p>
            <ul className="space-y-3">
              <li className="border-l-2 border-ink pl-4">
                <strong className="text-ink">Formulario de contacto y pre-calificación (Calendly):</strong>{' '}
                nombre, correo electrónico y mensaje voluntario. Finalidad: atender la solicitud del usuario,
                evaluar encaje profesional y agendar una reunión si procede.
              </li>
              <li className="border-l-2 border-ink pl-4">
                <strong className="text-ink">Suscripción al newsletter:</strong> correo electrónico.
                Finalidad: envío periódico de contenidos profesionales sobre salud digital, IA clínica y
                regulación europea. El usuario puede darse de baja en cualquier momento.
              </li>
              <li className="border-l-2 border-ink pl-4">
                <strong className="text-ink">Analítica web (Google Analytics 4):</strong> datos agregados y
                anonimizados de navegación. Finalidad: medir el interés del contenido y mejorar la
                experiencia. Este tratamiento solo se activa <em>previo consentimiento expreso</em> del
                usuario a través del banner de cookies.
              </li>
            </ul>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">03</span>Base legal del tratamiento
            </h2>
            <ul className="space-y-2">
              <li>
                <strong className="text-ink">Consentimiento</strong> del interesado (art. 6.1.a RGPD) para
                newsletter, analítica no técnica y formulario de contacto.
              </li>
              <li>
                <strong className="text-ink">Interés legítimo</strong> del responsable (art. 6.1.f RGPD)
                para cookies técnicas estrictamente necesarias para el funcionamiento del sitio.
              </li>
            </ul>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">04</span>Plazo de conservación
            </h2>
            <p>
              Los datos se conservan mientras exista relación profesional con el usuario o, en su defecto,
              durante un máximo de <strong className="text-ink">dos años</strong> desde el último contacto
              registrado. Los datos asociados a suscripciones al newsletter se conservan hasta que el usuario
              solicite la baja. Los datos analíticos se conservan según la política de retención de Google
              Analytics 4 (por defecto, 14 meses).
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">05</span>Destinatarios
            </h2>
            <p>
              Los datos no se comunican a terceros salvo obligación legal. Se utilizan los siguientes
              encargados del tratamiento, todos ellos conformes con el RGPD:
            </p>
            <ul className="space-y-2">
              <li>
                <strong className="text-ink">Vercel Inc.</strong> — hosting del sitio (EE. UU., con
                cláusulas contractuales tipo).
              </li>
              <li>
                <strong className="text-ink">Google LLC</strong> — analítica web (GA4) con IP anonimizada.
              </li>
              <li>
                <strong className="text-ink">Calendly LLC</strong> — agendamiento de reuniones (solo si el
                usuario lo utiliza voluntariamente).
              </li>
              <li>
                <strong className="text-ink">Proveedor de email marketing</strong> — envío de newsletter
                (solo si el usuario se suscribe).
              </li>
            </ul>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">06</span>Derechos del usuario
            </h2>
            <p>Conforme al RGPD, cualquier usuario puede ejercer los siguientes derechos:</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                'Acceso a sus datos personales',
                'Rectificación de datos inexactos',
                'Supresión (derecho al olvido)',
                'Limitación del tratamiento',
                'Oposición al tratamiento',
                'Portabilidad de los datos',
                'Retirar el consentimiento',
              ].map((d) => (
                <div key={d} className="border border-rule px-3 py-2 text-ink">
                  {d}
                </div>
              ))}
            </div>
            <p className="pt-2">
              Para ejercer estos derechos, basta con enviar un correo a{' '}
              <a className="ed-link" href="mailto:zakzukaram@gmail.com">
                zakzukaram@gmail.com
              </a>{' '}
              indicando el derecho que se desea ejercer. Si el usuario considera que sus derechos no se han
              atendido adecuadamente, puede presentar una reclamación ante la{' '}
              <a className="ed-link" href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
                Agencia Española de Protección de Datos (AEPD)
              </a>
              .
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">07</span>Seguridad
            </h2>
            <p>
              Se aplican medidas técnicas y organizativas razonables para proteger los datos frente a
              accesos no autorizados, pérdida o alteración. Ningún sistema en Internet es completamente
              seguro; el usuario asume los riesgos inherentes a la comunicación por medios electrónicos.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">08</span>Modificaciones
            </h2>
            <p>
              Esta política puede actualizarse para reflejar cambios legales o en los servicios utilizados.
              La versión vigente es la publicada en esta página, con indicación de la fecha de última
              actualización.
            </p>
          </section>

          <p className="text-muted text-xs font-mono border-t border-rule pt-6">
            Última actualización: {new Date().toISOString().slice(0, 10)}
          </p>
        </article>
      </div>
    </Section>
  )
}
