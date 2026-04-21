import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Accesibilidad',
  description:
    'Declaración de accesibilidad de alejandrozakzuk.com. Conformidad con WCAG 2.1 nivel AA y buenas prácticas de accesibilidad digital.',
  alternates: { canonical: '/legal/accesibilidad' },
  robots: { index: true, follow: true },
}

export default function AccesibilidadPage() {
  return (
    <Section id="legal-accesibilidad" title="Accesibilidad">
      <div className="prose prose-stone max-w-3xl text-ink-2 space-y-5 leading-relaxed">
        <p>
          Este sitio se ha diseñado siguiendo las recomendaciones del{' '}
          <a
            className="ed-link"
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            estándar WCAG 2.1 nivel AA
          </a>{' '}
          y las buenas prácticas de accesibilidad digital, con el objetivo de facilitar el acceso al
          contenido al mayor número de personas posible.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Medidas implementadas</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Contrastes adecuados entre texto y fondo según WCAG 2.1 (nivel AA).</li>
          <li>Tipografía legible con soporte de reescalado del navegador.</li>
          <li>Navegación completa compatible con teclado y foco visible.</li>
          <li>Etiquetas <code>aria-label</code> y textos alternativos en enlaces e iconos.</li>
          <li>Jerarquía semántica (<code>h1</code>, <code>h2</code>…) coherente en todas las páginas.</li>
          <li>Diseño adaptable (<em>responsive</em>) para móvil, tableta y escritorio.</li>
          <li>
            Respeto a la preferencia de usuario <code>prefers-reduced-motion</code> para reducir animaciones.
          </li>
          <li>Estructura semántica HTML5 (<code>main</code>, <code>nav</code>, <code>article</code>, <code>section</code>).</li>
        </ul>

        <h2 className="font-display text-xl text-ink pt-4">Limitaciones conocidas</h2>
        <p>
          Este sitio es un portafolio personal. No tiene obligación formal de cumplir el{' '}
          <strong>Real Decreto 1112/2018</strong> (accesibilidad de sitios web del sector público), pero se
          aplican sus principios como referencia de calidad. Si detectas una barrera de accesibilidad, por
          favor repórtala.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Contacto y retroalimentación</h2>
        <p>
          Si detectas barreras de accesibilidad o tienes sugerencias de mejora, escribe a{' '}
          <a className="ed-link" href="mailto:zakzukaram@gmail.com">zakzukaram@gmail.com</a>. Me comprometo
          a revisar cada reporte y a corregir los problemas que sean técnicamente viables en la próxima
          actualización del sitio.
        </p>

        <p className="text-muted text-xs font-mono pt-6">
          Última actualización: {new Date().toISOString().slice(0, 10)}
        </p>
      </div>
    </Section>
  )
}
