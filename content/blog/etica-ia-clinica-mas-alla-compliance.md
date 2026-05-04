---
slug: etica-ia-clinica-mas-alla-compliance
title: "Ética en IA clínica: por qué cumplir EU AI Act no es suficiente"
description: "Cumplir el EU AI Act no garantiza ética clínica. Casos reales donde modelos legales fallan en subgrupos, transparencia y consentimiento. Qué debe vigilar tu comité."
date: "2026-05-04"
readingTime: "6 min"
tags: ["Ética IA", "EU AI Act", "Clinical AI"]
---

He revisado evaluaciones de Clinical AI donde el fabricante cumplía cada requisito del EU AI Act y aun así el modelo planteaba problemas éticos evidentes. Un sistema de triaje para urgencias certificado bajo MDR, validado con datos de cinco hospitales europeos, documentación técnica impecable. El problema: rendía 12 puntos porcentuales peor en mujeres mayores de 75 años que en el resto de la población. Dentro de rangos aceptables según la norma, pero éticamente inaceptable para quien trabaja en planta.

La ley establece mínimos de seguridad y gestión de riesgo. La ética clínica exige que esos sistemas no perpetúen ni amplifiquen desigualdades en salud, que respeten la autonomía del paciente más allá del checkbox de consentimiento y que mantengan al clínico en el centro de la decisión. Cumplir compliance no basta cuando usas IA en decisiones que afectan directamente el cuidado de personas.

## Cuando el sesgo es legal pero clínicamente inadmisible

El EU AI Act exige documentar métricas de rendimiento desagregadas por subgrupo cuando sea relevante. No obliga a que esas métricas sean equivalentes entre grupos. Un fabricante puede declarar que su modelo de predicción de reingreso tiene un AUC de 0.82 en población general y de 0.74 en pacientes con diabetes tipo 2, incluir ambas cifras en la documentación técnica y pasar auditoría.

Desde un punto de vista regulatorio cumple. Desde un punto de vista ético falla. Pacientes diabéticos tienen mayor riesgo basal de reingreso y son precisamente quienes más se beneficiarían de una predicción precisa para ajustar seguimiento ambulatorio. Tolerar un delta de 8 puntos en AUC en este subgrupo no es un problema técnico menor, es reproducir en código una desigualdad asistencial existente.

He visto este patrón en sistemas de apoyo diagnóstico para dermatología (menor sensibilidad en pieles oscuras), en modelos de estimación de riesgo quirúrgico (peor calibración en pacientes con comorbilidades complejas) y en algoritmos de priorización de citas (penalización implícita de pacientes polimedicados con baja adherencia histórica). Ninguno infringía la ley. Todos eran éticamente cuestionables.

Un comité de ética debe tener potestad para rechazar la implementación de un modelo legalmente conforme si el análisis de equidad revela disparidades clínicamente significativas. Eso requiere definir umbrales de diferencia máxima aceptable por subgrupo antes de la compra, no después.

## Explicabilidad: cuando cumplir GDPR no significa que el clínico entienda

El derecho a explicación del GDPR y las obligaciones de transparencia del EU AI Act se satisfacen con documentación técnica accesible y descripciones de lógica del sistema. Un fabricante puede entregar un informe de 40 páginas detallando arquitectura del modelo, variables de entrada, métricas de validación y criterios de decisión, cumpliendo formalmente el requisito.

Ese mismo clínico recibe en pantalla una recomendación de ajuste de dosis de anticoagulante con un score de confianza del 87% y ninguna indicación clara de qué factores clínicos pesaron más en esa sugerencia. La explicación existe en el manual técnico, pero no está disponible en el punto de decisión. Técnicamente conforme, clínicamente opaco.

