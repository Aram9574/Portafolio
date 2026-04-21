import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import ScrubbedMetric from '@/components/ui/ScrubbedMetric'

export const metadata: Metadata = {
  title: 'ClinAI Classifier — Clasificador EU AI Act · Case Study',
  description:
    'Case study sobre ClinAI Classifier, herramienta open source que clasifica sistemas de IA sanitarios bajo el EU AI Act (Reglamento 2024/1689). Pipeline de dos etapas: agente Claude + motor de reglas con invariante de no-degradación.',
  keywords: [
    'EU AI Act',
    'Reglamento 2024/1689',
    'Anexo III',
    'Artículo 5',
    'SaMD',
    'MDR',
    'clasificación regulatoria IA sanitaria',
    'HealthTech compliance',
    'Aram Zakzuk'
  ],
  alternates: {
    canonical: '/proyectos/clinai-classifier'
  },
  openGraph: {
    type: 'article',
    title: 'ClinAI Classifier — el clasificador EU AI Act que nadie había escrito',
    description:
      'Herramienta open source que devuelve veredicto de riesgo bajo EU AI Act con base legal citada, flags del Artículo 5 y flag SaMD. Informe PDF auditable.',
    url: 'https://alejandrozakzuk.com/proyectos/clinai-classifier'
  }
}

