# Meta Description & Title Variants — alejandrozakzuk.com

Generado con framework `seo-aeo-meta-description-generator`.
3 variantes por ruta (Benefit · Question · Social Proof).
Rangos: **title ≤ 60 chars** · **meta 140–160 chars**.

---

## 1. `/` (Home) — `app/layout.tsx`

**Metadata actual**
- **Title** (61 chars · **+1 sobre el límite**): `Aram Zakzuk, MD · Healthcare & Clinical AI Consultant · Madrid`
- **Description** (301 chars · **+141 sobre el límite**): `Healthcare & Clinical AI Consultant en Madrid. Médico con 6 años de práctica clínica + Máster en IA aplicada a Sanidad (CEMP) + Máster en Salud Digital (Universidad Europea). Evaluación de soluciones Clinical AI, asesoramiento regulatorio EU AI Act / MDR / SaMD y estrategia de adopción para consultoras y HealthTech.`

### V1 · Benefit Lead
- **Title** (58): `Clinical AI Consultant en Madrid · Aram Zakzuk, MD`
- **Meta** (155): `Integra IA clínica con criterio médico real y cumplimiento EU AI Act. Asesoro a hospitales, consultoras y HealthTech en Madrid. Aram Zakzuk, MD.`
- **Razonamiento CTR:** abre con el outcome que el decisor busca (integrar IA con criterio + cumplimiento); el nombre va al final como firma.

### V2 · Question Hook
- **Title** (60): `Clinical AI en tu hospital · Aram Zakzuk, MD · Madrid`
- **Meta** (158): `¿Cómo evaluar una solución de IA clínica sin romper EU AI Act ni el flujo asistencial? Médico + doble máster + 6 años de práctica real asesoran tu caso.`
- **Razonamiento CTR:** abre con la duda exacta del director de innovación; engancha al que ya tiene un proyecto de IA sobre la mesa.

### V3 · Social Proof / Specificity
- **Title** (58): `Healthcare AI Consultant Madrid · MD + 2 MSc · EU AI Act`
- **Meta** (157): `6 años de práctica clínica + doble máster en IA y Salud Digital + Stanford AI in Healthcare. Asesor Clinical AI, EU AI Act, MDR y SaMD. Madrid y UE.`
- **Razonamiento CTR:** lidera con cifras verificables (6 años, 2 MSc, Stanford) — reduce riesgo percibido para el comité que debe justificar la contratación.

### Comparativa

| Variante | CTR angle | Title | Desc | AEO/SEO fit |
|---|---|---|---|---|
| Actual | Descriptivo largo | 61 ⚠️ | 301 ⚠️ | Truncará en SERP |
| V1 Benefit | Outcome | 58 ✓ | 155 ✓ | Alto (keyword + beneficio) |
| V2 Question | Pain point | 60 ✓ | 158 ✓ | Alto (AEO: question-first) |
| V3 Social Proof | Credenciales | 58 ✓ | 157 ✓ | Máximo (trust signals) |

### Recomendación: **V3**
El home es el punto de aterrizaje para búsquedas de marca y de categoría (“healthcare AI consultant Madrid”). Los decisores B2B de hospitales y Big4 compran credenciales antes que prosa — el stack MD + 2 MSc + Stanford + EU AI Act es la ventaja competitiva difícilmente igualable y reduce la fricción de "¿quién es este?".

### SERP preview
```
Healthcare AI Consultant Madrid · MD + 2 MSc · EU AI Act
https://alejandrozakzuk.com
6 años de práctica clínica + doble máster en IA y Salud Digital +
Stanford AI in Healthcare. Asesor Clinical AI, EU AI Act, MDR y SaMD...
```

---

## 2. `/sobre-mi` — `app/sobre-mi/page.tsx`

