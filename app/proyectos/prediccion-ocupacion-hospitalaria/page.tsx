import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Predicción de ocupación hospitalaria mediante IA · Case Study',
  description:
    'Case study sobre un modelo predictivo de demanda de camas hospitalarias con variables clínicas y operativas. Reducción estimada de varianza del 30-40% sobre baseline naive. IA aplicada a hospital, HL7 FHIR y EU AI Act.',
  keywords: [
    'predicción ocupación hospitalaria',
    'IA hospital camas',
    'case study salud digital',
    'gestión de camas hospitalarias',
    'modelo predictivo sanitario',
    'HL7 FHIR',
    'EU AI Act',
    'planificación asistencial',
    'Aram Zakzuk'
  ],
  alternates: {
    canonical: '/proyectos/prediccion-ocupacion-hospitalaria'
  },
  openGraph: {
    type: 'article',
    title: 'Predecir camas hospitalarias con criterio clínico-operativo',
    description:
      'Cómo se diseñó un modelo de demanda de camas con variables clínicas y operativas, con reducción estimada de varianza del 30-40% sobre baseline naive.',
    url: 'https://alejandrozakzuk.com/proyectos/prediccion-ocupacion-hospitalaria',
    images: [{ url: '/images/projects/longitud-estancia-ml.jpg', width: 1200, height: 630 }]
  }
}

