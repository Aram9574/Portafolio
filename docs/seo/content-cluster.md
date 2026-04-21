# Content Cluster Map — alejandrozakzuk.com

Autor: Aram Zakzuk, MD. Posicionamiento: Healthcare & Clinical AI Consultant (Madrid).
Fecha: 2026-04-21. Fuente: auditoría sobre 24 posts markdown + 3 TSX + 4 case studies + 3 soluciones.

---

## 1. PILLAR PAGE recomendada

**Propuesta: nueva página `/ia-clinica-espana` (~3.000 palabras), NO reutilizar `/sobre-mi` ni `/trabajemos-juntos`.**

Justificación:
- `/sobre-mi` es una página biográfica (EEAT personal, no topical authority).
- `/trabajemos-juntos` es una página de conversión (servicios/pricing), no ranking target.
- Una pillar temática independiente captura consultas de fondo de embudo del decisor B2B español ("consultor IA clínica España", "experto EU AI Act sanidad", "advisor clínico hospital IA") y funciona como hub de enlaces internos hacia los 4 clusters.
- Estructura recomendada de la pillar (H2s): (1) El estado de la IA clínica en España 2026, (2) Marco regulatorio: EU AI Act + MDR + EHDS, (3) Casos de uso hospitalarios reales, (4) Por dónde empezar según tipo de organización (hospital público / privado / consultora / HealthTech / farma), (5) Métricas que importan (ROI, NNT algorítmico, drift), (6) FAQ AEO-friendly, (7) CTA hacia `/trabajemos-juntos`.
- Canonical en español; versión EN en `/en/clinical-ai-spain` para ownar búsquedas de consultoras internacionales con delivery en Iberia.

Segunda pillar (media prioridad): `/eu-ai-act-sanidad` (~2.000 palabras) — consolida los 4 posts regulatorios en una guía maestra.

---

## 2. Cluster Articles (15 piezas, 4 clusters)

### CLUSTER A — EU AI Act + Regulación (pillar secundario: `/eu-ai-act-sanidad`)

| # | Título | Keyword primaria | Tipo | Words | Estado |
|---|--------|------------------|------|-------|--------|
| A1 | EU AI Act: clasificación de tu CDSS en 5 pasos | "clasificación CDSS EU AI Act" | Framework | 2.500 | **EXISTS** (TSX) — refrescar con ejemplos de Art. 6 anexo III |
| A2 | EU AI Act — FRIA y DPIA paso a paso | "FRIA EU AI Act sanidad" | Guía práctica | 2.200 | **EXISTS** (md) — ampliar con plantilla descargable |
| A3 | Medical Device Regulation + IA generativa: dónde chocan | "MDR IA generativa dispositivo médico" | Análisis | 1.800 | **EXISTS** (md) |
| A4 | SaMD clase IIa: checklist técnica de 30 puntos | "SaMD clase IIa checklist" | Checklist | 2.000 | **EXISTS** (md) |
| A5 | **[NUEVO]** EU AI Act timeline agosto 2026: qué debe estar listo en tu hospital | "EU AI Act agosto 2026 hospitales" | Guía urgencia | 2.000 | **P1 — CREAR** |
| A6 | **[NUEVO]** Notified Bodies españoles para IA médica: mapa 2026 | "notified body IA médica España" | Análisis mercado | 1.500 | **P2 — CREAR** (zero competitors) |

### CLUSTER B — EHDS + Interoperabilidad (sub-hub: post TSX EHDS)

| # | Título | Keyword primaria | Tipo | Words | Estado |
|---|--------|------------------|------|-------|--------|
| B1 | Cómo preparar un centro sanitario para el EHDS | "EHDS hospital preparación" | Guía ejecutiva | 2.500 | **EXISTS** (TSX) |
| B2 | EHDS calendario de aplicación 2026-2029 | "EHDS calendario aplicación" | Explainer | 1.500 | **EXISTS** (md) |
| B3 | Historia clínica electrónica vs EHDS | "HCE vs EHDS diferencias" | Comparativa | 1.800 | **EXISTS** (md) |
| B4 | FHIR en producción: los 7 errores que vemos en hospitales españoles | "HL7 FHIR errores producción" | Post-mortem | 2.000 | **EXISTS** (md) |
| B5 | SNOMED CT: por qué importa en un CDSS | "SNOMED CT CDSS" | Explainer | 1.600 | **EXISTS** (md) |
| B6 | **[NUEVO]** Mapeo SNOMED ⇄ CIE-10-ES: pipeline práctico con FHIR | "mapeo SNOMED CIE-10 España" | Tutorial | 2.200 | **P1 — CREAR** (gap competidor) |
| B7 | **[NUEVO]** Data spaces sanitarios regionales en España (SNS, TicSalut, Osakidetza) | "data space sanitario España" | Análisis | 1.800 | **P2 — CREAR** |

### CLUSTER C — CDSS + Clinical AI en producción

