import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Accesibilidad',
  description:
    'Declaración de accesibilidad de alejandrozakzuk.com. Conformidad con WCAG 2.1 nivel AA y buenas prácticas de accesibilidad digital.',
  alternates: { canonical: '/legal/accesibilidad' },
  robots: { index: true, follow: true },
}

const measures = [
  'Contrastes adecuados entre texto y fondo según WCAG 2.1 (nivel AA).',
  'Tipografía legible con soporte de reescalado del navegador.',
  'Navegación completa compatible con teclado y foco visible.',
  'Etiquetas aria-label y textos alternativos en enlaces e iconos.',
  'Jerarquía semántica (h1, h2…) coherente en todas las páginas.',
  'Diseño adaptable (responsive) para móvil, tableta y escritorio.',
  'Respeto a prefers-reduced-motion para reducir animaciones.',
  'Estructura semántica HTML5 (main, nav, article, section).',
]

export default function AccesibilidadPage() {
  return (
    <Section id="legal-accesibilidad">
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
        <aside className="col-span-12 md:col-span-3 md:sticky md:top-28 md:self-start">
          <div className="eyebrow mb-4">Legal</div>
          <h1 className="font-display text-3xl md:text-4xl text-ink leading-tight">Accesibilidad</h1>
          <p className="caption mt-4 normal-case tracking-normal text-xs">WCAG 2.1 · AA</p>
        </aside>

        <article className="col-span-12 md:col-span-8 md:col-start-5 space-y-10 text-ink-2 leading-relaxed">
          <p className="lead text-ink">
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

          <section className="space-y-4">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">01</span>Medidas implementadas
            </h2>
            <ul className="grid grid-cols-1 gap-0 border border-rule divide-y divide-rule">
              {measures.map((m, i) => (
                <li key={m} className="flex gap-4 p-4">
                  <span className="caption shrink-0 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink">{m}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">02</span>Limitaciones conocidas
            </h2>
            <p>
              Este sitio es un portafolio personal. No tiene obligación formal de cumplir el{' '}
              <strong className="text-ink">Real Decreto 1112/2018</strong> (accesibilidad de sitios web del
              sector público), pero se aplican sus principios como referencia de calidad. Si detectas una
              barrera de accesibilidad, por favor repórtala.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">03</span>Contacto y retroalimentación
            </h2>
            <p>
              Si detectas barreras de accesibilidad o tienes sugerencias de mejora, escribe a{' '}
              <a className="ed-link" href="mailto:zakzukaram@gmail.com">
                zakzukaram@gmail.com
              </a>
              . Me comprometo a revisar cada reporte y a corregir los problemas que sean técnicamente
              viables en la próxima actualización del sitio.
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