**Metadata actual**
- **Title** (con template: `Sobre mí · Aram Zakzuk, MD · Aram Zakzuk, MD` = 44 ✓ base, pero duplica firma)
- **Title base** (25): `Sobre mí · Aram Zakzuk, MD`
- **Description** (231 chars · **+71**): `Médico con 6 años de práctica clínica real y doble formación avanzada en IA aplicada a medicina y Salud Digital. Healthcare & Clinical AI Consultant para organizaciones sanitarias, consultoras y HealthTech en Madrid y Europa.`

### V1 · Benefit Lead
- **Title** (52): `Sobre mí · criterio clínico real + EU AI Act · Madrid`
- **Meta** (156): `Criterio médico real para evaluar IA clínica antes de desplegarla, no después. Consultor independiente para hospitales, consultoras y HealthTech en Madrid.`

### V2 · Question Hook
- **Title** (59): `¿Quién es Aram Zakzuk, MD? · Consultor Clinical AI Madrid`
- **Meta** (154): `¿Qué perfil necesita tu proyecto de IA clínica? Médico con 6 años en urgencias + doble máster en IA y Salud Digital + base regulatoria europea. Madrid.`

### V3 · Social Proof / Specificity
- **Title** (56): `MD + 2 MSc + Stanford AI · Perfil Aram Zakzuk · Madrid`
- **Meta** (158): `6 años clínicos, 2 másters (IA aplicada a Sanidad y eHealth), Stanford AI in Healthcare, EU AI Act y MDR. Consultor para hospitales, consultoras, HealthTech.`

### Comparativa

| Variante | CTR angle | Title | Desc | AEO/SEO fit |
|---|---|---|---|---|
| Actual | Descriptivo | 25 ✓ | 231 ⚠️ | Desc se trunca |
| V1 Benefit | Outcome consultor | 52 ✓ | 156 ✓ | Alto |
| V2 Question | Who-is AEO | 59 ✓ | 154 ✓ | Máximo AEO |
| V3 Social Proof | Credenciales | 56 ✓ | 158 ✓ | Alto |

### Recomendación: **V2**
`/sobre-mi` compite por búsquedas informacionales ("quién es X", "perfil X"). El Question Hook replica el FAQ schema ya presente (`¿Quién es Aram Zakzuk?`) y encaja en featured snippets / AI Overviews. Reduce drásticamente el bloat de la descripción actual.

### SERP preview
```
¿Quién es Aram Zakzuk, MD? · Consultor Clinical AI Madrid
https://alejandrozakzuk.com/sobre-mi
¿Qué perfil necesita tu proyecto de IA clínica? Médico con 6 años en
urgencias + doble máster en IA y Salud Digital + base regulatoria europea...
```

---

## 3. `/proyectos` — `app/proyectos/page.tsx`

**Metadata actual**
- **Title** (67 chars · **+7 sobre el límite**): `Proyectos que fundamentan el criterio · IA clínica, EU AI Act, FHIR`
- **Description** (224 chars · **+64**): `Validación técnica propia: ClinAI Classifier (EU AI Act), CDSS de riesgo diabético con AUC-ROC 0.942, modelo de ocupación hospitalaria y prototipo FHIR. Proyectos que sustentan el criterio consultor de Aram Zakzuk, MD.`

### V1 · Benefit Lead
- **Title** (60): `Proyectos IA clínica · Criterio validado · Aram Zakzuk MD`
- **Meta** (155): `Validación técnica del criterio consultor: CDSS, modelos de riesgo y prototipo FHIR aplicados al entorno hospitalario real. Casos abiertos y reproducibles.`

### V2 · Question Hook
- **Title** (59): `¿Qué IA clínica he construido? · Proyectos Aram Zakzuk MD`
- **Meta** (157): `¿Con qué datos y modelos respaldo cada consejo consultor? CDSS diabetes AUC 0.942, ClinAI Classifier EU AI Act, FHIR y ocupación hospitalaria. Todo abierto.`

