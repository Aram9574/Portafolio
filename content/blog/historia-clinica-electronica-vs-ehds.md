---
slug: historia-clinica-electronica-vs-ehds
title: "Historia Clínica Electrónica nacional vs EHDS: ¿Es compatible el SNS con lo que viene?"
description: "HCDSNS lleva años sin despegar. EHDS exige interoperabilidad real en 2025. Qué CCAA están listas, qué gaps tienen los HIS comerciales y qué cambiar ya."
date: "2026-01-26"
readingTime: "6 min"
tags: ["EHDS", "SNS", "Historia Clínica Electrónica"]
---

La Historia Clínica Digital del Sistema Nacional de Salud (HCDSNS) nació en 2013 como la promesa de compartir episodios asistenciales entre comunidades autónomas. Trece años después, el acceso sigue siendo parcial, los conjuntos mínimos de datos no cubren especialidades clave y la experiencia de uso en consulta es lo suficientemente mala como para que muchos clínicos sigan pidiendo informes en papel. Mientras tanto, el European Health Data Space (EHDS) exige que en 2025 España tenga operativo un punto de acceso nacional compatible con MyHealth@EU, el portal de interoperabilidad transfronteriza de la UE. La pregunta no es retórica: ¿puede el SNS cumplir con EHDS sin resolver primero lo que no funciona en casa?

He trabajado con sistemas de historia clínica en urgencias y planta durante seis años y medio. He visto cómo un médico de familia en Madrid no puede abrir el informe de alta de un paciente atendido en Valencia tres días antes. He visto cómo un urgenciólogo en Cataluña recibe PDFs escaneados en lugar de datos estructurados. La tecnología existe. El problema es político, de gobierno de datos y de incentivos mal alineados entre proveedores de software.

## Estado real de HCDSNS: funciona, pero no como debería

HCDSNS conecta 17 comunidades autónomas y dos ciudades autónomas a través de nodos regionales que exponen conjuntos mínimos de datos según estándares HL7 CDA. En teoría, un clínico con tarjeta sanitaria puede consultar episodios de atención primaria, urgencias, informes de alta, receta electrónica y resultados de laboratorio de cualquier paciente atendido en otra CCAA. En la práctica, el sistema tiene tres problemas estructurales.

Primero, cobertura desigual. Comunidades como Andalucía, Cataluña, Madrid y País Vasco tienen sus nodos operativos desde 2015 y exponen datos de forma consistente. Otras regiones tienen implementaciones parciales: publican informes de alta pero no pruebas de laboratorio, o comparten urgencias pero no atención primaria. Según datos del Ministerio de Sanidad de 2023, solo el 68% de los episodios asistenciales generados en el SNS están teóricamente accesibles vía HCDSNS. De ese 68%, menos del 40% llega en formato estructurado; el resto son PDFs escaneados o CDA narrativos sin codificación SNOMED CT.

Segundo, latencia y experiencia de usuario. He cronometrado tiempos de respuesta de HCDSNS en consultas reales: entre 8 y 15 segundos para recuperar un informe de alta de otra comunidad. En urgencias, donde cada segundo cuenta, eso es inaceptable. Además, la interfaz de acceso suele ser una ventana emergente fuera del flujo de trabajo del HIS local, lo que obliga al clínico a salir del contexto de atención, autenticarse de nuevo en algunos casos y navegar por una estructura de datos diferente. La fricción cognitiva es alta.

Tercero, falta de gobierno de datos claro. No hay un organismo con capacidad ejecutiva que pueda obligar a las CCAA a cumplir estándares técnicos ni sancionar incumplimientos. El Ministerio de Sanidad coordina, pero no ejecuta. El resultado es que cada comunidad adapta HCDSNS a su ritmo y según su interpretación de las especificaciones. Cuando un CIO autonómico decide priorizar otros proyectos, HCDSNS se queda en segundo plano.

## EHDS y MyHealth@EU: qué exigen realmente

El Reglamento EHDS, aprobado en marzo de 2024 y aplicable desde 2025, establece que cada Estado miembro debe tener un punto de acceso nacional (National Contact Point for eHealth, NCPeH) compatible con MyHealth@EU. Este portal debe permitir a ciudadanos europeos acceder a su historial clínico electrónico desde cualquier país de la UE y a profesionales sanitarios consultar datos de pacientes extranjeros con consentimiento explícito.

MyHealth@EU no es un sistema centralizado. Es una red de nodos nacionales que intercambian datos mediante el perfil IHE XCA (Cross-Community Access) y HL7 FHIR en algunos casos. Los datos compartidos incluyen resumen de historia clínica (Patient Summary), receta electrónica (ePrescription), informes de imagen (Diagnostic Reports) y, a partir de 2026, datos de laboratorio y genómica. La infraestructura técnica es similar a HCDSNS, pero con tres diferencias clave.

