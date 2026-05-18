---
slug: comprador-hospitalario-que-exigir-proveedor-ia
title: "Las 10 preguntas que todo comprador hospitalario debería exigir a un proveedor de IA"
description: "Checklist técnico-clínico para evaluar proveedores de IA sanitaria: validación, drift, SLA clínico, auditoría regulatoria y plan de descontinuación."
date: "2026-05-18"
readingTime: "7 min"
tags: ["Contratación", "Compra pública", "Implementación"]
---

He revisado decenas de pliegos de contratación de soluciones de IA en hospitales y CCAA. La mayoría incluyen apartados estándar sobre disponibilidad, tiempo de respuesta técnico y cumplimiento regulatorio genérico. Casi ninguno pregunta qué pasa cuando el modelo empieza a fallar por cambio de protocolo clínico, cómo se gestiona un incidente donde la IA sugiere una dosis incorrecta o quién asume responsabilidad si el proveedor descontinúa el producto en dos años.

Las compras hospitalarias no pueden tratar una solución de Clinical AI como si fuera un sistema de gestión documental. La IA médica toma decisiones o las informa, se degrada con el tiempo y depende de cadenas de suministro de datos que cambian. Este checklist no sustituye la evaluación técnica profunda ni el análisis regulatorio, pero marca la línea entre un pliego funcional y uno que protege al hospital.

## 1. Validación externa y evidencia clínica independiente

La primera pregunta es directa: ¿tiene el modelo validación externa publicada en revista peer-reviewed? No vale el white paper corporativo ni el estudio piloto con 50 pacientes del propio proveedor. Busco estudios multicéntricos, retrospectivos mínimo, mejor prospectivos, donde cohortes de otros hospitales hayan testeado el sistema con sus propios flujos y protocolos.

Si el proveedor responde que la validación está en proceso o se publicará próximamente, el contrato debe incluir compromiso de entrega con fecha límite. Sin evidencia externa, la evaluación de desempeño clínico recae íntegramente en el hospital comprador, lo cual implica un coste de validación interna que debe facturarse o descontarse del precio.

## 2. Plan de monitorización de drift y reentrenamiento

Los modelos de IA se degradan. El drift puede venir por cambio demográfico en la población atendida, actualización de protocolos clínicos, modificación del sistema de información o simple obsolescencia de patrones. La pregunta clave no es si el proveedor monitoriza el drift, sino cómo lo hace y con qué frecuencia informa al hospital.

Exijo ver el dashboard de métricas de desempeño que el proveedor usará: AUC-ROC, sensibilidad, especificidad, calibración, análisis de subgrupos. Quiero saber cada cuánto se evalúan estas métricas, qué umbrales activan una alerta de degradación y cuál es el procedimiento de reentrenamiento. Si el reentrenamiento requiere datos del hospital, el contrato debe especificar formato, frecuencia de entrega, protección de datos y si hay coste adicional por cada ciclo.

He visto contratos donde el proveedor se compromete a mantener el modelo actualizado, pero no define qué significa actualizado ni establece SLA de restauración de desempeño. Eso no sirve.

## 3. Gestión de incidentes clínicos: protocolo y responsabilidades

¿Qué pasa cuando la IA falla y el fallo tiene consecuencia clínica? Necesito un protocolo de gestión de incidentes que distinga entre error técnico (el sistema se cae) y error clínico (la predicción es incorrecta y se actúa sobre ella). El proveedor debe tener un formulario de reporte de incidente clínico, un canal prioritario de comunicación (no vale abrir ticket en plataforma genérica) y un compromiso de análisis root cause en plazo definido.

El contrato debe especificar quién investiga, quién informa a pacientes si procede, cómo se documenta el incidente en la historia clínica y si el proveedor asume algún tipo de responsabilidad. En la práctica, la mayoría de proveedores limitan responsabilidad al máximo legal, pero al menos debe quedar claro el procedimiento. Si el hospital descubre un patrón de fallos y el proveedor no actúa, debe haber cláusula de suspensión del servicio sin penalización.

## 4. SLA clínico vs. SLA técnico

