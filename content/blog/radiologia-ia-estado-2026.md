---
slug: radiologia-ia-estado-2026
title: "IA en radiología 2026: qué productos con CE funcionan, cuáles son marketing"
description: "Análisis crítico de soluciones de IA radiológica con marcado CE: evidencia real, productos en piloto perpetuo y vaporware con logo europeo."
date: "2026-05-04"
readingTime: "7 min"
tags: ["Radiología", "IA sanitaria", "Marcado CE"]
---

He revisado ofertas comerciales, bases de datos EUDAMED, literatura publicada y conversaciones con jefes de radiología de seis hospitales españoles en los últimos 18 meses. La conclusión es clara: el mercado de IA en radiología está polarizado entre productos que funcionan en producción clínica real y soluciones que llevan tres años "en fase piloto" sin pasar nunca a despliegue estable.

El problema no es técnico. Es comercial, regulatorio y de expectativas mal gestionadas. Este post es un mapa práctico para quien tiene que decidir qué comprar, qué pilotar y qué descartar directamente.

## Productos con CE, RWE publicado y despliegue probado

Tres categorías concentran la mayor parte de soluciones consolidadas: detección de nódulos pulmonares en TC, priorización de hemorragias intracraneales en TC craneal y detección de fracturas en radiografía simple.

**Nódulos pulmonares**: Aidence (Veye Lung Nodules), Oxipit (ChestLink) y las soluciones de GE HealthCare (Critical Care Suite para tórax) tienen marcado CE clase IIb desde 2021-2022, estudios de sensibilidad/especificidad publicados en revistas indexadas y despliegues en más de 50 centros europeos cada una. He visto Aidence funcionando en producción en hospitales españoles: reduce falsos negativos en screening de cáncer de pulmón, no sustituye al radiólogo pero sí mejora detección en lecturas rápidas de urgencias nocturnas. El valor clínico es medible: aumento de tasa de detección de nódulos <6mm entre 8-12% según estudios retrospectivos multicéntricos.

**Hemorragia intracraneal**: Aidoc (aiOS para IC bleed), Qure.ai (qER), Brainomix (e-Stroke Suite para hemorragia) tienen CE clase IIb, integración HL7/DICOM probada y referencias en hospitales del NHS, Assistance Publique – Hôpitaux de Paris y sistemas alemanes. La utilidad clínica aquí es priorización de worklist: TC craneal con sospecha de hemorragia salta al inicio de la cola de lectura. En hospitales con guardias de radiología remota, esto reduce tiempo puerta-diagnóstico en ictus hemorrágico entre 15-30 minutos según literatura. No todos los jefes de radiología que he consultado consideran que el ROI justifique el coste (precios típicos 15.000-40.000€/año según volumen), pero reconocen que la tecnología funciona técnicamente.

**Fracturas en radiografía**: Imagen (OsteoDetect para fracturas de muñeca), Gleamer (BoneView para múltiples localizaciones) y las soluciones de Behold.ai tienen marcado CE y despliegues reales en urgencias. El caso de uso es doble: segunda lectura para confirmar hallazgos del médico de urgencias y priorización de estudios con fractura detectada. La sensibilidad reportada ronda 90-95% para fracturas evidentes, cae a 70-80% en fracturas sutiles (escafoides, costillas). He visto casos donde el algoritmo no detecta una fractura que un radiólogo sí ve en 10 segundos, pero también casos donde marca una fisura que el urgenciólogo había pasado por alto.

## Productos con CE pero sin evidencia de despliegue estable

Aquí entran decenas de soluciones con marcado CE válido en EUDAMED pero sin publicaciones de validación externa, sin referencias hospitalarias verificables o con pilotos que nunca terminan de arrancar.

Categorías típicas: detección de tuberculosis en radiografía de tórax (mercado dirigido a países de renta baja, pero comercializado en Europa sin casos de uso claros), cuantificación automática de enfisema pulmonar en TC (utilidad clínica cuestionable fuera de ensayos de EPOC), detección de cardiomegalia en radiografía simple (sensibilidad insuficiente para cambiar manejo clínico).

El patrón común: el producto tiene CE porque cumplió requisitos técnicos del MDR, pero no resuelve un problema clínico urgente o no se integra bien con el flujo de trabajo real. He visto tres hospitales pilotar soluciones de detección de neumotórax en radiografía portátil: en los tres casos, el piloto terminó sin contratación porque la tasa de falsos positivos generaba más trabajo de revisión del que ahorraba.

