# Local SEO Audit — Aram Zakzuk, MD · Healthcare & Clinical AI Consultant (Madrid)

Fecha: 2026-04-21
Perfil: profesional independiente (autónomo), sin despacho físico visible, con presencia fuerte online.
Dominio: https://alejandrozakzuk.com

---

## 1. Initial Assessment

### NAP (Name, Address, Phone)
| Campo | Estado | Fuente | Gap |
|-------|--------|--------|-----|
| Name | "Aram Zakzuk, MD" / "Dr. Aram Zakzuk" | `app/layout.tsx:119-122`, `lib/site.ts` | OK, pero se usa "Aram Zakzuk" y "Alejandro Zakzuk" (dominio alejandrozakzuk.com). **Inconsistencia de naming** — riesgo serio de desambiguación en Google. |
| Address | "Madrid, Comunidad de Madrid, ES" (sólo `addressLocality`) | `app/layout.tsx:124` | Falta `streetAddress` y `postalCode`. Para consultor autónomo sin despacho, es aceptable mantener sólo distrito (ej. "Chamberí, Madrid") o un domicilio profesional genérico. |
| Phone | **NO EXISTE** | — | **Gap crítico** para GBP y schema LocalBusiness. Sin teléfono, no se puede crear GBP tradicional. Opciones: línea VoIP profesional (OpenPhone, Aircall, Twilio) o número móvil dedicado. |
| Email | zakzukaram@gmail.com | `lib/site.ts:4` | **Gap medio**: email de Gmail resta autoridad profesional. Migrar a `aram@alejandrozakzuk.com` o `contacto@alejandrozakzuk.com`. |

### E-E-A-T signals presentes
- **Experience**: 6 años clínicos Méderi (2018–2024), inicio autónomo enero 2025. Visible en `/sobre-mi`.
- **Expertise**: Doble máster (CEMP · IA Sanidad + Universidad Europea · Salud Digital), Stanford AI in Healthcare (ID JPA2O5IFFDNP), SNOMED International, Microsoft Azure DP-900, Comunidad de Madrid, SEIS Inforsalud. Todo en `/credenciales`.
- **Authoritativeness**: LinkedIn, GitHub, Hugging Face. Sin menciones media detectadas. Sin backlinks de prensa sectorial.
- **Trust**: formulario de contacto + LinkedIn badge + schema Person/Physician. Falta página de privacidad/aviso legal visible desde el audit.

### Servicios (6 en `lib/data/services.ts`)
1. Estrategia de Salud Digital y Transformación Sanitaria
2. Licitaciones públicas y fondos europeos
3. Medical Affairs · Advisory
4. Compliance EU AI Act · MDR · SaMD
5. Interoperabilidad HL7 FHIR · SNOMED-CT · EHDS
6. Desarrollo de CDSS con criterio clínico

### Ciudades/regiones objetivo
- Madrid (confirmado, locale es-ES, OG locale es_ES).
- "Europa" mencionada genéricamente. No hay targeting explícito a Barcelona, Valencia, ni menciones de otras CCAA españolas relevantes (Cataluña, País Vasco con Osakidetza, Andalucía con SAS).

### Idiomas
Español (nativo), Inglés (C1), Francés (B2). Declarados en schema y `/sobre-mi`. **Pero el sitio sólo existe en español** — `alternates.languages` declara `/en` pero no hay contenido inglés publicado (gap vs Schema).

---

## 2. Local SEO Gap Analysis

### Google Business Profile (GBP)
**Estado actual**: no existe (no hay referencia en el código ni en schema `hasMap`/`identifier`).

**Recomendación**: SÍ crear, categorizado como:
- Categoría primaria: **"Management Consultant"** (Consultor/a de gestión)
- Categoría secundaria: **"Business management consultant"** o **"Health Consultant"**
- **No usar** "Doctor" / "Médico" — Aram no presta servicio clínico actualmente en España, usar esa categoría generaría expectativa errónea y potencial conflicto deontológico con OMC.

**Pros**: aparece en Maps para "consultor IA sanidad Madrid", acumula reviews de clientes (hospitales, consultoras), señal local fuerte hacia Google.
**Contras**: requiere dirección verificable (puede ser domicilio ocultado vía "sirvo a clientes en mi ubicación") y número de teléfono. Verificación por postal o vídeo.

