---
slug: snomed-ct-por-que-importa
title: "Por qué SNOMED-CT es la decisión más infravalorada en cualquier proyecto de salud digital"
description: "SNOMED-CT vs ICD-10, coste de licencia, mapeo desde HIS y requisitos del EHDS. La terminología que define si tu proyecto escala o muere en el intento."
date: "2026-03-02"
readingTime: "7 min"
tags: ["SNOMED-CT", "Interoperabilidad", "Salud Digital"]
---

Cuando un hospital compra un HIS nuevo, el contrato menciona SNOMED-CT en algún anexo técnico. Cuando una CCAA redacta un pliego para historia clínica electrónica, aparece como requisito deseable. Cuando un proveedor de HealthTech promete interoperabilidad, lista SNOMED entre los estándares que "soporta". Nadie le da importancia hasta que el proyecto lleva seis meses y los mapeos siguen sin funcionar, los informes de calidad están rotos y la integración con el resto del ecosistema digital sanitario es imposible.

He visto este patrón repetirse en proyectos hospitalarios, en pilots de IA diagnóstica y en licitaciones de plataformas regionales. La decisión sobre qué terminología clínica usar —o si realmente se va a usar— determina si el sistema escala, si los datos son reutilizables y si cumples con lo que el Espacio Europeo de Datos Sanitarios (EHDS) va a exigir a partir de 2025-2026. No es un detalle técnico. Es arquitectura de datos con consecuencias clínicas, económicas y regulatorias.

## SNOMED-CT vs ICD-10: por qué no son intercambiables

ICD-10 (Clasificación Internacional de Enfermedades, versión 10) es un estándar de codificación que la OMS mantiene desde 1990 y que casi todos los sistemas sanitarios usan para reportar mortalidad, morbilidad y facturación. En España, el CMBD (Conjunto Mínimo Básico de Datos) de altas hospitalarias se codifica con ICD-10-ES. Las aseguradoras lo usan para tarificar. Los registros epidemiológicos nacionales lo necesitan.

SNOMED-CT (Systematized Nomenclature of Medicine - Clinical Terms) es una terminología clínica jerárquica con más de 350.000 conceptos activos, estructurados en relaciones semánticas. No clasifica para reportar; modela la realidad clínica para documentar, buscar, razonar y compartir datos entre sistemas.

La diferencia crítica: ICD-10 agrupa para estadística. SNOMED-CT describe para clínica.

Un ejemplo concreto. En ICD-10, "neumonía bacteriana" y "neumonía viral" pueden caer bajo el mismo código dependiendo de la granularidad que elijas (J12-J18). En SNOMED-CT, "neumonía causada por Streptococcus pneumoniae" (233604007) es un concepto distinto de "neumonía causada por Mycoplasma pneumoniae" (233607000), con relaciones explícitas a "agente causal", "sitio anatómico" y "hallazgo asociado". Esto permite que un sistema de decisión clínica evalúe guías específicas de tratamiento antibiótico, que una herramienta de IA entrene con etiquetas precisas y que dos hospitales compartan datos sin ambigüedad semántica.

ICD-10 es obligatorio para facturación y reportes nacionales. SNOMED-CT es obligatorio si quieres que tus datos clínicos sirvan para algo más allá del cierre contable del trimestre.

## Casos de uso reales donde SNOMED-CT marca la diferencia

**Intercambio de historia clínica entre regiones**. Cuando un paciente con enfermedad crónica se muda de Madrid a Cataluña, su nueva atención primaria necesita entender diagnósticos, tratamientos activos y alergias sin llamar por teléfono al hospital anterior. Si el sistema de origen codifica con terminología propietaria o ICD-10 a nivel de alta, el mapeo es manual, lento y propenso a error. Si ambos usan SNOMED-CT sobre FHIR (estándar HL7 para APIs sanitarias), el intercambio es automático, el sistema receptor interpreta semánticamente los conceptos y el médico ve contexto clínico útil en segundos.

**Decisión clínica asistida por IA**. Un modelo de predicción de sepsis entrenado con datos de UCI necesita variables precisas: presencia de foco infeccioso (concepto SNOMED), valor de lactato (LOINC para laboratorio, pero vinculado a SNOMED para interpretación), uso de vasopresores (RxNorm para fármacos, mapeado a SNOMED para acción terapéutica). Si el dataset de entrenamiento mezcla códigos locales, ICD-10 y texto libre, el modelo aprende ruido. Si todo está codificado en SNOMED-CT desde origen, la señal es limpia y el modelo generaliza entre hospitales.

**Auditoría de calidad asistencial**. Un servicio de medicina interna quiere medir tiempo medio desde sospecha de TEP (tromboembolismo pulmonar) hasta angio-TC. Con SNOMED-CT puedes buscar "hallazgo clínico compatible con TEP" (609524001) en notas de evolución, cruzar con orden de angio-TC pulmonar (429858000) y calcular delta temporal. Con ICD-10 solo tienes el código de diagnóstico al alta, que puede llegar días después.

## Precio real de la licencia SNOMED-CT en España

España es miembro de SNOMED International desde 2019, a través del Ministerio de Sanidad. Esto significa que cualquier organización sanitaria pública (hospitales, atención primaria, CCAA) y los proveedores que trabajan para ellas tienen acceso gratuito a SNOMED-CT en su versión en español (edición SNOMED CT ES). No hay coste de licencia por implementación, por número de usuarios ni por volumen de datos.

