---
slug: xai-shap-en-clinica
title: "XAI/SHAP para médicos: cómo se presenta la explicabilidad en un turno real"
description: "Diferencia entre coeficientes técnicos y explicación clínica usable. Ejemplos concretos de UI para XAI/SHAP que funcionan en turnos reales de urgencias y planta."
date: "2026-02-16"
readingTime: "6 min"
tags: ["XAI", "SHAP", "Clinical AI", "UX clínica"]
---

El problema con la explicabilidad en IA clínica no es técnico. SHAP funciona. LIME funciona. El problema es que un médico en urgencias a las tres de la mañana no tiene tiempo para interpretar gráficos de dependencia parcial. Y un internista en ronda de planta no va a leer coeficientes de importancia mientras revisa dieciocho pacientes.

He visto implementaciones de XAI que técnicamente son impecables y clínicamente son inútiles. La explicabilidad genérica no sirve porque el contexto clínico es específico: patología, momento del turno, pregunta que necesita responder el médico. La distancia entre un paper de machine learning y una herramienta usable en consulta es enorme.

Este post es para equipos de producto en HealthTech y data scientists clínicos que diseñan herramientas con IA. Voy a mostrar la diferencia entre coeficientes técnicos y explicación clínica, con ejemplos concretos de UI que he visto funcionar y fallar en turnos reales.

## Coeficientes vs. narrativa clínica: por qué no son lo mismo

SHAP te da un valor numérico de contribución por variable. Eso es técnicamente correcto. Pero cuando un modelo predice riesgo de sepsis y te muestra que "lactato +0.42, temperatura +0.31, leucocitos +0.18", el médico tiene que hacer tres traducciones mentales:

1. Convertir el número a magnitud clínica (¿+0.42 es mucho o poco?)
2. Contextualizarlo con el paciente concreto (¿ese lactato es 2.5 o 8?)
3. Integrarlo con el resto de la historia clínica que el modelo no tiene

He visto equipos presentar valores SHAP en barras horizontales ordenadas de mayor a menor contribución. Técnicamente perfecto. Clínicamente inservible, porque el orden de importancia estadística no coincide con el orden de razonamiento diagnóstico. Un médico piensa en sistemas (respiratorio, cardiovascular, infeccioso), no en ranking de coeficientes.

La explicabilidad útil traduce contribución estadística a narrativa clínica. En vez de "+0.42 lactato", algo como: "El lactato de 4.2 mmol/L es el principal indicador de riesgo. En combinación con hipotensión (PA 88/52) y taquicardia, refuerza sospecha de sepsis con hipoperfusión tisular". Misma información técnica, presentación que sigue el razonamiento diagnóstico.

## Tres patrones de UI que funcionan en contexto real

### Patrón 1: Resumen clínico con drill-down opcional

En urgencias, el primer pantallazo debe responder: ¿qué tiene el paciente y qué hago ahora? Un sistema de apoyo para neumonía que usamos en Méderi mostraba primero:

```
Riesgo alto de neumonía bacteriana (83%)
Principal indicador: infiltrado en RX + leucocitosis con desviación izquierda
```

Abajo, un botón "Ver detalle de análisis". Ahí sí venían los SHAP values completos, pero el 80% de las veces el médico no necesitaba abrirlo. La explicación de primera línea ya respondía la pregunta clínica.

### Patrón 2: Agrupación por sistemas fisiológicos

Para un modelo de predicción de descompensación en UCI, diseñamos la explicación en bloques:

- **Hemodinámico**: PA, FC, llenado capilar → contribución agregada +0.58
- **Respiratorio**: SpO₂, FR, uso de musculatura accesoria → +0.41
- **Metabólico**: lactato, pH, BE → +0.32

Cada bloque se podía expandir para ver variables individuales. Esto funciona porque el médico evalúa pacientes críticos por sistemas. La agregación de contribuciones SHAP por categoría clínica hace la explicación navegable.

### Patrón 3: Comparativa con rangos de referencia contextualizados

