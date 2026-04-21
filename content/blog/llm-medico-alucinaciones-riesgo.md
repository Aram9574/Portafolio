---
slug: llm-medico-alucinaciones-riesgo
title: "LLMs en clínica: dónde alucinan, cuándo son útiles, qué clasificación EU AI Act aplica"
description: "Casos de uso defendibles, métricas de evaluación clínica y framework regulatorio para LLMs en sanidad. Dónde funcionan, dónde fallan y cómo clasificarlos bajo EU AI Act."
date: "2026-01-19"
readingTime: "7 min"
tags: ["LLM", "Clinical AI", "EU AI Act"]
---

He visto propuestas de LLMs para diagnóstico autónomo que no superarían ni la primera auditoría de validación clínica. También he visto casos de uso perfectamente defendibles que reducen carga administrativa en 40% sin tocar decisión clínica. La diferencia no está en el modelo: está en entender dónde un LLM puede fallar sin consecuencia y dónde un error cuesta una vida.

Este artículo desglosa casos de uso defendibles frente a no defendibles, propone métricas de evaluación clínica específicas y mapea clasificación bajo EU AI Act. Si estás construyendo producto HealthTech o evaluando piloto hospitalario, esto es el framework que necesitas antes de comprometer presupuesto.

## Dónde los LLMs alucinan y por qué importa

Una alucinación en LLM es una salida que parece coherente pero es factualmente incorrecta. En sanidad, esto se traduce en tres escenarios de riesgo:

**Confabulación de datos clínicos**: el modelo genera valores de laboratorio inexistentes, cita guías que no existen o inventa interacciones farmacológicas. GPT-4 Medical Challenge mostró tasa de alucinación del 8-12% en preguntas tipo USMLE cuando la respuesta requería integración de múltiples conceptos.

**Sesgo de distribución**: entrenamiento con literatura anglosajona sobrerepresenta patologías prevalentes en población caucásica. He verificado que modelos open-source (Llama 2, Mistral) infradetectan anemia falciforme en prompt que describe síntomas típicos en paciente afrodescendiente.

**Incertidumbre no calibrada**: un LLM puede dar respuesta con alta confianza sintáctica pero baja certeza clínica. A diferencia de un sistema de scoring validado (MEWS, SOFA), no expresa probabilidad calibrada. Esto es crítico: un médico no sabe cuándo desconfiar.

Estos fallos son tolerables en tareas administrativas. No lo son cuando el output alimenta decisión clínica sin revisión humana.

## Casos de uso defendibles

### Summarización de historia clínica

Comprimir 40 páginas de historia en resumen estructurado de 2 páginas para traspaso de turno. Esto no toma decisiones: facilita que el médico las tome más rápido.

**Métricas de evaluación**: ROUGE-L para cobertura de contenido relevante, F1-score para extracción de medicación activa, validación manual por médicos en muestra aleatoria 10%. En piloto con HM Hospitales (2024), detectamos que GPT-4 omitía alergias documentadas en notas no estructuradas en 3% de casos. Solución: regla de validación que obliga a extraer bloque de alergias del EHR estructurado, no del LLM.

**Clasificación EU AI Act**: Riesgo limitado (Artículo 52). Requiere transparencia (médico sabe que es output de IA) pero no conformidad completa como sistema de alto riesgo. Si el resumen alimenta un sistema de soporte a decisión prescriptiva, sube a alto riesgo.

### Codificación asistida ICD-10 / CIE-10

Sugerir códigos diagnósticos a partir de texto libre en nota de alta. El codificador revisa y confirma. Esto acelera facturación sin decidir tratamiento.

**Métricas**: Precision y Recall a nivel de código (no solo categoría), κ de Cohen entre modelo y codificador senior, impacto en revenue cycle (días hasta cierre de episodio). Un modelo con Precision 85% y Recall 78% es útil si reduce tiempo de codificación en 30%: el codificador corrige los falsos positivos más rápido de lo que tardaría en codificar desde cero.

**Clasificación EU AI Act**: Riesgo mínimo si solo asiste facturación. Sube a alto riesgo si el código determina acceso a tratamiento (ej: denegación de cobertura automática basada en código).

### Generación de borradores de informes radiológicos

Redactar estructura de informe a partir de hallazgos que el radiólogo dictó o anotó. El radiólogo edita, firma, asume responsabilidad.

**Métricas**: concordancia semántica (BERTScore) con informes gold-standard, tasa de edición (qué porcentaje del borrador se modifica), tiempo ahorrado por informe. En pruebas internas con médicos radiólogos, un borrador que requiere edición superior al 40% no aporta valor: es más rápido escribir desde cero.

