import Section from '@/components/ui/Section'

export const metadata = { title: 'Política de privacidad' }

export default function PoliticaPrivacidadPage() {
  return (
    <Section id="legal-privacidad" title="Política de privacidad">
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300">La presente página web es de carácter personal y tiene únicamente fines informativos y de divulgación.
No se recogen datos personales sensibles de los usuarios ni se almacenan historiales médicos.
El único dato que podría recopilarse de manera directa es el correo electrónico en caso de que el usuario decida contactar voluntariamente.
El sitio puede utilizar herramientas de analítica web que funcionan de manera agregada y anónima para medir la interacción con los contenidos.
En ningún caso se venden, ceden ni comparten datos con terceros.
El usuario puede ejercer sus derechos de acceso, rectificación, cancelación y oposición enviando un correo electrónico a la dirección proporcionada en la sección de contacto.
El sitio web puede contener enlaces a otros sitios de terceros. No nos hacemos responsables de las políticas de privacidad ni del contenido de dichos sitios.
Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento, por lo que se recomienda revisarla periódicamente.
El uso continuado del sitio web tras la publicación de cambios en la política de privacidad implica la aceptación de dichos cambios.
Para cualquier duda o consulta relacionada con esta política de privacidad, el usuario puede ponerse en contacto a través del correo electrónico proporcionado en la sección de contacto.</p>
      </div>
    </Section>
  )
}