Un valor SHAP sin contexto del valor real de la variable es ciego. Vi un sistema de predicción de fallo renal que mostraba:

| Variable | Valor paciente | Rango normal | Contribución |
|----------|----------------|--------------|--------------|
| Creatinina | 2.8 mg/dL | 0.6-1.2 | +0.44 (alto riesgo) |
| Diuresis 24h | 420 mL | >800 | +0.38 (alto riesgo) |
| K⁺ | 5.8 mEq/L | 3.5-5.0 | +0.22 (moderado) |

La tabla está ordenada por contribución, pero incluye el valor real y el rango de referencia. El médico ve inmediatamente qué está fuera de rango, cuánto, y cómo eso influye en la predicción. Es SHAP traducido a lenguaje de laboratorio.

## Por qué la explicabilidad genérica falla en diferentes especialidades

Un modelo de riesgo cardiovascular y uno de deterioro cognitivo pueden usar SHAP igual de bien técnicamente. Pero la presentación debe ser distinta porque el workflow clínico es distinto.

En cardiología, el médico piensa en factores de riesgo acumulados (edad + HTA + DM + tabaco). La UI debe mostrar contribuciones agregadas y cómo cada factor suma al riesgo basal. He visto un sistema que mostraba una línea de tiempo: "Riesgo basal 12% → +3% por HTA → +2% por DM → +4% por tabaquismo activo = 21% a 10 años". Eso es SHAP presentado como suma de riesgos, que es como un cardiólogo piensa.

En neurología para deterioro cognitivo, el razonamiento es más de patrones y evolución temporal. Un sistema de apoyo diagnóstico para demencia mostraba: "Declive en memoria episódica (−2.1 DE respecto a basal) + atrofia hipocampal bilateral en RM son los principales indicadores. El resto de dominios cognitivos están preservados, lo cual es consistente con Alzheimer temprano". Misma técnica de explicabilidad, narrativa adaptada a cómo un neurólogo integra información.

La explicabilidad no es plug-and-play entre especialidades. Cada una tiene su lenguaje, sus protocolos, su forma de integrar evidencia. Un producto que explica igual para todas falla en todas.

## Qué pedir a tu equipo de ML cuando diseñan explicabilidad

Si lideras producto o eres data scientist clínico, estos son los criterios para validar que la explicabilidad es usable:

**Criterio 1: Un médico de la especialidad debe poder leer la explicación en menos de 10 segundos y saber qué hacer.** Si toma más, es documentación, no explicación. La documentación está bien para casos complejos, pero la primera capa debe ser accionable inmediatamente.

**Criterio 2: La explicación debe usar términos y unidades clínicas, no estadísticas.** Nada de "este feature contribuye 0.23 al logit". Todo en mg/dL, mmHg, latidos/min, mmol/L. Si el modelo internamente trabaja con variables normalizadas, tradúcelas de vuelta antes de mostrarlas.

**Criterio 3: El orden de presentación debe seguir el razonamiento diagnóstico, no el ranking de importancia.** A veces la segunda o tercera variable más importante estadísticamente es la primera que un médico necesita ver porque es la puerta de entrada al diagnóstico diferencial.

**Criterio 4: Debe ser posible validar la explicación contra la historia clínica completa.** Si el modelo dice "leucocitosis +0.35", el médico debe poder hacer clic y ver el valor exacto, la fecha del laboratorio, la tendencia en los últimos días. Sin esa trazabilidad, no hay confianza.

He revisado decenas de sistemas de apoyo clínico. Los que tienen adopción real por médicos cumplen estos cuatro criterios. Los que no, terminan usándose solo cuando auditoría lo exige.

## ¿Te ha resultado útil?

Si estás diseñando herramientas de IA clínica y necesitas revisar cómo presentar explicabilidad para que médicos realmente la usen, hablemos. He trabajado en la distancia entre papers de ML y turnos reales en varios contextos clínicos. Contacta conmigo en [/contacto](/contacto) y vemos tu caso concreto.