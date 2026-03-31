# AUDITORÍA COMPLETA — alejandrozakzuk.com
**Fecha:** 2026-03-31
**Auditor:** Claude Code (Anthropic)
**Propietario:** Alejandro Zakzuk, MD
**Objetivo:** Maximizar impacto en procesos de selección (consultoría salud digital, pharma, healthtech, innovación hospitalaria)

---

## 1. RESUMEN EJECUTIVO

Los 5 puntos críticos ordenados por impacto:

1. **`/servicios` es un lastre activo para la candidatura** — Una página entera con paquetes de precio (€€, €€€) y FAQ orientada a clientes contradice el mensaje de búsqueda de empleo. Un reclutador que la visita asume que es freelance.

2. **Los proyectos estrella tienen secciones placeholder visibles** — Las páginas de detalle de los 3 proyectos principales muestran texto genérico en "Lecciones" (*"Iteraciones, riesgos y aprendizajes clave."*) y "Próximos pasos" (*"Extensiones y roadmap sugerido."*). Destruye la credibilidad técnica.

3. **Inconsistencia crítica de GitHub** — El navbar enlaza a `github.com/Aram9574`, el footer y Schema.org a `github.com/azakzuk`. Un reclutador puede llegar al perfil equivocado o incorrecto.

4. **`/recursos` no funciona** — Dos recursos con `href="#"` (enlaces rotos), blog marcado como *"próximamente"* y newsletter sin backend. Señal de sitio sin mantenimiento.

5. **Las publicaciones enlazan a perfiles generales, no a contenido específico** — El artículo de LinkedIn lleva al perfil general. Los vídeos de YouTube al canal, no al vídeo. No se puede verificar que el contenido exista.

---

## 2. HALLAZGOS POR ÁREA

---

### Área 1: Coherencia de Mensaje

| # | Hallazgo | Archivo afectado | Severidad |
|---|----------|-----------------|-----------|
| 1.1 | **`/servicios` comunica "cliente, no empleador"**. Paquetes con duración (2–8 semanas), rangos de precio (€€, €€€) y FAQ orientada a contratación freelance. Ningún reclutador que llega aquí entiende que el propietario busca empleo. | `app/servicios/page.tsx` | **Alta** |
| 1.2 | **El CTA de contacto dice *"Cuéntame tu reto clínico u operativo"*** — orientado a cliente, no a oportunidad laboral. | `app/contacto/page.tsx` | **Media** |
| 1.3 | **`/servicios` está indexada en el sitemap** aunque no aparece en el navbar. La página es accesible por búsqueda orgánica y no tiene ningún aviso. | `app/sitemap.ts`, `app/servicios/` | **Alta** |
| 1.4 | **La disponibilidad laboral es implícita, no explícita** — El hero no tiene una frase directa de candidatura. Solo la metadata dice *"disponible para roles"*, invisible para el visitante. | `app/page.tsx`, `app/layout.tsx` | **Media** |
| 1.5 | La sección *"Lo que aporto"* menciona *"disponibilidad inmediata en Madrid"* — está bien, pero queda enterrada al final de la página. | `app/page.tsx` | **Baja** |

---

### Área 2: Proyectos

| # | Hallazgo | Archivo afectado | Severidad |
|---|----------|-----------------|-----------|
| 2.1 | **Placeholders visibles en TODOS los proyectos**: *"Lecciones: Iteraciones, riesgos y aprendizajes clave."* y *"Próximos pasos: Extensiones y roadmap sugerido."* — texto genérico que ve cualquier visitante. | `app/proyectos/[slug]/page.tsx` | **Alta** |
| 2.2 | **`ocupacion-hospitalaria-ia` no tiene métricas concretas** — solo dice *"mejora de planificación de camas y reducción de cuellos de botella"*. Sin RMSE, MAE ni porcentaje. Contrasta negativamente con los otros dos proyectos estrella. | `lib/data/projects.ts` | **Alta** |
| 2.3 | **Proyectos 5-12 son ejercicios de máster sin diferenciación** — `ml-riesgo-cardiovascular`, `bcancer-logistic-regression`, `prediccion-readmisiones`, etc. están listados al mismo nivel visual que los proyectos estrella, sin etiqueta que indique su naturaleza (académico vs. real). | `lib/data/projects.ts`, `app/proyectos/page.tsx` | **Media** |
| 2.4 | **Imágenes de portada repetidas**: `framingham.jpg` se usa en dos proyectos distintos. `prediccion-readmisiones.jpg` se reutiliza para `riesgo-metabolico-cdc`. `longitud-estancia-ml.jpg` aparece en dos proyectos diferentes. | `lib/data/projects.ts` | **Media** |
| 2.5 | **Los repos de GitHub en los proyectos apuntan a `github.com/Aram9574` sin slug específico** — enlazan al perfil general, no al repositorio concreto del proyecto. | `lib/data/projects.ts` | **Media** |
| 2.6 | **El slug del proyecto CDC en la solicitud era `ml-riesgo-metabolico-cdc-brfss`** pero en el código es `riesgo-metabolico-cdc`. Conviene verificar que las rutas esperadas resuelven correctamente. | `lib/data/projects.ts` | **Baja** |

