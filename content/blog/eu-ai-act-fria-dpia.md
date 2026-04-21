---
slug: eu-ai-act-fria-dpia
title: "FRIA vs DPIA: cómo se hace la evaluación de impacto combinada bajo EU AI Act y RGPD"
description: "Diferencias técnicas entre FRIA y DPIA, cuándo hacer una u otra y plantilla estructurada con ejemplo real de CDSS diabético en urgencias hospitalarias."
date: "2026-03-16"
readingTime: "7 min"
tags: ["EU AI Act", "RGPD", "FRIA"]
---

La Unión Europea obliga a dos evaluaciones de impacto distintas para sistemas de IA que procesan datos personales: FRIA (Fundamental Rights Impact Assessment) bajo AI Act y DPIA (Data Protection Impact Assessment) bajo RGPD. En hospitales españoles, esto significa trabajo duplicado si no estructuras bien el proceso. He visto departamentos de innovación que hacen la DPIA, creen estar cubiertos y luego descubren que la FRIA pide análisis adicionales sobre acceso a servicios esenciales, discriminación algorítmica o impacto en menores. Este post explica qué pide cada evaluación, cuándo hacer una u otra, cómo integrarlas sin repetir trabajo y un ejemplo completo con un sistema de apoyo a decisión clínica (CDSS) para riesgo diabético en urgencias.

## Qué es cada evaluación y quién la exige

**DPIA (Data Protection Impact Assessment)**: evaluación obligatoria bajo RGPD (artículo 35) cuando el tratamiento de datos personales presenta riesgo elevado para derechos y libertades. Ejemplos: monitorización sistemática a gran escala, decisiones automatizadas que producen efectos jurídicos o afectan significativamente, tratamiento de datos sensibles de salud. En España la gestiona el DPO, involucra al responsable del tratamiento y debe consultarse a la AEPD si el riesgo residual es alto.

**FRIA (Fundamental Rights Impact Assessment)**: evaluación obligatoria bajo EU AI Act (artículo 27) para sistemas de alto riesgo que puedan impactar derechos fundamentales. Categorías: identificación biométrica, gestión de infraestructuras críticas, educación y formación profesional, empleo, acceso a servicios esenciales (salud incluida), aplicación de la ley, migración, justicia y democracia. La hace el proveedor del sistema de IA antes de la puesta en mercado. No existe DPO equivalente; la responsabilidad cae en el fabricante o su equipo regulatorio.

En un hospital que desarrolla o implanta un CDSS para estratificar pacientes diabéticos en urgencias, ambas evaluaciones son obligatorias: DPIA porque trata datos de salud en decisiones automatizadas, FRIA porque es sistema de alto riesgo en acceso a servicios sanitarios esenciales.

## Diferencias clave en alcance y contenido

La DPIA se centra en protección de datos: proporcionalidad del tratamiento, bases legales, medidas técnicas de seguridad (pseudonimización, cifrado, control de acceso), derechos del interesado (información, acceso, rectificación, supresión). Pregunta fundamental: ¿este tratamiento de datos cumple los principios del RGPD y minimiza riesgos para privacidad?

La FRIA se centra en impacto sobre derechos fundamentales más allá de privacidad: no discriminación (artículo 21 Carta UE), dignidad humana (artículo 1), derecho a tratamiento sanitario (artículo 35), acceso efectivo a servicios esenciales. Pregunta fundamental: ¿este sistema de IA puede producir sesgos, negar acceso, limitar autonomía del paciente o del clínico, afectar a grupos vulnerables?

Ejemplo concreto con el CDSS diabético: la DPIA verifica que los datos de glucemia, HbA1c, historial de ingresos se tratan bajo consentimiento informado o interés legítimo bien documentado, que la base de datos está cifrada, que el paciente puede solicitar eliminación. La FRIA verifica que el modelo no infraestima riesgo en mujeres embarazadas, que no penaliza a pacientes sin acceso a telemedicina, que el clínico puede anular la recomendación sin fricción administrativa, que existe trazabilidad de decisiones para auditoría posterior.

## Cuándo hacer una u otra (y cuándo ambas)

| Escenario | DPIA obligatoria | FRIA obligatoria |
|-----------|------------------|------------------|
| CDSS diagnóstico de imagen (riesgo alto AI Act) que trata datos de salud | Sí | Sí |
| Sistema de gestión de citas que optimiza agenda sin decisión automatizada sobre prioridad clínica | Sí (monitorización sistemática) | No |
| Chatbot de triaje sintomático sin acceso a historia clínica | No | Sí (acceso a servicios de salud) |
| Herramienta interna de auditoría de historias clínicas sin decisión sobre pacientes | Sí | No |

En la práctica hospitalaria española, si desarrollas o compras un sistema de IA para uso clínico directo (diagnóstico, pronóstico, asignación de recursos), asume que necesitas ambas. El enfoque eficiente es hacer una evaluación integrada con secciones diferenciadas.

## Plantilla estructurada para evaluación combinada FRIA-DPIA

### Sección 1: Descripción del sistema (común a ambas)
- Finalidad clínica: qué problema resuelve, para qué pacientes, en qué punto del flujo asistencial.
- Arquitectura técnica: modelo de IA usado (red neuronal, árbol de decisión, ensemble), datos de entrada, output generado.
- Categoría de riesgo: justificación bajo Anexo III AI Act y artículo 35 RGPD.

