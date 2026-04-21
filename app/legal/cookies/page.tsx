import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description:
    'Política de cookies de alejandrozakzuk.com conforme al artículo 22.2 de la LSSI-CE y al RGPD. Detalle de cookies técnicas y analíticas utilizadas.',
  alternates: { canonical: '/legal/cookies' },
  robots: { index: true, follow: true },
}

const cookies = [
  {
    name: 'cookie-consent-v1',
    provider: 'alejandrozakzuk.com',
    purpose: 'Recordar la decisión del usuario sobre el banner de cookies.',
    duration: '12 meses',
    type: 'Técnica',
  },
  {
    name: '_ga, _ga_*',
    provider: 'Google LLC (GA4)',
    purpose:
      'Analítica agregada y anonimizada del uso del sitio: páginas visitadas, duración y origen del tráfico. IP anonimizada.',
    duration: '24 meses',
    type: 'Analítica',
  },
]

const browsers = [
  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
  {
    name: 'Mozilla Firefox',
    url: 'https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias',
  },
  { name: 'Safari', url: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
  {
    name: 'Microsoft Edge',
    url: 'https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d',
  },
]

export default function CookiesPage() {
  return (
    <Section id="legal-cookies">
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
        <aside className="col-span-12 md:col-span-3 md:sticky md:top-28 md:self-start">
          <div className="eyebrow mb-4">Legal</div>
          <h1 className="font-display text-3xl md:text-4xl text-ink leading-tight">
            Política de cookies
          </h1>
          <p className="caption mt-4 normal-case tracking-normal text-xs">
            LSSI-CE art. 22.2 · RGPD · AEPD
          </p>
        </aside>

        <article className="col-span-12 md:col-span-8 md:col-start-5 space-y-10 text-ink-2 leading-relaxed">
          <p className="lead text-ink">
            Esta política describe el uso de cookies en alejandrozakzuk.com, de acuerdo con el artículo 22.2
            de la LSSI-CE, el RGPD (UE) 2016/679 y las directrices de la Agencia Española de Protección de
            Datos (AEPD).
          </p>

          <section className="space-y-4">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">01</span>¿Qué es una cookie?
            </h2>
            <p>
              Una cookie es un pequeño archivo de texto que un sitio web guarda en el navegador del usuario.
              Las cookies permiten recordar preferencias, medir el uso del sitio y, en algunos casos,
              ofrecer contenido personalizado.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">02</span>Cookies utilizadas en este sitio
            </h2>
            <div className="border border-rule overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-rule bg-bone">
                    <th className="p-3 text-left caption font-mono">Cookie</th>
                    <th className="p-3 text-left caption font-mono">Proveedor</th>
                    <th className="p-3 text-left caption font-mono">Finalidad</th>
                    <th className="p-3 text-left caption font-mono">Duración</th>
                    <th className="p-3 text-left caption font-mono">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((c) => (
                    <tr key={c.name} className="border-b border-rule last:border-b-0 align-top">
                      <td className="p-3 font-mono text-xs text-ink">{c.name}</td>
                      <td className="p-3">{c.provider}</td>
                      <td className="p-3">{c.purpose}</td>
                      <td className="p-3">{c.duration}</td>
                      <td className="p-3">
                        <span
                          className={
                            c.type === 'Técnica'
                              ? 'inline-block border border-ink bg-ink text-bone px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider'
                              : 'inline-block border border-rule px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-ink'
                          }
                        >
                          {c.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">03</span>Cookies técnicas
            </h2>
            <p>
              Son imprescindibles para el funcionamiento del sitio. No requieren consentimiento previo del
              usuario y se activan por defecto al acceder al sitio.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">04</span>Cookies analíticas
            </h2>
            <p>
              No se activan por defecto. Solo se cargan si el usuario otorga su consentimiento expreso a
              través del banner de cookies, conforme al artículo 22.2 de la LSSI-CE. El usuario puede
              aceptar o rechazar estas cookies en cualquier momento y modificar su decisión posteriormente.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">05</span>Gestión del consentimiento
            </h2>
            <p>
              Al acceder al sitio por primera vez, se muestra un banner con las opciones{' '}
              <strong className="text-ink">Aceptar analítica</strong> y{' '}
              <strong className="text-ink">Rechazar</strong>. La decisión se guarda en una cookie técnica
              (<code className="text-ink">cookie-consent-v1</code>) durante 12 meses. Si el usuario desea
              modificar su decisión, puede borrar esa cookie desde la configuración de su navegador; en la
              siguiente visita volverá a aparecer el banner.
            </p>
          </section>

          <section className="space-y-4 border-t border-rule pt-8">
            <h2 className="font-display text-xl text-ink">
              <span className="caption mr-3">06</span>Cómo deshabilitar las cookies desde el navegador
            </h2>
            <p>Todos los navegadores permiten bloquear o eliminar cookies. Instrucciones oficiales:</p>
            <div className="grid grid-cols-2 gap-3">
              {browsers.map((b) => (
                <a
                  key={b.name}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-rule px-4 py-3 text-sm text-ink hover:border-ink transition flex items-center justify-between"
                >
                  {b.name}
                  <span aria-hidden className="text-ink-2">→</span>
                </a>
              ))}
            </div>
          </section>

          <p className="text-muted text-xs font-mono border-t border-rule pt-6">
            Última actualización: {new Date().toISOString().slice(0, 10)}
          </p>
        </article>
      </div>
    </Section>
  )
}
