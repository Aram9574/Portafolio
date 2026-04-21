---
slug: medical-device-regulation-ia-generativa
title: "MDR y IA generativa: por qué los LLMs médicos aún no tienen marcado CE"
description: "Los modelos de lenguaje no son deterministas, cambian con cada actualización y carecen de evidencia clínica validada. El MDR no está diseñado para esto."
date: "2025-12-22"
readingTime: "6 min"
tags: ["MDR", "IA generativa", "Marcado CE"]
---

El mercado quiere copilots clínicos que escriban informes, triagen síntomas y recomienden tratamientos. Los founders de HealthTech levantan rondas prometiendo GPT-4 en cada consulta. Los inversores preguntan cuándo estará el marcado CE. La respuesta honesta: no lo sabemos, porque el MDR (Medical Device Regulation EU 2017/745) y los LLMs generativos están diseñados desde filosofías incompatibles.

He revisado expedientes técnicos para dispositivos clase IIa y IIb. He trabajado con equipos que intentaban meter IA en triaje. La brecha no es solo burocrática: es conceptual. El regulador europeo necesita determinismo, trazabilidad y evidencia clínica prospectiva. Los modelos generativos ofrecen probabilidad, opacidad y comportamiento emergente que cambia con cada fine-tuning.

## La clase de riesgo sube rápido con IA generativa

El MDR clasifica dispositivos según el daño potencial. Si tu LLM sugiere diagnósticos o tratamientos, estás en clase IIa como mínimo (Regla 11: software que proporciona información para tomar decisiones clínicas). Si esa decisión es crítica —oncología, urgencias, pediatría—, saltas a clase IIb o III.

Clase IIa requiere organismo notificado y documentación clínica robusta. Clase IIb añade auditoría de diseño y vigilancia postcomercialización más estricta. Clase III es el nivel de implantes cardíacos: evaluación clínica completa, inspecciones no anunciadas, control de cambios con aprobación previa del notificado.

La mayoría de startups que conozco asumen clase I (autocertificación) o IIa ligera. Cuando leen la Regla 11 y ven que su chatbot médico cae en IIb, el roadmap se destruye. El problema no es solo coste: es que un LLM generativo no se ajusta al marco de validación clínica que pide el MDR para esas clases.

## Evidencia clínica: el MDR pide estudios que los LLMs no pueden dar

El Anexo XIV del MDR exige Clinical Evaluation Report (CER) basado en datos clínicos propios o equivalencia con dispositivos ya aprobados. Para IA generativa médica, equivalencia no existe (no hay predecesores con marcado CE en esta categoría) y datos propios significan estudios prospectivos con pacientes reales, endpoints clínicos y seguimiento longitudinal.

Un LLM entrenado con millones de historias clínicas públicas (MIMIC, PubMed) no cuenta como evidencia clínica bajo MDR. Son datos de entrenamiento, no validación clínica. El regulador quiere saber: ¿mejora outcomes? ¿reduce errores diagnósticos? ¿qué pasa cuando el modelo se equivoca en una decisión de alto riesgo?

He visto equipos intentar validar con estudios retrospectivos (análisis de precisión en datasets históricos). El organismo notificado rechaza porque el MDR quiere evidencia prospectiva: usar el dispositivo en condiciones reales, medir impacto en salud, documentar eventos adversos. Para un LLM que genera texto clínico, esto implica:

- Estudios multicéntricos con clínicos usando el modelo en práctica real.
- Comparadores: decisión con LLM vs. sin LLM, midiendo tiempo, errores, satisfacción del paciente.
- Seguimiento de pacientes afectados por decisiones influidas por el modelo.
- Reportar incidentes: si el LLM sugiere una dosis incorrecta y el médico no lo detecta, ¿quién responde?

Ningún LLM médico ha publicado esto. GPT-4 Medical tiene benchmarks (USMLE, casos clínicos simulados), pero eso no es CER bajo MDR.

## Control de cambios: el MDR asume que el dispositivo no muta solo

El Anexo IX del MDR exige que cualquier cambio significativo en el dispositivo pase por reevaluación del organismo notificado. Para software tradicional (algoritmos deterministas, versiones discretas), esto funciona: publicas v2.0, documentas qué cambió, el notificado aprueba, actualizas.

Los LLMs generativos rompen esta lógica en dos puntos:

