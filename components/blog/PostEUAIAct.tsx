export default function PostEUAIAct() {
  return (
    <div className="prose-ed">
      <p className="lead">
        El Reglamento (UE) 2024/1689 —EU AI Act— entró en vigor en 2024 con
        obligaciones escalonadas. La mayoría de los sistemas de apoyo a la
        decisión clínica (CDSS) que los hospitales están comprando hoy caen en
        la categoría High-Risk. Muy pocos proveedores lo han comunicado
        abiertamente. Esta es la guía para clasificar un sistema en 30 minutos
        con base legal citada.
      </p>

      <h2 className="display-m mt-14 mb-4">Contexto: AI Act y MDR conviven</h2>
      <p>
        El EU AI Act no sustituye al Reglamento de productos sanitarios (MDR
        2017/745). Se superpone. Un CDSS que ya estaba clasificado como
        software como producto sanitario (SaMD) de clase IIa o superior pasa
        automáticamente a High-Risk bajo el AI Act por el juego del Artículo 6
        y el Anexo I. No hay escape por vía de categorización técnica: si
        diagnostica, estratifica riesgo o recomienda tratamiento, es
        High-Risk. Punto.
      </p>

      <h2 className="display-m mt-14 mb-4">Paso 1 — ¿Es un sistema de IA?</h2>
      <p>
        Definición del Artículo 3(1): sistema basado en máquina, diseñado para
        operar con distintos niveles de autonomía, que infiere a partir de la
        entrada cómo generar salidas (predicciones, recomendaciones, decisiones,
        contenido) que influyen en entornos físicos o virtuales.
      </p>
      <p>
        Un árbol de decisión clínico publicado en guías no es IA. Una red
        neuronal entrenada con historias clínicas sí. Un motor de reglas
        hard-coded sin aprendizaje no es IA en sentido estricto del AI Act,
        pero si incluye un componente de inferencia (por ejemplo, scoring
        probabilístico derivado de datos), probablemente sí. En la duda,
        asume que sí y sigue clasificando.
      </p>

      <h2 className="display-m mt-14 mb-4">Paso 2 — Artículo 5: ¿prácticas prohibidas?</h2>
      <p>
        Antes de evaluar si es High-Risk, descarta que caiga en las prácticas
        prohibidas del Artículo 5: manipulación subliminal, explotación de
        vulnerabilidades, social scoring por autoridades públicas, predicción
        de riesgo delictivo basada solo en perfiles, scraping masivo de
        rostros, inferencia de emociones en el trabajo o en educación salvo
        excepciones médicas muy tasadas, categorización biométrica sensible.
      </p>
      <p>
        Un CDSS clínico convencional no cae aquí. Pero un sistema de IA que
        estime emociones del paciente para orientar tratamiento psiquiátrico
        o un sistema que infiera orientación sexual a partir de datos
        biométricos sí podría. Descarta primero.
      </p>

      <h2 className="display-m mt-14 mb-4">Paso 3 — Anexo III: áreas de alto riesgo</h2>
      <p>
        El Anexo III enumera las áreas High-Risk. Salud aparece en varios
        puntos: gestión de infraestructura crítica sanitaria, acceso a
        servicios públicos esenciales, empleo y selección de personal
        sanitario, y vía Anexo I (productos sanitarios). La mayoría de los
        CDSS caerán a través del Anexo I + MDR, no del Anexo III directo.
      </p>

      <h2 className="display-m mt-14 mb-4">Paso 4 — Cruce con MDR</h2>
      <p>
        Si el sistema es SaMD clase IIa, IIb o III bajo MDR, el artículo 6(1)
        del AI Act lo clasifica como High-Risk automáticamente. La regla 11
        del Anexo VIII del MDR clasifica como IIa como mínimo cualquier
        software que proporcione información usada para tomar decisiones
        diagnósticas o terapéuticas. Esto captura prácticamente todos los
        CDSS serios.
      </p>

      <div className="not-prose my-8 border border-ink">
        <table className="w-full text-sm">
          <thead className="bg-ink text-bone font-mono uppercase tracking-widest text-[0.7rem]">
            <tr>
              <th className="text-left px-4 py-3 border-r border-bone/20">Tipo de CDSS</th>
              <th className="text-left px-4 py-3 border-r border-bone/20">Clase MDR</th>
              <th className="text-left px-4 py-3">AI Act</th>
            </tr>
          </thead>
          <tbody className="text-ink">
            <tr className="border-t border-rule">
              <td className="px-4 py-3 border-r border-rule">Alerta de interacción farmacológica</td>
              <td className="px-4 py-3 border-r border-rule">IIa</td>
              <td className="px-4 py-3">High-Risk</td>
            </tr>
            <tr className="border-t border-rule">
              <td className="px-4 py-3 border-r border-rule">Estratificación de riesgo diabético</td>
              <td className="px-4 py-3 border-r border-rule">IIa</td>
              <td className="px-4 py-3">High-Risk</td>
            </tr>
            <tr className="border-t border-rule">
              <td className="px-4 py-3 border-r border-rule">Detección de lesiones en imagen</td>
              <td className="px-4 py-3 border-r border-rule">IIb / III</td>
              <td className="px-4 py-3">High-Risk</td>
            </tr>
            <tr className="border-t border-rule">
              <td className="px-4 py-3 border-r border-rule">Chatbot informativo no diagnóstico</td>
              <td className="px-4 py-3 border-r border-rule">I o ninguna</td>
              <td className="px-4 py-3">Limited-Risk (transparencia)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="display-m mt-14 mb-4">Paso 5 — Obligaciones si es High-Risk</h2>
      <p>
        Si sale High-Risk, la lista de obligaciones es larga y no negociable.
        El proveedor y el desplegador (hospital) comparten responsabilidades.
      </p>
      <ul className="space-y-3 my-6 list-disc list-inside">
        <li>Sistema de gestión de riesgos documentado (Artículo 9).</li>
        <li>Gobernanza y calidad del dataset de entrenamiento y validación (Artículo 10).</li>
        <li>Documentación técnica completa según Anexo IV (Artículo 11).</li>
        <li>Registro automático de eventos — logging (Artículo 12).</li>
        <li>Transparencia e información clara al usuario facultativo (Artículo 13).</li>
        <li>Supervisión humana efectiva, no ceremonial (Artículo 14).</li>
        <li>Precisión, robustez y ciberseguridad demostrables (Artículo 15).</li>
        <li>Sistema de gestión de calidad del proveedor (Artículo 17).</li>
        <li>DPIA bajo RGPD y FRIA bajo AI Act antes del despliegue.</li>
        <li>Registro en la base de datos europea de sistemas High-Risk.</li>
      </ul>

      <h2 className="display-m mt-14 mb-4">Ejemplo concreto: CDSS de riesgo diabético</h2>
      <p>
        Mi TFM, ahora desplegado en Hugging Face, es un clasificador
        multiclase de riesgo diabético entrenado sobre 253.680 registros
        reales del CDC BRFSS, con Random Forest y explicabilidad XAI/SHAP y
        un AUC-ROC de 0,942. Su clasificación regulatoria es inequívoca:
        SaMD clase IIa por regla 11 del Anexo VIII del MDR, por tanto
        High-Risk bajo AI Act vía artículo 6(1) y Anexo I. Ningún otro
        resultado es defendible.
      </p>

      <h2 className="display-m mt-14 mb-4">ClinAI Classifier</h2>
      <p>
        Para automatizar este ejercicio, desarrollé{' '}
        <a
          href="https://huggingface.co/spaces/aram1585/clinai-classifier"
          target="_blank"
          rel="noopener noreferrer"
          className="ed-link"
        >
          ClinAI Classifier →
        </a>
        . Es una herramienta open-source que combina un agente LLM (Claude
        Sonnet 4.5) con un motor de reglas estático para devolver, en
        minutos, el nivel de riesgo, las categorías del Anexo III, los flags
        del Artículo 5, la base legal con artículos citados y un informe PDF
        listo para auditoría. Pensada para equipos de Medical Affairs y
        asuntos regulatorios de fabricantes, consultoras y hospitales.
      </p>

      <div className="mt-16 border-t-2 border-ink pt-10">
        <div className="eyebrow mb-4">Siguiente paso</div>
        <h3 className="display-m mb-4">
          ¿Has clasificado ya los CDSS que tienes en producción?
        </h3>
        <p className="mb-6">
          Si la respuesta es no, conviene hacerlo antes de que llegue la
          primera inspección. Asesoro a fabricantes y desplegadores en la
          clasificación inicial y en el plan de cumplimiento asociado.
        </p>
        <a href="/contacto#agenda" className="btn-ink">
          Reservar llamada de 15 min →
        </a>
      </div>
    </div>
  );
}
