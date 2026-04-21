---
slug: samd-clase-iia-checklist
title: "SaMD clase IIa: la checklist de 20 puntos para marcar CE un CDSS"
description: "Requisitos ISO 13485, gestión de riesgos ISO 14971 y QMS mínimo viable para obtener el marcado CE de un sistema de soporte a la decisión clínica clase IIa bajo MDR."
date: "2026-03-30"
readingTime: "7 min"
tags: ["SaMD", "MDR", "Marcado CE", "ISO 13485"]
---

He revisado expedientes técnicos de más de una decena de SaMD clase IIa que fracasaron en la revisión del organismo notificado. El denominador común: confundir desarrollo de software con ciclo de vida regulado. Un CDSS que funciona en el hospital no es un CDSS que pueda comercializarse. La distancia entre ambos estados se llama sistema de gestión de calidad y expediente técnico MDR Anexo II.

Esta checklist sintetiza los 20 puntos mínimos que un organismo notificado verificará antes de emitir el certificado CE. No es exhaustiva, pero cubre el 90 % de las no conformidades mayores que he visto en auditorías de certificación.

## 1-5: QMS según ISO 13485

**1. Manual de calidad.** Documento maestro que describe alcance del QMS, política de calidad, organización (responsabilidades), interacción de procesos. No más de 30 páginas. Referencia a procedimientos operativos estándar (POE).

**2. Control de documentos y registros.** POE que define cómo se aprueban, revisan, distribuyen y archivan documentos controlados. Sistema de numeración, matriz de aprobaciones, historial de cambios. Registro de formación del personal en versiones vigentes.

**3. Gestión de proveedores críticos.** Para SaMD clase IIa, proveedores críticos incluyen: servidor cloud (AWS, Azure, GCP), proveedor de datasets de entrenamiento si es ML, laboratorio de pruebas de seguridad. Evaluación inicial, auditorías periódicas o certificados ISO 27001, acuerdos de calidad.

**4. Gestión de no conformidades y CAPA.** Procedimiento de acciones correctivas y preventivas. Registra incidentes post-mercado, desviaciones en producción, hallazgos de auditoría interna. Análisis de causa raíz (5 por qués, Ishikawa), plan de acción, verificación de eficacia. Cierre con evidencia objetiva.

**5. Auditorías internas.** Programa anual que cubra todos los procesos del QMS. Auditores formados (curso ISO 13485 Lead Auditor o equivalente), independientes del área auditada. Informe de hallazgos, plan CAPA, seguimiento. Primera auditoría interna antes de solicitar certificación.

## 6-10: Gestión de riesgos ISO 14971

**6. Plan de gestión de riesgos.** Define alcance, criterios de aceptabilidad (matriz riesgo: probabilidad × severidad), metodología (FMEA, FTA), responsables, calendario de revisiones. Aprobado por dirección antes de iniciar análisis.

**7. Identificación de peligros.** Brainstorming estructurado con equipo multidisciplinar (médicos, ingenieros, regulatorio). Categorías: error de usuario, fallo de software, interacción con otros dispositivos, pérdida de datos, ciberseguridad. Mínimo 40-60 peligros identificados para CDSS clase IIa.

**8. Análisis y evaluación de riesgos.** Cada peligro se traduce en secuencias de eventos que generan daño. Estimación de probabilidad (frecuente/probable/ocasional/remota/improbable) y severidad (catastrófica/crítica/marginal/despreciable). Clasificación en matriz 5×5. Riesgos inaceptables requieren control obligatorio.

**9. Control de riesgos.** Jerarquía: diseño inherentemente seguro > medidas de protección en el dispositivo > información de seguridad al usuario. Ejemplo: validación del modelo ML (diseño), límites de confianza que bloquean recomendación si incertidumbre alta (protección), manual clínico que especifica población objetivo y contraindicaciones (información).

**10. Informe de gestión de riesgos.** Documento final que consolida análisis, controles implementados, riesgos residuales, evaluación beneficio-riesgo. Firmado por responsable de gestión de riesgos y dirección. Actualizado en cada liberación de versión.

## 11-15: Ciclo de vida del software IEC 62304

