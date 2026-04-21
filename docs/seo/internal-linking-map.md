# Internal Linking Map — alejandrozakzuk.com

Fecha: 2026-04-21. Auditoría de enlaces internos en `app/`, `components/` y posts markdown.

---

## 1. Orphan detection

Grep sobre `href="/..."` en todo `app/` + `components/` arroja un patrón alarmante:

### Páginas con 0-1 links internos entrantes (desde fuera de nav/footer)

| Página | Links entrantes (fuera de Navbar/Footer) | Diagnóstico |
|--------|------------------------------------------|-------------|
| **TODOS los 24 posts markdown de `/blog/[slug]`** | **0** | Los posts markdown no se enlazan entre sí ni son enlazados desde home, proyectos o soluciones. Huérfanos totales salvo el listado `/blog`. |
| Los 3 posts TSX (EHDS, EU AI Act CDSS, consultoras) | 0 | Mismo problema que los markdown. |
| `/proyectos/tfm-deteccion-metabolica` | 0 contextuales (solo desde índice `/proyectos`) | Huérfano. |
| `/proyectos/erp-geriatrico-fhir` | 0 contextuales | Huérfano. |
| `/proyectos/prediccion-ocupacion-hospitalaria` | 0 contextuales | Huérfano. |
| `/proyectos/clinai-classifier` | 1 (`app/soluciones/[especialidad]/page.tsx:123`) | Único proyecto con link contextual entrante. |
| `/soluciones/radiologia`, `/cardiologia`, `/oncologia` | Solo Footer (3 links sitewide) | No reciben ningún enlace contextual desde posts ni desde home. |
| `/credenciales` | 0 desde posts/proyectos | Aislada. |
| `/educacion`, `/habilidades`, `/experiencia`, `/publicaciones`, `/one-pager` | 0 contextuales | Huérfanas. |
| `/en` (versión inglés) | 0 desde el sitio ES | Sin hreflang contextual. |

**Conclusión:** el sitio tiene autoridad concentrada en Navbar + Footer + home. El blog es un cementerio de PageRank — ningún post enlaza a otro, a un proyecto, o a una solución. Esto mata tanto SEO como AEO (los modelos siguen enlaces contextuales, no menús globales).

---

## 2. Semantic overlap matrix — 20 oportunidades de linking

Formato: **Origen → Destino** · anchor sugerido · contexto de inserción · razón.

### Dentro del blog (post ↔ post)

1. **`cdss-metricas-que-importan.md` → `xai-shap-en-clinica.md`**
   Anchor: `explicabilidad con SHAP`
   Contexto: "...además de AUC y calibración, necesitas [explicabilidad con SHAP] para pasar la revisión clínica."
   Razón: las métricas de CDSS y XAI son co-requisito regulatorio (Art. 13 EU AI Act).

2. **`cdss-metricas-que-importan.md` → `llm-medico-alucinaciones-riesgo.md`**
   Anchor: `riesgo de alucinación en LLMs médicos`
   Contexto: "Si tu CDSS usa un LLM subyacente, añade el [riesgo de alucinación en LLMs médicos] a tu matriz."
   Razón: misma intent (fiabilidad clínica).

3. **`eu-ai-act-fria-dpia.md` → TSX `eu-ai-act-clasificacion-cdss-5-pasos`**
   Anchor: `clasificar tu CDSS como High-Risk`
   Contexto: "Antes de la FRIA necesitas [clasificar tu CDSS como High-Risk] bajo el Anexo III."
   Razón: dependencia causal directa.

4. **TSX `eu-ai-act-clasificacion-cdss-5-pasos` → `samd-clase-iia-checklist.md`**
   Anchor: `checklist SaMD clase IIa`
   Contexto: "Una vez clasificado, usa la [checklist SaMD clase IIa] para la documentación técnica."
   Razón: flujo regulatorio siguiente.

5. **TSX `eu-ai-act-clasificacion-cdss-5-pasos` → `medical-device-regulation-ia-generativa.md`**
   Anchor: `intersección con MDR`
   Contexto: "...y revisa la [intersección con MDR] si tu sistema incluye generación."

6. **`fhir-en-produccion-errores.md` → `snomed-ct-por-que-importa.md`**
   Anchor: `terminología SNOMED CT`
   Contexto: "El error #3 (recursos sin vocabulario) desaparece cuando aplicas [terminología SNOMED CT]."
   Razón: cluster B interoperabilidad.

7. **`fhir-en-produccion-errores.md` → TSX `como-preparar-centro-sanitario-ehds`**
   Anchor: `roadmap EHDS hospitalario`
   Contexto: "...y encaja FHIR en un [roadmap EHDS hospitalario] más amplio."

8. **`historia-clinica-electronica-vs-ehds.md` → `ehds-calendario-aplicacion.md`**
   Anchor: `calendario EHDS 2026-2029`
   Contexto: "Revisa el [calendario EHDS 2026-2029] para planificar migración."

9. **`ia-oncologia-2026.md` → `/soluciones/oncologia`**
   Anchor: `consultoría especializada en IA oncológica`
   Contexto: "Si tu hospital necesita [consultoría especializada en IA oncológica], ver página de solución."
   Razón: blog → solución (conversión).

10. **`operaciones-hospitalarias-ia.md` → `/proyectos/prediccion-ocupacion-hospitalaria`**
    Anchor: `case study de predicción de ocupación`
    Contexto: "Ejemplo real: [case study de predicción de ocupación] en hospital de 400 camas."
    Razón: post → proyecto (prueba).

