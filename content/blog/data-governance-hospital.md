---
slug: data-governance-hospital
title: "Data governance hospitalaria antes de tocar IA: la base que no se puede saltar"
description: "Roles, políticas y catálogo de datos: por qué la gobernanza clínica no es opcional antes de entrenar modelos o licitar plataformas de IA en hospitales."
date: "2025-12-15"
readingTime: "7 min"
tags: ["Data governance", "RGPD", "Salud Digital"]
---

He visto licitaciones de soluciones de IA diagnóstica que exigen integración con HIS, cruce de imagen médica con resultados de laboratorio y «aprendizaje continuo del modelo». El pliego no menciona quién define qué datos se exponen, quién valida la calidad del etiquetado clínico, ni quién responde ante la AEPD cuando un paciente ejerce su derecho de oposición. La propuesta técnica brilla, el piloto funciona, pero seis meses después el proyecto está bloqueado en legal porque nadie estructuró la gobernanza de datos antes de firmar el contrato.

La IA sanitaria no falla por falta de algoritmos. Falla porque los datos clínicos están dispersos, mal documentados, sin trazabilidad de consentimiento y sin roles claros que decidan qué se puede usar, cómo y con qué garantías. Antes de entrenar un modelo, antes de licitar una plataforma, antes de hablar de MLOps, un hospital necesita data governance operativa. No un comité que se reúne trimestralmente: roles con autoridad, políticas ejecutables, catálogo de datos actualizado y auditoría continua.

## Roles: quién decide, quién ejecuta, quién responde

Un CIO hospitalario puede gestionar infraestructura, pero no tiene criterio clínico para decidir si un campo de historia clínica es esencial o accesorio en un dataset de entrenamiento. Un DPO puede interpretar el RGPD, pero no sabe si la granularidad del consentimiento es viable en urgencias. Un director de innovación puede impulsar pilotos, pero no tiene autoridad para imponer estándares de calidad de dato en todos los servicios clínicos.

La gobernanza funciona cuando hay tres roles diferenciados y coordinados:

**Chief Data Officer (CDO)**: define la arquitectura de datos del hospital, mantiene el catálogo, establece políticas de acceso y audita cumplimiento. No es el responsable de la seguridad de la red (eso es del CISO), ni del dictamen legal (eso es del DPO). Es quien coordina qué datos existen, dónde están, quién los usa y con qué calidad.

**Chief Medical Information Officer (CMIO)**: traduce las necesidades clínicas a requisitos de datos. Decide qué variables son imprescindibles para un caso de uso de IA, qué nivel de agregación es aceptable sin perder utilidad diagnóstica, y qué campos nunca se exponen fuera del entorno asistencial directo. En hospitales medianos esto puede ser un médico con descarga parcial y formación en informática clínica. En grandes, es un rol a tiempo completo con equipo.

**Data Protection Officer (DPO)**: no es un auditor que llega al final. Participa desde el diseño de cualquier sistema que toque datos de salud. Valida que el consentimiento sea específico y granular, que la base legal sea sólida, que la auditoría sea trazable. En hospitales públicos suele ser compartido con la administración regional; en privados, interno con apoyo externo.

He visto hospitales sin CDO intentar licitaciones de IA. El resultado: cada servicio clínico gestiona sus datos como quiere, no hay catálogo común, y la integración técnica se convierte en un proyecto de años porque nadie tiene autoridad transversal para imponer estándares. El DPO aparece tarde, cuando ya hay un contrato firmado y un proveedor que no cumple con minimización de datos.

## Políticas mínimas antes de tocar un modelo

Las políticas de gobernanza no son documentos para el cajón. Son reglas operativas que bloquean o habilitan proyectos. Si no están claras antes de empezar un piloto de IA, el proyecto se para en legal o en comité ético.

