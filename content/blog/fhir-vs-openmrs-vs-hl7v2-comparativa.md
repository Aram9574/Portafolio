---
slug: fhir-vs-openmrs-vs-hl7v2-comparativa
title: "FHIR vs HL7v2 vs proprietary: qué estándar usar en cada capa de un hospital"
description: "Guía práctica para decidir qué estándar de interoperabilidad usar en cada capa hospitalaria sin reescribir todo el sistema de golpe"
date: "2026-06-29"
readingTime: "6 min"
tags: ["HL7 FHIR", "Interoperabilidad", "Arquitectura"]
---

Llevo un tiempo viendo cómo hospitales de toda Europa se enfrentan al mismo dilema: tienen décadas de mensajería HL7v2 funcionando, algo de integración propietaria que nadie se atreve a tocar, y ahora la presión de adoptar FHIR para cumplir con el Espacio Europeo de Datos de Salud. La pregunta que me hacen es siempre la misma: ¿reescribimos todo o vamos por capas?

Me pregunto si no estamos planteando mal el problema. No se trata de elegir un estándar ganador y migrar todo de golpe. Se trata de entender qué hace cada capa del sistema y decidir qué tecnología encaja mejor ahí, sin romper lo que funciona.

## El mapa real de un hospital medio

La mayoría de hospitales que conozco tienen algo parecido a esto:

**Capa de sistemas core**: HIS, LIS, RIS, PACS. Estos sistemas llevan funcionando décadas con HL7v2. Envían mensajes ADT (alta, traslado, baja), ORU (resultados de laboratorio), ORM (órdenes médicas). La mensajería es síncrona punto a punto, con muchas transformaciones custom y un motor de integración (Mirth, Rhapsody, ensemble) en el medio.

**Capa de aplicaciones clínicas especializadas**: oncología, cardiología, unidades específicas. Aquí hay de todo: sistemas que hablan HL7v2, otros con APIs REST propietarias, algunos que exportan archivos planos. La integración suele ser bilateral, sistema a sistema, sin pasar por ningún bus común.

**Capa de analítica y reporting**: data warehouses que extraen datos de los sistemas core, a veces con ETLs nocturnos, a veces con conectores custom. Aquí el estándar no suele importar tanto porque todo se normaliza al entrar en el modelo dimensional.

**Capa de intercambio externo**: con otros hospitales, con atención primaria, con farmacias, con servicios sociales. Hasta ahora se hacía con HL7v2 o PDFs por mail. Ahora el EHDS empuja a FHIR.

## Qué hace bien cada estándar

### HL7v2: mensajería transaccional rápida

HL7v2 lleva más de treinta años funcionando porque resuelve bien un problema concreto: notificar eventos clínicos en tiempo real entre sistemas internos del hospital. Un paciente ingresa → mensaje ADT. Sale un resultado de laboratorio → mensaje ORU. Se hace una petición de radiología → mensaje ORM.

Es un protocolo diseñado para comunicación punto a punto, síncrona, con confirmaciones de recibo. No está pensado para consultas ad-hoc ni para exponer datos a sistemas externos de forma flexible. Pero para lo que hace, lo hace muy bien.

### FHIR: APIs para ecosistemas abiertos

FHIR está diseñado desde el principio como una API REST. Piensa en recursos (Patient, Observation, MedicationRequest) que se pueden consultar, crear, actualizar y borrar con métodos HTTP estándar. Usa JSON (o XML si hace falta) y tiene un modelo de datos extensible con profiles y extensions.

Lo que me parece más útil de FHIR no es que sea "mejor" que HL7v2, sino que encaja mejor en un contexto de ecosistema: aplicaciones móviles, portales de pacientes, intercambio con otros proveedores, analytics en tiempo real. FHIR te permite exponer datos clínicos de forma estándar sin tener que crear un conector custom para cada consumidor.

### Proprietary: cuando el dominio es muy específico

Los sistemas propietarios suelen aparecer cuando ningún estándar cubre bien el caso de uso. Un ejemplo típico: sistemas de dosimetría en radioterapia, o flujos quirúrgicos muy específicos de un fabricante. Ahí no vas a encontrar un mensaje HL7v2 que modele esa semántica, ni un recurso FHIR que la represente sin forzar la máquina.

