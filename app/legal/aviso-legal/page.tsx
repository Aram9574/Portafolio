import Section from '@/components/ui/Section'

export const metadata = { title: 'Aviso legal' }

export default function AvisoLegalPage() {
  return (
    <Section id="legal-aviso" title="Aviso legal">
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300">El contenido de esta web tiene carácter divulgativo y no constituye asesoramiento médico ni profesional.
Aunque la información se elabora con base en experiencia clínica y conocimiento técnico, no sustituye la consulta directa con un profesional de la salud ni la toma de decisiones clínicas.
El titular del sitio no se responsabiliza de un uso indebido de la información publicada.
Todos los derechos de autor y propiedad intelectual de los textos, diseños y contenidos corresponden a Alejandro Zakzuk, salvo que se indique lo contrario. Queda prohibida la reproducción total o parcial sin autorización expresa.
El titular del sitio no se hace responsable de los contenidos de enlaces externos ni de las políticas de privacidad de terceros.
El usuario acepta que el uso del sitio es bajo su propio riesgo y responsabilidad.
El titular del sitio se reserva el derecho a modificar, actualizar o eliminar cualquier contenido en cualquier momento sin previo aviso.
El acceso y uso del sitio implica la aceptación de este aviso legal y las condiciones aquí expuestas.</p>
      </div>
    </Section>
  )
}