export default function PostConsultoras() {
  return (
    <div className="prose-ed">
      <p className="lead">
        Las grandes consultoras —Crowe, Deloitte, Accenture, KPMG, PwC— venden
        transformación digital sanitaria a hospitales españoles y a la
        Administración. Equipos impecables de consultoría estratégica,
        expertos tecnológicos sólidos, partners con décadas de experiencia. Y
        rara vez un médico en el comité. Esto es lo que se les escapa.
      </p>

      <h2 className="display-m mt-14 mb-4">La observación incómoda</h2>
      <p>
        Los proyectos de IA clínica que fracasan en el primer año no fracasan
        por mala tecnología. El modelo funciona en test, el AUC-ROC es
        publicable, la arquitectura cloud pasa el security review. Fracasan
        porque nadie preguntó a tiempo qué decisión clínica concreta cambia,
        quién lo va a usar a las 3 de la madrugada en urgencias, y qué datos
        que parecen rutinarios en teoría están en blanco en la práctica.
      </p>
      <p>
        Un CDSS diseñado sin un médico que haya pasado un turno en urgencias
        no sobrevive el primer año. Lo he visto, y lo he documentado. La
        diferencia entre el modelo que funciona en Kaggle y el modelo que
        funciona en el Servicio de Medicina Interna del Hospital de La Paz es
        un orden de magnitud de detalle clínico que no está en ningún PRD.
      </p>

      <h2 className="display-m mt-14 mb-4">Las siete preguntas</h2>

      <h3 className="font-display italic text-xl mt-10 mb-2">
        01 — ¿Qué decisión clínica exacta cambia este sistema?
      </h3>
      <p>
        No vale “mejorar la toma de decisiones”. La pregunta es concreta:
        ¿cambia el triaje en urgencias? ¿cambia la prescripción al alta?
        ¿cambia el criterio de ingreso? Si no hay una decisión binaria
        identificable que el sistema influye, el sistema no tiene valor
        clínico medible.
      </p>

      <h3 className="font-display italic text-xl mt-10 mb-2">
        02 — ¿Qué datos faltantes son frecuentes en la práctica?
      </h3>
      <p>
        En el paper todo está completo. En la consulta real faltan la
        presión arterial porque el tensiómetro no conectaba, faltan los
        antecedentes porque el paciente no se acordaba, falta el peso porque
        la báscula pesaba con la ropa. Un modelo que requiere 23 variables
        completas para inferir con confianza es un modelo que en producción
        no ejecuta el 60% de los casos.
      </p>

      <h3 className="font-display italic text-xl mt-10 mb-2">
        03 — ¿Quién lo usará y en qué momento del flujo?
      </h3>
      <p>
        ¿El residente en el primer año? ¿La enfermería en triaje? ¿El
        adjunto en la pase de visita matinal? Cada rol tiene tres minutos
        distintos, una pantalla distinta y una tolerancia distinta a falsos
        positivos. Un sistema diseñado para “el clínico” en abstracto no
        está diseñado para nadie.
      </p>

      <h3 className="font-display italic text-xl mt-10 mb-2">
        04 — ¿El output es interpretable en 5 segundos?
      </h3>
      <p>
        Nadie lee un informe SHAP de 40 ítems durante una guardia. El
        output tiene que ser: una probabilidad, una acción sugerida y una
        razón principal. Todo lo demás es literatura científica. Si tu UX
        no pasa el test de los cinco segundos, no se usará, y si no se
        usa no hay impacto.
      </p>

      <h3 className="font-display italic text-xl mt-10 mb-2">
        05 — ¿Qué sesgos tiene el dataset?
      </h3>
      <p>
        ¿Entrenaste con datos del CDC americano y lo vendes a un hospital
        andaluz? ¿El dataset tiene sobrerrepresentación masculina en
        cardiología? ¿Los pacientes mayores de 80 están en blanco porque no
        se derivaban a la prueba? El sesgo no es un anexo ético: es un
        problema de validez clínica que decide si tu sistema sirve o
        reproduce desigualdad.
      </p>

      <h3 className="font-display italic text-xl mt-10 mb-2">
        06 — ¿Cómo se valida con facultativos?
      </h3>
      <p>
        Validación retrospectiva contra historia clínica no basta. Se
        necesita un estudio prospectivo con facultativos del centro,
        comparación con criterio clínico habitual, análisis de
        concordancia y discusión de los casos discrepantes. Si el plan no
        incluye a dos médicos reales dedicando tiempo real, el proyecto
        no tiene validación clínica.
      </p>

      <h3 className="font-display italic text-xl mt-10 mb-2">
        07 — ¿Cómo se monitorea en producción?
      </h3>
      <p>
        Data drift, concept drift, degradación de performance por cambios
        en el perfil de paciente, alertas cuando la distribución de
        entradas cambia más de X desviaciones estándar. Un CDSS en
        producción sin monitoreo es un pasivo regulatorio y clínico. El
        EU AI Act ya lo exige (Artículos 15 y 17 del Reglamento
        2024/1689). No es opcional.
      </p>

      <div className="not-prose my-12 border-2 border-ink p-6 md:p-8 bg-paper">
        <div className="eyebrow mb-3">Regla simple</div>
        <p className="display-m text-xl leading-snug">
          Si la propuesta comercial no responde a estas siete preguntas de
          forma concreta y verificable, no está lista para firmar.
        </p>
      </div>

      <h2 className="display-m mt-14 mb-4">Cómo encajo yo en un equipo consultor</h2>
      <p>
        No compito con Crowe, Deloitte o Accenture. Encajo dentro. Como
        advisor clínico embedded en el equipo de la consultora durante la
        fase de diseño y despliegue de un proyecto de IA clínica. Mi rol
        es responder esas siete preguntas desde dentro, traducir entre el
        lenguaje del partner y el lenguaje del jefe de servicio, y
        bloquear lo que no pasa el filtro clínico antes de que llegue a
        producción.
      </p>
      <p>
        Tres capas en el mismo perfil: 6,5 años de práctica clínica
        hospitalaria (Universidad del Rosario · Méderi), máster en Salud
        Digital por la Universidad Europea con enfoque en licitaciones y
        EHDS, y máster en IA aplicada a Sanidad (CEMP) con formación
        complementaria en Stanford. No soy tu consultor tecnológico ni tu
        consultor estratégico: soy la capa que valida que el sistema
        aterriza en un hospital real.
      </p>

      <div className="mt-16 border-t-2 border-ink pt-10">
        <div className="eyebrow mb-4">Para partners y directores de proyecto</div>
        <h3 className="display-m mb-4">
          Si lideras un proyecto de IA clínica en Crowe, Deloitte, Accenture o
          similar, hablemos.
        </h3>
        <p className="mb-6">
          Sesión de 15 minutos para revisar el proyecto concreto, identificar
          los riesgos clínicos y regulatorios que no están cubiertos y
          proponer un encaje de advisoría.
        </p>
        <a href="/contacto#agenda" className="btn-ink">
          Reservar llamada de 15 min →
        </a>
      </div>
    </div>
  );
}
