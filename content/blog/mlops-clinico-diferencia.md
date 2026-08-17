---
slug: mlops-clinico-diferencia
title: "MLOps clínico: por qué los pipelines estándar de ML no sirven en sanidad"
description: "Los workflows MLOps típicos ignoran drift poblacional, cambios regulados y validación clínica continua. En sanidad, eso no funciona."
date: "2026-08-17"
readingTime: "6 min"
tags: ["MLOps", "Clinical AI", "MDR"]
---

Llevo unos meses leyendo sobre MLOps aplicado a IA clínica y me sorprende lo poco que se habla de las diferencias con los pipelines estándar de machine learning. La mayoría de frameworks asumen que puedes reentrenar cuando quieras, que el drift se detecta con métricas de rendimiento del modelo y que el deploy es automático si pasan los tests. En sanidad, ninguna de esas tres cosas funciona así.

Me pregunto si no estamos importando prácticas de MLOps generalista sin adaptarlas lo suficiente. Este post recoge algunas de las diferencias que veo más claras.

## El drift no es solo técnico, es poblacional

En un sistema de recomendación o un modelo de fraude, el drift suele venir de cambios en el comportamiento del usuario o patrones estacionales. Lo detectas monitorizando distribuciones de features y métricas de predicción. Si el AUC baja, reentrenar.

En clínica, el drift puede ser epidemiológico. Cambia la prevalencia de una enfermedad, la demografía de la zona de influencia del hospital o las guías de práctica clínica. Un modelo entrenado con datos pre-pandemia puede fallar no porque el código esté mal, sino porque la población ya no es la misma.

Leyendo casos publicados, veo que el drift clínico requiere validación prospectiva continua, no solo monitorización de features. Un modelo de sepsis puede mantener su AUC técnico y seguir siendo inútil clínicamente porque la definición de sepsis cambió o porque el perfil de pacientes de UCI ahora incluye más edad avanzada.

Me cuesta entender cómo automatizar esto sin un bucle de validación clínica explícito en el pipeline.

## El reentrenamiento no es automático bajo MDR

Los frameworks MLOps típicos asumen que si tu modelo mejora en validación, lo despliegas. CI/CD automático, rollback si falla. En sanidad, cada cambio sustancial del modelo puede requerir una nueva validación regulatoria.

El MDR (Medical Device Regulation) europeo clasifica cambios en software médico. Si reentrenar el modelo cambia su comportamiento clínico de forma sustancial, podría considerarse una modificación significativa. Eso implica documentación, análisis de riesgo actualizado y, en algunos casos, notificación al organismo notificado.

No estoy diciendo que todo reentrenamiento requiera re-certificación. Pero sí que el pipeline tiene que contemplar umbrales de cambio clínico, no solo técnico. Un modelo que pasa de 0.85 a 0.87 de AUC puede ser una mejora marginal o un cambio que altera decisiones clínicas en casos límite.

Los equipos de MLOps clínico que conozco están añadiendo gates manuales en el pipeline: antes de deploy, un comité clínico-técnico revisa si el cambio es sustancial. Si lo es, activan el proceso regulatorio. Si no, lo dejan pasar.

Me pregunto si hay forma de formalizar esto mejor, con umbrales predefinidos en el diseño del sistema de calidad.

## La observabilidad tiene que ser clínica, no solo técnica

En MLOps estándar, monitorizas latencia, throughput, distribución de features, accuracy. Si algo se desvía, alertas al equipo técnico.

En clínica, necesitas observabilidad de decisiones reales. ¿Cuántos pacientes recibieron una alerta del modelo hoy? ¿Cuántas alertas fueron útiles según los clínicos? ¿Cuántas se ignoraron? ¿Hay algún patrón en los falsos positivos que sugiera un problema no capturado por las métricas técnicas?

