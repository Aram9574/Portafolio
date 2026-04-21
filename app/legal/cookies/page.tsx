import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description:
    'Política de cookies de alejandrozakzuk.com conforme al artículo 22.2 de la LSSI-CE y al RGPD. Detalle de cookies técnicas y analíticas utilizadas.',
  alternates: { canonical: '/legal/cookies' },
  robots: { index: true, follow: true },
}

export default function CookiesPage() {
  return (
    <Section id="legal-cookies" title="Política de cookies">
      <div className="prose prose-stone max-w-3xl text-ink-2 space-y-5 leading-relaxed">
        <p>
          Esta política describe el uso de cookies en alejandrozakzuk.com, de acuerdo con el{' '}
          <strong>artículo 22.2 de la LSSI-CE</strong>, el <strong>RGPD (UE) 2016/679</strong> y las
          directrices de la <strong>Agencia Española de Protección de Datos (AEPD)</strong>.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">¿Qué es una cookie?</h2>
        <p>
          Una cookie es un pequeño archivo de texto que un sitio web guarda en el navegador del usuario. Las
          cookies permiten recordar preferencias, medir el uso del sitio y, en algunos casos, ofrecer
          contenido personalizado.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Cookies utilizadas en este sitio</h2>
        <div className="not-prose border border-rule mt-4">
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
              <tr className="border-b border-rule">
                <td className="p-3 font-mono text-xs">cookie-consent-v1</td>
                <td className="p-3">alejandrozakzuk.com</td>
                <td className="p-3">Recordar la decisión del usuario sobre el banner de cookies.</td>
                <td className="p-3">12 meses</td>
                <td className="p-3"><strong>Técnica</strong></td>
              </tr>
              <tr className="border-b border-rule">
                <td className="p-3 font-mono text-xs">_ga, _ga_*</td>
                <td className="p-3">Google LLC (GA4)</td>
                <td className="p-3">Analítica agregada y anonimizada del uso del sitio (páginas visitadas, duración, origen del tráfico). IP anonimizada.</td>
                <td className="p-3">24 meses</td>
                <td className="p-3">Analítica</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-xl text-ink pt-4">Cookies técnicas</h2>
        <p>
          Son imprescindibles para el funcionamiento del sitio. No requieren consentimiento previo del
          usuario y se activan por defecto al acceder al sitio.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Cookies analíticas</h2>
        <p>
          No se activan por defecto. Solo se cargan si el usuario otorga su consentimiento expreso a través
          del banner de cookies, conforme al artículo 22.2 de la LSSI-CE. El usuario puede aceptar o
          rechazar estas cookies en cualquier momento y modificar su decisión posteriormente.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Gestión del consentimiento</h2>
        <p>
          Al acceder al sitio por primera vez, se muestra un banner con las opciones{' '}
          <strong>Aceptar analítica</strong> y <strong>Rechazar</strong>. La decisión se guarda en una cookie
          técnica (<code>cookie-consent-v1</code>) durante 12 meses. Si el usuario desea modificar su
          decisión, puede borrar esa cookie desde la configuración de su navegador; en la siguiente visita
          volverá a aparecer el banner.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">Cómo deshabilitar las cookies desde el navegador</h2>
        <p>
          Todos los navegadores permiten bloquear o eliminar cookies. Instrucciones oficiales:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <a className="ed-link" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a>
          </li>
          <li>
            <a className="ed-link" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
          </li>
          <li>
            <a className="ed-link" href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>
          </li>
          <li>
            <a className="ed-link" href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a>
          </li>
        </ul>

        <p className="text-muted text-xs font-mono pt-6">
          Última actualización: {new Date().toISOString().slice(0, 10)}
        </p>
      </div>
    </Section>
  )
}