export default function CaseStudyOcupacionHospitalaria() {
  const publishedDate = '2025-12-15'

  return (
    <>
      {/* ============================================================
          HERO EDITORIAL
          ============================================================ */}
      <Section id="case-hero">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">№ 02 · Case Study · Operaciones hospitalarias</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="display-xl" data-aos="fade-up">
              Predecir camas hospitalarias con criterio clínico-operativo
            </h1>
            <p className="lead mt-8" data-aos="fade-up" data-aos-delay="100">
              Un modelo que no optimiza una métrica de consultoría, sino que reduce la varianza con la que
              urgencias, planta y dirección toman decisiones cada mañana sobre la capacidad del hospital.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-rule pt-6">
              <div>
                <div className="caption">Fecha</div>
                <div className="mt-1 text-sm text-ink">Octubre – Diciembre 2025</div>
              </div>
              <div>
                <div className="caption">Institución</div>
                <div className="mt-1 text-sm text-ink">Máster en IA aplicada a Sanidad · CEMP</div>
              </div>
              <div>
                <div className="caption">Rol</div>
                <div className="mt-1 text-sm text-ink">Médico + Desarrollador</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip-ed">Python</span>
              <span className="chip-ed">Time Series</span>
              <span className="chip-ed">HL7 FHIR R4</span>
              <span className="chip-ed">Hospital Operations</span>
              <span className="chip-ed">EU AI Act</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 1 — EL PROBLEMA REAL
          ============================================================ */}
      <Section id="problema" index="01 / Problema">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">El problema real no está en los datos</h2>
            <div className="caption mt-4">La fragmentación asistencial</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              En un hospital español medio, la planificación de camas es un ejercicio reactivo. Urgencias decide a
              quién ingresar sin saber cuántas camas libres quedarán en planta en las próximas seis horas. Planta
              gestiona las altas sin visibilidad real de la presión que viene desde urgencias. Y la dirección, a
              primera hora de la mañana, pide una previsión diaria que nadie puede dar con confianza.
            </p>
            <p>
              He trabajado seis años y medio en hospital. En un turno normal en Méderi, Colombia, llegué a pasar
              más de cuarenta pacientes. La pregunta operativa no era clínica —los pacientes casi siempre estaban
              bien estratificados—; la pregunta era logística: <em>¿dónde ingresamos a este paciente?</em>,
              <em>¿cuántas camas libera cirugía mañana?</em>, <em>¿estamos en riesgo de bloquear urgencias por
              saturación aguas abajo?</em> Ninguna de esas preguntas tiene una respuesta cuantitativa en la mayoría
              de centros.
            </p>
            <p>
              La conversación pública sobre sanidad habla mucho de interoperabilidad, historia clínica
              electrónica y cuadros de mando. Pero entre la capa de datos y la capa de decisión hay un vacío que
              ningún HIS cubre bien: traducir datos operativos históricos en una previsión útil, a tiempo, y con
              granularidad por especialidad o por unidad.
            </p>
            <p>
              El problema no es falta de datos. Es falta de traducción entre datos operativos y decisión clínica
              en tiempo real.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 2 — POR QUÉ LOS MODELOS INGENUOS FALLAN
          ============================================================ */}
      <Section id="baseline" index="02 / Baseline">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Por qué los modelos ingenuos fallan</h2>
            <div className="caption mt-4">Promedios históricos y estacionalidad</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              La previsión por defecto que se usa en muchos hospitales es esencialmente un baseline naive:
              promedio móvil de la ocupación de los últimos días, corregido manualmente por estacionalidad obvia
              (fines de semana, festivos, invierno). Es un modelo que funciona razonablemente bien en régimen
              estacionario, y que se rompe precisamente cuando es más necesario.
            </p>
            <p>
              Falla en tres sentidos concretos. Primero, no captura shocks: una ola gripal en diciembre, un brote
              en una residencia, una alerta epidemiológica autonómica, un pico de urgencias por un evento
              meteorológico. Todos ellos son perfectamente visibles en los datos con dos o tres días de
              antelación, pero un promedio histórico los ignora por construcción. Segundo, asume estacionariedad
              que no existe: la estancia media por servicio cambia con el casemix, el envejecimiento poblacional
              mueve la base, los protocolos internos se actualizan cada trimestre. Tercero, e importa más, ignora
              variables estrictamente clínicas que sí están disponibles en el HIS: distribución por especialidad,
              gravedad al ingreso, índice de urgencias, porcentaje de ingresos quirúrgicos programados frente a
              urgentes.
            </p>
            <p>
              En un hospital de 500 camas con 80% de ocupación media, reducir la varianza de la previsión en
              un 30% no es un tecnicismo estadístico. Se traduce, en términos operativos, en entre 8 y 15 camas
              al día de margen de maniobra sin abrir planta nueva, sin derivar, sin cancelar programación. Eso es
              dinero real y, más importante, es capacidad asistencial real.
            </p>
            <p>
              La decisión de diseño de este proyecto fue, por tanto, no competir con modelos que optimicen
              exactitud puntual (RMSE sobre ocupación absoluta), sino competir con el baseline naive en la
              métrica que de verdad importa: dispersión sobre la planificación operativa.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 3 — APROXIMACIÓN
          ============================================================ */}
      <Section id="aproximacion" index="03 / Aproximación">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Variables clínicas más operativas</h2>
            <div className="caption mt-4">El criterio que separa el ruido de la señal</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              El modelo se construye sobre dos familias de features. Las variables operativas son las evidentes:
              ingresos diarios por unidad, altas diarias, estancia media desagregada por servicio, índice de
              urgencias (ratio de ingresos vía urgencias sobre el total), ocupación histórica con ventanas
              móviles de 7, 14 y 30 días. Son las variables que cualquier analista de gestión hospitalaria sabe
              extraer del HIS.
            </p>
            <p>
              Las variables clínicas son las que, por criterio profesional, sé que marcan la diferencia:
              especialidad del paciente, gravedad al ingreso (cuando existe triaje estructurado tipo Manchester
              o ESI), casemix de la planta receptora, porcentaje de ingresos quirúrgicos programados frente a
              urgentes. Modelamos cada una no como un dato descriptivo más, sino como una señal causal: una
              planta de medicina interna con casemix envejecido tiene una estancia media estructuralmente
              distinta a una planta quirúrgica corta-estancia, y la previsión debe saberlo.
            </p>
            <p>
              Esa combinación —operativa + clínica— es donde se gana frente a los modelos puramente logísticos
              que venden algunos proveedores de BI sanitario. Un modelo que solo mira ingresos y altas capta la
              superficie del problema; un modelo que incorpora el contexto clínico captura la física subyacente
              del flujo asistencial.
            </p>
            <p>
              En producción, la arquitectura prevista consume estos datos vía HL7 FHIR R4. Los recursos
              relevantes son <code className="text-ink">Encounter</code> (episodio asistencial con origen, fecha
              de ingreso y alta, servicio), <code className="text-ink">Patient</code> (demografía y, si está
              autorizado, comorbilidades agregadas), <code className="text-ink">Location</code> (unidad y cama) y
              <code className="text-ink"> Observation</code> para señales clínicas agregadas. Trabajar desde FHIR
              no es una preferencia técnica: es una decisión estratégica. Los pliegos de licitación pública en
              España ya exigen interoperabilidad FHIR en los HIS nuevos, y un modelo que se alimenta de estándar
              es un modelo portable entre hospitales.
            </p>
            <p>
              La decisión de diseño más importante fue conceptual: <strong className="text-ink">no optimizar una
              métrica de precisión pura, sino reducir la varianza decisional</strong>. Una cama que el modelo
              predice que llegará y no llega tiene un coste operativo bajo (personal avisado que no se usa). Una
              cama que no predijo y sí llega tiene un coste alto (paciente en pasillo, derivación a otro centro,
              cancelación de programación). El modelo está calibrado asimétricamente a favor del segundo tipo de
              error.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 4 — RESULTADOS
          ============================================================ */}
      <Section id="resultados" index="04 / Resultados">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Lo que el modelo entrega</h2>
            <div className="caption mt-4">Medido sobre dataset sintético realista</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <div className="border-l-4 border-ink pl-6 py-2">
              <div className="metric-numeral">30–40%</div>
              <p className="mt-2 text-sm text-ink">
                Reducción estimada de varianza en planificación de recursos frente a baseline naive, medida sobre
                ventana temporal de validación retrospectiva.
              </p>
            </div>
            <p>
              En lenguaje de dirección: en un hospital mediano de 500 camas con ocupación media del 80%, esa
              reducción de varianza equivale a entre 8 y 15 camas al día de margen operativo recuperado sin
              inversión en infraestructura adicional. Son camas que ya existen y que dejan de perderse por
              errores de planificación.
            </p>
            <p>
              Importa ser honesto sobre el alcance. La evaluación se realizó sobre un dataset sintético construido
              para replicar la dinámica real de un hospital terciario español. No existen datos reales de
              hospital público español en abierto por restricciones de RGPD, y ese es un límite estructural, no
              una excusa. La arquitectura del modelo está lista para alimentarse del HIS del hospital receptor
              vía FHIR, pero los números reales solo se validan en un piloto con datos del centro.
            </p>
            <p>
              Lo que sí se puede afirmar hoy, con los datos disponibles, es que el criterio de diseño —priorizar
              la reducción de varianza sobre la métrica puntual— es replicable y auditable, y que la arquitectura
              cumple desde el primer día con RGPD y con la clasificación <em>Limited Risk</em> del EU AI Act al
              tratarse de un sistema de apoyo a la decisión operativa y no de diagnóstico clínico.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 5 — IMPLICACIONES PARA UN HOSPITAL REAL
          ============================================================ */}
      <Section id="implicaciones" index="05 / Implicaciones">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Qué cambia en un hospital que lo adopta</h2>
            <div className="caption mt-4">Dirección, coordinación, compra pública</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              El impacto más inmediato se ve en la dirección de enfermería. Una previsión fiable de demanda a 24
              y 72 horas cambia radicalmente la planificación de turnos, la apertura contingente de plantas y la
              política de altas tempranas. Hoy esa planificación se hace con criterio humano experto y planillas
              de Excel; con el modelo, el criterio humano sigue siendo el decisor, pero tiene un soporte
              cuantitativo auditable.
            </p>
            <p>
              El segundo efecto es en la coordinación urgencias-planta, históricamente el talón de Aquiles de
              los hospitales españoles. Cuando urgencias tiene visibilidad sobre la capacidad prevista en las
              siguientes horas, las decisiones de derivación, observación prolongada e ingreso cambian. Es la
              misma información que hoy se comunica verbalmente entre supervisores de turno, convertida en dato
              estructurado y consultable.
            </p>
            <p>
              El tercer efecto va más allá del hospital. En la compra pública sanitaria, los pliegos de
              licitación para HIS y módulos de gestión ya están empezando a exigir APIs FHIR abiertas. Un modelo
              predictivo como este encaja de forma natural como requisito funcional en un pliego de
              transformación digital: el hospital compra un HIS que expone los datos vía FHIR, y la capa
              predictiva se despliega encima sin reescribir la pila. Esto es lo que debería exigirse en los
              proyectos financiados con fondos Next Generation y con recursos del PERTE de salud digital.
            </p>
            <p>
              Y hay una lectura europea. El Espacio Europeo de Datos Sanitarios (EHDS) establece que no solo los
              datos clínicos individuales viajan entre estados: también los datos operativos agregados, con
              fines de investigación y mejora del sistema. Un modelo entrenado sobre datos operativos de un
              hospital en España es directamente transferible a un hospital portugués o francés, siempre que la
              arquitectura se diseñe desde el estándar. Esto es relevante para cualquier consultora que esté
              diseñando hoy ofertas transfronterizas de transformación digital sanitaria.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 6 — STACK
          ============================================================ */}
      <Section id="stack" index="06 / Stack">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Stack y marco regulatorio</h2>
            <div className="caption mt-4">Decisiones técnicas explícitas</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="border border-rule">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Lenguaje</td>
                    <td className="p-4 text-ink-2">Python 3.11</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">ML</td>
                    <td className="p-4 text-ink-2">Scikit-learn, ingeniería de features de series temporales</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Interoperabilidad</td>
                    <td className="p-4 text-ink-2">
                      HL7 FHIR R4 · Recursos <code>Encounter</code>, <code>Patient</code>, <code>Location</code>,
                      <code> Observation</code>
                    </td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Despliegue previsto</td>
                    <td className="p-4 text-ink-2">Contenedor Docker + API FastAPI detrás del HIS del hospital</td>
                  </tr>
                  <tr>
                    <td className="p-4 caption w-1/3 border-r border-rule">Regulación</td>
                    <td className="p-4 text-ink-2">
                      RGPD (datos agregados, no identificativos) · EU AI Act, clasificación Limited Risk al
                      tratarse de apoyo a decisión operativa y no de diagnóstico clínico
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 7 — SIGUIENTES PASOS
          ============================================================ */}
      <Section id="siguientes" index="07 / Piloto real">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Cómo se despliega en un hospital</h2>
            <div className="caption mt-4">Fases de un piloto realista</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-4">
            <Card>
              <div className="caption">Fase 01</div>
              <h3 className="text-ink font-semibold mt-1">Revisión de fuentes del HIS</h3>
              <p className="mt-2 text-sm text-ink-2">
                Mapear los recursos FHIR disponibles, validar granularidad temporal y completitud de campos
                clínicos críticos (servicio, gravedad, origen del ingreso). Entre 2 y 4 semanas.
              </p>
            </Card>
            <Card>
              <div className="caption">Fase 02</div>
              <h3 className="text-ink font-semibold mt-1">Extracción retrospectiva de 12-24 meses</h3>
              <p className="mt-2 text-sm text-ink-2">
                Pipeline de anonimización y agregación. Los datos nunca salen del perímetro del centro;
                el entrenamiento puede realizarse on-premise o en nube soberana europea.
              </p>
            </Card>
            <Card>
              <div className="caption">Fase 03</div>
              <h3 className="text-ink font-semibold mt-1">Entrenamiento con validación temporal</h3>
              <p className="mt-2 text-sm text-ink-2">
                Splits respetando causalidad: entrenar en 2024, validar en 2025. Informe de métricas por
                servicio con intervalos de confianza, no promedios agregados opacos.
              </p>
            </Card>
            <Card>
              <div className="caption">Fase 04</div>
              <h3 className="text-ink font-semibold mt-1">Integración en dashboard de dirección</h3>
              <p className="mt-2 text-sm text-ink-2">
                La previsión se publica en el cuadro de mando existente, no en otra herramienta más. La
                interfaz es para supervisores de turno y dirección, no para científicos de datos.
              </p>
            </Card>
            <Card>
              <div className="caption">Fase 05</div>
              <h3 className="text-ink font-semibold mt-1">Evaluación mensual con indicadores mixtos</h3>
              <p className="mt-2 text-sm text-ink-2">
                Reunión mensual con dirección. Se contrasta la previsión con la realidad usando indicadores
                clínicos (tasa de derivación, tiempo en urgencias) y operativos (ocupación, varianza).
              </p>
            </Card>
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
              ¿Lideras un centro sanitario o una consultora que vende transformación digital?
            </h2>
            <p className="lead mt-6">
              Hablemos. El modelo, la arquitectura FHIR y el marco regulatorio están listos para sentarse en una
              mesa de piloto. Lo que falta es el dato real de un hospital dispuesto a validarlo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contacto?audience=hospital" className="btn-ink">
                Conversar sobre un piloto
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
            headline: 'Predecir camas hospitalarias con criterio clínico-operativo',
            description:
              'Case study sobre un modelo predictivo de demanda de camas hospitalarias con variables clínicas y operativas. Reducción estimada de varianza del 30-40% sobre baseline naive.',
            author: {
              '@type': 'Person',
              name: 'Aram Zakzuk',
              jobTitle: 'Médico · Máster en IA aplicada a Sanidad',
              url: 'https://alejandrozakzuk.com'
            },
            publisher: {
              '@type': 'Person',
              name: 'Aram Zakzuk',
              url: 'https://alejandrozakzuk.com'
            },
            datePublished: publishedDate,
            dateModified: publishedDate,
            inLanguage: 'es-ES',
            keywords:
              'predicción ocupación hospitalaria, IA hospital camas, case study salud digital, HL7 FHIR, EU AI Act',
            about: [
              { '@type': 'Thing', name: 'Hospital Operations' },
              { '@type': 'Thing', name: 'Predictive Analytics in Healthcare' },
              { '@type': 'Thing', name: 'HL7 FHIR R4' }
            ],
            image: 'https://alejandrozakzuk.com/images/projects/longitud-estancia-ml.jpg',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://alejandrozakzuk.com/proyectos/prediccion-ocupacion-hospitalaria'
            },
            proficiencyLevel: 'Expert'
          })
        }}
      />
    </>
  )
}