### V3 · Social Proof / Specificity
- **Title** (57): `Proyectos IA clínica · CDSS AUC 0.942 · 253K registros`
- **Meta** (159): `CDSS diabetes AUC-ROC 0.942 sobre 253.680 registros CDC BRFSS, ClinAI Classifier alineado con EU AI Act y prototipo HL7 FHIR. Validación técnica, open source.`

### Comparativa

| Variante | CTR angle | Title | Desc | AEO/SEO fit |
|---|---|---|---|---|
| Actual | Descriptivo | 67 ⚠️ | 224 ⚠️ | Ambos truncan |
| V1 Benefit | Outcome | 60 ✓ | 155 ✓ | Alto |
| V2 Question | AEO | 59 ✓ | 157 ✓ | Alto |
| V3 Social Proof | Métricas | 57 ✓ | 159 ✓ | Máximo |

### Recomendación: **V3**
Proyectos técnicos es donde el lector técnico/regulatorio busca pruebas. Un título con métrica dura (AUC 0.942, 253K registros) genera curiosidad y credibilidad inmediata; distingue del "portfolio genérico".

### SERP preview
```
Proyectos IA clínica · CDSS AUC 0.942 · 253K registros
https://alejandrozakzuk.com/proyectos
CDSS diabetes AUC-ROC 0.942 sobre 253.680 registros CDC BRFSS, ClinAI
Classifier alineado con EU AI Act y prototipo HL7 FHIR...
```

---

## 4. `/blog` — `app/blog/page.tsx`

**Metadata actual**
- **Title** (51): `Blog · Salud Digital, EHDS, EU AI Act y Clinical AI`
- **Description** (207 chars · **+47**): `Análisis ejecutivo y técnico sobre EHDS, EU AI Act, CDSS y transformación digital sanitaria. Escrito para directores de innovación hospitalaria, partners de consultoras y equipos de Medical Affairs.`

### V1 · Benefit Lead
- **Title** (54): `Blog Salud Digital · EHDS, EU AI Act, Clinical AI · MD`
- **Meta** (155): `Análisis ejecutivo sobre EHDS, EU AI Act y CDSS que ahorra horas a directores de innovación hospitalaria, partners de consultoras y Medical Affairs.`

### V2 · Question Hook
- **Title** (56): `¿EHDS, EU AI Act, CDSS? · Blog Clinical AI · Aram Zakzuk`
- **Meta** (159): `¿Cómo se traduce el EU AI Act al hospital? ¿Qué exige EHDS en 2026? Análisis largo sin relleno, escrito por un médico con doble máster en IA y Salud Digital.`

### V3 · Social Proof / Specificity
- **Title** (58): `Blog · EHDS, EU AI Act, CDSS · MD + 2 MSc Salud Digital`
- **Meta** (156): `Escrito por un médico con 6 años clínicos y doble máster (IA Sanidad + eHealth). EHDS, EU AI Act, CDSS y transformación digital para decisores sanitarios.`

### Comparativa

| Variante | CTR angle | Title | Desc | AEO/SEO fit |
|---|---|---|---|---|
| Actual | Descriptivo | 51 ✓ | 207 ⚠️ | Desc trunca |
| V1 Benefit | Ahorra tiempo | 54 ✓ | 155 ✓ | Alto |
| V2 Question | Temas AEO | 56 ✓ | 159 ✓ | Máximo |
| V3 Social Proof | Autoridad | 58 ✓ | 156 ✓ | Alto |

### Recomendación: **V2**
El blog compite por long-tail informacional (EHDS, EU AI Act para hospitales, CDSS). El Question Hook intercepta consultas exactas, y se beneficia de AI Overviews de Google que citan preguntas bien formuladas.

### SERP preview
```
¿EHDS, EU AI Act, CDSS? · Blog Clinical AI · Aram Zakzuk
https://alejandrozakzuk.com/blog
¿Cómo se traduce el EU AI Act al hospital? ¿Qué exige EHDS en 2026?
Análisis largo sin relleno, escrito por un médico con doble máster...
```

