---
slug: fhir-en-produccion-errores
title: "HL7 FHIR en producción: los 5 errores que matan un proyecto de interoperabilidad"
description: "Vocabularios mal mapeados, consentimiento ignorado, versiones mezcladas: los fallos técnicos que convierten FHIR en un proyecto piloto eterno sin llegar a producción real."
date: "2026-04-13"
readingTime: "7 min"
tags: ["HL7 FHIR", "Interoperabilidad", "Implementación"]
---

He visto equipos técnicos brillantes perder seis meses en un piloto FHIR que nunca pasa a producción. El problema no es la especificación. FHIR funciona cuando se implementa con rigor. El problema es que cinco errores técnicos—evitables—convierten un proyecto de interoperabilidad en un prototipo eterno.

Estos cinco errores matan proyectos: vocabularios mal mapeados, consentimiento ignorado, versiones FHIR mezcladas, extensiones no documentadas y ausencia de estrategia de migración. Los he identificado revisando implementaciones fallidas en hospitales, hablando con arquitectos de datos sanitarios y auditando APIs que nunca llegaron a integrar sistemas reales.

## Error 1: Mapear vocabularios al final del proyecto

El mapeo de terminologías no es un problema de datos, es un problema clínico con consecuencias técnicas. SNOMED CT, LOINC, ICD-10, CIE-10-ES, códigos locales heredados de sistemas legacy: cada organización tiene un ecosistema terminológico específico.

El error típico: arrancar el proyecto con recursos FHIR genéricos (Patient, Observation, MedicationStatement) y dejar el mapeo de vocabularios para "cuando tengamos datos reales". Cuando llegan los datos reales, descubres que el laboratorio usa códigos internos, que radiología tiene su propio diccionario y que farmacia maneja ATC pero no al nivel de granularidad que FHIR espera.

Resultado: un mes antes de salir a producción, el equipo técnico está mapeando manualmente miles de códigos. Sin validación clínica. Sin procedimiento para mantener el mapeo cuando cambien las versiones de SNOMED o LOINC.

La solución: mapear vocabularios en fase de diseño, no de implementación. Tres pasos concretos:

1. **Inventario terminológico completo**: qué sistemas fuente usan qué códigos, con qué versión, con qué nivel de granularidad.
2. **Mapeo documentado con criterio clínico**: cada código legacy mapeado a SNOMED/LOINC debe tener justificación clínica escrita. No basta con "parecen similares".
3. **Proceso de actualización**: quién actualiza el mapeo cuando sale una nueva versión de SNOMED, con qué frecuencia, con qué validación.

Sin esto, el servidor FHIR expone datos técnicamente correctos pero clínicamente inútiles.

## Error 2: Ignorar consentimiento hasta que Protección de Datos pregunta

GDPR obliga a gestionar consentimiento. FHIR tiene el recurso `Consent`. La mayoría de proyectos ignoran el tema hasta que Protección de Datos bloquea el despliegue.

He visto implementaciones donde el consentimiento se "asume implícito" porque "el paciente está en el hospital". Eso no cumple GDPR. He visto otras donde se registra consentimiento en un Excel aparte, sin trazabilidad técnica con los recursos FHIR que expone.

El recurso `Consent` en FHIR permite modelar:
- Qué datos puede ver cada actor (profesional, paciente, tercero autorizado).
- Para qué propósito (tratamiento, investigación, facturación).
- Durante qué periodo.
- Con qué nivel de granularidad (todo el historial, solo ciertos tipos de recursos, exclusiones específicas).

Pero implementar `Consent` correctamente requiere:
- Vincular cada petición a la API FHIR con una validación de consentimiento activa.
- Mantener trazabilidad: quién accedió a qué, cuándo, bajo qué consentimiento.
- Permitir revocación: si el paciente retira consentimiento, qué pasa con los datos ya compartidos.

Esto no se resuelve en dos semanas. Si lo dejas para el final, el proyecto se para. Si lo diseñas desde el principio, es un módulo más.

## Error 3: Mezclar versiones de FHIR sin estrategia de versionado

FHIR tiene tres versiones en uso real: DSTU2 (legacy pero aún activa), STU3 (ampliamente desplegada) y R4 (estándar actual). R5 está en camino pero aún no es producción masiva.

El error: empezar con R4 porque "es la última versión" y descubrir a mitad de proyecto que el HIS del hospital solo expone DSTU2. O peor: conectar con tres sistemas externos, cada uno en una versión distinta, sin capa de conversión.

Los recursos cambian entre versiones. No solo nombres de campos: semántica completa. `MedicationOrder` en DSTU2 se convierte en `MedicationRequest` en STU3. `Procedure.performedDateTime` en STU3 se desdobla en `Procedure.performed[x]` en R4 con múltiples tipos permitidos.

