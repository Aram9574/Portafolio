import Section from '@/components/ui/Section'
import LeadMagnet from '@/components/sections/LeadMagnet'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import { CheckCircle2, Server, Shield, Stethoscope } from 'lucide-react'

type Especialidad = {
  slug: string
  nombre: string
  foco: string
  preguntaClinica: string
  riesgoRegulatorio: string
  interoperabilidad: string
}

const especialidades: Especialidad[] = [
  {
    slug: 'radiologia',
    nombre: 'Radiología',
    foco: 'diagnóstico por imagen asistido por IA y flujo PACS',
    preguntaClinica: '¿El modelo detecta casos reales o solo imágenes limpias? ¿Reduce carga del radiólogo o la multiplica con falsos positivos?',
    riesgoRegulatorio: 'La mayoría de sistemas de apoyo diagnóstico por imagen caen como HIGH_RISK bajo Anexo III del EU AI Act y como SaMD clase IIa o IIb bajo MDR. Exige documentación técnica completa y, cuando aplica, marcado CE.',
    interoperabilidad: 'DICOM para imágenes, HL7 FHIR R4 para integración con HIS, SNOMED-CT para codificación de hallazgos. El punto de fallo habitual es la integración con el PACS existente, no el modelo.'
  },
  {
    slug: 'cardiologia',
    nombre: 'Cardiología',
    foco: 'análisis de señales ECG, telemetría y modelos predictivos cardiovasculares',
    preguntaClinica: '¿El modelo está validado sobre población europea o sobre una cohorte americana no transferible? ¿Cómo se comporta en pacientes con comorbilidades que los datasets académicos suelen excluir?',
    riesgoRegulatorio: 'Modelos de detección de arritmias o estratificación de riesgo cardiovascular caen como HIGH_RISK bajo EU AI Act y pueden clasificarse como SaMD clase IIa. Requieren validación clínica robusta antes de despliegue.',
    interoperabilidad: 'HL7 FHIR R4 con recursos Observation para constantes, DiagnosticReport para informes, LOINC para codificación de parámetros. Integración con monitorización remota vía CDA/FHIR.'
  },
  {
    slug: 'oncologia',
    nombre: 'Oncología',
    foco: 'estratificación de riesgo, matching biomarcador-terapia y medicina de precisión',
    preguntaClinica: '¿El modelo funciona sobre la realidad del hospital (registros heterogéneos, datos faltantes, variabilidad inter-observador) o solo sobre datasets curados? ¿Cómo se integra en el comité tumoral sin añadir fricción?',
    riesgoRegulatorio: 'Sistemas de recomendación terapéutica o priorización de pacientes caen claramente como HIGH_RISK bajo EU AI Act. El riesgo clínico asociado exige supervisión humana documentada y explicabilidad accionable.',
    interoperabilidad: 'HL7 FHIR con GenomicStudy (R5) para datos moleculares, SNOMED-CT para estadiaje, OMOP para cohortes. El Espacio Europeo de Datos Sanitarios (EHDS) abre oportunidades para estudios multi-centro transfronterizos.'
  },
]

export function generateStaticParams() {
  return especialidades.map((esp) => ({ especialidad: esp.slug }))
}

export function generateMetadata({ params }: { params: { especialidad: string } }) {
  const data = especialidades.find((e) => e.slug === params.especialidad) || especialidades[0]
  return {
    title: `IA clínica en ${data.nombre} · Evaluación regulatoria y estrategia de adopción · Aram Zakzuk`,
    description: `Asesoramiento en despliegue de IA clínica en ${data.nombre}: evaluación de encaje asistencial, análisis regulatorio EU AI Act y MDR, e interoperabilidad sanitaria. Consultoría independiente con criterio médico real.`,
    alternates: {
      canonical: `/soluciones/${data.slug}`,
    },
  }
}