He visto equipos que implementan dashboards clínicos separados de los dashboards técnicos. Los primeros muestran volumen de decisiones asistidas, tasa de override (cuando el clínico rechaza la predicción), tiempo medio desde alerta hasta acción. Los segundos siguen siendo necesarios, pero no suficientes.

Lo que me parece clave es que la observabilidad clínica requiere human-in-the-loop estructurado: alguien tiene que revisar muestras de decisiones reales, no solo logs de sistema.

## Human-in-the-loop no es opcional, es parte del diseño

En muchos pipelines MLOps, el humano interviene solo si algo falla técnicamente. En clínica, el humano tiene que estar en el bucle por diseño, no por excepción.

Los modelos de soporte a decisión clínica no sustituyen al profesional. El clínico siempre puede anular la predicción. Pero para que eso sea útil y no un problema de usabilidad, el pipeline tiene que capturar esas anulaciones, analizarlas y usarlas como señal de calidad.

Algunos equipos que sigo implementan comités de revisión periódicos donde clínicos y técnicos revisan casos límite: predicciones anuladas con frecuencia, alertas ignoradas sistemáticamente, situaciones donde el modelo predijo correctamente pero el clínico no actuó (o viceversa).

Esa información no solo mejora el modelo. Mejora la integración clínica del sistema. A veces el problema no es el modelo, es cómo se presenta la información o en qué momento del workflow aparece la alerta.

## Control de cambios documentado desde el principio

En MLOps general, el control de versiones es código + datasets + hiperparámetros. En clínica, tienes que documentar también por qué cambiaste algo, qué evidencia clínica lo justifica y qué impacto esperado tiene.

El MDR exige trazabilidad de modificaciones. Si dentro de un año un auditor pregunta por qué reentrenaste el modelo en marzo de 2025, necesitas una respuesta que vaya más allá de "el AUC mejoró". Necesitas documentar: cambio en la población, nueva evidencia clínica, feedback de usuarios, análisis de riesgo del cambio.

Eso implica que el pipeline MLOps tiene que integrarse con el sistema de gestión de calidad del fabricante. Cada deploy deja rastro en documentación regulatoria, no solo en Git.

Me pregunto cuántos equipos técnicos están preparados para ese nivel de burocracia necesaria.

## CI/CD clínico tiene umbrales distintos

En software estándar, el pipeline CI/CD ejecuta tests unitarios, de integración, de regresión. Si pasan, despliegas.

En clínica, los tests tienen que incluir validación en datos clínicos representativos y, en algunos casos, en ambiente real controlado antes de producción completa.

He leído sobre equipos que hacen despliegues escalonados: primero en modo silencioso (el modelo predice pero no muestra resultados a clínicos), luego en un servicio piloto, luego en producción completa. Cada fase tiene criterios de paso basados en métricas clínicas, no solo técnicas.

Eso ralentiza el ciclo, pero reduce el riesgo de que un cambio aparentemente inocuo cause problemas en pacientes reales.

## Una tabla de comparación que me ayuda a pensar

| Aspecto | MLOps estándar | MLOps clínico |
|---------|----------------|---------------|
| Drift detection | Métricas técnicas (AUC, feature distribution) | Validación prospectiva clínica continua |
| Reentrenamiento | Automático si mejora validación | Requiere análisis de cambio sustancial (MDR) |
| Observabilidad | Logs técnicos, latencia, throughput | Dashboards clínicos + revisión estructurada humana |
| Control de versiones | Código + datos + hiperparámetros | + justificación clínica + análisis de riesgo |
| Deploy | CI/CD automático con tests | Despliegue escalonado con validación clínica por fase |

## ¿Te ha resultado útil?

Si trabajas en MLOps aplicado a sanidad y estás dándole vueltas a cómo adaptar pipelines técnicos a requisitos clínicos y regulatorios, me gustaría saber qué estás viendo. Puedes escribirme desde [/contacto](/contacto) o comentar si te apetece contrastar enfoques.