**Política de minimización de datos**: qué campos del HIS se pueden extraer para cada caso de uso. Ejemplo concreto: un modelo de predicción de sepsis puede necesitar constantes vitales, resultados de laboratorio y tratamiento antibiótico previo. No necesita datos sociodemográficos completos, ni historial psiquiátrico, ni notas de enfermería no estructuradas. La política define qué se extrae, quién autoriza ampliaciones y cómo se documenta.

**Política de anonimización vs. seudonimización**: cuándo es suficiente eliminar identificadores directos, cuándo hay que aplicar técnicas de k-anonimato o differential privacy. En investigación retrospectiva, la anonimización irreversible puede bastar. En sistemas de apoyo a la decisión clínica en tiempo real, hace falta seudonimización con trazabilidad. La política define técnicas, umbrales y responsables de validación.

**Política de acceso**: quién puede consultar el catálogo de datos, quién puede solicitar datasets, quién puede aprobar exportaciones fuera del entorno hospitalario. En un hospital mediano, esto puede ser un comité de datos con representación clínica, técnica y legal. En uno grande, un flujo automatizado en la plataforma de data governance con aprobaciones por roles y auditoría automática.

**Política de retención**: cuánto tiempo se conservan datasets de entrenamiento, cuándo se destruyen, cómo se documenta. Un dataset anonimizado de 2019 usado para entrenar un modelo de triaje puede tener valor investigador futuro, pero si no hay justificación específica, la retención indefinida viola minimización. La política define plazos, revisiones periódicas y procedimiento de destrucción certificada.

## Catálogo de datos: el inventario que hace viable la IA

Un catálogo de datos no es un Excel con nombres de tablas. Es un repositorio vivo que documenta qué datos clínicos existen en el hospital, dónde residen físicamente, qué estructura tienen, qué calidad presentan, quién es el responsable y qué restricciones legales aplican.

He visto hospitales con cinco sistemas legacy (HIS antiguo, RIS/PACS, laboratorio, farmacia, alertas de enfermería) que no hablan entre sí. Cada sistema tiene su modelo de datos, sus códigos propios, su lógica de identificadores. Sin catálogo unificado, cada proyecto de IA empieza con seis meses de arqueología técnica: dónde está el dato, cómo se llama aquí, qué significa ese código.

Un catálogo operativo documenta:

- **Schema técnico**: nombre de tabla, columna, tipo de dato, cardinalidad, claves foráneas.
- **Semántica clínica**: qué representa ese campo en términos médicos, qué terminología usa (SNOMED, CIE-10, LOINC), qué valores son válidos.
- **Calidad**: completitud (% registros con valor no nulo), consistencia (% registros que cumplen reglas de negocio), actualización (frecuencia de refresco).
- **Linaje**: de dónde viene ese dato, qué transformaciones ha sufrido, quién lo genera.
- **Restricciones legales**: si requiere consentimiento específico, si está sujeto a oposición del paciente, si puede salir del país.

Esto no se hace a mano. Herramientas como Collibra, Alation o Datahub automatizan el descubrimiento, pero alguien tiene que validar la semántica clínica y asignar responsables. Ese alguien es el CMIO con su equipo.

## Calidad de dato clínico: el problema que nadie ve hasta que entrenas

Un modelo de IA predictiva en urgencias necesita datos de triaje (escala Manchester), constantes vitales al ingreso, resultados de primera analítica y diagnóstico final. En teoría, todos están en el HIS. En la práctica:

- 15% de registros de triaje sin timestamp fiable porque el sistema permite registro retroactivo sin control.
- 8% de constantes vitales fuera de rango fisiológico (presión arterial 300/150) que nadie valida porque la interfaz no bloquea entrada manual.
- 22% de diagnósticos finales codificados con códigos genéricos (CIE-10 R00-R99, síntomas no clasificados) porque el médico tenía prisa y el sistema no exige especificidad.

Entrenas el modelo con eso. Performa bien en validación interna. Falla estrepitosamente en el hospital de al lado porque sus patrones de dato sucio son distintos. El problema no es el algoritmo, es que nadie midió la calidad del dato antes de empezar.