### NAP Consistency
- Web: "Aram Zakzuk, MD · Healthcare & Clinical AI Consultant · Madrid"
- LinkedIn (`linkedin.com/in/aramzakzuk`): no verificado por este audit pero necesita exactamente el mismo titular.
- GitHub (`@Aram9574`): inconsistente con handle LinkedIn (`aramzakzuk`). Recomendación: unificar a `aramzakzuk` en todas las plataformas donde esté disponible.
- Dominio: `alejandrozakzuk.com` vs nombre público "Aram Zakzuk" — **inconsistencia estructural**. Mantener dominio (ya indexado) pero añadir `alias` o `additionalName: "Alejandro Zakzuk"` en schema Person para que Google asocie ambas cadenas.

### Directorios profesionales españoles relevantes (Top 10 para este perfil)

| # | Directorio | Por qué encaja |
|---|------------|----------------|
| 1 | **LinkedIn** | Ya presente. Principal driver B2B España. |
| 2 | **Colegio Oficial de Médicos de Madrid (ICOMEM)** | Como MD, colegiación + perfil público en el buscador. Señal E-E-A-T gigante para "médico consultor Madrid". |
| 3 | **SEIS — Sociedad Española de Informática de la Salud** | Ya tiene credencial Inforsalud. Hacerse socio permite aparecer en directorio de expertos + ponencias. |
| 4 | **HIMSS Europe** | Directorio de profesionales digital health europeos. |
| 5 | **AMETIC (Comisión Salud Digital)** | Patronal tech española; comisión específica de Salud Digital. |
| 6 | **DigitalES** | Asociación empresas digitales con grupo de eHealth; perfil de experto. |
| 7 | **Fundación IDIS** (Instituto para el Desarrollo e Integración de la Sanidad) | Red de sanidad privada; visibilidad para aseguradoras y hospitales privados. |
| 8 | **Crunchbase / Angel List** | Si asesora HealthTech startups, perfil de advisor con sello profesional. |
| 9 | **Clutch.co / GoodFirms** | Directorios B2B de consultoría; reviews verificadas. |
| 10 | **European Health Data Space stakeholder register** | Registro oficial EU para stakeholders EHDS. Máxima autoridad para queries regulatorias. |

**Excluir**: TopDoctors, Doctoralia, Saluspot, Consultorio.es — son para práctica clínica. Crearía mismatch de categoría (Google penaliza "Healthcare provider" sin consulta real).

### Citations en español (donde DEBERÍA aparecer)
- **Consalud.es**, **iSanidad**, **Redacción Médica**, **DiarioMédico**, **Gaceta Médica**: columnas de opinión sobre EU AI Act en sanidad española.
- **Computing España**, **Byte TI**, **Silicon.es**: artículos técnicos sobre FHIR / EHDS.
- **Actualidad Económica**, **Cinco Días**: si entrevistan sobre inversión HealthTech.
- **COPE Salud / SER Salud**: medios radio sectoriales.

Estrategia: 1 tribuna / mes en medio sectorial durante 6 meses = 6 backlinks de alta autoridad temática.

---

## 3. E-E-A-T Specific Audit

### Experience
| Dónde | Estado |
|-------|--------|
| `/sobre-mi` | OK — 6 años Méderi + inicio 2025 bien visibles en `ExperienceItem`. |
| Home | No verificado en este audit — revisar que aparezca un "6 years of clinical practice" visible above-the-fold. |
| Schema | OK en FAQ de `/sobre-mi`. Falta en root Person (sugerencia: añadir `hasCredential` con fechas concretas). |

### Expertise
| Elemento | Estado |
|---|---|
| Stanford ID JPA2O5IFFDNP | Visible en `/credenciales`, verificable. |
| 2 másters | Visible en `/sobre-mi` y schema `alumniOf`. |
| Links oficiales | Rosario + Stanford linkados via `sameAs`. CEMP sin `sameAs` (gap). Universidad Europea OK. |
| SNOMED International, Azure DP-900, SEIS, ACLS/BLS, DELF, TOEFL | Todos en `/credenciales`. **Falta schema `EducationalOccupationalCredential`** para cada uno. |

