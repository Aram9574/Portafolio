import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Aviso legal',
  description:
    'Información legal, titular del sitio y condiciones de uso del portafolio profesional de Aram Zakzuk, MD — Healthcare & Clinical AI Consultant.',
  alternates: { canonical: '/legal/aviso-legal' },
  robots: { index: true, follow: true },
}

export default function AvisoLegalPage() {
  return (
    <Section id="legal-aviso">
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
        {/* Columna lateral */}
        <aside className="col-span-12 md:col-span-3 md:sticky md:top-28 md:self-start">
          <div className="eyebrow mb-4">Legal</div>
          <h1 className="font-display text-3xl md:text-4xl text-ink leading-tight">Aviso legal</h1>
          <p className="caption mt-4 normal-case tracking-normal text-xs">
            LSSI-CE · Ley 34/2002
          </p>
        </aside>

        {/* Contenido */}
        <article className="col-span-12 md:col-span-8 md:col-start-5 space-y-10 text-ink-2 leading-relaxed">
          <p className="lead text-ink">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
            de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los
            siguientes datos identificativos del titular de este sitio web.
          </p>

          <section className="space-y-4">
            <h2 className="font-display text-xl text-ink">Titular</h2>
            <dl className="border border-rule divide-y divide-rule">
              <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-rule">
                <dt className="caption p-4">Nombre</dt>
                <dd className="text-ink p-4 md:col-span-2">Aram Zakzuk</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-rule">
                <dt className="caption p-4">Actividad</dt>
                <dd className="text-ink p-4 md:col-span-2">
                  Consultoría independiente en salud digital e IA aplicada a sanidad
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
              <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-rule">
                <dt className="caption p-4">Dominio</dt>
                <dd className="text-ink p-4 md:col-span-2">alejandrozakzuk.com</dd>
              </div>
            </dl>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">Objeto y carácter del sitio</h2>
            <p>
              Este sitio es un portafolio profesional de carácter personal. El contenido tiene carácter
              divulgativo y profesional. No constituye consejo médico, jurídico ni financiero vinculante.
              Los artículos y proyectos publicados reflejan la experiencia clínica y formación del titular y
              no sustituyen la consulta con profesionales cualificados ni la toma de decisiones clínicas o
              regulatorias concretas.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">Propiedad intelectual e industrial</h2>
            <p>
              Todos los textos, diseños, código, imágenes, marcas y demás elementos del sitio son titularidad
              exclusiva de Aram Zakzuk, salvo cuando se indique expresamente lo contrario o cuando se
              referencie material de terceros bajo licencia abierta (Creative Commons, MIT, Apache 2.0).
              Queda prohibida la reproducción, distribución, comunicación pública o transformación total o
              parcial sin autorización previa y expresa del titular.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">Enlaces externos</h2>
            <p>
              Este sitio contiene enlaces a recursos externos (GitHub, LinkedIn, Hugging Face, instituciones
              académicas, publicaciones regulatorias). El titular no se hace responsable del contenido ni de
              las políticas de privacidad de dichos sitios, ni de cualquier daño derivado del acceso a los
              mismos.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">Responsabilidad</h2>
            <p>
              El titular hace lo razonablemente posible por mantener la información actualizada y correcta,
              pero no garantiza la ausencia de errores ni la disponibilidad continuada del sitio. El usuario
              accede al sitio bajo su propia responsabilidad.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">Modificaciones</h2>
            <p>
              El titular se reserva el derecho a modificar, actualizar o eliminar cualquier contenido del
              sitio y estas condiciones en cualquier momento sin previo aviso. El uso continuado del sitio
              implica la aceptación de las condiciones vigentes en cada momento.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">Ley aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para cualquier controversia
              derivada del uso del sitio, las partes se someten, con renuncia expresa a cualquier otro fuero
              que pudiera corresponderles, a los juzgados y tribunales de Madrid capital.
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