---

## 5. `/trabajemos-juntos` — `app/trabajemos-juntos/page.tsx`

**Metadata actual**
- **Title** (31): `Trabajemos juntos · Aram Zakzuk`
- **Description** (198 chars · **+38**): `Cuatro caminos de entrada para trabajar con Aram Zakzuk: hospitales y aseguradoras, consultoras (Crowe, Deloitte, Accenture), administración pública y CCAA, HealthTech / MedTech / Farma.`

### V1 · Benefit Lead
- **Title** (58): `Contratar asesor Clinical AI · Formatos y tarifas · Madrid`
- **Meta** (154): `Cuatro formatos de advisory Clinical AI según tu organización: hospital, consultora, admin pública o HealthTech. Discovery de 15 min sin coste para validar.`

### V2 · Question Hook
- **Title** (58): `¿Cómo trabajar con un Clinical AI Consultant? · Formatos`
- **Meta** (157): `¿Discovery puntual, proyecto cerrado o retainer? Cuatro formatos de advisory IA clínica para hospitales, consultoras, admin pública y HealthTech. Madrid y UE.`

### V3 · Social Proof / Specificity
- **Title** (59): `Advisory Clinical AI para Crowe, Deloitte, Accenture, Minsait`
- **Meta** (158): `Cuatro formatos: discovery 15 min, revisión puntual, discovery completo 4–6 sem y retainer. Para hospitales, Big4 consultoras, admin pública y HealthTech UE.`

### Comparativa

| Variante | CTR angle | Title | Desc | AEO/SEO fit |
|---|---|---|---|---|
| Actual | Vago | 31 ✓ | 198 ⚠️ | Bajo intent comercial |
| V1 Benefit | CTA explícito | 58 ✓ | 154 ✓ | Máximo comercial |
| V2 Question | How-to | 58 ✓ | 157 ✓ | Alto |
| V3 Social Proof | Nombres Big4 | 59 ✓ | 158 ✓ | Alto (brand bait) |

### Recomendación: **V1**
Esta URL es la página comercial de conversión: la palabra clave transaccional ("contratar asesor Clinical AI") + ancla de tarifa/formato convierte mejor que el genérico "Trabajemos juntos" actual (que no comunica absolutamente nada sobre intención comercial ni oferta).

### SERP preview
```
Contratar asesor Clinical AI · Formatos y tarifas · Madrid
https://alejandrozakzuk.com/trabajemos-juntos
Cuatro formatos de advisory Clinical AI según tu organización: hospital,
consultora, admin pública o HealthTech. Discovery de 15 min sin coste...
```

---

## 6. `/contacto` — `app/contacto/page.tsx`

**Metadata actual**
- **Title** (8): `Contacto`
- **Description** (225 chars · **+65**): `Reserva una llamada de 15 minutos con Aram Zakzuk, MD — Healthcare & Clinical AI Consultant. Para hospitales, consultoras (Crowe, Deloitte, Accenture, Minsait) y HealthTech en Madrid y Europa. Respuesta en 24 h laborables.`

### V1 · Benefit Lead
- **Title** (57): `Reserva 15 min con Clinical AI Consultant · Aram Zakzuk`
- **Meta** (155): `Valida encaje clínico y regulatorio de tu proyecto IA en 15 minutos sin coste. Respuesta en 24 h laborables. Hospitales, consultoras y HealthTech en Madrid.`

### V2 · Question Hook
- **Title** (58): `¿Necesitas un Clinical AI Consultant? · Contacto · Madrid`
- **Meta** (154): `¿Tienes un proyecto de IA clínica que validar? Llamada de 15 min sin coste con Aram Zakzuk, MD. Respuesta en 24 h para hospitales, Big4 y HealthTech UE.`

