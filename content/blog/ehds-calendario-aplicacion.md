---
slug: ehds-calendario-aplicacion
title: "Calendario de aplicación del EHDS: qué debe hacer cada hospital español antes de 2029"
description: "Roadmap ejecutivo del EHDS 2025-2029: obligaciones del Reglamento 2025/327, HIS, consentimiento granular y preparación para el HDAB nacional."
date: "2026-04-20"
readingTime: "6 min"
tags: ["EHDS", "Salud Digital", "Interoperabilidad"]
---

El Reglamento (UE) 2025/327 sobre el Espacio Europeo de Datos de Salud entró en vigor el 31 de enero de 2025. Los hospitales españoles tienen hasta julio de 2029 para cumplir con las obligaciones de uso primario de datos. Eso son 41 meses, que en un centro con sistemas legacy de 15 años y sin arquitectura FHIR se van rápido. Este post desglosa qué tocar primero, qué puede esperar y cómo preparar el terreno para el Health Data Access Body (HDAB) nacional que España debe designar antes de julio de 2027.

## Hitos regulatorios obligatorios: lo que nadie puede esquivar

El calendario del EHDS distingue dos ejes: uso primario (atención clínica, derecho del paciente) y uso secundario (investigación, innovación, política sanitaria). Los hospitales deben atender ambos, pero con prioridades distintas.

**Julio 2027**: España designa su HDAB nacional y notifica a la Comisión. Este organismo, que puede ser un ente nuevo o un refuerzo del Ministerio de Sanidad, coordinará las solicitudes de acceso a datos para uso secundario. Los hospitales no elegimos quién es el HDAB, pero sí debemos preparar nuestros sistemas para que puedan responder a sus requerimientos técnicos.

**Julio 2028**: entrada en vigor de las obligaciones de formato europeo de intercambio electrónico (EEHRxF). Todo sistema que genere historia clínica electrónica debe exportar resúmenes de paciente, informes de alta, resultados de laboratorio, imágenes y prescripciones en el formato estándar europeo. En España eso implica revisar el mapa de interoperabilidad del SNS, los perfiles HL7 FHIR R4 y las ontologías SNOMED CT que muchos centros todavía no han integrado.

**Julio 2029**: obligación plena de portabilidad transfronteriza y acceso electrónico del paciente a su historia. Aquí convergen interoperabilidad técnica, consentimiento granular y trazabilidad de accesos. Un CIO con un HIS que no soporte FHIR nativo tendrá que montar middleware, homologar APIs y auditar logs de acceso. Y eso no se hace en seis meses.

## Qué tocar primero en el HIS: interoperabilidad antes que blockchain

He visto proyectos piloto de EHDS que empiezan por el final: consentimiento descentralizado, infraestructura de identidad federada, nodos de acceso controlado. Todo eso está bien, pero si tu HIS no puede serializar un Bundle FHIR con la medicación activa del paciente, el resto es teatro.

Prioridades técnicas en el HIS:

1. **Auditoría de capacidades FHIR actuales**. ¿El núcleo del sistema soporta R4? ¿Genera recursos Patient, Encounter, MedicationStatement, DiagnosticReport sin transformaciones manuales? Si la respuesta es no, hay que valorar actualización mayor o capa de integración.

2. **Mapeo a terminologías europeas obligatorias**. SNOMED CT para diagnósticos y procedimientos, LOINC para pruebas de laboratorio, ATC para medicamentos. Muchos hospitales españoles usan CIE-10, que es insuficiente para la granularidad del EEHRxF. El mapeo no es automático: requiere trabajo clínico, validación de equivalencias y gobernanza de datos.

3. **Implementación de consentimiento granular**. El artículo 3 del Reglamento exige que el paciente pueda restringir acceso a categorías específicas de datos. Eso no es un checkbox de "acepto términos y condiciones". Es granularidad por tipo de dato (imagen, laboratorio, prescripción), por profesional, por finalidad (atención, investigación, calidad). El HIS debe registrar estas preferencias, aplicarlas en tiempo real y auditar cada acceso. Si tu sistema actual solo tiene "consentimiento sí/no", tienes trabajo.

4. **Logs de acceso con trazabilidad completa**. Quién accedió, cuándo, a qué dato, con qué justificación clínica, desde qué ubicación. Retención mínima de 5 años. Esto no es RGPD genérico: es auditoría específica de datos de salud con obligación de notificación al paciente en caso de acceso no autorizado. Muchos HIS actuales no cumplen este nivel de detalle.

## Consentimiento granular: más allá del portal del paciente

El portal web donde el paciente descarga PDFs no basta. El consentimiento granular del EHDS obliga a que el ciudadano pueda:

