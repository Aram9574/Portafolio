---
slug: licitaciones-publicas-ia-sanidad
title: "Cómo se gana una licitación pública de IA sanitaria en España: desmontando el pliego técnico"
description: "Estructura de pliegos públicos de IA sanitaria, criterios técnicos recurrentes y cómo integrar EU AI Act, MDR y EHDS en la memoria técnica para ganar licitaciones."
date: "2026-04-20"
readingTime: "7 min"
tags: ["Licitaciones públicas", "Administración pública", "EU AI Act"]
---

La compra pública sanitaria en España mueve 20.000 millones de euros al año. El mercado de IA en salud crece al 40% anual. Pero ganar una licitación de IA sanitaria no es solo tener buen producto: es entender cómo se estructuran los pliegos, qué buscan los órganos de contratación y cómo traducir cumplimiento regulatorio a puntos en la mesa de valoración.

He revisado decenas de pliegos del Ministerio de Sanidad, Servicio Andaluz de Salud, Osakidetza, ICS catalán. Los patrones se repiten. Los errores también. Este post desmonta la anatomía de un pliego técnico de IA sanitaria y muestra dónde se gana o se pierde antes de enviar la oferta.

## Estructura estándar de un pliego de IA sanitaria

Los pliegos públicos de tecnología sanitaria en España siguen modelo LCSP (Ley 9/2017). La estructura técnica suele dividirse en tres bloques con peso diferenciado:

**Objeto del contrato (10-15% peso)**: descripción funcional del sistema de IA, casos de uso clínicos esperados, interoperabilidad mínima exigida (HL7 FHIR, SNOMED CT, CIE-10), volumetría estimada de datos y usuarios. Aquí no se puntúa: es requisito de solvencia. Si tu propuesta no cubre el objeto técnico mínimo, queda fuera antes de valoración.

**Criterios evaluables mediante juicio de valor (50-60% peso)**: memoria técnica, arquitectura del sistema, explicabilidad del modelo, plan de implementación, capacitación de usuarios, soporte post-implantación. Este bloque es donde se diferencia una oferta competitiva de una mediocre. Las CCAA piden explícitamente: diagrama de flujo clínico del modelo, métricas de validación clínica (sensibilidad, especificidad, AUC-ROC), estrategia de monitorización continua, procedimiento de gestión de alertas. Si no tienes validación clínica prospectiva con datos españoles, empiezas con desventaja.

**Criterios evaluables mediante fórmula (30-40% peso)**: precio, plazos de entrega, garantías ampliadas, SLA de disponibilidad. Aquí la oferta económica no siempre es lineal. Muchos pliegos usan fórmula inversa proporcional: la oferta más baja no obtiene 100 puntos automáticamente si el precio es anormalmente bajo y obliga a justificación de viabilidad.

Un pliego típico de sistema de IA para diagnóstico radiológico en un hospital terciario tiene presupuesto base licitación entre 800.000 y 2 millones de euros (4 años, soporte incluido). El peso de la memoria técnica en estos casos suele rondar 55-60 puntos sobre 100.

## Criterios técnicos recurrentes que aparecen en todos los pliegos

He visto estos criterios en más del 80% de licitaciones de IA sanitaria en Ministerio y CCAA desde 2023:

**Interoperabilidad con HIS/RIS/PACS existentes**: obligatorio demostrar integración con sistemas legacy (mayoritariamente SAP ISH-Med, Dedalus, Cerner). Se puntúa positivamente si la integración no requiere middleware adicional ni desarrollo custom. Si tu solución solo funciona standalone, pierdes 10-15 puntos aquí.

**Cumplimiento EU AI Act (Reglamento 2024/1689)**: todos los pliegos publicados desde julio 2024 exigen declaración de conformidad con AI Act. Los sistemas de IA en diagnóstico se clasifican como alto riesgo (Anexo III, punto 5.b). Esto implica: dataset de entrenamiento documentado con trazabilidad, sistema de gestión de riesgos según ISO 14971, registro en base de datos europea de sistemas de alto riesgo, documentación técnica según Anexo IV. Si no tienes esto preparado antes de licitar, vas tarde. La mera declaración de intención no puntúa.

**Marcado CE como producto sanitario (MDR 2017/745)**: la mayoría de IA diagnóstica entra en clase IIa o IIb según regla 11 del Anexo VIII MDR. El pliego exige certificado CE emitido por organismo notificado europeo. Las autocertificaciones de clase I no valen aquí. Osakidetza y SAS rechazan ofertas sin CE válido en fase de apertura de sobres.

**Plan de integración con European Health Data Space**: desde 2025, los pliegos de digitalización sanitaria (especialmente los financiados con fondos Next Generation EU) incluyen criterio de compatibilidad con EHDS. Esto significa: capacidad de exportar datos en formato HL7 FHIR R4, metadatos según estándar SNOMED CT, procedimiento de anonimización según RGPD artículo 89. Se puntúa positivamente si el sistema ya implementa MyHealth@EU (red de intercambio transfronterizo).

