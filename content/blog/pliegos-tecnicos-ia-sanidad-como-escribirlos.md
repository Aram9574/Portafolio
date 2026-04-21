---
slug: pliegos-tecnicos-ia-sanidad-como-escribirlos
title: "Cómo escribir un pliego técnico de IA sanitaria que no obtenga propuestas basura"
description: "Requisitos mínimos exigibles, criterios de valoración que discriminan vaporware y cláusulas contractuales críticas para licitaciones de IA en sanidad pública."
date: "2025-11-24"
readingTime: "7 min"
tags: ["Licitaciones públicas", "Administración pública", "Pliegos técnicos"]
---

He revisado decenas de pliegos públicos de IA sanitaria. La mayoría cometen el mismo error: piden innovación sin especificar qué hacen con los datos clínicos, explicabilidad sin definir qué métrica la mide, validación sin exigir cohortes independientes. El resultado es predecible: ofertas con PowerPoints vistosos, demos perfectas en entorno controlado y fracasos silenciosos a los seis meses de implantación.

Un pliego técnico bien redactado no es un listado de buenas intenciones. Es un filtro que deja fuera vaporware y deja dentro solo propuestas auditables, replicables y que cumplen normativa. Aquí está lo que he aprendido trabajando con hospitales y administración pública sobre cómo escribirlos.

## Requisitos mínimos exigibles: el filtro de entrada

Un pliego sin requisitos mínimos técnicos obligatorios es una invitación al caos. No hablo de requisitos formales de licitación, hablo de líneas rojas técnicas. Si una propuesta no los cumple, queda fuera automáticamente.

**Explicabilidad auditable.** No basta con decir que el modelo es explicable. Exige métrica concreta: SHAP values, LIME, attention maps si es modelo de lenguaje o visión. Y exige documentación técnica que explique cómo se generan, cómo se interpretan y qué profesional sanitario los valida. He visto sistemas que prometían transparencia y entregaban gráficos de correlación sin contexto clínico.

**Validación externa documentada.** Aquí se separa ciencia de marketing. Exige estudios de validación en al menos una cohorte distinta a la de entrenamiento. Idealmente, multicéntrica. Pide sensibilidad, especificidad, AUC-ROC y curvas de calibración. Si el modelo predice riesgo de sepsis, que demuestren que funciona en otro hospital con distinta distribución de edad, comorbilidades y protocolos. Sin esto, cualquier métrica interna es autocomplaciente.

**Cumplimiento normativo con evidencia.** No aceptes declaraciones genéricas de cumplimiento RGPD o Reglamento de Dispositivos Médicos. Exige certificado MDR si aplica, evaluación de impacto de protección de datos (EIPD) ya realizada, registro sanitario si es producto de clase IIa o superior. Y pide el procedimiento documentado para gestionar incidentes de seguridad. Un proveedor serio ya tiene esto preparado.

**Arquitectura de datos trazable.** Obliga a que detallen dónde se almacenan los datos, cómo se encriptan en reposo y en tránsito, qué logs de acceso generan y cuánto tiempo se conservan. Pide diagrama de flujo de datos desde captura hasta salida del modelo. Si no pueden dibujarlo, no saben qué hacen con tus datos clínicos.

## Criterios de valoración que discriminan vaporware

Los requisitos mínimos dejan dentro solo propuestas técnicamente válidas. Los criterios de valoración te permiten elegir entre las válidas cuál es la mejor. Aquí es donde muchos pliegos fallan: puntúan innovación abstracta en lugar de robustez demostrable.

**Experiencia clínica real del equipo.** Valora propuestas con médicos, enfermeros o farmacéuticos en plantilla. No consultores externos ocasionales: plantilla. Pide CV con colegiación y años de práctica. Un equipo con clínicos en nómina entiende flujos de trabajo, prioriza usabilidad y anticipa errores que un ingeniero solo no ve. He visto sistemas que fallaban porque nadie en el equipo había trabajado un turno de noche en urgencias.