- Autorizar o denegar acceso transfronterizo a su historia completa o a secciones específicas.
- Revocar autorizaciones previas sin que eso implique borrado de datos (trazabilidad regulatoria).
- Visualizar quién ha accedido a qué datos y en qué contexto.

Desde el punto de vista técnico, esto requiere:

- **API de consentimiento** integrada con el HIS, no un módulo separado. Cada petición de datos debe validar estado del consentimiento en tiempo real.
- **Interfaz de usuario accesible** (WCAG 2.1 AA mínimo) para pacientes con diversidad funcional.
- **Notificaciones activas** cuando se produce un acceso relevante o una solicitud transfronteriza.

España tiene ventaja con Cl@ve, que ya permite identificación única. El reto es conectar esa identidad con el middleware de consentimiento y con los sistemas autonómicos heterogéneos. Cataluña lleva ventaja con HC3, pero Andalucía, Madrid y Valencia tienen arquitecturas distintas. El HDAB nacional tendrá que mediar aquí.

## Preparación para el HDAB nacional: qué esperar del uso secundario

El HDAB nacional coordinará solicitudes de acceso a datos para investigación, innovación, formación y política pública. Los hospitales no gestionaremos esas solicitudes directamente, pero sí debemos:

1. **Estructurar datasets de uso secundario**. Datos seudónimos, limpios, con metadatos de calidad. El artículo 33 del Reglamento exige que los datos estén "bien documentados, accesibles, interoperables y reutilizables". Eso no describe el data warehouse de la mayoría de hospitales españoles.

2. **Implementar seudónimización robusta**. No anonimización irreversible, porque impide trazabilidad clínica futura. Seudónimización que permita reidentificación controlada bajo protocolo del HDAB. Eso implica gestión de claves, separación de identificadores directos e indirectos, y auditoría de quien puede revertir el seudónimo.

3. **Documentar gobernanza de datos**. Quién es responsable de la calidad del dato, qué controles de acceso se aplican, cómo se valida la estructura antes de enviar al HDAB. Esto es más gestión que tecnología, pero sin procedimiento documentado, el HDAB rechazará peticiones.

## Calendario ejecutivo: de aquí a 2029

| Plazo | Acción prioritaria | Responsable típico |
|-------|-------------------|-------------------|
| Q2 2026 | Auditoría FHIR del HIS, gap analysis de capacidades EEHRxF | CIO + arquitecto de datos |
| Q3 2026 | Mapeo SNOMED CT/LOINC/ATC, plan de gobernanza terminológica | Dirección Médica + informática clínica |
| Q4 2026 | Diseño de módulo de consentimiento granular, arquitectura de APIs | CIO + legal + protección de datos |
| Q1-Q2 2027 | Implementación piloto de consentimiento, pruebas de interoperabilidad con MyHealth@EU | CIO + equipo de desarrollo |
| Q3 2027 | Preparación de datasets de uso secundario, seudónimización, documentación | Dirección de investigación + datos |
| Q4 2027-Q2 2028 | Integración con el HDAB nacional (una vez designado), validación de formatos | CIO + HDAB |
| Q3 2028 | Despliegue completo EEHRxF, formación a profesionales | Toda la dirección |
| Q4 2028-Q2 2029 | Pruebas de portabilidad transfronteriza, auditorías de cumplimiento | CIO + auditoría interna |

Este calendario asume un hospital de tamaño medio con HIS moderno pero sin FHIR nativo. Un centro con sistemas legacy de 2010 debe adelantar seis meses cada fase. Un hospital ya en FHIR puede comprimir Q2-Q3 2026.

## Errores comunes que ya estoy viendo

**Esperar a que el Ministerio publique la implementación nacional definitiva**. El Reglamento es de aplicación directa. España debe transponer aspectos de gobernancia del HDAB, pero las obligaciones técnicas sobre HIS no dependen de ley nacional. Quien espera a 2027 para empezar llega tarde.

**Pensar que el EHDS es solo transfronterizo**. No. El 80% del esfuerzo es interoperabilidad interna: entre servicios del hospital, entre hospitales de la misma CCAA, entre primaria y especializada. El transfronterizo es la capa final.

**Subcontratar todo a la empresa del HIS**. Los proveedores de HIS tienen su roadmap, que no siempre coincide con el tuyo. He visto contratos donde la actualización FHIR se factura como customización, con plazos de 18 meses. Eso no cabe en el calendario del EHDS. Hay que negociar con criterio técnico y presupuesto claro.

## ¿Te ha resultado útil?

Si diriges innovación o TI en un hospital y el calendario del EHDS te genera más preguntas que respuestas, hablemos de tu caso concreto. Analizo arquitecturas, reviso contratos con proveedores y diseño roadmaps realistas. Escríbeme en [/contacto](/contacto).