| # | Título | Keyword primaria | Tipo | Words | Estado |
|---|--------|------------------|------|-------|--------|
| C1 | CDSS: las métricas que importan (más allá del AUC) | "métricas CDSS producción" | Framework | 2.000 | **EXISTS** (md) |
| C2 | LLMs médicos y alucinaciones: riesgo clínico real | "alucinaciones LLM médico" | Análisis | 1.800 | **EXISTS** (md) |
| C3 | XAI en clínica: SHAP aplicado a decisiones médicas | "XAI SHAP clínica" | Tutorial | 2.200 | **EXISTS** (md) |
| C4 | IA en oncología 2026: estado del arte hospitalario | "IA oncología hospital 2026" | Análisis mercado | 2.500 | **EXISTS** (md) |
| C5 | Detección de fraude en IA clínica: adversarial inputs | "fraude IA clínica adversarial" | Análisis | 1.700 | **EXISTS** (md) |
| C6 | Operaciones hospitalarias con IA: ocupación, triaje, flujos | "IA operaciones hospitalarias" | Case-study-style | 2.000 | **EXISTS** (md) |
| C7 | **[NUEVO]** Post-market surveillance de un CDSS: drift, monitorización y re-entrenamiento | "post-market surveillance CDSS" | Guía práctica | 2.400 | **P1 — CREAR** (gap total en castellano) |
| C8 | **[NUEVO]** NNT algorítmico: cómo medir si tu modelo clínico realmente ayuda | "NNT algorítmico IA clínica" | Framework original | 1.800 | **P1 — CREAR** (signature piece, ownable) |

### CLUSTER D — Consultoría + Mercado + Negocio

| # | Título | Keyword primaria | Tipo | Words | Estado |
|---|--------|------------------|------|-------|--------|
| D1 | Lo que las grandes consultoras deberían preguntar sobre IA clínica | "consultora IA clínica preguntas" | Thought leadership | 2.200 | **EXISTS** (TSX) |
| D2 | Médico advisor en consultora: qué aporta | "médico advisor consultora" | Posicionamiento | 1.500 | **EXISTS** (md) |
| D3 | Mercado IA salud Europa 2026 | "mercado IA salud Europa 2026" | Análisis | 2.200 | **EXISTS** (md) |
| D4 | Fondos europeos Recovery aplicados a salud digital | "fondos Next Generation salud digital" | Guía financiación | 2.000 | **EXISTS** (md) |
| D5 | Licitaciones públicas de IA sanitaria | "licitación pública IA sanidad" | Guía práctica | 1.800 | **EXISTS** (md) |
| D6 | Pliegos técnicos de IA sanitaria: cómo escribirlos | "pliego técnico IA sanidad" | Template-style | 2.200 | **EXISTS** (md) |
| D7 | Real World Evidence en HealthTech | "RWE HealthTech España" | Análisis | 1.800 | **EXISTS** (md) |
| D8 | Medical Affairs + HealthTech pricing | "Medical Affairs HealthTech pricing" | Framework | 2.000 | **EXISTS** (md) |
| D9 | Transformación digital hospitalaria española | "transformación digital hospital España" | Análisis mercado | 2.500 | **EXISTS** (md) |
| D10 | Integración HIS en hospital español | "integración HIS hospital" | Guía práctica | 1.800 | **EXISTS** (md) |
| D11 | Data governance en hospital | "data governance hospital España" | Framework | 2.000 | **EXISTS** (md) |
| D12 | **[NUEVO]** ROI real de un proyecto de IA clínica: cómo calcularlo | "ROI IA clínica hospital" | Framework | 2.200 | **EXISTS** (recién publicado abril 2026) — consolidar como pillar del cluster |
| D13 | **[NUEVO]** Cómo estructurar un pilot-to-production de IA en un hospital del SNS | "pilot production IA hospital SNS" | Playbook | 2.500 | **P2 — CREAR** |

---

## 3. Priorización (tiering)

**Priority 1 (crear en Q2 2026, traction inmediata):**
- A5 — EU AI Act timeline agosto 2026 (urgencia regulatoria, trending query)
- C7 — Post-market surveillance de CDSS (zero competition castellano)
- C8 — NNT algorítmico (signature piece, ownable, cross-cluster)
- **Pillar nueva** `/ia-clinica-espana` (es el nodo central)

**Priority 2 (Q3 2026):**
- A6 — Notified Bodies España
- B6 — Mapeo SNOMED ⇄ CIE-10-ES
- B7 — Data spaces sanitarios regionales
- D13 — Pilot-to-production SNS
- Refresh A1 + A2 con plantillas descargables (lead magnets)

**Priority 3 (Q4 2026):**
- Versión EN de pillar + top 3 posts de cada cluster (consultoras internacionales)
- Case study cruzado: unir `/proyectos/erp-geriatrico-fhir` con cluster B (FHIR)
- Case study cruzado: unir `/proyectos/prediccion-ocupacion-hospitalaria` con cluster C6

---

## 4. Content Gap Analysis (AEO / castellano sanitario)

Temas que competidores (Crowe, Deloitte, Minsait, Lexartis, Ecija, Garrigues healthtech, The Cocktail) NO están cubriendo en profundidad en español y son ownable:

1. **Post-market surveillance de CDSS bajo EU AI Act Art. 72** — ningún despacho ni consultora ha publicado guía práctica. Alta intención del CIO hospitalario post-go-live.
2. **NNT algorítmico / Number Needed to Benefit para modelos de ML clínicos** — concepto académico sin traducción a la práctica B2B. Framework ownable (invención terminológica).
3. **Mapeo SNOMED ⇄ CIE-10-ES con FHIR Mapping Language** — las consultoras venden "interoperabilidad" sin bajar a este detalle técnico crítico en España.
4. **Notified Bodies españoles disponibles para IA médica clase IIa/III** — información fragmentada, zero artículos en castellano que lo consoliden.
5. **AI literacy obligation (Art. 4 EU AI Act) en personal sanitario** — obligación desde feb 2025 mayormente ignorada. Gap entre legal firms y operaciones hospitalarias.

Estos 5 temas, combinados con datos primarios (entrevistas, benchmarks propios) y citados por nombre+credencial MD, son los candidatos óptimos para AEO y citación por modelos (Perplexity, ChatGPT Search, Gemini).