Para organizaciones privadas (aseguradoras, clínicas privadas, empresas de HealthTech que venden fuera del ámbito público español), el coste depende del tipo de membresía en SNOMED International. Un proveedor de software puede obtener licencia de afiliado desde aproximadamente 4.000-10.000 USD anuales según facturación. Una aseguradora grande puede necesitar membresía nacional si opera en varios países, con costes escalados según PIB del país.

En la práctica, el coste de licencia nunca es el problema. El problema es el esfuerzo de implementación: mapeo de terminologías legacy, formación clínica, mantenimiento de tablas de conceptos y actualizaciones semestrales de la edición internacional.

## Cómo mapear desde un HIS existente sin reescribir todo

La mayoría de los hospitales españoles usan alguna combinación de ICD-10, CIE-9-MC (la versión modificada clínica que sobrevive en algunos sistemas antiguos), códigos propietarios del HIS (Selene, SAP IS-H, OMI-AP) y texto libre en campos de evolución. Migrar todo a SNOMED-CT de un día para otro no es viable ni necesario.

El enfoque pragmático es mapeo incremental con tres capas:

**Capa 1: Campos obligatorios**. Diagnósticos principales, alergias documentadas, procedimientos quirúrgicos. Aquí el mapeo puede ser automático si ya usas ICD-10. SNOMED International publica tablas de correspondencia ICD-10 ↔ SNOMED-CT actualizadas semestralmente. La precisión no es perfecta (un código ICD puede mapear a varios conceptos SNOMED según contexto), pero cubre el 70-80% de casos frecuentes. Un script de ETL bien diseñado puede enriquecer tu base de datos histórica con conceptos SNOMED paralelos a ICD-10 sin tocar el workflow clínico.

**Capa 2: Nuevas entradas clínicas**. Cuando el médico registra un diagnóstico nuevo o documenta un hallazgo, el HIS ofrece un buscador de términos SNOMED-CT en lugar de texto libre. Esto requiere una interfaz de usuario decente (tipo-ahead con búsqueda difusa, sinónimos en español) y formación del equipo clínico. He visto implementaciones fallidas donde el buscador es tan lento o tan literal que los médicos lo evitan y vuelven a texto libre. La herramienta debe ser más rápida que escribir. Si no lo es, nadie la usa.

**Capa 3: Enriquecimiento con NLP**. Para las notas de evolución históricas o los informes de alta en texto libre, puedes aplicar procesamiento de lenguaje natural (NLP) entrenado en español clínico para extraer entidades y asignar conceptos SNOMED-CT con score de confianza. Esto no reemplaza la codificación manual de alta calidad, pero permite análisis retrospectivos y cierra la brecha entre datos legacy y arquitectura moderna.

Un hospital de 400 camas puede hacer este mapeo incremental en 12-18 meses con un equipo de arquitectura de datos clínicos (2-3 personas: terminólogo médico, ingeniero de integración, especialista de HIS) y un presupuesto de 150.000-250.000 EUR incluyendo licencias de herramientas de mapeo comerciales como Snapper (SNOMED-CT España) o desarrollos internos sobre FHIR Terminology Services.

## Qué exige el EHDS: no es opcional a partir de 2026

El Reglamento del Espacio Europeo de Datos Sanitarios (EHDS), aprobado en primera lectura en 2024 y con entrada en vigor progresiva desde 2025-2026, establece que los Estados miembros deben garantizar el intercambio transfronterizo de datos sanitarios usando estándares comunes europeos. Entre esos estándares obligatorios para uso primario (atención clínica) está SNOMED-CT para terminología clínica.

Artículo 6 del borrador final especifica que los sistemas de historia clínica electrónica deben soportar un conjunto mínimo de categorías de datos (European Electronic Health Record Exchange Format) codificadas con vocabularios controlados, y SNOMED-CT es el estándar explícito para diagnósticos, procedimientos, hallazgos clínicos y alergias.

Esto significa que cualquier hospital o centro de salud que quiera participar en el intercambio europeo de datos (un paciente francés atendido en Barcelona, un paciente español que necesita cirugía en Berlín) debe tener sus datos clínicos codificados en SNOMED-CT sobre HL7 FHIR. No es recomendación. Es requisito regulatorio con plazo de cumplimiento progresivo entre 2026 y 2028 según categoría de datos.

Las CCAA que hoy no tienen SNOMED-CT implementado en sus HIS regionales (todavía hay varias) van a enfrentarse a auditorías de cumplimiento y posibles restricciones de fondos europeos si no avanzan. Los proveedores de HIS que no ofrezcan soporte nativo de SNOMED-CT van a perder licitaciones públicas. Las consultoras que asesoran proyectos de transformación digital sanitaria sin incluir terminología clínica en la arquitectura están vendiendo deuda técnica que explotará en 2026.

## ¿Te ha resultado útil?

Si estás en medio de una licitación de HIS, rediseñando tu arquitectura de datos clínicos o necesitas entender cómo mapear tu sistema legacy antes de que el EHDS te obligue, puedo ayudarte a diseñar la estrategia correcta desde el primer día. Hablemos del caso concreto de tu organización: [/contacto](/contacto).