---

### Área 3: SEO Técnico

| # | Hallazgo | Archivo afectado | Severidad |
|---|----------|-----------------|-----------|
| 3.1 | **`/proyectos` tiene `title: 'Proyectos'`** — genérico, sin nombre ni keywords de valor. | `app/proyectos/page.tsx` | **Media** |
| 3.2 | **`/servicios` aparece en el sitemap** — si se elimina o reformula, debe desindexarse explícitamente. | `app/sitemap.ts` | **Media** |
| 3.3 | **`lastModified` del sitemap es `new Date()`** — todas las páginas reportan la fecha del último build como fecha de modificación. Google puede penalizarlo si detecta que todo actualiza simultáneamente siempre. | `app/sitemap.ts` | **Baja** |
| 3.4 | **`robots.txt` es correcto** — permite todo, declara sitemap. Sin issues. | `app/robots.ts` | Sin issue |
| 3.5 | **Schema.org usa `github.com/azakzuk` en `sameAs`** pero el navbar enlaza a `github.com/Aram9574` — inconsistencia de señales para motores de búsqueda. | `app/layout.tsx` | **Media** |
| 3.6 | **OpenGraph description** dice *"Portafolio y proyectos de IA clínica, interoperabilidad y ERP"* — no menciona búsqueda de empleo ni sector objetivo. | `app/layout.tsx` | **Baja** |

---

### Área 4: Rendimiento y Experiencia

| # | Hallazgo | Archivo afectado | Severidad |
|---|----------|-----------------|-----------|
| 4.1 | **No se ejecutó análisis de performance real (Lighthouse)** — requiere URL pública activa o entorno de staging. | — | **Pendiente** |
| 4.2 | **Uso de `next/image` no confirmado en todas las imágenes de portada de proyectos** — si alguna usa `<img>` nativo, perderá optimización y lazy loading automático. | `components/` | **Media** |
| 4.3 | **`next.config.mjs` limpio** — `reactStrictMode: true`, `typedRoutes`, `optimizePackageImports: []`. Sin riesgo. | `next.config.mjs` | Sin issue |

---

### Área 5: Navegación y Estructura

| # | Hallazgo | Archivo afectado | Severidad |
|---|----------|-----------------|-----------|
| 5.1 | **`/servicios` no aparece en el navbar** (coherente si se quiere mantener oculto), pero la página está activa e indexada. Puede recibir tráfico orgánico sin contexto. | `components/Navbar.tsx` | **Alta** |
| 5.2 | **El footer enlaza a `privacy.html` y `cookies.html`** (archivos estáticos en `/public`) además de las rutas `/legal/*`. Doble sistema. Los archivos existen en `/public`, pero la duplicidad es confusa. | `components/Footer.tsx` | **Media** |
| 5.3 | **`/educacion` redirige a `/sobre-mi#educacion`** — comportamiento correcto y limpio. | `app/educacion/page.tsx` | Sin issue |
| 5.4 | **`/recursos` tiene dos cards con `href="#"`** que no llevan a ningún destino. | `app/recursos/page.tsx` | **Alta** |
| 5.5 | **El CV descargable no está confirmado en la página de proyectos** — reclutadores que entran por SEO a `/proyectos` no tienen acceso directo al CV. | `app/proyectos/page.tsx` | **Baja** |
| 5.6 | **`/habilidades` y `/experiencia` existen como rutas sin enlace en el navbar** — páginas accesibles pero sin navegación principal. | `components/Navbar.tsx` | **Baja** |

---

### Área 6: Credibilidad y Confianza

