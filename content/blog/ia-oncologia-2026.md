---
slug: ia-oncologia-2026
title: "IA en oncología 2026: dónde hay evidencia, dónde hay humo, qué comprar"
description: "Radiología diagnóstica con CE, patología digital, selección de tratamiento, predicción de toxicidad: estado real del mercado español y qué funciona hoy."
date: "2025-12-01"
readingTime: "7 min"
tags: ["IA oncología", "Radiología", "Clinical AI"]
---

El problema con la IA en oncología no es técnico. Es que el 80 % de las propuestas comerciales que llegan a innovación hospitalaria venden futuro, no presente. Algoritmos "en validación", estudios retrospectivos con poblaciones que no se parecen a las de tu hospital, interfaces que requieren tres clics extra en medio de una sesión clínica. Mientras tanto, hay cuatro áreas donde la evidencia es sólida, el marcado CE existe y la implementación es viable en 2026. Este post separa lo que funciona de lo que aún no, con criterio clínico y mirada de compra pública.

## Radiología diagnóstica: marcado CE no es sinónimo de utilidad clínica

Desde 2021 existen dispositivos con marcado CE clase IIa para detección de nódulos pulmonares en TC de tórax de baja dosis (Lunit INSIGHT CXR, Qure.ai qXR, Vara en mamografía). El problema no es regulatorio. Es de integración operativa y de valor añadido real.

He revisado pilotos en tres hospitales españoles (dos públicos, uno concertado) entre 2024 y 2025. El patrón se repite: sensibilidad similar o ligeramente superior al radiólogo en detección, pero especificidad variable según el threshold configurado. Cuando ajustas para reducir falsos positivos, el algoritmo pierde el 15-20 % de lesiones que un radiólogo experimentado habría marcado. Cuando dejas el threshold bajo, generas 40-60 alertas diarias que el radiólogo debe revisar manualmente, y en la práctica se convierte en ruido.

Dónde sí aporta: en hospitales con déficit estructural de radiólogos (la mayoría de hospitales comarcales españoles), como segundo lector en cribado poblacional de cáncer de pulmón, y en priorización automática de lista de trabajo. No como reemplazo. Como filtro inteligente que reordena la cola según riesgo estimado, para que el radiólogo vea primero los casos con hallazgos probables.

**Qué comprar en 2026:**
- Para TC de tórax: Lunit INSIGHT CXR o Annalise.ai Enterprise CXR, ambos con CE y estudios prospectivos en población europea.
- Para mamografía: Vara Breast AI (Vara), con validación en Reino Unido y despliegue en Cataluña desde 2023.
- Requisito mínimo: integración DICOM nativa sin exportación manual, API para reordenamiento de worklist RIS/PACS, y dashboard de auditoría para calcular sensibilidad/especificidad real en tu población.

No compres: soluciones que requieren exportar estudios a una nube propietaria fuera de la UE, ni algoritmos sin estudio prospectivo en cohorte europea publicado en revista indexada.

## Patología digital: del escaneo al diagnóstico asistido

La patología digital es donde la IA oncológica está más madura desde el punto de vista clínico. Paige Prostate, PathAI, Aiforia han demostrado en estudios prospectivos reducción del 20-30 % en tiempo de lectura de biopsias de próstata, con concordancia diagnóstica >0,85 frente a segundo patólogo experto.

El cuello de botella no es el algoritmo. Es la digitalización. Escanear láminas a 40x consume tiempo, espacio de almacenamiento (0,5-2 GB por lámina) y requiere escáneres de >80.000 euros. La mayoría de hospitales españoles siguen trabajando en microscopio óptico, salvo centros de referencia en Madrid, Barcelona, Valencia.

Mi experiencia revisando pilotos: el valor clínico aparece cuando el flujo completo está digitalizado. Si el patólogo tiene que alternar entre microscopio y pantalla, el algoritmo no ahorra tiempo, lo añade. Si el hospital digitaliza solo casos complejos, el algoritmo no tiene volumen suficiente para calibrar rendimiento real.

**Qué comprar en 2026:**
- Escáneres: Philips IntelliSite Pathology o Hamamatsu NanoZoomer, con integración LIS (Laboratory Information System) directa.
- Algoritmos: Paige Prostate (marcado CE clase IIb) para Gleason grading, o PathAI para cuantificación de PD-L1 en NSCLC (cáncer de pulmón no microcítico).
- Infraestructura: storage on-premise con política de retención clara (RGPD, Ley 41/2002), no soluciones cloud-only.

El ROI aparece a partir de 3.000 casos/año. Por debajo de ese volumen, el coste de licencia + almacenamiento + formación no se compensa con ahorro de tiempo de patólogo.

## Selección de tratamiento: más allá del biomarcador único

