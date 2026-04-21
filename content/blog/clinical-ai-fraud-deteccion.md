---
slug: clinical-ai-fraud-deteccion
title: "Cómo detectar vaporware en un piloto de IA clínica: 7 señales que ve un médico"
description: "Siete indicadores técnicos y clínicos para identificar soluciones de IA médica sin validez real antes de invertir recursos en un piloto hospitalario."
date: "2025-12-29"
readingTime: "7 min"
tags: ["Clinical AI", "Evaluación", "Implementación"]
---

He revisado suficientes propuestas de IA clínica para reconocer el patrón. El PowerPoint promete reducir reingresos un 40%, el demo funciona impecable, los testimoniales suenan creíbles. Tres meses después del piloto, los clínicos no lo usan, las predicciones no se cumplen y la dirección pregunta qué salió mal.

La respuesta está antes del piloto. Las señales de vaporware aparecen en la documentación técnica, en las preguntas que no pueden responder y en lo que evitan mostrar. Aquí están las siete que identifico sistemáticamente.

## 1. Dataset de validación no representa tu población

La métrica más engañosa en IA clínica es el AUC reportado en un paper. Un modelo puede tener 0.94 de AUC en MIMIC-III y 0.67 en tu hospital porque la prevalencia de sepsis, el perfil de comorbilidades o simplemente los protocolos de registro son diferentes.

Pregunto siempre: ¿dónde se entrenó el modelo? Si es un único hospital universitario estadounidense y quieres implementarlo en atención primaria española, el shift de distribución será brutal. Los modelos de predicción de riesgo cardiovascular entrenados en Framingham fallan sistemáticamente en población mediterránea. No es el algoritmo, es la epidemiología.

La señal concreta: pides el breakdown demográfico del dataset de validación (edad, sexo, comorbilidades principales) y lo comparas con tu censo. Si no pueden dártelo o la diferencia es mayor al 20% en variables críticas, detengo la conversación ahí.

## 2. Métricas optimizadas para vender, no para usar

Un clasificador de neumonía con 98% de sensibilidad suena impresionante hasta que ves que tiene 60% de especificidad. En urgencias con prevalencia real del 8%, eso significa que de cada 10 alertas, 9 son falsas. El médico desconecta la herramienta en la segunda guardia.

He visto proveedores reportar accuracy general cuando el outcome relevante es minoritario (5% de sepsis, 2% de IAM). Esa métrica no dice nada. Lo que importa es PPV y NPV en tu prevalencia operativa, no en la del paper.

La prueba: pide que calculen PPV asumiendo la prevalencia real de tu servicio. Si no saben hacerlo o evitan la pregunta, están vendiendo un número sin contexto clínico. También reviso si reportan intervalos de confianza. Un modelo con 0.89 (IC 95%: 0.71-0.94) y otro con 0.87 (IC 95%: 0.84-0.89) no son comparables, aunque el titular diga lo contrario.

## 3. Validación externa inexistente o poco clara

Los modelos sobreajustan. Es estadística, no mala fe. El problema es cuántos proveedores presentan solo validación interna (hold-out del mismo dataset) y la etiquetan como "validada".

Validación externa real significa: dataset diferente, institución diferente, periodo temporal diferente. Idealmente, país diferente si vas a operar en Europa. Un modelo de triaje validado solo en Kaiser Permanente tiene problemas de generalización evidentes para el SNS.

Pregunto directamente: ¿hay validación prospectiva publicada? ¿En cuántos centros? ¿Cuál fue el performance drift entre entrenamiento y despliegue? Si la respuesta es "estamos trabajando en ello", es una red flag. Significa que quieren que tú pagues el aprendizaje de sus errores de implementación.

## 4. Explicabilidad ausente o inutilizable clínicamente

SHAP values y Lime están bien para un paper. Para un médico en planta a las 3 AM, necesitas explicaciones que mapeen a razonamiento clínico real.

Un sistema de predicción de sepsis que te dice "la variable más importante fue la frecuencia cardiaca" no aporta nada. Todos sabemos que la taquicardia es criterio SOFA. Lo útil sería: "este paciente tiene un patrón de elevación de lactato similar al observado en 847 casos previos de sepsis por foco abdominal, con mediana de inicio de antibiótico a las 4.2 horas".

Pido siempre un ejemplo real de output explicativo. Si es una lista de features con pesos, sin narrativa clínica, el modelo no está diseñado para integrarse en workflow médico. Está diseñado para cumplir un checklist regulatorio.

## 5. Plan de monitoring post-despliegue inexistente

El performance de IA clínica degrada con el tiempo. Cambios en protocolos, en demografía de pacientes, en equipamiento de laboratorio, en prevalencia de patología (piensa en COVID). Un modelo estático es un modelo muerto en 18-24 meses.

La pregunta clave: ¿cómo monitorizan concept drift? ¿Tienen alertas automáticas de caída de performance? ¿Cada cuánto reentrenan? ¿Cómo validan que el reentrenamiento no introduce bias?

He visto contratos que incluyen "actualizaciones periódicas del modelo" sin especificar métricas de disparo, ni responsabilidades de validación, ni plan de rollback si la nueva versión falla. Eso no es un plan, es una frase de marketing.

| Componente | Pregunta clave | Red flag |
|-----------|---------------|----------|
| Drift detection | ¿Qué métricas monitorizan? | "Supervisamos el sistema regularmente" (sin KPIs) |
| Reentrenamiento | ¿Qué dispara una actualización? | "Anualmente" (sin trigger basado en performance) |
| Validación de nueva versión | ¿Proceso antes de desplegar? | "Testing interno" (sin validación clínica) |
| Rollback | ¿Plan si falla la actualización? | No contemplado |

## 6. Ausencia de plan de integración con HIS

El 70% del fracaso de pilotos de IA clínica está en la integración, no en el algoritmo. Un modelo que requiere exportar datos manualmente, procesarlos en una plataforma externa y volver a introducir resultados está condenado.

Pregunto siempre por la arquitectura de integración: ¿FHIR, HL7v2, API propietaria? ¿Quién asume el desarrollo del conector? ¿Hay SLA de latencia (crítico en sepsis, por ejemplo)? ¿El output se escribe automáticamente en la historia o requiere copia manual?

He rechazado soluciones técnicamente sólidas porque requerían que enfermería introdujera manualmente 8 variables cada 4 horas. Eso no escala. Si el proveedor dice "es fácil, solo necesitamos acceso a la base de datos", no entienden governance de datos clínicos ni cumplimiento de RGPD.

## 7. Historial opaco de implementaciones previas

El vaporware más sofisticado tiene referencias. El problema es que son pilotos de 3 meses que nunca pasaron a producción o implementaciones "exitosas" que se descontinuaron a los 6 meses sin explicación pública.

Pido siempre contacto directo con responsables técnicos de implementaciones previas. No con el sponsor que firmó el contrato, sino con quien gestionó el despliegue. Las preguntas: ¿cuánto tiempo tomó la integración real vs. estimada? ¿Qué problemas surgieron que no estaban en la documentación? ¿El modelo sigue en producción? Si no, ¿por qué?

Si el proveedor solo puede dar referencias de "pilotos exitosos" pero no de producción estable mayor a 12 meses, están vendiendo capacidad de hacer demos, no de sostener operaciones clínicas reales.

## ¿Te ha resultado útil?

Si estás evaluando un piloto de IA clínica o necesitas auditoría técnica de una propuesta antes de comprometer presupuesto, hablamos. He revisado suficientes implementaciones para reconocer los patrones de fracaso temprano. Contacta en [/trabajemos-juntos](/trabajemos-juntos) y discutimos tu caso específico.