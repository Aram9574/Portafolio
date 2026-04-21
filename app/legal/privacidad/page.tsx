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
    <Section id="legal-privacidad" title="Política de privacidad">
      <div className="prose prose-stone max-w-3xl text-ink-2 space-y-5 leading-relaxed">
        <p>
          La presente política describe cómo este sitio trata los datos personales de los usuarios,
          conforme al <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y a la{' '}
          <strong>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de
          los derechos digitales (LOPDGDD)</strong>.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">1. Responsable del tratamiento</h2>
        <ul className="list-none pl-0 space-y-1">
          <li><strong>Responsable:</strong> Aram Zakzuk</li>
          <li><strong>Finalidad:</strong> Portafolio profesional y comunicación con el titular</li>
          <li><strong>Localidad:</strong> Madrid, España</li>
          <li>
            <strong>Contacto:</strong>{' '}
            <a className="ed-link" href="mailto:zakzukaram@gmail.com">
              zakzukaram@gmail.com
            </a>
          </li>
        </ul>

        <h2 className="font-display text-xl text-ink pt-4">2. Datos que se recogen y finalidad</h2>
        <p>El sitio trata datos personales únicamente en los siguientes supuestos:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Formulario de contacto y formulario de pre-calificación (Calendly):</strong> nombre,
            correo electrónico y mensaje voluntario. Finalidad: atender la solicitud del usuario, evaluar
            encaje profesional y agendar una reunión si procede.
          </li>
          <li>
            <strong>Suscripción al newsletter:</strong> correo electrónico. Finalidad: envío periódico de
            contenidos profesionales sobre salud digital, IA clínica y regulación europea. El usuario puede
            darse de baja en cualquier momento.
          </li>
          <li>
            <strong>Analítica web (Google Analytics 4):</strong> datos agregados y anonimizados de navegación
            (páginas visitadas, duración, origen). Finalidad: medir el interés del contenido y mejorar la
            experiencia. Este tratamiento solo se activa <strong>previo consentimiento expreso</strong> del
            usuario a través del banner de cookies.
          </li>
        </ul>

        <h2 className="font-display text-xl text-ink pt-4">3. Base legal del tratamiento</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Consentimiento</strong> del interesado (artículo 6.1.a RGPD) para newsletter, analítica
            no técnica y formulario de contacto.
          </li>
          <li>
            <strong>Interés legítimo</strong> del responsable (artículo 6.1.f RGPD) para cookies técnicas
            estrictamente necesarias para el funcionamiento del sitio.
          </li>
        </ul>

        <h2 className="font-display text-xl text-ink pt-4">4. Plazo de conservación</h2>
        <p>
          Los datos se conservan mientras exista relación profesional con el usuario o, en su defecto,
          durante un máximo de <strong>dos años</strong> desde el último contacto o acción registrada. Los
          datos asociados a suscripciones al newsletter se conservan hasta que el usuario solicite la baja.
          Los datos analíticos se conservan según la política de retención de Google Analytics 4
          (por defecto, 14 meses).
        </p>

        <h2 className="font-display text-xl text-ink pt-4">5. Destinatarios</h2>
        <p>
          Los datos no se comunican a terceros salvo obligación legal. Se utilizan los siguientes encargados
          del tratamiento, todos ellos conformes con el RGPD:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Vercel Inc.</strong> — hosting del sitio (EE. UU., con cláusulas contractuales tipo).</li>
          <li><strong>Google LLC</strong> — analítica web (GA4) con IP anonimizada.</li>
          <li><strong>Calendly LLC</strong> — agendamiento de reuniones (solo si el usuario lo utiliza voluntariamente).</li>
          <li><strong>Proveedor de email marketing</strong> — envío de newsletter (solo si el usuario se suscribe).</li>
        </ul>

        <h2 className="font-display text-xl text-ink pt-4">6. Derechos del usuario</h2>
        <p>
          Conforme al RGPD, cualquier usuario puede ejercer los siguientes derechos:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Acceso a sus datos personales.</li>
          <li>Rectificación de datos inexactos o incompletos.</li>
          <li>Supresión de datos (derecho al olvido).</li>
          <li>Limitación del tratamiento.</li>
          <li>Oposición al tratamiento.</li>
          <li>Portabilidad de los datos.</li>
          <li>Retirar el consentimiento en cualquier momento.</li>
        </ul>
        <p>
          Para ejercer estos derechos, basta con enviar un correo a{' '}
          <a className="ed-link" href="mailto:zakzukaram@gmail.com">zakzukaram@gmail.com</a> indicando el
          derecho que se desea ejercer. Si el usuario considera que sus derechos no se han atendido
          adecuadamente, puede presentar una reclamación ante la{' '}
          <a
            className="ed-link"
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agencia Española de Protección de Datos (AEPD)
          </a>.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">7. Seguridad</h2>
        <p>
          Se aplican medidas técnicas y organizativas razonables para proteger los datos frente a accesos no
          autorizados, pérdida o alteración. Ningún sistema en Internet es completamente seguro; el usuario
          asume los riesgos inherentes a la comunicación por medios electrónicos.
        </p>

        <h2 className="font-display text-xl text-ink pt-4">8. Modificaciones</h2>
        <p>
          Esta política puede actualizarse para reflejar cambios legales o en los servicios utilizados. La
          versión vigente es la publicada en esta página, con indicación de la fecha de última
          actualización.
        </p>

        <p className="text-muted text-xs font-mono pt-6">
          Última actualización: {new Date().toISOString().slice(0, 10)}
        </p>
      </div>
    </Section>
  )
}