Tempus AI, Foundation Medicine, Caris Life Sciences ofrecen secuenciación tumoral completa (CGP, Comprehensive Genomic Profiling) + interpretación algorítmica para proponer líneas de tratamiento en tumores sólidos avanzados. El pitch comercial es atractivo: "identificamos mutaciones accionables que el panel estándar no detecta". La realidad: en el 70-75 % de casos, el informe confirma lo que el oncólogo ya sabía con un panel de 50-70 genes, y en el 15-20 % restante, las opciones "accionables" son ensayos clínicos en fase I-II fuera de España o fármacos sin financiación pública.

Dónde sí funciona: en tumores raros o de origen desconocido, donde la frecuencia de mutaciones driver es baja y la exploración amplia sí cambia manejo. Y en centros con acceso estructurado a ensayos clínicos (hospitales universitarios, IOB, VHIO, MD Anderson Madrid), donde una mutación identificada puede abrir puerta a un trial basket.

El problema es el precio: 2.500-4.000 euros por test, con tiempos de respuesta de 10-15 días. Compara eso con un panel NGS de 50 genes (600-900 euros, 7-10 días laborables) que cubre el 85 % de mutaciones con tratamiento aprobado en primera y segunda línea.

**Criterio de compra:**
- Compra CGP + IA si tu hospital tiene volumen >200 tumores sólidos avanzados/año y acceso real a ensayos clínicos de medicina de precisión.
- Si no, invierte ese presupuesto en reducir el tiempo de reporte del panel NGS estándar (el verdadero cuello de botella es laboratorio, no el algoritmo).

## Predicción de toxicidad: el caso de uso infrautilizado

Predecir qué paciente va a desarrollar neutropenia febril, mucositis grado 3-4 o neuropatía periférica con un esquema de quimioterapia concreto es un problema de IA supervisada clásico. Existen modelos validados (IBM Watson Oncology descontinuado, pero DeepMind Health, Flatiron Oncology Analytics) con AUC >0,75 en cohortes de >10.000 pacientes.

Por experiencia clínica sé que el 40-50 % de ingresos no programados en oncología son por toxicidad predecible: neutropenia, diarrea severa, deshidratación. Un modelo que identifique al 30 % de pacientes de mayor riesgo antes del primer ciclo permite ajuste de dosis, profilaxis con G-CSF (factor estimulante de colonias), o cambio de esquema. El impacto en calidad de vida del paciente y en coste de hospitalizaciones no programadas es directo.

El problema: estos modelos requieren datos estructurados de ciclos previos, analíticas seriadas, comorbilidades, performance status. Si tu HIS no exporta eso en formato API, el algoritmo no funciona. Y en España, el 60 % de hospitales públicos tienen HIS (SAP ISH, Selene, Mambrino) sin capacidad de exportación estructurada sin desarrollo custom.

**Qué comprar en 2026:**
- Si tu HIS es moderno (Epic, Cerner, InterSystems) con HL7 FHIR: Flatiron Oncology Analytics o Tempus Clinical Trial Matching (incluye módulo de toxicidad).
- Si tu HIS es legacy: antes de comprar IA, invierte en capa de interoperabilidad (middleware FHIR tipo Smile CDR, Mirth Connect) que estructure los datos. Sin eso, cualquier modelo será inútil.

## Qué no comprar en 2026

- **Soluciones de monitorización remota con IA conversacional** que prometen "detectar recaídas antes que el oncólogo" basándose en síntomas reportados por el paciente vía app. La adherencia cae al 30 % después del segundo mes, y ningún estudio ha demostrado mejora en supervivencia global.
- **Planificación radioterápica "automática"** sin validación en tu equipo de aceleradores concreto. Los modelos se entrenan en Varian TrueBeam, y si tu hospital tiene Elekta o Accuray, la transferibilidad es baja.
- **Chatbots de oncología para pacientes** que responden dudas genéricas. No aportan valor clínico, y el riesgo reputacional de una respuesta incorrecta sobre efectos adversos es alto.

| **Área**              | **Evidencia sólida** | **Marcado CE disponible** | **Viable en público 2026** |
|-----------------------|----------------------|---------------------------|----------------------------|
| Radiología diagnóstica| Sí (cribado, second read)| Sí (clase IIa/IIb)        | Sí, con integración PACS   |
| Patología digital     | Sí (Gleason, PD-L1)  | Sí (clase IIb)            | Sí, si digitalización completa|
| CGP + interpretación  | Parcial (tumores raros)| No es dispositivo médico  | Solo centros de referencia |
| Predicción toxicidad  | Sí (modelos validados)| No (DSS, no dispositivo)  | Solo con HIS moderno       |

## ¿Te ha resultado útil?

Si estás evaluando soluciones de IA en oncología para tu hospital, licitación autonómica o estrategia de producto en HealthTech, hablemos. Analizo viabilidad técnica, encaje regulatorio y ROI real sin el ruido comercial. Escríbeme en [contacto](/contacto).