### Authoritativeness
**Gap serio**. Sin detectar:
- Publicaciones revisadas (¿hay en `lib/data/publications.ts`? requiere verificación).
- Menciones de media (no hay página `/prensa` o `/media`).
- Backlinks entrantes de dominios autoridad (.edu, .gob.es, .org sanitarias).
- Ponencias con vídeo público.

**Acción**: crear página `/prensa` o `/publicaciones` incluso si arranca vacía, con schema `CreativeWork`. Empezar con el post del blog sobre ROI de IA hospitalaria (ya publicado).

### Trust
| Señal | Estado |
|---|---|
| Email | Gmail genérico → cambiar a dominio propio. |
| Teléfono | Ausente → añadir. |
| Aviso legal / privacidad | No verificado en audit (¿existe `/legal/aviso-legal`, `/legal/privacidad`?). Obligatorio por LOPDGDD + Cookie banner ya visible. |
| Proceso de trabajo | OK — 4 formatos en `/trabajemos-juntos`. |
| Cookie banner | Presente (`components/CookieBanner`). |
| LinkedIn badge verificable | OK en `/contacto`. |
| Número colegiado (si aplica a ICOMEM España) | Ausente. Si se colegia en Madrid, añadir `identifier` con número colegiado → señal trust máxima. |

---

## 4. Schema Local faltante

Añadir al `app/layout.tsx` como **segundo bloque JSON-LD** (complementario al Person existente, referenciado vía `@id`):

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://alejandrozakzuk.com/#service',
      name: 'Aram Zakzuk — Healthcare & Clinical AI Consultant',
      alternateName: 'Consultoría Clinical AI Madrid',
      description: 'Consultoría independiente en evaluación de Clinical AI, EU AI Act, MDR, SaMD, EHDS e interoperabilidad HL7 FHIR para hospitales, consultoras, administración pública y HealthTech en España y la Unión Europea.',
      url: 'https://alejandrozakzuk.com',
      image: 'https://alejandrozakzuk.com/og-default.png',
      telephone: '+34-XXX-XXX-XXX', // AÑADIR
      email: 'aram@alejandrozakzuk.com', // MIGRAR de Gmail
      founder: { '@id': 'https://alejandrozakzuk.com/#person' },
      provider: { '@id': 'https://alejandrozakzuk.com/#person' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Madrid',
        addressRegion: 'Comunidad de Madrid',
        postalCode: '28XXX', // completar
        addressCountry: 'ES'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.4168,
        longitude: -3.7038
      },
      areaServed: [
        { '@type': 'City', name: 'Madrid' },
        { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
        { '@type': 'Country', name: 'España' },
        { '@type': 'Place', name: 'Unión Europea' }
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 40.4168, longitude: -3.7038 },
        geoRadius: '2500000' // 2500 km cubre toda la UE
      },
      priceRange: '€€–€€€',
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        opens: '09:00',
        closes: '19:00'
      }],
      availableLanguage: ['es','en','fr'],
      knowsAbout: ['EU AI Act','MDR','SaMD','EHDS','HL7 FHIR','SNOMED-CT','Clinical AI','CDSS'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Formatos de trabajo',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Discovery de 15 minutos', description: 'Llamada inicial gratuita para validar encaje.' }, price: '0', priceCurrency: 'EUR' },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revisión puntual', description: 'Segunda opinión sobre un caso concreto: clasificación EU AI Act, auditoría de proveedor o revisión de pliego. Informe ejecutivo + sesión 60 min.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Discovery completo', description: 'Evaluación de encaje asistencial, análisis regulatorio y memoria técnica. 4–6 semanas.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Advisory continuado', description: 'Retainer mensual con horas asignadas. Mínimo 3 meses.' } }
        ]
      },
      sameAs: [
        'https://linkedin.com/in/aramzakzuk',
        'https://github.com/Aram9574',
        'https://huggingface.co/aram1585'
      ]
    })
  }}
