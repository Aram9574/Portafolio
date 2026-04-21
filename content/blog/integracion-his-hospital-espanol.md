---
slug: integracion-his-hospital-espanol
title: "Integrar un CDSS en un HIS español: Selene, HP-HIS, SAP i.s.h., Millenium — qué esperar"
description: "Tiempos reales, gaps FHIR y antipatterns en los cuatro HIS que dominan hospitales españoles. Checklist técnico para discovery previo a integración."
date: "2026-01-05"
readingTime: "6 min"
tags: ["Integración HIS", "Interoperabilidad", "Implementación"]
---

He revisado decenas de pliegos de licitación y propuestas técnicas para integrar sistemas de soporte a la decisión clínica en hospitales públicos españoles. La pregunta inicial siempre es la misma: "¿cuánto tiempo nos llevará conectar el CDSS con nuestro HIS?". La respuesta honesta: depende del HIS, de qué versión ejecute el hospital, de si disponen de middleware HL7 operativo y de si el área de TI ha tocado FHIR alguna vez.

Selene, HP-HIS, SAP i.s.h. y Cerner Millennium dominan el paisaje hospitalario español. Cada uno tiene arquitectura propia, madurez FHIR diferente y gaps documentados. Este post desglosa qué esperar en cada caso, qué preguntar en discovery y qué antipatterns he visto repetirse.

## Selene: omnipresencia en comunidades autónomas, arquitectura fragmentada

Selene es el HIS de referencia en CCAA como Andalucía, Cataluña (parte de CatSalut), Extremadura. Arquitectura cliente-servidor sobre Oracle. En versiones antiguas —todavía operativas en varios hospitales— la capa de integración es HL7 v2.x puro, sin APIs REST nativas.

**Gap principal**: ausencia de servidor FHIR en versiones anteriores a 2020. Muchos hospitales ejecutan releases de 2017-2019. Eso significa que la interoperabilidad depende de un middleware externo (Mirth Connect, Rhapsody) que traduzca HL7 a FHIR o que consuma webservices SOAP legacy. He visto proyectos estancados tres meses esperando que TI configure Mirth correctamente.

**Capacidad FHIR real**: en versiones modernas (2021+), Selene ha incorporado adaptadores FHIR R4 para Patient, Observation, Condition, MedicationRequest. Pero la cobertura no es completa: recursos como AllergyIntolerance o DiagnosticReport requieren desarrollo custom o mapeo manual. La documentación técnica suele ser escasa; espera solicitar acceso a repositorio interno de la CCAA.

**Tiempos típicos**: 
- Discovery + mapeo de recursos: 2-3 semanas.
- Configuración de middleware si no existe: 4-6 semanas.
- Testing end-to-end con alertas CDSS: 3-4 semanas.
- Total: 9-13 semanas si TI colabora activamente. Hasta 20 semanas si hay cambios de prioridad o falta personal dedicado.

**Antipattern común**: asumir que "HL7 v2.x ya está" implica que FHIR funcionará sin esfuerzo. HL7 v2.x transporta mensajes ADT, ORM, ORU. FHIR exige recursos estructurados con terminología estándar (SNOMED, LOINC). El salto no es trivial.

## HP-HIS: madurez técnica desigual según módulo

HP Hospital Information System (antiguamente iSOFT) está presente en hospitales públicos de Madrid, Castilla-La Mancha, Murcia. Arquitectura modular: CliniSys (laboratorio), PiX (farmacia), módulos de enfermería, UCI. La integración depende de qué módulos estén activos y en qué versión.

**Gap principal**: cada módulo tiene su propia base de datos y lógica de negocio. Un CDSS que necesite cruzar resultados de laboratorio (CliniSys) con prescripción (PiX) y alergias (historia clínica) debe consultar tres fuentes diferentes. HP-HIS ofrece Enterprise Service Bus (ESB) en licencias premium, pero no todos los hospitales lo tienen contratado.

**Capacidad FHIR real**: HP lanzó adaptadores FHIR R4 en 2020. Cobertura estable para Patient, Observation (lab), MedicationStatement. DiagnosticReport funciona bien en CliniSys, pero nota de evolución clínica (DocumentReference) requiere desarrollo adicional. En mi experiencia, la API FHIR de HP-HIS es más robusta que Selene en hospitales que actualizaron post-2020.

**Tiempos típicos**:
- Discovery + acceso a ESB: 2 semanas.
- Mapeo de recursos FHIR desde tres módulos: 3-4 semanas.
- Desarrollo de lógica de reconciliación (si no existe ESB): 4-5 semanas.
- Testing: 2-3 semanas.
- Total: 11-14 semanas con ESB operativo, 16-20 semanas sin él.

**Antipattern común**: no validar en discovery si el hospital tiene licencia ESB activa. He visto propuestas técnicas que asumen ESB disponible, solo para descubrir en semana 6 que TI debe solicitar licencia nueva (proceso que toma 8-12 semanas por compra pública).

## SAP i.s.h.: potencia configurada, curva de aprendizaje empinada