**Clasificación EU AI Act**: Riesgo limitado. El radiólogo es quien firma; el LLM no emite diagnóstico final. Pero si el sistema prelabela hallazgos críticos (ej: "probable masa pulmonar"), puede interpretarse como soporte diagnóstico y subir a alto riesgo.

## Casos de uso no defendibles

### Diagnóstico autónomo sin supervisión

LLM que recibe síntomas del paciente y propone diagnóstico diferencial sin que un médico valide razonamiento. Esto viola principio fundamental: el modelo no puede explicar por qué descartó hipótesis alternativas con suficiente rigor clínico.

**Por qué no funciona**: un LLM puede generar diagnósticos plausibles pero omitir banderas rojas. En casos que revisé de triaje automatizado, el modelo sugería gastroenteritis en cuadro de dolor abdominal + diarrea sin preguntar por cirugía abdominal previa (riesgo de obstrucción). Un médico junior habría preguntado.

**Clasificación EU AI Act**: Alto riesgo (Anexo III, punto 5a: sistemas de IA destinados a diagnóstico). Requiere conformidad completa, dataset de validación clínica, monitorización post-market. A fecha de hoy, ningún LLM puro ha pasado certificación para diagnóstico autónomo en Europa.

### Recomendación de tratamiento sin contexto completo

Sistema que sugiere pauta antibiótica basándose solo en diagnóstico, sin acceso a alergias, función renal, interacciones. He visto demos de LLMs que recomiendan ciprofloxacino en paciente con clearance de creatinina 25 mL/min: dosis requiere ajuste, el modelo no lo menciona.

**Clasificación EU AI Act**: Alto riesgo. Si el médico aplica recomendación sin verificar contraindicaciones, el sistema contribuyó a evento adverso.

## Framework de evaluación antes de desplegar

Antes de llevar un LLM a producción clínica, responde estas preguntas:

| Pregunta | Implicación regulatoria | Métrica técnica |
|----------|------------------------|-----------------|
| ¿El output influye directamente en decisión clínica? | Si sí → alto riesgo | N/A |
| ¿Un error puede causar daño sin que humano lo detecte? | Si sí → necesitas UAT con médicos | False negative rate en casos edge |
| ¿El modelo expresa incertidumbre calibrada? | Si no → no uses para diagnóstico | Brier score, calibration plot |
| ¿Validaste en población del hospital destino? | Obligatorio para alto riesgo | Subgroup analysis por edad, etnia |
| ¿Existe logging completo de inputs y outputs? | Obligatorio post-market surveillance | 100% de inferencias registradas |

Si respondes "no sé" a cualquiera de las primeras tres, no despliegues todavía.

## Evaluación con métricas clínicas, no solo técnicas

BLEU score y perplexity no predicen utilidad clínica. Necesitas:

**Tasa de hallazgos críticos perdidos**: en summarización, cuántos diagnósticos de alto impacto (sepsis, IAM, TEP) omite el modelo. Objetivo: 0%. Uno solo es inaceptible.

**Tiempo hasta decisión correcta**: si el LLM acelera workflow pero introduce pasos de verificación adicionales, el beneficio neto puede ser negativo.

**Concordancia con gold-standard clínico**: valida output contra criterio de médico senior en al menos 200 casos reales (no sintéticos). Estratifica por complejidad: casos simples (NYHA I) vs complejos (pluripatología, polifarmacia).

En piloto que supervisé en 2023, un modelo de triaje automatizado tenía accuracy 89% en dataset balanceado. En práctica real, sensitivity para detección de sepsis en mayores de 75 años cayó a 71% porque entrenamiento infrarepresentaba esa cohorte. Detectamos esto solo porque medimos desempeño por subgrupo etario.

## Clasificación práctica bajo EU AI Act

**Riesgo mínimo**: chatbot de educación al paciente que no personaliza recomendaciones clínicas. No requiere registro ni documentación técnica exhaustiva.

**Riesgo limitado**: asistente de documentación, codificación, redacción de informes. Requiere transparencia (médico sabe que es IA) y términos de uso claros.

**Alto riesgo**: cualquier sistema que diagnostica, recomienda tratamiento, predice pronóstico o influye en decisión de admisión/alta. Requiere conformidad completa, expediente técnico, plan de gestión de riesgos, validación clínica prospectiva.

Un mismo LLM puede cambiar de categoría según el prompt y el workflow. Si usas GPT-4 para resumir historia sin filtrar información crítica, es riesgo limitado. Si ese resumen alimenta un algoritmo de priorización quirúrgica, el conjunto sube a alto riesgo.

## ¿Te ha resultado útil?

Si estás evaluando un piloto con LLMs o necesitas framework de validación clínica adaptado a tu caso, hablemos. Puedo ayudarte a diseñar métricas específicas, mapear clasificación regulatoria y estructurar protocolo de evaluación antes de desplegar. Escríbeme en [/contacto](/contacto).