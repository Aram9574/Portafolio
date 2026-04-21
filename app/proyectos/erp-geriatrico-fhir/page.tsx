import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import ScrubbedMetric from '@/components/ui/ScrubbedMetric'

export const metadata: Metadata = {
  title: 'GeriCare — Prototipo ERP con HL7/FHIR R4 · Case Study',
  description:
    'Case study sobre GeriCare: prototipo de ERP sanitario para residencias geriátricas modelado sobre HL7 FHIR R4. Exploración técnica de interoperabilidad clínica en entornos con datos fragmentados.',
  keywords: [
    'HL7 FHIR R4',
    'ERP sanitario',
    'geriatría',
    'interoperabilidad clínica',
    'residencias',
    'Django',
    'prototipo FHIR',
    'Aram Zakzuk'
  ],
  alternates: {
    canonical: '/proyectos/erp-geriatrico-fhir'
  },
  openGraph: {
    type: 'article',
    title: 'GeriCare — un prototipo FHIR para centros geriátricos',
    description:
      'Exploración técnica sobre modelado FHIR R4 aplicado a un ERP sanitario para entornos residenciales. Proyecto académico.',
    url: 'https://alejandrozakzuk.com/proyectos/erp-geriatrico-fhir'
  }
}

export default function CaseStudyGeriCare() {
  const publishedDate = '2025-09-10'

  return (
    <>
      {/* ============================================================
          HERO EDITORIAL
          ============================================================ */}
      <Section id="case-hero">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">№ 04 · Case Study · Interoperabilidad</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="display-xl" data-aos="fade-up">
              GeriCare — un prototipo FHIR para centros geriátricos
            </h1>
            <p className="lead mt-8" data-aos="fade-up" data-aos-delay="100">
              Un ejercicio de exploración técnica sobre cómo se modela un ERP sanitario siguiendo el estándar
              HL7 FHIR R4, en un entorno —las residencias— donde la fragmentación de datos entre especialistas
              externos es la norma y no la excepción.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-rule pt-6">
              <div>
                <div className="caption">Fecha</div>
                <div className="mt-1 text-sm text-ink">Exploración personal · 2025</div>
              </div>
              <div>
                <div className="caption">Naturaleza</div>
                <div className="mt-1 text-sm text-ink">Prototipo académico · no desplegado</div>
              </div>
              <div>
                <div className="caption">Rol</div>
                <div className="mt-1 text-sm text-ink">Diseño conceptual + modelado</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip-ed">HL7 FHIR R4</span>
              <span className="chip-ed">Python</span>
              <span className="chip-ed">Django</span>
              <span className="chip-ed">PostgreSQL</span>
              <span className="chip-ed">Prototipo</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/Aram9574/GeriCare"
                target="_blank"
                rel="noreferrer"
                className="btn-ink"
              >
                Repositorio GitHub →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 1 — POR QUÉ LAS RESIDENCIAS
          ============================================================ */}
      <Section id="residencias" index="01 / Contexto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Por qué las residencias son el caso más difícil</h2>
            <div className="caption mt-4">Fragmentación entre médicos, fisio, farmacia</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              Una residencia geriátrica media concentra a un tipo de paciente particularmente complejo:
              pluripatológico, polimedicado, con historia clínica repartida entre atención primaria, varios
              especialistas hospitalarios, servicios de rehabilitación externos y, a veces, un médico privado
              que el paciente ve desde hace décadas. Los datos viven en sitios distintos y no hablan entre sí.
            </p>
            <p>
              El personal del centro gestiona medicación, constantes, ingresos y altas hospitalarias, evaluación
              funcional, incidencias. Pero el sistema informático habitual es un ERP generalista con una capa
              clínica añadida que no conoce estándares sanitarios. El resultado es que la información entra y
              sale del centro en PDF, emails y llamadas telefónicas.
            </p>
            <p>
              Este proyecto exploró la pregunta conceptual: ¿cómo sería un ERP para residencias si se
              diseñara desde el estándar FHIR desde el primer día, en lugar de añadir una capa de
              interoperabilidad al final?
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 2 — MODELADO FHIR
          ============================================================ */}
      <Section id="modelado" index="02 / Modelado">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Modelado sobre recursos FHIR R4</h2>
            <div className="caption mt-4">Patient, Observation, MedicationStatement</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              El back-end en Django se construye sobre modelos que mapean 1:1 a recursos FHIR R4. Los
              pacientes no son una tabla personalizada; son un recurso <code className="text-ink">Patient</code>
              con extensiones controladas para datos específicos del entorno residencial. Las constantes
              vitales son <code className="text-ink">Observation</code> con LOINC codes. La medicación es
              <code className="text-ink"> MedicationStatement</code> con SNOMED-CT para principios activos.
            </p>
            <p>
              La decisión de diseño era deliberada: cualquier dato que entre en GeriCare tiene que poder
              exportarse en un bundle FHIR válido sin transformación posterior. Eso significa que el sistema
              puede conversar nativamente con cualquier HIS hospitalario compatible con FHIR, con la historia
              clínica electrónica de atención primaria de la comunidad autónoma, o con un sistema central de
              gestión de residencias a nivel regional.
            </p>
            <p>
              El prototipo no implementa toda la riqueza de FHIR —sería un proyecto de años—, sino un
              subconjunto mínimo funcional: perfiles de paciente, observaciones, medicación, y episodios
              asistenciales (<code className="text-ink">Encounter</code>) para registrar ingresos hospitalarios
              y altas. Suficiente para probar que el enfoque arquitectónico funciona.
            </p>

            <ScrubbedMetric
              value="4"
              barPercent={60}
              label="Recursos FHIR R4 modelados en el prototipo: Patient, Observation, MedicationStatement y Encounter. El subconjunto mínimo para validar la portabilidad entre sistemas sanitarios europeos."
            />
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 3 — LÍMITES Y APRENDIZAJES
          ============================================================ */}
      <Section id="limites" index="03 / Alcance">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Qué es y qué no es este proyecto</h2>
            <div className="caption mt-4">Prototipo, no producto</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              GeriCare es un prototipo académico. No está desplegado en ningún centro, no se ha validado con
              datos reales y no pretende competir con los ERPs sanitarios comerciales existentes. Su valor
              está en haber recorrido el problema de diseño de punta a punta: entender qué implica modelar
              FHIR R4 en una capa de persistencia real, no como ejercicio de pizarra.
            </p>
            <p>
              El aprendizaje principal es que empezar desde FHIR es muchísimo más barato que migrar después.
              Los ERPs sanitarios que hoy dicen tener compatibilidad FHIR suelen haber añadido una capa de
              traducción tardía, con todas las inconsistencias que eso implica. Un sistema que nace FHIR
              tiene esa compatibilidad como propiedad estructural, no como checkbox.
            </p>
            <p>
              El aprendizaje secundario es regulatorio. El Espacio Europeo de Datos Sanitarios (EHDS)
              establece que los datos clínicos de pacientes europeos deben ser portables entre estados, y
              define FHIR como el estándar de intercambio por defecto. Cualquier sistema sanitario que se
              diseñe hoy sin FHIR nativo está condenado a una refactorización cara en los próximos cinco años.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 4 — STACK
          ============================================================ */}
      <Section id="stack" index="04 / Stack">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Stack técnico</h2>
            <div className="caption mt-4">Prototipo en Django + PostgreSQL</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="border border-rule">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Back-end</td>
                    <td className="p-4 text-ink-2">Python 3.11 · Django</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Persistencia</td>
                    <td className="p-4 text-ink-2">PostgreSQL con modelos mapeados a FHIR R4</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Interoperabilidad</td>
                    <td className="p-4 text-ink-2">
                      HL7 FHIR R4 · Recursos <code>Patient</code>, <code>Observation</code>,
                      <code> MedicationStatement</code>, <code>Encounter</code>
                    </td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Terminologías</td>
                    <td className="p-4 text-ink-2">LOINC (observaciones) · SNOMED-CT (medicación)</td>
                  </tr>
                  <tr>
                    <td className="p-4 caption w-1/3 border-r border-rule">Estado</td>
                    <td className="p-4 text-ink-2">
                      Prototipo académico · no desplegado en producción ni validado clínicamente
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <Section id="cta" className="rule-b">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Siguiente paso</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display-l">
              ¿Tu organización diseña un sistema sanitario desde cero?
            </h2>
            <p className="lead mt-6">
              Si estáis evaluando un ERP, una plataforma clínica o una capa de interoperabilidad, empezar desde
              FHIR es la diferencia entre un sistema que encaja con el EHDS y uno que tendréis que migrar en
              tres años. Puedo ayudar en el diseño conceptual y la auditoría del pliego técnico.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contacto?audience=hospital" className="btn-ink">
                Conversar sobre arquitectura
              </Link>
              <Link href="/trabajemos-juntos" className="btn-ghost">
                Ver cómo trabajo
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SCHEMA.ORG JSON-LD
          ============================================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: 'GeriCare — un prototipo FHIR para centros geriátricos',
            description:
              'Case study sobre GeriCare: prototipo de ERP sanitario para residencias modelado sobre HL7 FHIR R4. Exploración técnica de interoperabilidad clínica.',
            author: {
              '@type': 'Person',
              '@id': 'https://alejandrozakzuk.com/#person',
              name: 'Aram Zakzuk',
              jobTitle: 'Healthcare & Clinical AI Consultant',
              url: 'https://alejandrozakzuk.com'
            },
            publisher: {
              '@type': 'Person',
              '@id': 'https://alejandrozakzuk.com/#person',
              name: 'Aram Zakzuk',
              url: 'https://alejandrozakzuk.com'
            },
            datePublished: publishedDate,
            dateModified: publishedDate,
            inLanguage: 'es-ES',
            keywords:
              'HL7 FHIR R4, ERP sanitario, geriatría, interoperabilidad clínica, residencias, prototipo FHIR',
            about: [
              { '@type': 'Thing', name: 'HL7 FHIR' },
              { '@type': 'Thing', name: 'Healthcare Interoperability' },
              { '@type': 'Thing', name: 'Geriatric Care' }
            ],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://alejandrozakzuk.com/proyectos/erp-geriatrico-fhir'
            },
            proficiencyLevel: 'Expert'
          })
        }}
      />
    </>
  )
}