Un SLA técnico mide disponibilidad del sistema, tiempo de respuesta de API, latencia. Un SLA clínico mide si el modelo mantiene sensibilidad, especificidad y valor predictivo dentro de umbrales acordados. La mayoría de contratos solo incluyen el primero. Necesito ambos.

Para sistemas de decisión clínica, propongo incluir en contrato un SLA clínico que establezca revisión trimestral de métricas de desempeño con datos reales del hospital. Si las métricas caen por debajo del umbral durante dos revisiones consecutivas, el hospital puede exigir reentrenamiento sin coste adicional o, si no se resuelve, rescindir contrato sin penalización.

He visto hospitales que descubren seis meses después de la implementación que el modelo predice peor que el protocolo estándar, pero el contrato no les permite salir sin pagar la totalidad del período comprometido. Eso no puede pasar.

## 5. Auditoría regulatoria: CE y EU AI Act

El marcado CE bajo MDR o IVDR es obligatorio, pero no suficiente. Pido copia del certificado CE, identificación del organismo notificado, declaración de conformidad y resumen del informe de evaluación clínica. Si el sistema es SaMD clase IIa o superior, necesito ver el plan de vigilancia post-mercado.

Con el EU AI Act ya en vigor para sistemas de alto riesgo (la mayoría de IA diagnóstica o terapéutica lo es), el proveedor debe demostrar cumplimiento de requisitos de transparencia, supervisión humana, robustez técnica y gestión de datos. Si el sistema está exento por interpretación del proveedor, necesito ver el análisis jurídico que lo justifica. No acepto que el proveedor diga simplemente que cumple: quiero documentación auditable.

El contrato debe incluir cláusula de actualización regulatoria: si cambia la normativa y el producto deja de cumplir, el proveedor actualiza sin coste adicional o el hospital puede rescindir.

## 6. Cadena de suministro de datos: origen, calidad, sesgos

¿Con qué datos se entrenó el modelo? ¿De qué hospitales, de qué países, de qué período temporal? ¿Qué distribución demográfica, de patologías, de severidad? Si el modelo se entrenó con datos de hospitales americanos y lo vamos a usar en atención primaria española, el riesgo de sesgo y baja generalización es alto.

Pido al proveedor documentación sobre origen de datos de entrenamiento, proceso de limpieza, criterios de exclusión, análisis de sesgos por edad, sexo, etnia (si aplica), comorbilidades. Si el proveedor no puede o no quiere dar esa información por confidencialidad, el hospital debe exigir validación interna previa a despliegue y periodo de prueba sin compromiso.

He encontrado proveedores que entrenan modelos con datasets públicos internacionales (MIMIC, eICU) pero los venden para uso en contextos clínicos completamente distintos sin validación específica. Eso requiere, como mínimo, estudio piloto financiado por el proveedor antes de firma de contrato definitivo.

## 7. Plan de descontinuación del producto

¿Qué pasa si el proveedor decide discontinuar el producto, se fusiona con otra empresa, quiebra o simplemente deja de dar soporte? Necesito un plan de descontinuación en contrato que especifique preaviso mínimo (propongo 12 meses), entrega de documentación técnica, asistencia en migración a alternativa y, si es posible, código fuente bajo custodia.

En sectores no críticos esto se gestiona con menos rigor, pero en sanidad un sistema de IA puede estar integrado en flujos de decisión clínica diaria. Si desaparece de golpe, el hospital tiene que revertir a proceso manual o buscar alternativa urgente, lo cual tiene coste operativo y riesgo asistencial.

La cláusula de descontinuación debe incluir también obligación de mantener acceso a datos históricos generados por el sistema (logs de predicciones, auditorías) durante un período mínimo tras cese del servicio, para cumplir con trazabilidad regulatoria.

## 8. Interoperabilidad y dependencia tecnológica

¿El sistema funciona solo con un EMR específico, con un formato de dato propietario, con infraestructura cloud de un único proveedor? ¿Usa estándares HL7 FHIR, DICOM, SNOMED CT o formatos cerrados? La dependencia tecnológica es coste futuro: si el hospital cambia de EMR o de proveedor cloud, ¿puede migrar la solución de IA o tiene que recomprar?