La ética aplicada exige que las explicaciones sean útiles para el profesional que debe actuar sobre ellas. He revisado sistemas donde la explicabilidad se reducía a listar las cinco variables con mayor peso en el modelo: edad, creatinina, presión arterial sistólica, frecuencia cardíaca, días desde último ingreso. Correcto desde XAI, inútil desde medicina interna. El internista necesita saber si la recomendación asume función renal estable, si tiene en cuenta interacciones farmacológicas conocidas, si el modelo detectó alguna tendencia temporal en los signos vitales.

Un comité de ética debe exigir explicaciones contextuales en el workflow clínico, no solo documentación técnica en un repositorio. Eso significa auditar la interfaz de usuario, no solo el backend del modelo.

## Consentimiento por defecto: legal pero éticamente insuficiente

El consentimiento informado en IA clínica suele resolverse con una cláusula en el documento general de admisión hospitalaria o con un apartado en la historia clínica electrónica que el paciente firma digitalmente. Legalmente válido bajo GDPR si la información es accesible y el paciente puede oponerse.

Éticamente problemático cuando el paciente no entiende qué significa que un algoritmo participe en la decisión de alta precoz, de solicitud de prueba diagnóstica adicional o de ajuste de tratamiento. He visto consentimientos donde se informa que "el hospital utiliza sistemas de inteligencia artificial para mejorar la seguridad y calidad asistencial". Genérico, abstracto, imposible de rechazar sin parecer que te opones a recibir mejor atención.

La ética exige consentimiento específico cuando la IA influye en decisiones clínicas de alto impacto. Un modelo de predicción de riesgo de caída que ajusta protocolos de movilización en planta: el paciente debe saber que ese protocolo se modificó por recomendación algorítmica, qué datos se usaron y qué margen de error tiene el modelo. No basta con un checkbox genérico en admisión.

Además está el problema del consentimiento opt-out por defecto. Muchos sistemas asumen consentimiento implícito salvo oposición activa del paciente. Legalmente defendible, éticamente cuestionable. La asimetría de información y el contexto de vulnerabilidad del paciente hospitalizado hacen que el opt-out sea una ficción. Pocos pacientes leerán el aviso, menos aún entenderán las implicaciones y casi ninguno se opondrá por miedo a recibir peor atención.

Un comité de ética debe revisar los procesos de consentimiento reales, no solo la existencia formal de documentos informativos.

## Qué debe existir en cada hospital con Clinical AI

Cada centro que implemente IA de alto riesgo necesita un subcomité específico dentro del comité de ética asistencial. No un grupo ad hoc que revisa casos puntuales, sino una estructura permanente con capacidad de veto sobre implementaciones.

Composición mínima: un clínico senior del servicio afectado, un representante del comité de ética, un técnico con conocimiento de ML y un representante de pacientes. Reunión trimestral obligatoria mientras el sistema esté activo, revisión anual completa.

Funciones concretas: auditar métricas de equidad desagregadas cada seis meses, verificar que las explicaciones en interfaz sean clínicamente útiles, revisar logs de decisiones donde el clínico se apartó de la recomendación del modelo (posible indicador de problemas de confianza o calibración), evaluar incidentes donde el modelo falló de forma no prevista.

También debe existir un proceso de escalado claro. Si un profesional detecta un comportamiento inesperado del modelo o una recomendación que considera clínicamente inadecuada, debe poder reportarlo sin pasar por IT. El subcomité debe tener acceso directo a fabricantes para exigir auditorías externas si es necesario.

He visto hospitales donde el único filtro ético era la evaluación previa a la compra. Una vez implementado el sistema, nadie vigilaba su comportamiento en producción. Eso es insuficiente. Los modelos derivan, los datos cambian, los patrones de uso se modifican. La supervisión ética debe ser continua.

## ¿Te ha resultado útil?

Si estás evaluando cómo estructurar supervisión ética de sistemas de IA en tu organización o necesitas revisar procesos de consentimiento y equidad antes de implementar Clinical AI, hablemos. Trabajo con comités de ética y direcciones médicas en diseño de marcos de gobernanza que van más allá del cumplimiento legal. Puedes contactarme en [/contacto](/contacto).