**1. Actualizaciones continuas del modelo base.** Si tu producto usa GPT-4 via API de OpenAI, cada vez que OpenAI actualiza el modelo (y lo hacen sin anuncio previo), tu dispositivo cambia. El comportamiento del output no es idéntico. El MDR pide control total sobre el dispositivo que comercializas. Si el fabricante del modelo base cambia parámetros de temperatura, tokens, filtros de seguridad, tu Clinical Evaluation Report queda obsoleto.

He hablado con un organismo notificado español sobre esto. Respuesta: "Si no controlas el modelo, no puedes certificar el dispositivo". La única salida sería fine-tuning completo in-house, congelando el modelo, pero eso elimina la ventaja de los LLMs: mejora continua con datos nuevos.

**2. No determinismo inherente.** Dos consultas idénticas pueden producir respuestas distintas (temperatura > 0, sampling estocástico). El MDR pide reproducibilidad: mismo input, mismo output, trazabilidad completa. Un LLM con temperatura 0.7 no cumple. Puedes bajar temperatura a 0, pero entonces pierdes creatividad y el modelo se vuelve rígido, menos útil clínicamente.

## El gap entre lo que el mercado quiere y lo que el regulador puede aprobar

Inversores y founders ven los benchmarks de GPT-4 en medicina (supera el percentil 90 en USMLE) y asumen que el marcado CE es trámite. No lo es. El regulador europeo no aprueba capacidad técnica abstracta: aprueba un dispositivo concreto, con versión fija, evidencia clínica propia, fabricante identificable y control de cambios documentado.

Los LLMs médicos actuales fallan en los cuatro:

| Requisito MDR                     | Estado actual LLMs generativos                  |
|-----------------------------------|-------------------------------------------------|
| Versión fija y controlada         | Modelos base cambian sin aviso (API)            |
| Evidencia clínica prospectiva     | Solo benchmarks retrospectivos                  |
| Fabricante único responsable      | Cadena difusa (OpenAI, Azure, startup)          |
| Control de cambios documentado    | Actualizaciones continuas no trazables          |

He visto tres estrategias para intentar cerrar el gap:

**A) Limitar el alcance:** certificar solo módulos deterministas (extracción de datos estructurados, resúmenes sin valor clínico). Esto evita clase IIb, pero anula el valor de negocio. Un resumen que no influye en decisiones clínicas no justifica el precio de un copilot médico.

**B) Fine-tuning controlado in-house:** entrenar un modelo propio, congelarlo, validarlo clínicamente y certificar esa versión específica. Funciona en teoría, pero el coste (datos propios, GPU, estudios clínicos multicéntricos) es prohibitivo para startups. Y pierdes las mejoras de GPT-5, GPT-6.

**C) Esperar al AI Act y a guías específicas de MDCG.** El AI Act (Regulation EU 2024/1689) clasifica LLMs de propósito general como GPAI, con obligaciones de transparencia. El MDCG (Medical Device Coordination Group) publicará guías para IA generativa en dispositivos médicos. Pero esas guías no están. Y mientras tanto, el MDR sigue vigente tal cual.

## ¿Qué pasa con productos ya en el mercado?

Hay copilots clínicos funcionando en Europa sin marcado CE como dispositivo médico. ¿Cómo? Tres vías:

1. **No reclaman finalidad médica.** Se venden como "herramienta de productividad administrativa" (no diagnóstica), lo que saca el producto del ámbito MDR. Jurídicamente arriesgado si de facto los médicos lo usan para decisiones clínicas.

2. **Clase I autocertificada bajo interpretación laxa.** Argumentan que el software solo "almacena o muestra" información, no la analiza (Regla 12). Los auditores pueden no estar de acuerdo en inspección postcomercialización.

3. **Operan en gris regulatorio.** Lanzamiento soft, sin declarar conformidad MDR, esperando que la regulación se clarifique. Esto funciona hasta el primer evento adverso reportado a autoridades nacionales.

Ninguna de estas vías es sostenible para un producto serio con financiación institucional. Un partner hospitalario grande (sistemas públicos, mutuas) pedirá marcado CE explícito antes de firmar contrato.

## ¿Te ha resultado útil?

Si estás construyendo IA generativa para salud y necesitas trazar la ruta regulatoria realista —o si eres inversor evaluando el riesgo regulatorio de un deal—, hablemos. He trabajado con equipos técnicos y regulatorios en ambos lados. Agenda una llamada en [/trabajemos-juntos](/trabajemos-juntos) o escríbeme directamente desde [/contacto](/contacto).