**Explicabilidad clínica del modelo**: no basta con decir "usamos SHAP values". Los comités de valoración incluyen médicos del servicio contratante. Quieren ver: capturas de pantalla de interfaz clínica mostrando cómo se explica la predicción al médico, ejemplos de casos reales con mapas de atención (grad-CAM en imagen, feature importance en tabular), protocolo de actuación cuando el modelo da baja confianza. He visto propuestas técnicamente sólidas perder 20 puntos porque la explicación era para data scientists, no para urgenciólogos a las 3 AM.

## Cómo encajar cumplimiento regulatorio en la memoria técnica

La tentación es copiar-pegar artículos del AI Act en un apartado de cumplimiento normativo. Error. Los evaluadores buscan evidencia operativa, no transcripción legal.

**Apartado de arquitectura técnica**: incluye diagrama mostrando dónde se ejecuta el modelo (on-premise / nube europea / edge), flujo de datos desde ingesta hasta predicción, puntos de logging para auditoría AI Act (artículo 12). Si usas nube, especifica región (las CCAA exigen datos en territorio EU, muchas prefieren España). Si el modelo se entrena con datos del propio hospital, describe pipeline de MLOps y cómo se garantiza reproducibilidad.

**Apartado de validación clínica**: tabla con métricas de rendimiento desagregadas por subgrupo poblacional (sexo, edad, comorbilidades). AI Act artículo 10.2 exige esto para evitar sesgos. Incluye intervalo de confianza, no solo punto estimado. Si tienes publicación en revista indexada, cítala. Si no, presenta informe de validación firmado por responsable clínico externo.

**Apartado de monitorización post-despliegue**: calendario de auditorías trimestrales con métricas a monitorizar (drift de datos, calibración del modelo, tasa de adopción clínica). AI Act artículo 72 obliga a sistema de vigilancia poscomercialización. Describe quién revisa los informes (comité clínico interno del hospital + tu equipo técnico) y qué umbral de degradación dispara reentrenamiento.

**Apartado de formación**: plan de capacitación en dos niveles: usuarios finales (médicos, enfermeras) y administradores técnicos del hospital. Duración mínima 8 horas presenciales para usuarios. Material en español, casos clínicos locales, simulación en entorno de pruebas antes de go-live. Las CCAA puntúan mejor si ofreces formación continuada post-implantación (webinars trimestrales, soporte 24/7 en fase inicial).

## Calendario real de una licitación pública

| Fase | Duración estimada | Qué ocurre |
|------|-------------------|------------|
| Publicación en PLACSP | Día 0 | Pliego disponible, plazo para preguntas aclaratorias abierto |
| Plazo presentación ofertas | 30-45 días naturales | Preparación de memoria técnica + oferta económica |
| Apertura sobres | Día 50-60 | Acto público, se comprueba documentación administrativa |
| Evaluación técnica | 30-60 días | Comisión técnica puntúa memorias (puede pedir aclaraciones) |
| Valoración económica | 10 días | Aplicación de fórmula a ofertas económicas |
| Adjudicación provisional | Día 120-150 | Notificación a licitadores, plazo alegaciones 10 días |
| Adjudicación definitiva | Día 140-170 | Firma de contrato, inicio de implementación |

Tiempo total desde publicación hasta firma: 5-6 meses. Si la licitación incluye presentación oral (cada vez más frecuente en contratos >1M€), añade 15-20 días más.

Durante este proceso, un error habitual es no presentarse a la mesa de contratación cuando se piden aclaraciones. Si el pliego permite presentación oral, es obligatorio asistir: suma 10-15 puntos si se hace bien, penaliza no ir.

## Errores que descalifican antes de valoración

He visto descalificaciones en fase de apertura por: certificado CE caducado, propuesta técnica que no cubre funcionalidad mínima exigida (por ejemplo, el pliego pide integración con 5 modalidades radiológicas y la oferta solo contempla 3), no incluir DEUC (Documento Europeo Único de Contratación) firmado digitalmente, precio ofertado superior al presupuesto base de licitación (más común de lo que parece).

También descalifican: presentar subcontratación superior al 50% sin justificar, proponer personal técnico sin titulación mínima exigida (muchos pliegos piden al menos un ingeniero senior con 5 años experiencia en IA sanitaria), no acreditar solvencia técnica (tres proyectos de IA en salud en los últimos cinco años, importe mínimo 200.000€ cada uno).

## ¿Te ha resultado útil?

Si estás preparando una licitación pública de IA sanitaria, revisando un pliego técnico o necesitas evaluar la madurez regulatoria de tu solución antes de licitar, hablemos. He trabajado en ambos lados de la mesa: como médico evaluando tecnología y como asesor técnico preparando memorias ganadoras. Escríbeme en [/contacto](/contacto) y vemos cómo estructurar tu propuesta para que puntúe donde debe puntuar.