| # | Hallazgo | Archivo afectado | Severidad |
|---|----------|-----------------|-----------|
| 6.1 | **Testimonial 1 (Sara Lopez, "Especialista IA, CEMP")** — nombre y cargo creíbles, referencia al proyecto de ocupación hospitalaria. Bien estructurado. | `app/page.tsx` | Sin issue |
| 6.2 | **Testimonial 2 (Dra. Margarita Olaya, "Medico Internista")** — valida la parte clínica (rotación/internado) pero no las habilidades de IA. Un reclutador tech no encuentra validación técnica en este segundo testimonio. | `app/page.tsx` | **Media** |
| 6.3 | **El artículo de LinkedIn en publicaciones enlaza al perfil general** — no se puede verificar que el post exista ni que tenga alcance. | `lib/data/publications.ts` | **Media** |
| 6.4 | **Los 3 vídeos de YouTube enlazan al canal `@MedIA_ES_1`**, no a vídeos concretos. Si el canal tiene poca actividad visible, resta credibilidad. | `lib/data/publications.ts` | **Media** |
| 6.5 | **Métricas del ERP** (*"38% reducción en tiempo de registro, 22% reducción en errores de medicación"*) — defensibles pero sin metodología de medición visible. Conviene tener contexto disponible ante preguntas en entrevista. | `lib/data/projects.ts` | **Baja** |
| 6.6 | **GitHub `Aram9574` vs `azakzuk`** — dos handles activos en el sitio. Un reclutador que busca el perfil puede llegar al incorrecto o a uno con menos actividad visible. | `lib/site.ts`, `components/Navbar.tsx` | **Alta** |

---

### Área 7: Contenido Pendiente o Incompleto

| # | Hallazgo | Archivo afectado | Severidad |
|---|----------|-----------------|-----------|
| 7.1 | **"Lecciones" y "Próximos pasos" con texto placeholder** en la plantilla de detalle de proyecto — visible para todo visitante. | `app/proyectos/[slug]/page.tsx` | **Alta** |
| 7.2 | **`/recursos` no funciona en ninguna de sus secciones** — 2 recursos con `href="#"`, blog *"próximamente"*, newsletter sin backend conectado. | `app/recursos/page.tsx` | **Alta** |
| 7.3 | **`/experiencia` tiene solo 2 items hardcodeados** (*"Proyecto ML clínico"* y *"ERP geriátrico (MVP)"*) con *"Portafolio"* como institución. No refleja historia clínica real. | `app/experiencia/page.tsx` | **Media** |
| 7.4 | **`/publicaciones/[slug]`** — incluidas en el sitemap pero sin verificar que las páginas de detalle tengan contenido real. | `app/publicaciones/[slug]/` | **Media** |
| 7.5 | **Proyectos 5-12 enlazan al perfil de GitHub sin repo específico** — los enlaces no llevan al código del proyecto concreto. | `lib/data/projects.ts` | **Media** |

---

## 3. LISTA DE ACCIONES PENDIENTES

### Prioridad Alta — Bloquean credibilidad o contradicen el objetivo

- [ ] **Eliminar o reformular `/servicios`** — Convertirla en "qué puedo aportar en un equipo" o redirigir a `/sobre-mi`. Desindexar con `noindex` si se mantiene temporalmente.
- [ ] **Rellenar o eliminar "Lecciones" y "Próximos pasos"** en todas las páginas de detalle de proyecto. Si no hay contenido real, ocultar esas secciones del template con una condicional.
- [ ] **Unificar el perfil de GitHub** — Elegir un handle (`azakzuk` o `Aram9574`) y actualizarlo en: `lib/site.ts`, `components/Navbar.tsx`, `app/layout.tsx` (Schema.org), y todos los proyectos en `lib/data/projects.ts`.
- [ ] **Corregir los `href="#"` en `/recursos`** — Enlazar al documento real o eliminar las cards hasta tener el contenido disponible.
- [ ] **Añadir métricas concretas al proyecto `ocupacion-hospitalaria-ia`** — Al menos RMSE, MAE, o % de mejora en planificación de camas.

### Prioridad Media — Impactan percepción profesional