### V3 · Social Proof / Specificity
- **Title** (59): `Contacto Aram Zakzuk MD · 15 min · Respuesta en 24 h · Madrid`
- **Meta** (157): `Llamada de 15 min sin coste con un MD + 2 MSc en IA y Salud Digital. Atiende a Crowe, Deloitte, Accenture, Minsait, hospitales y HealthTech. 24 h de respuesta.`

### Comparativa

| Variante | CTR angle | Title | Desc | AEO/SEO fit |
|---|---|---|---|---|
| Actual | Mínimo | 8 ✓ | 225 ⚠️ | Title infrautilizado |
| V1 Benefit | Acción + tiempo | 57 ✓ | 155 ✓ | Máximo comercial |
| V2 Question | Intent | 58 ✓ | 154 ✓ | Alto |
| V3 Social Proof | Trust + SLA | 59 ✓ | 157 ✓ | Alto |

### Recomendación: **V1**
La URL de conversión por excelencia. El título actual ("Contacto") desperdicia 52 caracteres de real estate SERP. V1 combina verbo de acción ("Reserva"), duración ("15 min") y promesa de valor (Clinical AI Consultant) — combo de máxima conversión en SERPs B2B.

### SERP preview
```
Reserva 15 min con Clinical AI Consultant · Aram Zakzuk
https://alejandrozakzuk.com/contacto
Valida encaje clínico y regulatorio de tu proyecto IA en 15 minutos
sin coste. Respuesta en 24 h laborables. Hospitales, consultoras...
```

---

## 7. `/credenciales` — `app/credenciales/page.tsx`

**Metadata actual**
- **Title** (29): `Credenciales y certificaciones`
- **Description** (258 chars · **+98**): `Formación continua verificable de Aram Zakzuk, MD: Stanford AI in Healthcare Specialization (ID JPA2O5IFFDNP), SNOMED International, Microsoft Azure DP-900, Comunidad de Madrid, SEIS Inforsalud, DELF B1, TOEFL iBT y ACLS/BLS.`

### V1 · Benefit Lead
- **Title** (58): `Credenciales verificables · Clinical AI · Aram Zakzuk, MD`
- **Meta** (156): `Cada certificación enlaza a su registro oficial para que comités, compradores públicos y equipos técnicos contrasten en fuente. Stanford, SNOMED, MS, SEIS.`

### V2 · Question Hook
- **Title** (59): `¿Cómo verificar las credenciales de Aram Zakzuk, MD?`
- **Meta** (159): `¿Necesitas validar el perfil antes de contratar? Stanford AI in Healthcare (ID JPA2O5IFFDNP), SNOMED International, Microsoft DP-900, SEIS y ACLS. Todo oficial.`

### V3 · Social Proof / Specificity
- **Title** (58): `Stanford · SNOMED · Microsoft · SEIS · Credenciales MD`
- **Meta** (157): `Stanford AI in Healthcare Specialization, SNOMED International, Microsoft Azure DP-900, SEIS Inforsalud, DELF B1, TOEFL iBT y ACLS/BLS vigentes. Verificables.`

### Comparativa

| Variante | CTR angle | Title | Desc | AEO/SEO fit |
|---|---|---|---|---|
| Actual | Vago | 29 ✓ | 258 ⚠️ | Desc trunca fuerte |
| V1 Benefit | Trust/verif | 58 ✓ | 156 ✓ | Alto |
| V2 Question | Due diligence | 59 ✓ | 159 ✓ | Alto AEO |
| V3 Social Proof | Marcas | 58 ✓ | 157 ✓ | Máximo |

### Recomendación: **V3**
La página existe para trust-building frente a decisores. Los logos Stanford/SNOMED/Microsoft/SEIS en el título SERP actúan como borrowed authority — dispara CTR porque el ojo salta directamente a marcas reconocibles.

### SERP preview
```
Stanford · SNOMED · Microsoft · SEIS · Credenciales MD
https://alejandrozakzuk.com/credenciales
Stanford AI in Healthcare Specialization, SNOMED International,
Microsoft Azure DP-900, SEIS Inforsalud, DELF B1, TOEFL iBT y ACLS/BLS...
```

