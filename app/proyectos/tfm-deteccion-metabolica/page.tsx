import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import ScrubbedMetric from '@/components/ui/ScrubbedMetric'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'CDSS estratificación de riesgo diabético (TFM) · Case Study',
  description:
    'Case study sobre el TFM en IA aplicada a Sanidad (CEMP): Clinical Decision Support System de estratificación de riesgo diabético con Random Forest, AUC-ROC 0.942 sobre 253.680 registros del CDC BRFSS, explicabilidad XAI/SHAP y cumplimiento RGPD + EU AI Act + EHDS.',
  keywords: [
    'CDSS diabetes',
    'Random Forest',
    'XAI SHAP',
    'CDC BRFSS',
    'Clinical Decision Support System',
    'EU AI Act',
    'EHDS',
    'estratificación de riesgo',
    'Aram Zakzuk'
  ],
  alternates: {
    canonical: '/proyectos/tfm-deteccion-metabolica'
  },
  openGraph: {
    type: 'article',
    title: 'Un CDSS de riesgo diabético con AUC 0.942 y explicabilidad clínica',
    description:
      'TFM CEMP: Random Forest sobre 253.680 registros reales del CDC BRFSS, explicabilidad XAI/SHAP para validación clínica directa, cumplimiento regulatorio desde el día uno.',
    url: 'https://alejandrozakzuk.com/proyectos/tfm-deteccion-metabolica'
  }
}