- [ ] **Reformular el CTA de contacto** — Cambiar *"Cuéntame tu reto clínico u operativo"* por *"¿Hablamos de una oportunidad?"* (ya existe en homepage, aplicar también en `/contacto`).
- [ ] **Enlazar publicaciones a contenido específico** — El artículo de LinkedIn al post concreto. Los vídeos de YouTube al vídeo concreto, no al canal.
- [ ] **Diferenciar proyectos estrella de ejercicios académicos** — Añadir campo `tipo: 'real' | 'académico'` en `lib/data/projects.ts` y usarlo visualmente en el browser (badge o filtro).
- [ ] **Asignar imágenes únicas a cada proyecto** — Mínimo los 3 proyectos estrella deben tener imagen propia.
- [ ] **Limpiar el footer** — Eliminar los enlaces duplicados a `privacy.html`/`cookies.html`. Usar solo las rutas `/legal/*`.
- [ ] **Completar `/experiencia`** — Añadir historial clínico real (hospital, residencia, consulta) con fechas y roles, aunque sea en formato breve.
- [ ] **Mejorar el title de `/proyectos`** — De `Proyectos` a `Proyectos de IA Clínica · Alejandro Zakzuk, MD`.
- [ ] **Actualizar Schema.org en `app/layout.tsx`** — Alinear `sameAs` de GitHub con el handle unificado.
- [ ] **Añadir un segundo testimonial técnico** — Que valide trabajo en IA/ML específicamente, no solo la parte clínica.
- [ ] **Verificar páginas de `/publicaciones/[slug]`** — Confirmar que tienen contenido real o corregir el sitemap.

### Prioridad Baja — Polish

- [ ] **Añadir botón de descarga de CV en `/proyectos`** — Para reclutadores que llegan por SEO directamente a esa página.
- [ ] **Auditar imágenes con `next/image`** — Confirmar que todas las portadas de proyectos usan el componente optimizado.
- [ ] **Fijar `lastModified` por ruta en el sitemap** — Usar fechas reales de última modificación en lugar de `new Date()` para todas.
- [ ] **Eliminar o conectar el newsletter de `/recursos`** — Si no hay backend, quitar el input del DOM.
- [ ] **Añadir frase explícita de disponibilidad en el hero** — Algo como *"Disponible para incorporación inmediata en Madrid"* visible sin hacer scroll.
- [ ] **Actualizar OpenGraph description** — Incluir sector objetivo (consultoría, pharma, healthtech) además de descripción técnica.

---

## 4. LO QUE ESTÁ BIEN — NO TOCAR

- **Tagline principal**: *"De la bata al código. IA aplicada a la Sanidad."* — Memorable, diferenciador, correcto para el sector.
- **Metadata global** (`app/layout.tsx`) — Description, keywords, OG tags y Twitter card bien configurados y orientados a empleo.
- **`robots.txt` y estructura del sitemap** — Correctos. Indexación bien planteada.
- **Descarga del CV** — Enlazada en múltiples puntos (hero, sobre-mí). Ruta: `/cv/CV_Alejandro_Zakzuk_2026.pdf`.
- **Calendly integrado en `/contacto`** — Reduce fricción para agendar. Muy práctico para reclutadores.
- **Seguridad del formulario de contacto** — Rate limiting, honeypot y reCAPTCHA v3. Implementación correcta.
- **Proyecto TFM (`tfm-deteccion-metabolica`)** — Tiene problema → metodología → métricas (AUC-ROC: 0.942) → regulatorio → conclusión. Es el proyecto más completo y debe ser el modelo para los demás.
- **Proyecto CDC BRFSS (`riesgo-metabolico-cdc`)** — Demo funcional en Hugging Face Space. El único proyecto con enlace a demo real. Punto muy fuerte.
- **Marco regulatorio (GDPR, EU AI Act, EHDS)** — Mencionado en el TFM y en el hero. Diferenciador real en el mercado español.
- **Testimonial 1 (Sara Lopez, CEMP)** — Específico, referencia a un proyecto concreto, cargo verificable.
- **Sección "Lo que aporto" en homepage** — Los 4 pilares (clínico, técnico, regulatorio, disponibilidad) comunican exactamente lo que necesita transmitir.
- **Páginas legales** — Las 4 completas y correctas. Privacidad, cookies, aviso legal y accesibilidad. Inusual en portafolios de este tipo y positivo para credibilidad.
- **Navbar responsivo** — Mobile menu funcional, social icons en desktop.
- **Calendly en contacto** — Integración directa para agendar sin fricciones.

---

## RESUMEN DE SEVERIDADES

| Severidad | Total de hallazgos |
|-----------|-------------------|
| Alta | 8 |
| Media | 14 |
| Baja | 7 |
| Sin issue | 6 |

---

*El mayor riesgo no es técnico sino de coherencia de mensaje: la página `/servicios` activa contradice directamente el objetivo de candidatura. Es la acción con mayor retorno inmediato.*