export default function CaseStudyClinAIClassifier() {
  const publishedDate = '2026-04-15'

  return (
    <>
      {/* ============================================================
          HERO EDITORIAL
          ============================================================ */}
      <Section id="case-hero">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">№ 01 · Case Study · Regulación IA sanitaria</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="display-xl" data-aos="fade-up">
              El clasificador EU AI Act que nadie había escrito
            </h1>
            <p className="lead mt-8" data-aos="fade-up" data-aos-delay="100">
              Una herramienta abierta que convierte la descripción en lenguaje natural de un sistema de IA
              sanitario en un veredicto regulatorio auditable, con base legal citada, Anexo III mapeado y un
              PDF listo para pasar por un comité de cumplimiento.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-rule pt-6">
              <div>
                <div className="caption">Fecha</div>
                <div className="mt-1 text-sm text-ink">Febrero – Abril 2026</div>
              </div>
              <div>
                <div className="caption">Contexto</div>
                <div className="mt-1 text-sm text-ink">Proyecto propio · Open source</div>
              </div>
              <div>
                <div className="caption">Rol</div>
                <div className="mt-1 text-sm text-ink">Diseño regulatorio + implementación</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip-ed">EU AI Act</span>
              <span className="chip-ed">Reglamento 2024/1689</span>
              <span className="chip-ed">Python</span>
              <span className="chip-ed">FastAPI</span>
              <span className="chip-ed">Claude API</span>
              <span className="chip-ed">Docker</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://huggingface.co/spaces/aram1585/clinai-classifier"
                target="_blank"
                rel="noreferrer"
                className="btn-ink"
              >
                Ver demo en Hugging Face →
              </a>
              <a
                href="https://github.com/aramzakzuk/clinai-classifier"
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
          SECCIÓN 1 — EL PROBLEMA REAL
          ============================================================ */}
      <Section id="problema" index="01 / Problema">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Clasificar un sistema bajo EU AI Act no es trivial</h2>
            <div className="caption mt-4">Un texto legal de 144 páginas</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              El Reglamento 2024/1689 (EU AI Act) entró en vigor en agosto de 2024 y es, a fecha de hoy, la
              regulación más estricta del mundo sobre sistemas de inteligencia artificial. Para los sistemas
              sanitarios el impacto es inmediato: la mayoría cae como <em>high-risk</em> vía Anexo III, y eso
              obliga a gestión de riesgos, documentación técnica, gobernanza de datos, supervisión humana,
              registro en la base de datos de la UE y marcado CE cuando aplica MDR.
            </p>
            <p>
              El problema práctico es que clasificar un sistema bajo el EU AI Act no se puede hacer con una
              tabla de Excel. Depende del propósito concreto, del contexto asistencial, de si el sistema toma
              decisiones autónomas o solo asiste, de si cae también bajo MDR como producto sanitario, de si
              entra en las prohibiciones del Artículo 5. Cada una de esas condiciones puede mover el veredicto
              entre cuatro niveles de riesgo con consecuencias regulatorias muy distintas.
            </p>
            <p>
              En el mercado existen herramientas comerciales de compliance, pero son caras, opacas y suelen
              estar orientadas a grandes corporaciones. Para una startup HealthTech, un hospital que quiere
              auditar un proveedor o un investigador clínico, no hay una herramienta abierta que dé un
              veredicto auditable con la base legal citada artículo por artículo. Ese vacío es lo que el
              proyecto intenta cerrar.
            </p>

            <ScrubbedMetric
              value="4"
              barPercent={75}
              label="Niveles de riesgo bajo el EU AI Act (prohibido · alto · limitado · mínimo). Cada condición del sistema puede mover el veredicto entre ellos con consecuencias regulatorias muy distintas."
            />
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 2 — POR QUÉ UN LLM NO BASTA
          ============================================================ */}
      <Section id="llm-no-basta" index="02 / Por qué un LLM no basta">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Por qué un LLM solo no resuelve esto</h2>
            <div className="caption mt-4">Alucinación, trazabilidad, degradación</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              La tentación inicial es obvia: pasar la descripción del sistema a un LLM potente y pedirle un
              veredicto. Funciona razonablemente bien en el 80% de los casos, y falla ruidosamente en el 20%
              restante, que son precisamente los casos frontera donde importa acertar.
            </p>
            <p>
              Hay tres problemas estructurales. Primero, alucinación legal: un LLM puede citar un artículo que
              no existe o que no dice lo que afirma. En un informe regulatorio esto es inaceptable. Segundo,
              falta de trazabilidad: la misma entrada puede dar dos veredictos distintos en dos ejecuciones,
              algo que cualquier auditor rechazará. Tercero, degradación silenciosa: si el modelo se actualiza,
              el veredicto puede cambiar sin aviso, lo que rompe la reproducibilidad que exige el propio EU AI
              Act en sistemas auditables.
            </p>
            <p>
              La decisión de diseño fue combinar LLM con motor de reglas estático bajo una arquitectura que
              garantiza <strong className="text-ink">no-degradación</strong>. El LLM propone, las reglas
              validan. Si el LLM da un veredicto que las reglas consideran inconsistente con la jurisprudencia
              codificada, gana la regla. Si hay discrepancia entre ambos, se escala a revisión humana y se
              registra.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 3 — PIPELINE DE DOS ETAPAS
          ============================================================ */}
      <Section id="pipeline" index="03 / Pipeline">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">El pipeline en dos etapas</h2>
            <div className="caption mt-4">Agente + motor de reglas</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              La primera etapa es un agente Claude Sonnet 4.5 con prompt estructurado que recibe la descripción
              en lenguaje natural del sistema y devuelve un JSON con: propósito funcional, contexto asistencial,
              nivel de autonomía, datos que procesa, usuarios finales y salida clínica. No clasifica todavía.
              Solo extrae hechos verificables.
            </p>
            <p>
              La segunda etapa es un motor de reglas escrito en Python que toma ese JSON y aplica la lógica
              del reglamento artículo por artículo. Primero comprueba Artículo 5 (prohibiciones: manipulación
              cognitiva, categorización biométrica, reconocimiento emocional en entornos clínicos). Después
              comprueba Anexo III (alta riesgo: dispositivos médicos bajo MDR, triaje de servicios esenciales,
              evaluación biométrica remota). Después los criterios de riesgo limitado y mínimo.
            </p>
            <p>
              La salida final incluye: nivel de riesgo (PROHIBITED / HIGH_RISK / LIMITED_RISK / MINIMAL_RISK),
              categorías del Anexo III aplicables, flags del Artículo 5, base legal con cita textual por
              artículo, lista de requisitos de cumplimiento priorizados, y flag SaMD cuando el sistema cae bajo
              MDR. Todo ello se genera también como informe PDF auditable con WeasyPrint.
            </p>
            <p>
              La invariante de no-degradación es explícita: el motor de reglas nunca puede devolver un veredicto
              menos restrictivo que el propuesto por el agente LLM. Si el agente dice HIGH_RISK y las reglas
              dicen LIMITED_RISK, gana HIGH_RISK. La lógica es deliberada: en dudas de clasificación
              regulatoria, el error conservador siempre es menos dañino que el permisivo.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          SECCIÓN 4 — CRITERIO CLÍNICO QUE LO FUNDAMENTA
          ============================================================ */}
      <Section id="criterio" index="04 / Criterio clínico">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Por qué el criterio clínico cambia la clasificación</h2>
            <div className="caption mt-4">Lo que un abogado sin clínica no ve</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              Una herramienta de compliance escrita sin criterio clínico tiende a clasificar casi todo como
              alto riesgo. Es el reflejo conservador del abogado regulatorio: ante la duda, sube la categoría.
              El problema es que eso paraliza innovación legítima que no supone riesgo clínico real, y hunde
              proyectos HealthTech que podrían desplegarse con categoría limitada bajo condiciones razonables.
            </p>
            <p>
              El criterio clínico permite matizar dos cosas que la lectura jurídica pura pasa por alto. Primero,
              el contexto de uso real: un sistema de triaje automático en urgencias no es lo mismo que un
              sistema de priorización de listas de espera quirúrgicas. Ambos tocan triaje asistencial, pero el
              primero tiene impacto inmediato sobre vida del paciente y el segundo tiene capas de revisión
              humana que cambian el perfil de riesgo. Segundo, la cadena de decisión: un sistema que
              recomienda versus un sistema que decide versus un sistema que filtra pacientes antes de que
              lleguen al clínico.
            </p>
            <p>
              En ClinAI Classifier, esa lectura clínica está codificada en el prompt del agente y en los
              chequeos del motor de reglas. No son abstracciones legales. Son las mismas preguntas que yo me
              hago cuando reviso un producto sanitario con un equipo de Medical Affairs: <em>¿cuándo se usa?,
              ¿quién confirma?, ¿qué pasa si falla?, ¿el paciente llega a saberlo?</em>
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
            <h2 className="display-m">Para quién resuelve un problema</h2>
            <div className="caption mt-4">HealthTech, hospitales, consultoras</div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6 text-ink-2">
            <p>
              Para una startup HealthTech, ClinAI Classifier es la primera herramienta que permite hacer una
              pre-auditoría regulatoria en quince minutos sin contratar a un despacho. El informe PDF no
              sustituye al asesor legal; lo prepara. Cuando el equipo legal llega, llega con un documento base
              sobre el que trabajar, no desde cero. Eso reduce el tiempo de validación regulatoria de semanas
              a días.
            </p>
            <p>
              Para un hospital que evalúa un proveedor, el clasificador permite auditar la narrativa comercial
              del fabricante contra la norma europea. Muchos pliegos de licitación pública ya exigen
              declaración de conformidad EU AI Act; el comprador público puede usar esta herramienta para
              verificar que la declaración del proveedor coincide con la clasificación independiente.
            </p>
            <p>
              Para una consultora que diseña pliegos o memorias técnicas, la herramienta es un punto de partida
              para redactar requisitos técnicos ajustados al nivel de riesgo real del sistema. Un pliego que
              exige requisitos de alto riesgo cuando el sistema es de riesgo limitado encarece el proyecto sin
              aportar seguridad adicional. Un pliego que exige de menos expone al comprador público.
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
                    <td className="p-4 caption w-1/3 border-r border-rule">Agente LLM</td>
                    <td className="p-4 text-ink-2">Claude Sonnet 4.5 vía Anthropic API</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Backend</td>
                    <td className="p-4 text-ink-2">FastAPI · motor de reglas estático en Python</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Frontend demo</td>
                    <td className="p-4 text-ink-2">Streamlit desplegado en Hugging Face Spaces</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Generación PDF</td>
                    <td className="p-4 text-ink-2">WeasyPrint · plantilla HTML/CSS editorial</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td className="p-4 caption w-1/3 border-r border-rule">Contenedorización</td>
                    <td className="p-4 text-ink-2">Docker · reproducibilidad en entornos corporativos</td>
                  </tr>
                  <tr>
                    <td className="p-4 caption w-1/3 border-r border-rule">Marco regulatorio</td>
                    <td className="p-4 text-ink-2">
                      EU AI Act (Reglamento 2024/1689) · Anexo III · Artículo 5 · SaMD · MDR
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
              ¿Tu equipo necesita clasificar un sistema bajo EU AI Act?
            </h2>
            <p className="lead mt-6">
              Puedo revisar la clasificación, validar el encaje Anexo III y ayudaros a preparar la documentación
              técnica que exige el reglamento. Tanto para HealthTech en fase de despliegue como para
              consultoras que estén redactando pliegos.
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
            headline: 'ClinAI Classifier — el clasificador EU AI Act que nadie había escrito',
            description:
              'Case study sobre ClinAI Classifier, herramienta open source que clasifica sistemas de IA sanitarios bajo el EU AI Act con pipeline de dos etapas (agente LLM + motor de reglas).',
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
              'EU AI Act, Reglamento 2024/1689, Anexo III, SaMD, MDR, clasificación regulatoria, HealthTech compliance',
            about: [
              { '@type': 'Thing', name: 'EU AI Act' },
              { '@type': 'Thing', name: 'Medical Device Regulation' },
              { '@type': 'Thing', name: 'Software as a Medical Device' }
            ],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://alejandrozakzuk.com/proyectos/clinai-classifier'
            },
            proficiencyLevel: 'Expert'
          })
        }}
      />
    </>
  )
}