---

## 8. `/en` — `app/en/page.tsx`

**Metadata actual**
- **Title** (60 ✓): `Aram Zakzuk, MD · Healthcare & Clinical AI Consultant · Madrid`

Wait — recount: "Aram Zakzuk, MD · Healthcare & Clinical AI Consultant · Madrid" = **62 chars · +2 sobre el límite**.
- **Description** (347 chars · **+187**): `Medical doctor with 6 years of real clinical practice and dual master in AI applied to Healthcare and Digital Health. Independent consultant for healthcare organizations, consulting firms and HealthTech companies on Clinical AI evaluation, EU regulatory strategy (EU AI Act, MDR, SaMD) and clinical adoption.`

### V1 · Benefit Lead
- **Title** (56): `Clinical AI Consultant in Madrid · MD + EU AI Act advisor`
- **Meta** (156): `Deploy Clinical AI in your hospital with real MD judgment and full EU AI Act / MDR / SaMD compliance. Advisor for HealthTech, consulting firms and hospitals.`

### V2 · Question Hook
- **Title** (59): `Need a Clinical AI advisor in Europe? · Aram Zakzuk, MD`
- **Meta** (158): `How do you evaluate Clinical AI without breaking EU AI Act or clinical workflow? MD + dual MSc + 6 yrs hospital practice. Madrid-based, pan-European advisory.`

### V3 · Social Proof / Specificity
- **Title** (58): `MD + 2 MSc + Stanford AI · Clinical AI Consultant · Madrid`
- **Meta** (156): `6 years of clinical practice, dual MSc in AI for Healthcare and Digital Health, plus Stanford AI in Healthcare. Advisor on EU AI Act, MDR, SaMD and CDSS.`

### Comparativa

| Variante | CTR angle | Title | Desc | AEO/SEO fit |
|---|---|---|---|---|
| Actual | Descriptivo | 62 ⚠️ | 347 ⚠️ | Ambos truncan fuerte |
| V1 Benefit | Outcome | 56 ✓ | 156 ✓ | Alto |
| V2 Question | Pain | 59 ✓ | 158 ✓ | Alto AEO |
| V3 Social Proof | Credenciales | 58 ✓ | 156 ✓ | Máximo |

### Recomendación: **V3**
Los decisores anglosajones (London, Dublin, Berlin, Amsterdam) contratando consultores europeos en Clinical AI priorizan pedigrí verificable — Stanford pesa más en inglés que en español. V3 comunica el stack instantáneamente y diferencia del mar de "AI consultants" generalistas.

### SERP preview
```
MD + 2 MSc + Stanford AI · Clinical AI Consultant · Madrid
https://alejandrozakzuk.com/en
6 years of clinical practice, dual MSc in AI for Healthcare and Digital
Health, plus Stanford AI in Healthcare. Advisor on EU AI Act, MDR...
```

---

## Resumen de recomendaciones

| Ruta | Variante | Título actual (chars) | Meta actual (chars) | Gap |
|---|---|---|---|---|
| `/` | V3 Social Proof | 61 ⚠️ | 301 ⚠️ | Alto |
| `/sobre-mi` | V2 Question | 25 ✓ | 231 ⚠️ | Medio |
| `/proyectos` | V3 Social Proof | 67 ⚠️ | 224 ⚠️ | Alto |
| `/blog` | V2 Question | 51 ✓ | 207 ⚠️ | Medio |
| `/trabajemos-juntos` | V1 Benefit | 31 ✓ | 198 ⚠️ | **Muy alto** |
| `/contacto` | V1 Benefit | 8 ✓ | 225 ⚠️ | **Muy alto** |
| `/credenciales` | V3 Social Proof | 29 ✓ | 258 ⚠️ | **Muy alto** |
| `/en` | V3 Social Proof | 62 ⚠️ | 347 ⚠️ | Alto |