export default function SolucionesPorEspecialidad({
  params,
}: {
  params: { especialidad: string }
}) {
  const data =
    especialidades.find((e) => e.slug === params.especialidad) || especialidades[0]

  return (
    <>
      {/* HERO */}
      <Section id="hero-especialidad" className="pt-24">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Consultoría · {data.nombre}</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Breadcrumbs
              items={[
                { name: 'Soluciones', url: 'https://alejandrozakzuk.com/trabajemos-juntos' },
                { name: `IA clínica en ${data.nombre}`, url: `https://alejandrozakzuk.com/soluciones/${data.slug}` },
              ]}
            />
            <h1 className="display-xl text-ink mb-6">
              IA clínica en <span className="hl-accent">{data.nombre}</span>
            </h1>
            <p className="lead text-ink-2 max-w-3xl">
              Evaluación de soluciones, análisis regulatorio europeo y estrategia de adopción en proyectos
              de IA clínica aplicados a {data.foco}. Consultoría independiente con criterio médico real,
              no desarrollo interno de producto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto?audience=healthtech" className="btn-ink">
                Conversar sobre un caso →
              </Link>
              <Link href="/trabajemos-juntos" className="btn-ghost">
                Ver cómo trabajo
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* PREGUNTA CLÍNICA */}
      <Section id="pregunta-clinica" index="01 / Pregunta clínica">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">La pregunta que importa</h2>
            <div className="caption mt-4">Antes del algoritmo, el criterio clínico</div>
          </div>
          <div className="col-span-12 md:col-span-9 text-ink-2 space-y-6">
            <p>{data.preguntaClinica}</p>
            <p>
              Mi valor en {data.nombre} no es construir el modelo. Es sentarme con tu equipo antes de que
              se firme el pliego, revisar el encaje con el flujo asistencial real, identificar los puntos de
              fallo regulatorio que un abogado sin clínica no ve, y traducir el criterio médico a requisitos
              técnicos que el proveedor pueda cumplir o rechazar explícitamente.
            </p>
          </div>
        </div>
      </Section>

      {/* RIESGO REGULATORIO */}
      <Section id="regulacion" index="02 / Regulación">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Riesgo regulatorio real</h2>
            <div className="caption mt-4">EU AI Act · MDR · SaMD</div>
          </div>
          <div className="col-span-12 md:col-span-9 text-ink-2 space-y-6">
            <p>{data.riesgoRegulatorio}</p>
            <p>
              Con la <Link href="/proyectos/clinai-classifier" className="ed-link">herramienta open source
              ClinAI Classifier</Link> que desarrollé, cualquier equipo puede obtener un veredicto regulatorio
              auditable antes de firmar con un proveedor o antes de desplegar un sistema propio. El informe
              PDF sirve como punto de partida para el equipo legal, no lo sustituye.
            </p>
          </div>
        </div>
      </Section>

      {/* INTEROPERABILIDAD */}
      <Section id="interoperabilidad" index="03 / Interoperabilidad">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Interoperabilidad sanitaria</h2>
            <div className="caption mt-4">HL7 FHIR · SNOMED-CT · EHDS</div>
          </div>
          <div className="col-span-12 md:col-span-9 text-ink-2 space-y-6">
            <p>{data.interoperabilidad}</p>
            <p>
              El Espacio Europeo de Datos Sanitarios (EHDS) establece FHIR como estándar de intercambio por
              defecto. Cualquier sistema de IA clínica que se compre o desarrolle hoy sin interoperabilidad
              FHIR nativa tendrá que migrarse en los próximos cinco años. Es una decisión que se toma en el
              pliego, no en la ejecución.
            </p>
          </div>
        </div>
      </Section>

      {/* PILARES */}
      <Section id="pilares" index="04 / Pilares">
        <h2 className="display-m text-ink mb-10">Lo que reviso en un proyecto de {data.nombre}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          <div className="p-6 border border-rule bg-paper">
            <Stethoscope className="w-6 h-6 text-ink mb-4" aria-hidden />
            <h3 className="font-display text-lg text-ink mb-2">Encaje asistencial</h3>
            <p className="text-sm text-ink-2">
              ¿Dónde se usa, quién confirma, qué pasa si falla? El criterio clínico aplicado al flujo real del
              servicio, no al flujo idealizado del demo.
            </p>
          </div>
          <div className="p-6 border border-rule bg-paper">
            <Shield className="w-6 h-6 text-ink mb-4" aria-hidden />
            <h3 className="font-display text-lg text-ink mb-2">Riesgo regulatorio</h3>
            <p className="text-sm text-ink-2">
              Clasificación EU AI Act, encaje MDR, documentación técnica exigible y camino a marcado CE
              cuando aplica.
            </p>
          </div>
          <div className="p-6 border border-rule bg-paper">
            <Server className="w-6 h-6 text-ink mb-4" aria-hidden />
            <h3 className="font-display text-lg text-ink mb-2">Interoperabilidad</h3>
            <p className="text-sm text-ink-2">
              Arquitectura FHIR, terminologías clínicas y portabilidad EHDS. El sistema que se compra hoy
              tiene que sobrevivir a la próxima migración.
            </p>
          </div>
        </div>
      </Section>

      <LeadMagnet />

      {/* AEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `IA clínica en ${data.nombre} · Consultoría Aram Zakzuk`,
            description: `Asesoramiento en despliegue de IA clínica en ${data.nombre}: evaluación regulatoria EU AI Act, interoperabilidad FHIR y estrategia de adopción.`,
            specialty: data.nombre,
            about: [
              { '@type': 'Thing', name: data.nombre },
              { '@type': 'Thing', name: 'Clinical AI' },
              { '@type': 'Thing', name: 'EU AI Act' },
              { '@type': 'Thing', name: 'HL7 FHIR' },
            ],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://alejandrozakzuk.com/soluciones/${data.slug}`,
            },
            author: {
              '@type': 'Person',
              '@id': 'https://alejandrozakzuk.com/#person',
              name: 'Aram Zakzuk',
            },
          }),
        }}
      />
    </>
  )
}