SAP i.s.h. (Industrie Soluções para Healthcare) es el HIS de hospitales privados grandes (Quirónsalud, HM Hospitales) y algunos públicos (Hospital La Fe en Valencia). Arquitectura SAP ERP adaptada a salud. Alta capacidad de configuración, pero requiere consultores SAP especializados en i.s.h. para cualquier cambio estructural.

**Gap principal**: la lógica de negocio está embebida en transacciones SAP personalizadas. Extraer datos clínicos para FHIR implica configurar BAPIs (Business Application Programming Interfaces) o usar SAP PI/PO (Process Integration). No hay API REST nativa; todo pasa por middleware SAP. Si el hospital no tiene consultor SAP i.s.h. en plantilla o contrato de soporte activo, cada cambio requiere ticket a SAP con SLA de 2-4 semanas.

**Capacidad FHIR real**: SAP ofrece Healthcare Interoperability Accelerator (HIA) desde 2019, que mapea estructuras i.s.h. a FHIR R4. Cobertura buena para Patient, Encounter, Condition, MedicationRequest. Pero HIA es producto separado, requiere licencia adicional y configuración específica por cada hospital. He visto hospitales con i.s.h. desde 2015 que nunca activaron HIA.

**Tiempos típicos**:
- Discovery + revisión de BAPIs existentes: 2-3 semanas.
- Configuración de HIA (si ya tienen licencia): 4-5 semanas.
- Desarrollo de BAPIs custom (si no existe HIA): 6-8 semanas.
- Testing: 3-4 semanas.
- Total: 9-12 semanas con HIA, 15-20 semanas sin HIA.

**Antipattern común**: subestimar la necesidad de consultor SAP i.s.h. certificado. SAP es ecosistema cerrado; un desarrollador FHIR experimentado sin background SAP no puede configurar PI/PO solo con documentación pública.

## Cerner Millennium: estándar americano, adaptación europea incompleta

Millennium está en hospitales como el 12 de Octubre (Madrid), Vall d'Hebron (Barcelona). Plataforma americana con fuerte presencia FHIR desde origen, pero la implementación en España arrastra customizaciones locales que afectan interoperabilidad.

**Gap principal**: Cerner tiene servidor FHIR robusto (Cerner FHIR Server) con cobertura amplia de recursos. Problema: hospitales españoles usan Millennium con terminología mixta (CIE-10, SNOMED parcial, códigos locales legacy). El servidor FHIR expone datos tal como están almacenados; si AllergyIntolerance contiene código interno del hospital sin mapeo a SNOMED, el CDSS debe manejar esa ambigüedad.

**Capacidad FHIR real**: excelente en recursos core (Patient, Observation, Condition, Procedure, MedicationRequest, AllergyIntolerance, DiagnosticReport). Soporta SMART on FHIR para autenticación. Pero personalización local puede romper conformidad con perfiles IPS (International Patient Summary) o HL7 España. He visto casos donde DocumentReference devuelve PDFs escaneados sin metadatos estructurados.

**Tiempos típicos**:
- Discovery + análisis de terminología usada: 1-2 semanas.
- Configuración de cliente FHIR + OAuth: 2-3 semanas.
- Desarrollo de lógica de mapeo terminológico: 3-4 semanas.
- Testing: 2-3 semanas.
- Total: 8-12 semanas si terminología es estándar, 12-16 semanas si requiere mapeo custom.

**Antipattern común**: asumir que "Millennium tiene FHIR" significa interoperabilidad plug-and-play. FHIR expone estructura, no garantiza semántica estándar. Si el hospital lleva 10 años usando códigos internos, FHIR los expondrá tal cual.

## Checklist de discovery técnico (antes de firmar contrato)

| Pregunta | Por qué importa |
|----------|-----------------|
| ¿Qué versión exacta del HIS ejecutan? (release + patch) | Determina disponibilidad de adaptadores FHIR nativos |
| ¿Tienen middleware HL7 operativo? ¿Qué motor? (Mirth, Rhapsody, Cloverleaf) | Indica si pueden traducir HL7 v2 a FHIR sin desarrollo nuevo |
| ¿Qué terminologías usan? (CIE-10, SNOMED, LOINC, códigos locales) | Define esfuerzo de mapeo semántico |
| ¿Acceso a servidor FHIR está en producción o solo en test? | Proyectos bloqueados meses esperando promoción a producción |
| ¿Tienen personal TI formado en FHIR o necesitan consultor externo? | Impacta timeline y coste de soporte continuo |
| ¿Política de seguridad permite OAuth 2.0 / SMART on FHIR? | Algunos hospitales solo permiten VPN + certificados cliente |

La integración en HIS español no falla por FHIR; falla por asumir que el hospital tiene infraestructura lista cuando en realidad ejecuta software de 2018 sin actualizar, TI está saturado y nadie ha tocado terminología estándar.

## ¿Te ha resultado útil?

Si estás diseñando integración CDSS para hospitales españoles o preparando propuesta técnica para licitación, hablemos del caso concreto. He trabajado con estos cuatro HIS en implementaciones reales y puedo ayudarte a dimensionar esfuerzo realista. Escríbeme en [/contacto](/contacto).