**11. Plan de desarrollo de software.** Define modelo de ciclo de vida (ágil adaptado, V-model), entregables, hitos, recursos, clase de seguridad según IEC 62304 (A, B o C). CDSS clase IIa típicamente clase C: fallo puede causar muerte o daño grave.

**12. Arquitectura del software.** Diagrama de componentes SOUP (Software of Unknown Provenance: librerías open source, frameworks), módulos propios, interfaces. Justificación de elección de SOUP, análisis de riesgos de cada componente, plan de actualización. Trazabilidad: cada requisito de sistema se mapea a módulo de software.

**13. Pruebas de verificación.** Unit tests, integration tests, system tests. Cobertura de código >80 % en módulos críticos. Casos de prueba derivados de requisitos, ejecutados en entorno controlado, resultados documentados con pass/fail. Pruebas de regresión en cada sprint.

**14. Validación clínica del algoritmo.** Estudio retrospectivo o prospectivo que demuestra desempeño clínico. Métricas: sensibilidad, especificidad, curva ROC, valor predictivo positivo/negativo. Comparador: gold standard o práctica clínica habitual. Tamaño muestral justificado estadísticamente. Protocolo aprobado por comité de ética si incluye datos de pacientes.

**15. Plan de mantenimiento.** Procedimiento de gestión de versiones, backlog de bugs, roadmap de mejoras. Clasificación de cambios (mayor/menor/parche) según impacto en seguridad. Análisis de impacto antes de cada liberación: ¿afecta a gestión de riesgos? ¿requiere nueva validación clínica?

## 16-20: Expediente técnico MDR Anexo II

**16. Descripción del dispositivo.** Nombre comercial, versión de software, uso previsto, población objetivo, contraindicaciones, entorno de uso (hospital/atención primaria/domicilio), requisitos de hardware/red. Especificaciones funcionales y de rendimiento.

**17. Etiquetado e instrucciones de uso.** Manual de usuario clínico, quick start guide, etiqueta del producto (si aplica, para SaMD suele ser digital). Idiomas de Estados miembros donde se comercializa. Advertencias, precauciones, limitaciones conocidas del algoritmo.

**18. Verificación y validación.** Recopila informes de: verificación de software (punto 13), validación clínica (punto 14), pruebas de usabilidad según IEC 62366 (mínimo 15 usuarios representativos, análisis de errores de uso), pruebas de ciberseguridad (pentesting, análisis de vulnerabilidades).

**19. Análisis beneficio-riesgo.** Evidencia de que beneficios clínicos superan riesgos residuales. Datos cuantitativos: reducción de mortalidad X %, mejora de tiempo diagnóstico Y minutos, disminución de costes Z euros. Literatura científica que respalda mecanismo de acción.

**20. Vigilancia post-comercialización y PSUR.** Plan de seguimiento activo: encuestas a usuarios, análisis de logs de uso, reporte de incidentes. Actualización periódica del informe de seguridad post-comercialización (PSUR, Periodic Safety Update Report). Primer PSUR dentro de los 12 meses post-certificación.

## Calendario y recursos realistas

He visto startups estimar 6 meses desde código funcional hasta certificación. La realidad: 14-18 meses con equipo dedicado. Desglose:

- Implementación QMS y auditoría interna: 4-5 meses
- Gestión de riesgos y IEC 62304 completo: 5-6 meses (paralelo parcial con QMS)
- Validación clínica: 3-4 meses (reclutamiento, análisis, informe)
- Preparación expediente técnico: 2 meses
- Auditoría organismo notificado: 1-2 meses (desde solicitud hasta emisión certificado)

Coste externo mínimo (consultores especializados, organismo notificado): 80.000-120.000 EUR. Coste interno: 1,5-2 FTE durante todo el periodo (combinación de product owner, QA lead, regulatory affairs).

## ¿Te ha resultado útil?

Si estás preparando la certificación CE de tu CDSS o quieres validar que tu QMS actual cumple con lo mínimo exigible para clase IIa, hablemos de tu caso concreto. Puedo revisar tu documentación actual, identificar gaps críticos y trazar una ruta realista hacia el marcado CE. Contacta conmigo en [/contacto](/contacto).