La trampa regulatoria: CE clase I o IIa obtenido mediante autocertificación con un Organismo Notificado que no auditó clínicamente el producto. El marcado existe legalmente, pero no garantiza que el algoritmo funcione en condiciones de producción. Revisa siempre la clase de dispositivo y si hay estudios de validación independientes.

## Vaporware con logo europeo

Esta categoría es la más frustrante: empresas que anuncian "próximo marcado CE", "en proceso de certificación MDR" o directamente mienten sobre el estado regulatorio.

Señales de alarma que he identificado:

- Web con sección "Regulatory compliance" que menciona ISO 13485 pero no especifica número de certificado CE ni Organismo Notificado.
- Demos impresionantes en congresos, pero sin acceso a la base de datos EUDAMED cuando buscas el producto.
- Referencias de "hospitales piloto" que, cuando contactas directamente, confirman que probaron el producto seis meses y no lo contrataron.
- Soluciones que prometen "detección de 50 patologías en radiografía de tórax" pero no publican matriz de confusión ni curvas ROC por patología.

He visto casos extremos: startup que mostró resultados de "validación clínica en hospital español" que resultó ser un estudio retrospectivo con 200 imágenes seleccionadas por la propia empresa, sin protocolo de investigación aprobado por CEI ni consentimiento informado documentado.

El problema no es solo ético. Es operativo: un director de innovación que aprueba piloto con vaporware pierde credibilidad interna, quema presupuesto y genera desconfianza hacia IA real que sí funciona.

## Criterios prácticos para evaluar una oferta

Cuando un vendor presenta una solución de IA radiológica, estas son las preguntas que hago antes de considerar piloto:

**Regulatorio**: Número de certificado CE, clase de dispositivo, Organismo Notificado que lo emitió. Si es clase IIa o superior, pide el resumen de evaluación clínica (no pueden negarse si tienen CE legítimo). Busca el producto en EUDAMED: si no aparece o la fecha de certificación es posterior a la que dicen, descarta.

**Evidencia clínica**: Estudios de validación externa publicados en revistas con peer review. No aceptes "white papers" ni "estudios internos". Pide matriz de confusión completa, curvas ROC con intervalos de confianza y análisis de subgrupos (por edad, sexo, fabricante de equipo radiológico). Si solo muestran AUC global sin desglose, sospecha.

**Integración técnica**: ¿Se integra mediante DICOM envío automático desde PACS o requiere subida manual? ¿Devuelve resultados como DICOM SR, HL7 o PDF? ¿Funciona on-premise o solo cloud? Si es cloud, ¿dónde están los servidores y bajo qué acuerdo de tratamiento de datos? He visto pilotos bloqueados durante meses porque el producto solo funcionaba con transferencia cloud a servidores fuera de la UE sin BAA firmado.

**Referencias verificables**: Hospitales donde está en producción (no piloto) con contacto directo del jefe de radiología o CISO dispuesto a hablar. Si el vendor se niega a dar contactos porque "acuerdos de confidencialidad", probablemente no tiene despliegues reales.

## Qué productos considerar en 2026

Para compra directa sin piloto previo (porque hay evidencia suficiente): Aidence para nódulos pulmonares si haces screening estructurado de cáncer de pulmón, Aidoc o Qure.ai para priorización de hemorragia intracraneal si tienes más de 8.000 TC craneales/año, Gleamer para fracturas si tu urgencias atiende >30.000 pacientes/año con radiografías de alta demanda.

Para piloto controlado de 3-6 meses: soluciones de cuantificación en RM cerebral (volumetría de hipocampo en deterioro cognitivo, seguimiento de esclerosis múltiple), algoritmos de detección de derrame pleural o edema pulmonar en radiografía portátil de UCI, herramientas de priorización de hallazgos incidentales en TC abdominopélvico.

Descarta directamente: cualquier solución sin CE válido, productos que prometen "diagnóstico automático" sin supervisión radiológica, empresas que no tienen equipo clínico en plantilla ni asesores médicos identificables.

## ¿Te ha resultado útil?

Si estás evaluando proveedores de IA radiológica, preparando un pliego de licitación o necesitas auditoría técnica de una oferta comercial antes de decidir, podemos hablar. Reviso documentación regulatoria, analizo evidencia clínica y te doy criterio fundamentado sobre qué productos tienen sentido para tu caso concreto. Escríbeme en [/contacto](/contacto).