**Historial de implantaciones previas.** Puntúa alto si han desplegado el mismo sistema en al menos dos centros durante más de seis meses. Pide referencias verificables: nombre del hospital, servicio, contacto del responsable técnico. Penaliza propuestas que solo tienen pilotos de tres meses o demos en sandbox. La implantación real revela problemas de integración, rendimiento bajo carga y resistencia del personal que ningún piloto muestra.

**Interoperabilidad técnica documentada.** Valora conectores nativos con los sistemas que ya usas: HIS, PACS, LIS. Exige estándares (HL7 FHIR, DICOM, IHE) y pide documentación de APIs. Penaliza soluciones que requieren middleware propietario o exportaciones manuales. La interoperabilidad no es un añadido: es condición para que el sistema funcione en producción.

**Plan de monitorización post-implantación.** Puntúa propuestas que incluyan dashboard de métricas de rendimiento en tiempo real: latencia de respuesta, tasa de uso por profesionales, drift del modelo. Pide compromiso de auditoría trimestral de performance clínica. Un proveedor que monitoriza está preparado para corregir. Uno que no, va a desaparecer tras el go-live.

## Cláusulas contractuales críticas

El contrato es donde se materializa todo lo anterior. Sin cláusulas vinculantes, el pliego es papel mojado.

**SLA con penalizaciones económicas.** Define disponibilidad mínima (99,5% es razonable para sistemas no críticos, 99,9% para apoyo a decisión clínica en tiempo real) y tiempo máximo de respuesta ante caída. Vincula penalizaciones económicas progresivas. He visto contratos sin SLA donde el proveedor tardaba semanas en responder a incidencias graves.

**Propiedad y portabilidad de datos.** Cláusula expresa: todos los datos clínicos son propiedad exclusiva del centro. El proveedor no puede usarlos para entrenar otros modelos sin consentimiento explícito y por escrito. Exige formato de exportación estándar (CSV, FHIR, SQL) en caso de terminación de contrato. Sin esto, quedas rehén del proveedor.

**Auditoría técnica independiente.** Reserva derecho contractual a realizar auditoría técnica externa del código, modelo y logs en cualquier momento, con preaviso razonable. Esto no es desconfianza: es gobernanza. Un proveedor transparente lo acepta sin problema. Uno opaco, lo rechaza.

**Plan de desvinculación.** Obliga a incluir procedimiento documentado para migrar datos y funcionalidad si el contrato termina. Incluye periodo de soporte post-terminación (90 días es estándar) para garantizar continuidad asistencial. Sin esto, cambiar de proveedor es técnicamente imposible y el lock-in es total.

## Tabla de autoevaluación del pliego

| Criterio | ¿Incluido? | ¿Vinculante? |
|----------|-----------|--------------|
| Métrica de explicabilidad definida | ☐ | ☐ |
| Validación externa multicéntrica exigida | ☐ | ☐ |
| Certificación MDR/EIPD documentada | ☐ | ☐ |
| Clínicos en plantilla valorado | ☐ | ☐ |
| Referencias verificables de implantaciones | ☐ | ☐ |
| SLA con penalizaciones económicas | ☐ | ☐ |
| Propiedad de datos explícita | ☐ | ☐ |
| Derecho a auditoría técnica | ☐ | ☐ |

Si tienes menos de seis casillas marcadas en la primera columna, tu pliego va a atraer propuestas que no puedes evaluar técnicamente. Si tienes menos de cuatro en la segunda, no tienes palanca contractual para exigir cumplimiento.

## ¿Te ha resultado útil?

Si estás preparando una licitación de IA sanitaria, revisando un pliego existente o necesitas criterios técnicos que discriminen vaporware, hablemos. He trabajado con administración pública y hospitales en este proceso y puedo ayudarte a diseñar filtros que funcionen. Escríbeme en [/contacto](/contacto).