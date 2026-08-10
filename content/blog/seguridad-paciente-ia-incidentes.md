---
slug: seguridad-paciente-ia-incidentes
title: "Seguridad del paciente con IA en producción: los 5 tipos de incidente que ya están pasando"
description: "Drift silencioso, sesgos ocultos, cascadas de pruebas innecesarias: los cinco patrones de fallo que aparecen cuando un modelo de IA lleva meses en clínica."
date: "2026-08-10"
readingTime: "7 min"
tags: ["Seguridad del paciente", "Clinical AI", "Monitoring"]
---

Llevo unas semanas leyendo reportes de incidentes con IA clínica. No hablo de papers teóricos sobre riesgos potenciales, sino de cosas que ya han pasado en hospitales con modelos en producción. Me llama la atención que los patrones se repiten: no son fallos espectaculares, son degradaciones silenciosas que tardan semanas o meses en detectarse.

He agrupado lo que veo en cinco tipos de incidente. Cada uno tiene su firma característica y su forma de detectarse antes de que llegue a paciente. Esto es lo que observo.

## 1. Drift silencioso: el modelo deja de funcionar y nadie se da cuenta

Un modelo de predicción de sepsis se entrena con datos de 2022. En 2024 cambia el protocolo de triage en urgencias: pacientes que antes llegaban directos a box ahora pasan por observación rápida. El modelo sigue funcionando técnicamente, pero sus predicciones se basan en un flujo asistencial que ya no existe.

La métrica de precisión se mantiene estable en el dashboard, pero cuando alguien revisa los casos manualmente descubre que el modelo marca como "bajo riesgo" a pacientes que antes clasificaba como "alto riesgo". El patrón de llegada cambió, el modelo no.

**Cómo se detecta**: monitorizando la distribución de las variables de entrada (feature distribution), no solo las métricas de salida. Si la proporción de pacientes que pasan por observación rápida pasa del 15% al 45% en tres meses, algo ha cambiado en el flujo. El modelo necesita revisarse aunque su accuracy siga igual.

## 2. Sesgo oculto en subgrupo: funciona bien en general, mal en una minoría

Un modelo de priorización de mamografías funciona bien en la validación general. Pero cuando se despliega en un hospital con alta proporción de pacientes de origen subsahariano, empieza a infraestimar el riesgo en ese grupo específico. El motivo: el dataset de entrenamiento tenía poca representación de ese subgrupo, y ciertos patrones mamográficos asociados a tejido denso no se capturaron bien.

El problema no salta en las métricas agregadas porque el subgrupo representa el 8% del total. El modelo sigue teniendo buena precisión global. Pero en ese 8% está fallando sistemáticamente.

**Cómo se detecta**: estratificando las métricas por subgrupos clínicamente relevantes (edad, sexo, etnia, comorbilidades). No basta con mirar el performance agregado. Si un subgrupo tiene una tasa de falsos negativos tres veces superior a la media, hay un problema aunque la métrica global sea buena.

## 3. Cascada de pruebas innecesarias por falso positivo sistemático

Un modelo de detección de nódulos pulmonares en radiografía de tórax tiene una tasa de falsos positivos del 12%. En validación eso parecía asumible. En producción, con 200 radiografías al día, estás generando 24 marcas sospechosas diarias que no son nada.

El protocolo dice que cada marca genera un TAC de seguimiento. Eso son 24 TACs extra al día, muchos de ellos innecesarios. El coste económico es una cosa, pero el coste para el paciente es otra: radiación adicional, ansiedad por el hallazgo, posibles biopsias en casos limítrofes.

**Cómo se detecta**: monitorizando la tasa de pruebas de confirmación solicitadas tras la alerta del modelo y comparándola con la tasa de confirmaciones positivas. Si el 85% de los TACs pedidos tras una alerta del modelo salen negativos, el threshold de sensibilidad del modelo está mal calibrado para tu entorno.

## 4. Recomendación desactualizada por cambio de guía clínica

Un modelo de ayuda a prescripción de anticoagulantes se entrena con las guías de 2021. En 2023 sale una actualización que cambia el umbral de CHA₂DS₂-VASc para iniciar anticoagulación en fibrilación auricular de 1 a 2 en hombres. El modelo sigue recomendando según la guía antigua.

Durante meses, el modelo está sugiriendo anticoagulación en pacientes que según la nueva guía no la necesitan. Los médicos que conocen la actualización ignoran la recomendación (override). Los que no la conocen, la siguen.

**Cómo se detecta**: manteniendo un registro de las guías clínicas y protocolos sobre los que se entrenó el modelo, y revisándolo periódicamente. Si hay una actualización de guía, el modelo necesita re-entrenamiento o, como mínimo, una alerta en pantalla que indique que está trabajando con la versión anterior.

## 5. Override sistemático: los clínicos dejan de confiar y anulan todo

Un modelo de ayuda a dosificación de insulina genera recomendaciones que los endocrinos consideran demasiado conservadoras. Durante las primeras semanas lo usan. A partir del segundo mes, empiezan a anular sistemáticamente las sugerencias y ajustar manualmente.

El problema es que nadie recoge esa señal. El modelo sigue funcionando técnicamente, sigue generando recomendaciones, pero en la práctica está fuera de uso. Peor aún: si el override no queda registrado de forma estructurada, no hay forma de saber por qué el clínico decidió no seguir la recomendación.

**Cómo se detecta**: monitorizando la tasa de override y, crucialmente, pidiendo al clínico que registre el motivo cuando anula una recomendación. Si el 70% de las recomendaciones se anulan en el mismo servicio, algo falla: o el modelo está mal calibrado para ese caso de uso, o la integración en el flujo no funciona.

## La pregunta que me hago

Leyendo estos patrones me pregunto cuántos modelos en producción están fallando de forma silenciosa ahora mismo. No hablo de fallos catastróficos que generan alertas inmediatas, sino de degradaciones lentas que pasan desapercibidas porque el dashboard sigue verde.

La impresión que tengo es que estamos poniendo mucho esfuerzo en validar modelos antes del despliegue, pero poco en monitorizarlos después. Y los incidentes que veo no son problemas de diseño del modelo, son problemas de interacción con el entorno clínico real: protocolos que cambian, subgrupos que no estaban en el training set, thresholds que funcionan en validación pero no en práctica.

No estoy seguro de que tengamos buenos sistemas para capturar estas señales tempranas. Monitorizar accuracy agregada es fácil. Monitorizar si el modelo está recomendando algo que ya no está en la guía clínica actual es más difícil. Y monitorizar si los clínicos están dejando de confiar en el modelo requiere que alguien les pregunte.

## ¿Te ha resultado útil?

Si trabajas en seguridad del paciente o estás desplegando modelos de IA en clínica, me interesa saber qué patrones de fallo estás viendo. Escríbeme a través de [la página de contacto](/contacto) si quieres comentar el tema.