Pido al proveedor documentación técnica de integraciones, APIs disponibles, capacidad de exportación de datos y configuraciones. Si la solución requiere hardware específico (GPUs, appliances), necesito saber coste de mantenimiento, ciclo de obsolescencia y plan de actualización.

He visto hospitales que contratan una solución pensando que es plug-and-play y luego descubren que requiere middleware custom, adaptaciones del EMR o incluso cambio de workflows clínicos que no estaban previstos. Eso debe estar claro en fase de licitación, no después.

## 9. Protección de datos y soberanía

¿Dónde se procesan los datos del hospital? ¿En cloud europeo, americano, del proveedor, del hospital? ¿Se almacenan datos personales de salud en servidores del proveedor o solo se procesan en tiempo real sin persistencia? ¿Hay transferencias internacionales de datos? Si las hay, ¿bajo qué mecanismo legal (cláusulas contractuales tipo, Privacy Shield 2.0 si se aprueba)?

El RGPD es exigente con datos de salud. El proveedor debe actuar como encargado del tratamiento con contrato específico, realizar evaluación de impacto si procede, garantizar medidas de seguridad técnicas y organizativas, y permitir auditorías. Si el proveedor usa subencargados (proveedores cloud, servicios de anotación), todos deben estar identificados y autorizados.

Además, hay que considerar la Ley Orgánica de Protección de Datos española y normativa autonómica si la hay. No vale un anexo genérico de protección de datos: necesito ver contrato de encargado adaptado al caso concreto, firmado antes de inicio de tratamiento de datos.

## 10. Coste total de propiedad y modelo de pricing

El precio de licencia es solo una parte. Necesito entender coste de implantación, formación, integración técnica, mantenimiento anual, actualizaciones, soporte, reentrenamiento, almacenamiento de datos si procede. ¿El modelo de pricing es por usuario, por predicción, por módulo hospitalario, flat fee anual?

Pido al proveedor desglose detallado de costes en los primeros tres años, incluyendo escenarios de crecimiento (si el hospital aumenta volumen de pacientes o extiende la solución a más servicios). He visto licitaciones donde el proveedor gana con precio inicial bajo, pero luego cada actualización, cada reentrenamiento, cada nuevo módulo tiene coste adicional que no estaba previsto.

El contrato debe especificar qué servicios están incluidos en la cuota base y cuáles son opcionales. Y debe haber cláusula de revisión de precio ligada a inflación o índice objetivo, no a discreción del proveedor.

| Pregunta | Documentación que debe aportar el proveedor | Cláusula contractual crítica |
|----------|---------------------------------------------|------------------------------|
| Validación externa | Publicaciones peer-reviewed, estudios multicéntricos | Compromiso de entrega si validación en curso |
| Monitorización de drift | Dashboard de métricas, protocolo de reentrenamiento | SLA de restauración de desempeño |
| Gestión de incidentes | Protocolo de reporte, análisis root cause | Canal prioritario, plazo de respuesta |
| SLA clínico | Umbrales de sensibilidad/especificidad acordados | Revisión trimestral, opción de rescisión |
| Auditoría regulatoria | Certificado CE, declaración de conformidad EU AI Act | Actualización sin coste si cambia normativa |
| Datos de entrenamiento | Origen, demografía, análisis de sesgos | Validación interna previa si datos no representativos |
| Plan de descontinuación | Preaviso 12 meses, entrega de documentación | Acceso a logs históricos post-cese |
| Interoperabilidad | APIs, estándares (FHIR, DICOM), dependencias tech | Capacidad de migración sin recompra |
| Protección de datos | Contrato de encargado, ubicación de servidores | RGPD, evaluación de impacto, auditorías |
| Coste total | Desglose 3 años, modelo de pricing | Revisión de precio objetiva, servicios incluidos |

## ¿Te ha resultado útil?

Si estás preparando un pliego de contratación de IA clínica, evaluando proveedores para un hospital o asesorando en compra pública sanitaria, podemos revisar juntos el caso concreto. He trabajado con direcciones de innovación y consultoras en evaluación técnica y regulatoria de estas soluciones. Hablamos en [/contacto](/contacto).