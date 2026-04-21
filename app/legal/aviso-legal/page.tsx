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
    <Section id="legal-aviso" title="Aviso legal">
      <div className="prose prose-stone max-w-3xl text-ink-2 space-y-5 leading-relaxed">
        <p>
          En cumplimiento del artículo 10 de la <strong>Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</strong>, se informa a los usuarios
          de los siguientes datos identificativos del titular de este sitio web.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Titular</h2>
        <ul className="list-none pl-0 space-y-1">
          <li><strong>Nombre:</strong> Aram Zakzuk</li>
          <li><strong>Actividad:</strong> Consultoría independiente en salud digital e IA aplicada a sanidad</li>
          <li><strong>Localidad:</strong> Madrid, España</li>
          <li>
            <strong>Contacto:</strong>{' '}
            <a className="ed-link" href="mailto:zakzukaram@gmail.com">
              zakzukaram@gmail.com
            </a>
          </li>
          <li><strong>Dominio:</strong> alejandrozakzuk.com</li>
        </ul>

        <h2 className="font-display text-xl text-ink pt-4">Objeto y carácter del sitio</h2>
        <p>
          Este sitio es un portafolio profesional de carácter personal. El contenido tiene carácter
          divulgativo y profesional. No constituye consejo médico, jurídico ni financiero vinculante. Los
          artículos y proyectos publicados reflejan la experiencia clínica y formación del titular y no
          sustituyen la consulta con profesionales cualificados ni la toma de decisiones clínicas o
          regulatorias concretas.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Propiedad intelectual e industrial</h2>
        <p>
          Todos los textos, diseños, código, imágenes, marcas y demás elementos del sitio son titularidad
          exclusiva de Aram Zakzuk, salvo cuando se indique expresamente lo contrario o cuando se referencie
          material de terceros bajo licencia abierta (Creative Commons, MIT, Apache 2.0). Queda prohibida la
          reproducción, distribución, comunicación pública o transformación total o parcial sin autorización
          previa y expresa del titular.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Enlaces externos</h2>
        <p>
          Este sitio contiene enlaces a recursos externos (GitHub, LinkedIn, Hugging Face, instituciones
          académicas, publicaciones regulatorias). El titular no se hace responsable del contenido ni de las
          políticas de privacidad de dichos sitios, ni de cualquier daño derivado del acceso a los mismos.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Responsabilidad</h2>
        <p>
          El titular hace lo razonablemente posible por mantener la información actualizada y correcta, pero
          no garantiza la ausencia de errores ni la disponibilidad continuada del sitio. El usuario accede al
          sitio bajo su propia responsabilidad.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Modificaciones</h2>
        <p>
          El titular se reserva el derecho a modificar, actualizar o eliminar cualquier contenido del sitio y
          estas condiciones en cualquier momento sin previo aviso. El uso continuado del sitio implica la
          aceptación de las condiciones vigentes en cada momento.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Ley aplicable y jurisdicción</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada
          del uso del sitio, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera
          corresponderles, a los juzgados y tribunales de Madrid capital.
        </p>

        <p className="text-muted text-xs font-mono pt-6">
          Última actualización: {new Date().toISOString().slice(0, 10)}
        </p>
      </div>
    </Section>
  )
}