Sin estrategia de versionado, acabas con:
- Código de conversión ad-hoc disperso en cinco repositorios distintos.
- Pérdida de datos en las conversiones porque no todos los campos mapean 1:1.
- Imposibilidad de auditar qué versión del recurso generó cada entrada en logs.

La solución técnica:

| Estrategia | Cuándo usarla | Coste técnico |
|------------|---------------|---------------|
| **Versión única end-to-end** | Control total sobre sistemas fuente y destino | Bajo, pero requiere migración coordinada |
| **Capa de transformación centralizada** | Múltiples sistemas legacy en versiones distintas | Medio, mantenimiento continuo |
| **Servidor FHIR multi-versión** | API pública con clientes heterogéneos | Alto, complejidad operativa |

Decidir esto en diseño ahorra tres reescrituras durante implementación.

## Error 4: Extensiones FHIR no documentadas

FHIR permite extender recursos con campos personalizados. Es una funcionalidad potente y peligrosa. Potente porque permite modelar necesidades locales sin romper la especificación. Peligrosa porque sin gobierno, cada equipo crea extensiones incompatibles.

He auditado APIs FHIR con 40+ extensiones custom, sin documentación, sin namespacing consistente, sin criterio clínico que justifique por qué esa extensión no debería ser un recurso estándar.

Ejemplo real: un hospital extendió `Observation` con un campo `observation.extension:localPriority` para marcar prioridad clínica. No documentaron el valueset permitido. Tres meses después, otro equipo crea `observation.extension:clinicalUrgency` para el mismo concepto. Ahora hay dos extensiones duplicadas en producción, sin forma de consolidarlas sin romper integraciones.

Reglas de gobierno mínimas para extensiones:

1. **Namespacing obligatorio**: `http://hospital.es/fhir/extension/concepto`, nunca `localField`.
2. **Documentación en StructureDefinition**: cada extensión debe tener un perfil FHIR publicado, con cardinalidad, tipo de dato, valueset si aplica.
3. **Revisión clínica**: antes de crear una extensión, verificar si el concepto ya existe en un perfil nacional o internacional (US Core, IPS, estándares autonómicos).
4. **Proceso de aprobación**: comité técnico-clínico que aprueba nuevas extensiones. No cada desarrollador por su cuenta.

Sin esto, FHIR se convierte en un JSON libre con etiqueta "estándar".

## Error 5: Sin plan de migración desde sistemas legacy

El último error es también el más costoso: arrancar FHIR asumiendo que los sistemas legacy desaparecerán solos. No desaparecen. He visto HIS de hace 15 años conviviendo con servidores FHIR modernos porque nadie planificó la migración.

Tres escenarios técnicos comunes:

**Escenario A: Big Bang**. Apagar el sistema viejo, encender FHIR. Solo viable si controlas toda la arquitectura, tienes ventana de migración de semanas y recursos para rollback inmediato si falla.

**Escenario B: Coexistencia con sincronización bidireccional**. El HIS legacy sigue siendo fuente de verdad. FHIR expone datos pero también escribe de vuelta. Requiere lógica de resolución de conflictos, estrategia de deduplicación, monitorización de drift entre sistemas.

**Escenario C: FHIR como capa de lectura, legacy como escritura**. El sistema viejo sigue siendo operativo para clínicos. FHIR solo expone datos hacia fuera (portales de paciente, intercambio con otras instituciones). Riesgo: mantenimiento de dos sistemas indefinidamente.

El escenario C es el más frecuente en hospitales grandes. Y el que nadie presupuesta correctamente. Mantener dos sistemas en paralelo durante años tiene coste técnico (dos APIs, dos esquemas de datos, dos procesos de auditoría) y coste operativo (formación, soporte, licencias).

El plan de migración debe especificar:
- Qué datos migran, en qué orden, con qué validación clínica.
- Cómo se maneja la brecha temporal (datos nuevos en legacy durante la migración).
- Quién valida que los datos migrados son clínicamente equivalentes.
- Fecha de apagado del sistema viejo, con criterios técnicos objetivos.

Sin esto, FHIR se queda en capa de interoperabilidad externa, nunca se convierte en el núcleo del sistema.

## ¿Te ha resultado útil?

Si tu organización está evaluando FHIR o ya tiene un proyecto en marcha que no acaba de despegar, hablemos. He auditado implementaciones, diseñado estrategias de migración y formado equipos técnicos en hospitales y consultoras. Puedes escribirme en [/contacto](/contacto) para revisar tu caso específico.