La calidad de dato clínico no se mejora con un proyecto puntual. Requiere dashboards en producción que miden completitud, consistencia y puntualidad por servicio clínico, alertas automáticas cuando un campo crítico está fuera de rango, y feedback al personal sanitario que registra. Esto es responsabilidad del CDO con supervisión del CMIO.

## Consentimiento granular: más allá del check genérico

El consentimiento informado tradicional es binario: el paciente acepta o rechaza. En IA sanitaria, eso no basta. Un paciente puede consentir que sus datos se usen para mejorar su tratamiento directo, pero no para entrenar modelos que luego se comercializan. Puede aceptar investigación interna, pero no que sus datos salgan del hospital.

El RGPD exige que el consentimiento sea específico, informado, libre e inequívoco. En la práctica, esto significa que el hospital debe ofrecer consentimiento granular: diferentes niveles de uso de datos con opt-in/opt-out independientes.

Ejemplo concreto de estructura de consentimiento:

1. **Asistencia directa**: uso de datos para diagnóstico, tratamiento, seguimiento. No requiere consentimiento adicional, es parte de la relación asistencial (base legal: interés vital + contrato).
2. **Mejora de procesos internos**: uso anonimizado para auditorías, análisis de calidad, mejora de protocolos. Puede ser interés legítimo del hospital, pero buena práctica es informar con derecho de oposición.
3. **Investigación institucional**: uso seudonimizado para estudios clínicos del hospital. Requiere consentimiento explícito con información detallada del proyecto.
4. **Desarrollo de IA**: uso para entrenar modelos que luego se despliegan en el hospital o se licencian a terceros. Requiere consentimiento específico, con información sobre quién accede, cómo se protege y qué derechos tiene el paciente.

Esto no se gestiona con un PDF firmado al ingreso. Requiere un sistema de gestión de consentimientos integrado con el HIS, que permita cambios en el tiempo, auditoría completa y bloqueo automático de acceso cuando un paciente revoca.

## Auditoría continua: no un informe anual, un tablero vivo

La auditoría de gobernanza de datos no puede ser un informe que el DPO entrega una vez al año. Tiene que ser un tablero en tiempo real que muestra:

- Quién accedió a qué datasets en los últimos 30 días, con qué propósito declarado.
- Qué exportaciones de datos se realizaron fuera del entorno hospitalario, quién las autorizó, qué controles de seguridad se aplicaron.
- Qué proyectos de IA están activos, qué datos consumen, qué validaciones de calidad pasaron, qué aprobaciones éticas tienen.
- Qué solicitudes de ejercicio de derechos RGPD (acceso, rectificación, supresión, oposición) se recibieron, cuánto tardaron en resolverse, si hubo incidencias.

Esto requiere integración técnica. Los logs de acceso del HIS, del data lake, del entorno de analítica, se centralizan en una plataforma SIEM sanitaria. Se establecen alertas automáticas ante patrones anómalos (acceso masivo fuera de horario, exportación de datos sin aprobación previa, uso de datasets caducados). El CDO y el DPO tienen acceso permanente; el comité de dirección recibe un resumen mensual.

He visto hospitales que detectaron un proyecto no autorizado de análisis predictivo porque un servicio clínico exportó 50.000 historias completas a un portátil personal. La alerta saltó en tiempo real, se bloqueó el acceso, se investigó y se cerró con formación obligatoria. Sin auditoría continua, ese dataset seguiría en un disco duro sin cifrar.

## ¿Te ha resultado útil?

Si estás diseñando la gobernanza de datos de tu hospital antes de lanzar proyectos de IA, o necesitas auditar lo que ya tienes funcionando, hablemos. En [/contacto](/contacto) puedes agendar una conversación sobre tu caso concreto: qué roles necesitas, qué políticas priorizar, cómo estructurar el catálogo sin bloquear la operación clínica.