### Sección 2: Tratamiento de datos personales (DPIA)
- Base legal: consentimiento informado, interés legítimo, obligación legal, misión de interés público.
- Categorías de datos: identificativos directos (nombre, DNI, tarjeta sanitaria), datos de salud (diagnósticos, tratamientos, pruebas), datos especiales (origen étnico si se recoge para análisis de sesgo).
- Minimización: qué datos son estrictamente necesarios, cuáles se eliminan tras inferencia.
- Medidas técnicas: cifrado en reposo (AES-256), cifrado en tránsito (TLS 1.3), control de acceso basado en roles, logs de auditoría, pseudonimización para desarrollo.
- Transferencias internacionales: si el modelo se entrena en cloud fuera del EEE, cláusulas contractuales tipo.
- Derechos del interesado: cómo se informa, cómo se gestiona acceso y rectificación, portabilidad si aplica.

### Sección 3: Impacto en derechos fundamentales (FRIA)
- Derecho a no discriminación: análisis de sesgo por sexo, edad, origen, condición socioeconómica. Métricas de equidad (paridad demográfica, igualdad de oportunidades, paridad predictiva). Resultados de test en subgrupos.
- Derecho a tratamiento sanitario efectivo: puede el sistema negar, retrasar o condicionar acceso. Procedimiento de anulación por clínico. Tiempo de respuesta del sistema (si es tiempo real en urgencias, latencia máxima).
- Dignidad humana y autonomía: se informa al paciente de que interviene IA. Puede rechazar la recomendación sin consecuencias. Explicabilidad de la decisión para el clínico.
- Protección de menores y grupos vulnerables: ajustes específicos para pediatría, embarazo, discapacidad cognitiva.
- Supervisión humana: nivel de automatización (apoyo, semi-automatizado, completamente automatizado). Quién toma decisión final. Formación del personal clínico en limitaciones del sistema.

### Sección 4: Mitigación de riesgos (integrada)
- Riesgos identificados con nivel (bajo, medio, alto, muy alto).
- Medidas técnicas y organizativas para cada riesgo.
- Riesgo residual tras mitigación.
- Responsable de implementación y fecha.

### Sección 5: Consulta y aprobación
- Consulta al DPO (DPIA): fecha, dictamen, observaciones.
- Consulta a AEPD si riesgo residual alto (DPIA).
- Consulta a comité de ética asistencial si aplica (FRIA).
- Aprobación del responsable del tratamiento (hospital) y del proveedor (fabricante IA).

## Ejemplo real: CDSS de estratificación de riesgo diabético en urgencias

**Finalidad**: clasificar pacientes diabéticos que acuden a urgencias en tres niveles de riesgo (bajo, medio, alto) para priorizar atención endocrinológica en 24-48h.

**Datos de entrada**: edad, sexo, HbA1c último trimestre, glucemia capilar en urgencias, diagnósticos previos de complicaciones (retinopatía, nefropatía), número de ingresos por descompensación último año.

**Output**: score de 0-10 y clasificación en tres niveles. Recomendación: "valoración endocrino en 24h" o "alta con seguimiento ambulatorio habitual".

**DPIA específica**:
- Base legal: misión de interés público (asistencia sanitaria en centro público, LOMLOE, ley autonómica de salud).
- Minimización: no se recogen datos laborales, no se usa código postal completo (solo provincia para análisis de sesgo geográfico).
- Medidas técnicas: base de datos PostgreSQL cifrada, acceso solo desde red interna hospitalaria, logs de consulta auditados mensualmente por DPO.
- Derechos: paciente informado en hoja de consentimiento de urgencias que se usa sistema de apoyo a decisión clínica. Puede solicitar copia de score generado. Derecho de supresión limitado por obligación de conservación de historia clínica (ley 41/2002).

**FRIA específica**:
- Análisis de sesgo: test en cohorte de validación (n=1.200) por sexo, edad >65 años, origen (español, latinoamericano, magrebí según autorreporte). Paridad demográfica: diferencia <5% en tasa de clasificación "alto riesgo". Paridad predictiva: valor predictivo positivo >70% en todos los subgrupos.
- Resultado: sesgo detectado en mujeres embarazadas (infraestimación de riesgo). Mitigación: exclusión de embarazadas del sistema, valoración directa por endocrino.
- Supervisión humana: el médico de urgencias ve el score y la recomendación en pantalla, pero debe confirmar activamente la derivación. Puede documentar desacuerdo en historia clínica. Formación: sesión de 2h para todo el servicio de urgencias sobre limitaciones del modelo (no detecta hipoglucemias iatrogénicas, no valora contexto social).
- Explicabilidad: SHAP values disponibles para el clínico (muestra qué variables pesaron más en el score de ese paciente concreto).

**Riesgo residual**: medio. Principal preocupación: dependencia del sistema si personal nuevo confía excesivamente en la recomendación. Medida adicional: auditoría trimestral de casos donde se anuló la recomendación, para detectar patrones de sobreconfianza.

## ¿Te ha resultado útil?

Si estás preparando la evaluación de impacto de un sistema de IA en tu hospital o empresa de HealthTech y necesitas revisar la estructura, identificar riesgos específicos o preparar la documentación para DPO y comité de ética, hablemos. Puedes escribirme en [/contacto](/contacto) con los detalles de tu caso.