El problema no es que existan integraciones propietarias. El problema es cuando se convierten en la única forma de sacar datos del sistema, porque entonces cada nueva integración requiere desarrollo custom.

## Qué migrar, qué mantener, qué wrap

No tiene sentido reescribir toda la mensajería HL7v2 interna de un hospital. Esos flujos funcionan, están probados, los conoce el equipo de IT. Pero tampoco tiene sentido seguir creando nuevas integraciones HL7v2 cuando el destino es un sistema externo o una aplicación moderna.

Veo tres estrategias que están funcionando:

### Mantener HL7v2 en el core transaccional

Los mensajes ADT, ORU, ORM entre HIS, LIS, RIS, PACS pueden quedarse en HL7v2. Cambiarlos no aporta valor clínico ni técnico. Lo que sí aporta es envolver ese motor de integración con una capa de abstracción que exponga los mismos eventos en FHIR para consumidores externos.

Un API gateway que escucha eventos HL7v2, los transforma a recursos FHIR y los expone vía REST. Eso permite que aplicaciones nuevas consuman datos del hospital sin tocar la mensajería legacy.

### Migrar a FHIR las integraciones externas

Cualquier integración con sistemas fuera del hospital debería ir en FHIR. Intercambio con atención primaria, portales de pacientes, aplicaciones móviles, plataformas de investigación. Ahí FHIR no es opcional si quieres cumplir con EHDS.

Lo que estoy viendo es que muchos hospitales empiezan exponiendo un FHIR server de solo lectura: recursos Patient, Observation, Condition, MedicationRequest. Eso ya permite que aplicaciones externas consulten datos sin tener que implementar parsers de HL7v2.

### Wrap propietario solo cuando no queda otra

Si un sistema tiene una API propietaria y no va a cambiar, la opción más pragmática es crear un adapter que traduzca esa API a FHIR. No es ideal, pero es mejor que obligar a todos los consumidores a entender la API propietaria.

Lo que no funciona es crear un adapter distinto para cada consumidor. Mejor un solo adapter FHIR que todos los consumidores puedan usar.

## Dónde invertir para EHDS sin reescribir todo

El EHDS va a exigir que los hospitales expongan datos clínicos en FHIR para intercambio transfronterizo. Eso no significa que todo el sistema interno tenga que migrar a FHIR, pero sí que tiene que haber una forma de exponer esos datos de forma estándar.

La inversión más sensata que veo es un FHIR server que actúe como fachada sobre los sistemas legacy. Ese servidor:

- Consulta datos del HIS, LIS, RIS vía sus APIs (HL7v2, propietarias, lo que sea)
- Los transforma a recursos FHIR
- Los expone vía REST con autenticación OAuth2
- Implementa los profiles FHIR que pida el EHDS (probablemente IPS, International Patient Summary)

Eso te da compliance con EHDS sin tocar la arquitectura interna del hospital. Y de paso te da una plataforma para que nuevas aplicaciones se integren de forma estándar.

## Lo que me sigue dando vueltas

Hay hospitales que están planteándose migrar todo a FHIR nativo. Reemplazar la mensajería HL7v2 interna por eventos FHIR, usar FHIR como modelo de datos canónico, integrar todo vía REST. En teoría suena bien: un solo estándar para todo.

Pero me pregunto si merece la pena. HL7v2 funciona bien para lo que hace. La complejidad de migrar décadas de mensajería a FHIR es enorme. Y el beneficio clínico no está claro.

Quizás la respuesta no es elegir un estándar único, sino usar cada uno donde encaja mejor: HL7v2 para mensajería transaccional interna, FHIR para exposición externa y ecosistema, propietario solo donde no queda otra, siempre con una capa de abstracción FHIR encima.

## ¿Te ha resultado útil?

Si estás trabajando en arquitectura de integración hospitalaria y te planteas por dónde empezar con FHIR sin romper lo que funciona, me gustaría escuchar tu caso. Puedes escribirme por [aquí](/contacto) y lo comentamos.