Primera, estándares obligatorios. EHDS exige que los datos se codifiquen con SNOMED CT para diagnósticos, LOINC para laboratorio y ATC para medicamentos. No admite PDFs narrativos como sustituto. Segunda, arquitectura FHIR obligatoria a partir de 2027. Aunque el IHE XCA sigue operativo, el plan es migrar todo el intercambio a FHIR R4 o superior. Tercera, auditoría y trazabilidad obligatorias. Cada acceso transfronterizo debe quedar registrado con timestamp, identificador del profesional, propósito de acceso y consentimiento del paciente. Los registros deben conservarse al menos cinco años y ser auditables por la Agencia Española de Protección de Datos.

España ya tiene operativo su NCPeH desde 2019 para ePrescription y Patient Summary. Pero el Patient Summary español se genera a partir de datos de HCDSNS, con todas sus limitaciones. Si HCDSNS solo cubre el 68% de episodios y menos del 40% está estructurado, el Patient Summary que exportamos a Europa es incompleto por diseño.

## Qué CCAA están mejor posicionadas

He revisado contratos públicos, informes técnicos del Ministerio y conversaciones con responsables de TIC en hospitales. Tres comunidades destacan por encima del resto.

**Cataluña** tiene HC3, un sistema propio basado en estándares abiertos que ya exporta datos en FHIR R4 para algunos casos de uso internos. CatSalut ha invertido desde 2018 en arquitectura API-first y tiene capacidad técnica para conectar con MyHealth@EU sin refactorizar su núcleo. El problema es gobernanza: CatSalut gestiona atención primaria, pero los hospitales tienen sistemas propios (SAP, Dedalus, Cerner) que no siempre exponen APIs FHIR. La integración existe, pero es frágil.

**País Vasco** tiene Osabide, un sistema integrado que cubre atención primaria, especializada y farmacia con una única base de datos. La arquitectura es monolítica, pero Osakidetza ha desarrollado capas de interoperabilidad FHIR desde 2020. El despliegue es más lento que en Cataluña, pero la integración es más sólida porque no depende de vendors externos para el core clínico.

**Andalucía** tiene Diraya, con cobertura completa en atención primaria y urgencias, pero hospitales de tercer nivel siguen usando Selene (Oracle Health). La estrategia del Servicio Andaluz de Salud es pragmática: mantener Diraya como repositorio central y extraer datos de Selene mediante conectores HL7 V2 y FHIR. Funciona, pero añade latencia y puntos de fallo. Andalucía cumple con HCDSNS, pero necesita inversión en middleware para cumplir con EHDS sin fricciones.

El resto de comunidades tienen gaps significativos. Madrid tiene Horus AP y Selene en hospitales, con integración parcial. Comunidad Valenciana tiene Abucasis, pero la cobertura hospitalaria es irregular. Galicia tiene IANUS, robusto en atención primaria pero con baja penetración en especializada.

## Qué deben cambiar los HIS comerciales

Los sistemas hospitalarios de información (HIS) que dominan el mercado español —SAP Health, Oracle Health (Cerner), Dedalus, Agfa HealthCare— fueron diseñados antes de que FHIR existiera. Todos han añadido módulos FHIR en los últimos cinco años, pero la implementación es irregular.

He auditado integraciones FHIR en tres hospitales entre 2022 y 2024. El patrón es siempre el mismo: el vendor expone una API FHIR que cumple formalmente con la especificación, pero los recursos FHIR se generan on-the-fly desde tablas propietarias sin codificación SNOMED CT nativa. El resultado son datos sintácticamente correctos pero semánticamente pobres. Un diagnóstico en FHIR Condition tiene un code, pero ese code es un mapeo automático desde CIE-10-ES que no siempre tiene equivalente SNOMED CT unívoco.

Los CIOs del SNS deben exigir a sus proveedores tres cambios inmediatos.

Primero, almacenamiento nativo en SNOMED CT, LOINC y ATC. No vale mapear en tiempo de exportación. La codificación debe ocurrir en el momento de captura clínica, con interfaces de usuario que sugieran códigos válidos mientras el médico escribe. Esto requiere refactorizar módulos de historia clínica, pero es la única forma de garantizar calidad semántica.

Segundo, APIs FHIR R4 como interfaz primario, no como añadido. El HIS debe exponer todos los recursos clínicos relevantes (Patient, Encounter, Condition, Observation, MedicationStatement, DiagnosticReport) mediante FHIR con autenticación OAuth2 y capacidad de responder en menos de 500 ms para consultas típicas. Esto implica rediseñar la capa de persistencia para que FHIR no sea una vista sino una representación equivalente de los datos internos.

Tercero, auditoría y consentimiento integrados. El HIS debe registrar cada acceso FHIR con los metadatos exigidos por EHDS y permitir que el paciente consulte quién ha accedido a sus datos y con qué propósito. Oracle Health y Epic ya tienen esto en EEUU. En España, ningún HIS lo tiene desplegado de forma estándar.

## ¿Te ha resultado útil?

Si estás diseñando la estrategia de interoperabilidad de tu comunidad autónoma, evaluando proveedores HIS o necesitas mapear el gap entre tu infraestructura actual y los requisitos de EHDS, hablemos. He trabajado con sistemas clínicos reales y sé dónde están los cuellos de botella técnicos y políticos. [Escríbeme](/contacto) y lo analizamos.