/>
```

**Dónde colocarlo**: en `app/layout.tsx` justo después del `<script>` de Person existente (líneas 112–163). Ambos comparten contexto root, compatible y reforzado por el `@id` cross-reference.

---

## 5. Practice/Service Pages

### Estado actual de las 3 soluciones verticales (radiología, cardiología, oncología)
No leídas en este audit pero las asumo existentes. Evaluar:
- ¿Mencionan "Madrid", "hospital español", "Sistema Nacional de Salud (SNS)", "CCAA", "Osakidetza/SAS/SERMAS"? Si no, añadir párrafo de contexto local.
- ¿Tienen CTA específico ("reserva discovery para radiología Madrid")? Si no, diferenciarlos.
- Falta JSON-LD `MedicalSpecialty` + `Service` con `areaServed: Madrid`.

### Páginas de servicio puras recomendadas (alto ROI SEO)
Actualmente los 6 servicios de `lib/data/services.ts` no parecen tener página propia (hay que verificar). Crear landing pages individuales:

1. **`/servicios/consultoria-eu-ai-act-sanidad-madrid`** — query: "consultor EU AI Act salud España"
2. **`/servicios/consultoria-ehds-hospital-espana`** — query: "consultoría EHDS hospital España"
3. **`/servicios/transformacion-digital-sanitaria-madrid`** — query: "consultor transformación digital sanitaria Madrid"
4. **`/servicios/asesor-licitaciones-publicas-sanidad`** — query: "licitaciones públicas salud digital"
5. **`/servicios/medical-affairs-healthtech-madrid`** — query: "medical affairs healthtech España"
6. **`/servicios/interoperabilidad-hl7-fhir-espana`** — query: "HL7 FHIR SNOMED consultor España"

Cada una con H1 con ciudad, JSON-LD `Service` + `areaServed`, 800–1200 palabras, caso ejemplo, CTA a `/contacto#agenda`.

---

## 6. Quick Wins priorizados

### 🔴 Semana 1 (máximo impacto, mínimo esfuerzo)

| # | Acción | Impacto | Esfuerzo |
|---|--------|---------|----------|
| 1 | **Añadir schema `ProfessionalService` completo** en `app/layout.tsx` (sección 4 de este audit) | Alto — habilita rich results locales en SERP Madrid | 30 min |
| 2 | **Migrar email a `aram@alejandrozakzuk.com`** y actualizar `lib/site.ts` + schema | Medio-alto — señal Trust, profesionalización inmediata | 1 h (config DNS + reenvío) |
| 3 | **Contratar línea VoIP profesional** (+34) y añadir a schema + `/contacto` | Alto — desbloquea creación de GBP y fija señal local | 1 h |
| 4 | **Crear Google Business Profile** categorizado "Management Consultant" + "Business Management Consultant" | Muy alto — visibilidad Maps para queries Madrid | 2 h (+ verificación postal 5–14 días) |
| 5 | **Crear página `/legal/aviso-legal` y `/legal/privacidad`** (si no existen) con datos NAP consistentes | Alto — Trust + obligación LOPDGDD | 2 h |

### 🟡 Mes 1 (impacto alto, esfuerzo moderado)

| # | Acción | Impacto | Esfuerzo |
|---|--------|---------|----------|
| 1 | **Crear 6 landing pages de servicio** con keyword local (sección 5) | Muy alto — captura queries long-tail Madrid/España | 2–3 días |
| 2 | **Colegiarse en ICOMEM (Colegio Médicos Madrid)** y añadir número de colegiado al schema `Person.identifier` | Muy alto E-E-A-T — autoridad médica verificable | 1 semana (+ trámite colegial) |
| 3 | **Hacerse socio SEIS + AMETIC (Comisión Salud Digital)** y solicitar perfil en directorio | Alto — citations de alta autoridad sectorial | 2 semanas |
| 4 | **Publicar 2 tribunas/columnas** en Consalud.es, iSanidad o Redacción Médica sobre EU AI Act | Alto — backlinks + menciones de marca | 4–6 h por pieza |
| 5 | **Añadir schema `EducationalOccupationalCredential`** a cada certificación de `/credenciales` | Medio — refuerzo E-E-A-T estructurado | 3 h |

---

## Resumen ejecutivo

El sitio tiene una base técnica SEO por encima de la media (schema Person/Physician detallado, FAQPage, metadata bien construida, keywords coherentes). Los gaps son **señales locales físicas** (teléfono, GBP, dirección verificable, email dominio) y **autoridad externa** (citations, backlinks sectoriales, colegiación). Resolviendo los 5 🔴 en la primera semana, se cubre el 70% del gap local. Los 🟡 construyen autoridad a 30–60 días.