export default function CaseStudyCDSSDiabetes() {
  const publishedDate = '2026-03-20'

  return (
    <>
      {/* ============================================================
          HERO EDITORIAL
          ============================================================ */}
      <Section id="case-hero">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">№ 02 · Case Study · CDSS clínico</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Breadcrumbs
              items={[
                { name: 'Proyectos', url: 'https://alejandrozakzuk.com/proyectos' },
                { name: 'CDSS riesgo diabético', url: 'https://alejandrozakzuk.com/proyectos/tfm-deteccion-metabolica' },
              ]}
            />
            <h1 className="display-xl" data-aos="fade-up">
              Un CDSS de riesgo diabético con explicabilidad clínica
            </h1>
            <p className="lead mt-8" data-aos="fade-up" data-aos-delay="100">
              Un modelo que no se mide en una métrica de leaderboard, sino en algo más incómodo y más útil:
              si un médico de atención primaria puede leer la salida del modelo, entender por qué ese paciente
              y no otro, y actuar sobre ella sin rezar.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-rule pt-6">
              <div>
                <div className="caption">Fecha</div>
                <div className="mt-1 text-sm text-ink">Febrero – Marzo 2026</div>
              </div>
              <div>
                <div className="caption">Institución</div>
                <div className="mt-1 text-sm text-ink">Máster en IA aplicada a Sanidad · CEMP</div>
              </div>
              <div>
                <div className="caption">Rol</div>
                <div className="mt-1 text-sm text-ink">Diseño clínico + modelado</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip-ed">Random Forest</span>
              <span className="chip-ed">XAI / SHAP</span>
              <span className="chip-ed">Scikit-learn</span>
              <span className="chip-ed">CDC BRFSS</span>
              <span className="chip-ed">EU AI Act</span>
              <span className="chip-ed">EHDS</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://huggingface.co/spaces/aram1585/diabetes-brfss-cdss"
                target="_blank"
                rel="noreferrer"
                className="btn-ink"
              >
                Ver demo en Hugging Face →
              </a>
              <a
                href="https://github.com/Aram9574/diabetes-brfss-cdss"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Repositorio GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 1 — EL PROBLEMA CLÍNICO
          ============================================================ */}
      <Section id="problema" index="01 / Problema">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">El problema clínico antes que el algoritmo</h2>
            <div className="caption mt-4">Por qué importa estratificar a tiempo</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              La diabetes tipo 2 no se diagnostica el día en que aparece. Se diagnostica, en media, entre
              siete y diez años después de que empieza a desarrollarse, cuando el paciente ya tiene daño
              microvascular silencioso, resistencia a la insulina establecida y, a menudo, complicaciones
              iniciales en retina o riñón. Todo ese daño es evitable si se detecta la fase prediabética y se
              interviene con modificación de estilo de vida o metformina.
            </p>
            <p>
              El problema es que la atención primaria no puede cribar universalmente con pruebas de
              laboratorio. No hay tiempo, no hay presupuesto, y un porcentaje alto de la población diana no
              acude al médico hasta que tiene síntomas. La estratificación de riesgo con variables conductuales
              y demográficas —las que sí se pueden recoger en una consulta de diez minutos— es el paso previo
              que permite priorizar a quién pedir la prueba de laboratorio.
            </p>
            <p>
              Un CDSS no sustituye la glucemia en ayunas. Permite que el médico pida la glucemia en ayunas a
              las personas que realmente tienen riesgo elevado, en lugar de cribar a todo el mundo o, peor
              aún, a nadie.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 2 — POR QUÉ BRFSS Y NO OTRO DATASET
          ============================================================ */}
      <Section id="dataset" index="02 / Dataset">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Por qué CDC BRFSS y no otro dataset</h2>
            <div className="caption mt-4">Realismo poblacional vs. limpieza académica</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              El dataset canónico en la literatura académica para este problema es Pima Indians Diabetes, con
              768 registros y ocho variables limpias. Es útil para aprender, pero no representa la población
              real y sobreestima el rendimiento de cualquier modelo. Un AUC de 0.85 en Pima no dice nada sobre
              cómo funcionará el modelo en atención primaria.
            </p>
            <p>
              El Behavioral Risk Factor Surveillance System (BRFSS) del CDC estadounidense es otra liga:
              253.680 registros reales de encuesta telefónica con más de 250 variables conductuales y
              demográficas. Incluye ruido real, valores faltantes reales, y la distribución desbalanceada
              real de prediabetes, diabetes y normoglucemia en población general. Un modelo que funciona aquí
              es un modelo que ha visto condiciones parecidas a las del despliegue.
            </p>
            <p>
              La decisión de diseño fue no limpiar el dataset más allá de lo estrictamente necesario. Los
              valores faltantes se imputaron explicitando la decisión, los outliers conductualmente coherentes
              se mantuvieron, y la proporción de clases no se balanceó artificialmente con SMOTE. El modelo
              aprende sobre la distribución que va a encontrar en producción.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 3 — MODELADO Y EXPLICABILIDAD
          ============================================================ */}
      <Section id="modelado" index="03 / Modelado">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Random Forest con explicabilidad clínica</h2>
            <div className="caption mt-4">AUC-ROC 0.942 sobre validación estratificada</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <ScrubbedMetric
              value="0.942"
              barPercent={94}
              label="AUC-ROC en validación estratificada. Se sitúa en el top 5% de modelos publicados en literatura para datasets equivalentes de estratificación de riesgo diabético."
            />
            <p>
              La elección de Random Forest frente a gradient boosting no es accidental. Random Forest ofrece
              mejor calibración de probabilidad en clases desbalanceadas sin postprocesado, lo que importa
              porque el output del CDSS es una probabilidad clínica, no una etiqueta binaria. Un modelo cuyo
              0.7 significa realmente un 70% de probabilidad es más útil para un médico que un modelo que
              acierta más pero da probabilidades mal calibradas.
            </p>
            <p>
              El pipeline incluye análisis de equidad algorítmica por subgrupos demográficos (sexo, edad,
              etnia). El modelo tiene sesgos conocidos hacia subgrupos mejor representados en el BRFSS, y eso
              está documentado explícitamente en el informe. No se oculta detrás de una métrica agregada.
            </p>
            <p>
              La capa de explicabilidad se implementa con SHAP. Para cada paciente concreto, el CDSS muestra
              qué variables empujan la probabilidad hacia arriba y cuáles la empujan hacia abajo, con
              magnitud cuantificada. Un médico que reciba un score de 0.73 puede ver que ese score viene, por
              ejemplo, del BMI y la actividad física del paciente, y usa esa información para personalizar la
              intervención, no solo para decidir si pedir la prueba.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 4 — LÍMITES
          ============================================================ */}
      <Section id="limites" index="04 / Límites">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Lo que el modelo no es</h2>
            <div className="caption mt-4">Honestidad clínica sobre el alcance</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              El modelo está entrenado con datos estadounidenses. La transferencia directa a población
              española es cuestionable sin revalidación: los patrones de actividad física, dieta y acceso al
              sistema sanitario son distintos, y eso puede desplazar la distribución condicional entre
              variables. Un despliegue real requiere recalibración con datos locales, sea de SNS o de
              aseguradora privada.
            </p>
            <p>
              El modelo clasifica riesgo, no diagnostica. La diferencia importa regulatoriamente: bajo EU AI
              Act cae como sistema de apoyo a la decisión clínica (HIGH_RISK vía Anexo III punto 5a si se
              despliega para triaje de servicio esencial, LIMITED_RISK si es herramienta de apoyo
              poblacional). Bajo MDR podría caer como SaMD clase IIa si el fabricante declara propósito
              médico. La clasificación exacta depende del uso intencionado.
            </p>
            <p>
              El output no es accionable sin criterio médico. Un score de 0.73 debe leerse en contexto: edad,
              antecedentes familiares, comorbilidades previas, adherencia esperada a cambios de estilo de
              vida. El CDSS ayuda a priorizar, no a prescribir.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 5 — IMPLICACIONES
          ============================================================ */}
      <Section id="implicaciones" index="05 / Implicaciones">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Dónde encaja en un sistema sanitario real</h2>
            <div className="caption mt-4">Atención primaria, aseguradoras, programas de prevención</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              El caso de uso más natural es atención primaria: integrar el CDSS en el sistema de historia
              clínica electrónica para que, cuando el médico abre la consulta de un paciente con factores de
              riesgo reconocibles, vea el score y el desglose SHAP junto a las constantes vitales. No cambia
              el flujo del médico, le da información adicional que puede ignorar o usar.
            </p>
            <p>
              El segundo caso es aseguradoras y programas de prevención corporativa. La estratificación
              poblacional permite diseñar campañas focalizadas: screening activo en los subgrupos con
              probabilidad elevada, en lugar de campañas universales con baja adherencia. El retorno
              sanitario y económico es medible, no especulativo.
            </p>
            <p>
              El tercer caso es ensayos clínicos de intervenciones preventivas. Seleccionar pacientes de alto
              riesgo para probar metformina profiláctica, intervenciones de estilo de vida estructuradas o
              nuevos fármacos, con criterio homogéneo y reproducible, en lugar de criterios manuales distintos
              por centro.
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
                    <td className="p-4 text-ink-2">Scikit-learn · Random Forest · validación estratificada</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Explicabilidad</td>
                    <td className="p-4 text-ink-2">SHAP · análisis de equidad por subgrupos demográficos</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Dataset</td>
                    <td className="p-4 text-ink-2">CDC BRFSS · 253.680 registros reales</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Demo</td>
                    <td className="p-4 text-ink-2">Streamlit desplegado en Hugging Face Spaces</td>
                  </tr>
                  <tr>
                    <td className="p-4 caption w-1/3 border-r border-rule">Marco regulatorio</td>
                    <td className="p-4 text-ink-2">
                      RGPD · EU AI Act (LIMITED_RISK o HIGH_RISK según propósito de uso) · EHDS como
                      restricción de arquitectura de datos
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
              ¿Tu equipo desarrolla un CDSS o valida uno de un proveedor?
            </h2>
            <p className="lead mt-6">
              Puedo revisar el diseño clínico, la estrategia de explicabilidad, la calibración de probabilidad
              y el encaje regulatorio. Tanto para HealthTech en fase de despliegue como para hospitales que
              están evaluando un sistema antes de firmar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contacto?audience=healthtech" className="btn-ink">
                Conversar sobre un caso
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
            headline: 'Un CDSS de riesgo diabético con AUC 0.942 y explicabilidad clínica',
            description:
              'Case study sobre el TFM en IA aplicada a Sanidad (CEMP): Clinical Decision Support System de estratificación de riesgo diabético con Random Forest y explicabilidad SHAP sobre 253.680 registros del CDC BRFSS.',
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
              'CDSS diabetes, Random Forest, XAI SHAP, CDC BRFSS, Clinical Decision Support System, EU AI Act, EHDS',
            about: [
              { '@type': 'Thing', name: 'Clinical Decision Support System' },
              { '@type': 'Thing', name: 'Explainable AI' },
              { '@type': 'Thing', name: 'Diabetes risk stratification' }
            ],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://alejandrozakzuk.com/proyectos/tfm-deteccion-metabolica'
            },
            image: {
              '@type': 'ImageObject',
              url: 'https://alejandrozakzuk.com/proyectos/tfm-deteccion-metabolica/opengraph-image.png',
              width: 1200,
              height: 630,
            },
            proficiencyLevel: 'Expert'
          })
        }}
      />
    </>
  )
}