11. **`integracion-his-hospital-espanol.md` → `/proyectos/erp-geriatrico-fhir`**
    Anchor: `integración FHIR sobre ERP geriátrico`
    Contexto: "Caso práctico: [integración FHIR sobre ERP geriátrico]."

12. **`licitaciones-publicas-ia-sanidad.md` → `pliegos-tecnicos-ia-sanidad-como-escribirlos.md`**
    Anchor: `cómo redactar el pliego técnico`
    Contexto: "Antes de licitar, lee [cómo redactar el pliego técnico]."
    Razón: pair obvio del mismo cluster.

13. **`medico-advisor-consultora.md` → TSX `lo-que-consultoras-deben-preguntar-ia-clinica`**
    Anchor: `las 7 preguntas que un advisor clínico haría`
    Contexto: "Ejemplo concreto: [las 7 preguntas que un advisor clínico haría] antes de firmar."

14. **`mercado-ia-salud-europa-2026.md` → `fondos-europeos-recovery-salud.md`**
    Anchor: `fondos Next Generation aplicados a salud`
    Contexto: "Buena parte de ese crecimiento se apoya en [fondos Next Generation aplicados a salud]."

15. **`transformacion-digital-hospital-espanol.md` → `data-governance-hospital.md`**
    Anchor: `framework de data governance`
    Contexto: "Sin un [framework de data governance] sólido, la transformación se estanca."

### Blog → Soluciones / Proyectos (conversión)

16. **`xai-shap-en-clinica.md` → `/proyectos/clinai-classifier`**
    Anchor: `clasificador clínico open source con XAI`
    Contexto: "Ejemplo funcional: [clasificador clínico open source con XAI]."

17. **`cdss-metricas-que-importan.md` → `/soluciones/radiologia`**
    Anchor: `CDSS en radiología`
    Contexto: "Aplicado a [CDSS en radiología], las métricas cambian ligeramente..."

### Pillar / Home → cluster

18. **`app/page.tsx` (home) → nueva `/ia-clinica-espana` (pillar)**
    Anchor: `Guía completa: IA clínica en España 2026`
    Contexto: sección hero o bloque educacional previo al CTA.
    Razón: home es el nodo de mayor autoridad, debe apuntar a la pillar.

19. **`/sobre-mi` → `/ia-clinica-espana` (pillar)**
    Anchor: `marco de trabajo en IA clínica`
    Contexto: "Mi [marco de trabajo en IA clínica] está detallado aquí."

20. **`/trabajemos-juntos` → TSX `lo-que-consultoras-deben-preguntar-ia-clinica`**
    Anchor: `qué preguntar a un advisor clínico`
    Contexto: bloque "Antes de contratarme, lee [qué preguntar a un advisor clínico]."

---

## 3. Anchor cannibalization warnings

Auditoría actual (bajo volumen de links contextuales) arroja estos riesgos para cuando se añadan los 20 links:

- **"EU AI Act"** como anchor literal se usará en múltiples destinos distintos (`eu-ai-act-fria-dpia`, TSX `eu-ai-act-clasificacion-cdss-5-pasos`, futura pillar `/eu-ai-act-sanidad`). Riesgo alto de canibalización. **Regla:** reservar "EU AI Act" a secas para la futura pillar `/eu-ai-act-sanidad`. Usar anchors específicos (`FRIA bajo EU AI Act`, `clasificación CDSS bajo EU AI Act`) para los posts.
- **"EHDS"** mismo problema. Reservar anchor corto para TSX `como-preparar-centro-sanitario-ehds` (sub-hub del cluster B). Resto: `calendario EHDS`, `EHDS vs HCE`, `roadmap EHDS`.
- **"FHIR"** aparecerá en múltiples posts. Reservar anchor corto para `fhir-en-produccion-errores.md`. Resto: `FHIR Mapping Language`, `recursos FHIR`, `integración FHIR`.
- **"consultoría"** / **"trabajemos juntos"**: múltiples CTAs del sitio ya usan variaciones. Estandarizar: el anchor para el destino `/trabajemos-juntos` siempre debe incluir un modificador vertical (`consultoría en IA clínica`, `advisor regulatorio sanitario`), no el genérico.
- **"CDSS"** como anchor ambiguo (¿post métricas? ¿clasificación EU AI Act? ¿solución?). Siempre cualificar.

---

## 4. Link equity map — 3 páginas que deben concentrar autoridad

Priorizar flujo de enlaces entrantes contextuales hacia:

1. **Home (`/`)** — ya es el nodo más enlazado pero principalmente vía Navbar. Añadir links contextuales desde los 27 posts ("volver al índice de Aram Zakzuk, consultor en IA clínica") es bajo ROI; dejar como está.

2. **Nueva pillar `/ia-clinica-espana`** — objetivo: recibir al menos 1 link contextual desde CADA uno de los 27 posts (cluster hub pattern) + desde home + desde `/sobre-mi` + desde las 3 páginas de soluciones. Meta: 30+ enlaces entrantes contextuales en 90 días → concentra autoridad topical.

3. **`/trabajemos-juntos`** — página de conversión. Debe recibir enlaces contextuales desde el final de cada post (ya hay patrón en proyectos), pero con anchors diversos y cualificados por vertical. Meta: 24 enlaces contextuales (uno por post markdown) con anchors no duplicados.

**Páginas que NO deben concentrar autoridad adicional** (ya saturadas o no son targets): `/blog` (solo listado), `/credenciales`, `/legal`.

**Oportunidad secundaria:** las 3 soluciones verticales (`/soluciones/radiologia`, `/cardiologia`, `/oncologia`) son huecos de conversión vertical. Cada una debería recibir 3-5 links contextuales desde posts del cluster C (clinical AI) y del cluster D (consultoría).
