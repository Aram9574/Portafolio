# Auditoría visual — Portafolio

Auditoría del sitio actual hecha con la metodología del skill `redesign-existing-projects` (taste-skill, Leonxlnx) y dirección de mejora hacia "Soft / premium" del skill `high-end-visual-design`.

Fecha de auditoría: vinculada al commit que la introduce.

---

## 1. Veredicto general

**Tu sitio NO es slop de IA.** El sistema visual de partida es serio:

- **Tipografía premium:** Fraunces (variable, serif display con axes `opsz` y `SOFT`) + IBM Plex Sans (body) + JetBrains Mono. Combo editorial profesional.
- **Paleta tokenizada:** todo vive en CSS variables (`--bone`, `--paper`, `--ink`, `--accent`). Cambias un token, cambia todo el sitio.
- **Layout asimétrico de verdad:** 12 columnas con `col-span` variable, eyebrows monospace, hairlines, no los típicos 3 cards iguales.
- **Acento único y desaturado:** clinical green `#1F6F5C`. No el típico gradient AI morado/azul.
- **Sin fondos negros puros:** `#1A1815` ink cálido sobre `#E8E2D4` bone. Correcto.

El skill diría que ya estás en el archetype **"Editorial Luxury"**: warm creams, variable serif, hairlines, sin floritura. Es coherente.

## 2. Tensión a resolver primero

Pediste dirección **"Soft / premium"**. Eso es el archetype **"Soft Structuralism"** del skill: silver-grey o blanco, big bold Grotesk, sombras difusas. Es **distinto** a lo editorial-luxury que tienes.

Opciones honestas:

| Camino | Qué implica | Coste | Riesgo |
|---|---|---|---|
| **A. Sofisticar lo editorial actual** (recomendado) | Mantener Fraunces y crema. Añadir respiración, hairlines más finas, sombras suaves donde aporten, micro-motion premium. Sigues siendo editorial pero más pulido. | Bajo. Cambios incrementales, sin rediseño. | Bajo. No se rompe nada. |
| **B. Pivotar a soft structuralism puro** | Cambiar Fraunces serif por Grotesk bold (Geist/Plus Jakarta). Paleta blanco/silver. Floating cards con sombras grandes. | Alto. Rediseño del sistema. | Alto. Pierdes la voz editorial que ya funciona. |
| **C. Híbrido** | Editorial sigue dominando. Soft-premium aplicado en cards de proyectos, CTAs, blog cards. | Medio. | Medio. Puede quedar inconsistente si no se documenta bien. |

**Recomiendo A.** El editorial-luxury que tienes es coherente y poco común. Sofisticarlo da más punch que tirarlo. La voz divulgadora de `voz.md` también encaja mejor con editorial que con corporate-tech soft.

## 3. Hallazgos concretos (de la auditoría del skill aplicada a tu código)

### 3.1 Iconografía (CRÍTICO)

- **15 imports de Lucide** en `components/` y `app/`. Lucide es el icon set por defecto que delata IA, según el skill.
- **Acción:** sustituir por **Phosphor Light** (`phosphor-react`) o **Remix Line**. Estética más fina, menos "AI default".

### 3.2 Motion (ALTO)

- Usas **AOS** (`aos` library) con curvas de easing por defecto (linear/ease-in-out). El skill prohíbe esto explícitamente.
- **Acción:** o cambiar la config global de AOS a un cubic-bezier custom tipo `cubic-bezier(0.32, 0.72, 0, 1)`, o migrar a **Framer Motion** con `whileInView` (más control, mejor performance, GPU-safe).

### 3.3 Viewport bug iOS (MEDIO)

- `app/layout.tsx` usa `min-h-screen` (= `100vh`). En iOS Safari esto causa "jumping" del viewport con la barra de navegación.
- **Acción:** cambiar a `min-h-[100dvh]` (dynamic viewport height).

### 3.4 NoiseOverlay sin conectar (MEDIO)

- El componente `components/layout/NoiseOverlay.tsx` **existe pero nunca se importa**. Está muerto en el árbol.
- **Acción:** o montarlo en `app/layout.tsx` para añadir grain sutil al fondo (el skill lo recomienda explícitamente: "subtle noise textures on fixed pseudo-elements"), o borrarlo si decides no usarlo.

### 3.5 Sombras desactivadas globalmente (a revisar)

- `tailwind.config.ts` tiene `boxShadow.soft: 'none'`. Es decisión consciente (editorial flat) pero te bloquea la sombra suave que el camino "Soft / premium" necesita en cards.
- **Acción:** rehabilitar `shadow-soft` con sombra ambiente difusa tipo `0 30px 60px -30px rgba(26, 24, 21, 0.18)` aplicable selectivamente en cards de proyecto, CTAs principales y blog.

### 3.6 Border-radius bloqueado a 0 (a revisar)

- `tailwind.config.ts` fuerza `xl: '0px'` y `2xl: '0px'`. Rectángulos puros editorial.
- **Acción:** sigue el camino editorial. Si decides aplicar el "double-bezel" del skill en algún componente puntual (CTA flotante, modal), añadir un radius solo para esos casos vía `rounded-[20px]` arbitrary value, no tocar el sistema global.

### 3.7 Densidad tipográfica (BAJO)

- Pesos en uso: `font-medium` (500) y `font-semibold` (600) ya están presentes. Bien.
- **Posible mejora:** asegurar `font-variant-numeric: tabular-nums` en métricas, fechas y números en general. El skill lo recomienda y `globals.css` ya lo activa para `.font-mono` pero no globalmente para números.

### 3.8 Text wrap (BAJO)

- No detectado `text-wrap: balance` ni `pretty` en headers.
- **Acción:** añadir `text-wrap: balance` a `.display-xl`, `.display-l`, `.display-m` en `globals.css`. Evita huérfanos.

### 3.9 Densidad por defecto en hero (a probar)

- Hero actual tiene `pt-20 pb-28`. El skill recomienda `py-24` a `py-40` para hero.
- **Acción:** subir a `pt-28 pb-36` o `pt-32 pb-40` y medir si respira mejor en desktop. Mantener `pt-20 pb-24` en mobile.

### 3.10 Copy del hero (revisar contra voz.md)

- Hero meta description todavía dice **"Consultoría HealthTech"** y **"Disponible para roles senior en HealthTech"** en metadata SEO. Esto choca con la voz de divulgador de `voz.md`.
- **Acción:** revisar metadata y H1 del home contra `voz.md`. Puede no necesitar cambio en el copy visible si el H1 ya es declarativo (`Medicina, Salud Digital e IA en Sanidad`), pero el SEO sí necesita pasar el filtro.

## 4. Plan de implementación (por fases)

### Fase 1 — Cambios sin riesgo (1 sesión)

1. `min-h-screen` → `min-h-[100dvh]` en `layout.tsx`.
2. Añadir `text-wrap: balance` a las clases `.display-*` en `globals.css`.
3. Montar `NoiseOverlay` en `layout.tsx` (o decidir borrarlo).
4. Reactivar `shadow-soft` con sombra ambiente difusa en `tailwind.config.ts`.

### Fase 2 — Sustitución de iconos (1 sesión)

5. Instalar `phosphor-react`. Migrar los 15 imports de Lucide uno a uno. Mantener mismos tamaños y strokes consistentes.

### Fase 3 — Motion (1 sesión, opcional según ganas)

6. Customizar easing de AOS con cubic-bezier premium global. O migrar a Framer Motion (más trabajo, mejor a largo plazo).
7. Auditar todas las animaciones para asegurar que usan `transform` y `opacity` solamente (no `top`/`left`/`width`/`height`).

### Fase 4 — Pulido de componentes clave (1-2 sesiones)

8. Aplicar `shadow-soft` reactivada a cards de proyecto y blog para flotación premium.
9. Aumentar respiración vertical en secciones principales.
10. Asegurar focus rings visibles en todos los interactivos (accesibilidad y skill exige).

## 5. Lo que NO vamos a hacer

- ❌ No tocar Fraunces. Es premium y diferencial.
- ❌ No introducir Geist ni cambiar a Grotesk. Pierdes la voz editorial.
- ❌ No añadir gradients morados/azules. Ya estás limpio.
- ❌ No introducir cards con bordes 1px solid gray y shadow-md. Ya estás limpio.
- ❌ No abrir el sistema de border-radius globalmente. Solo en casos puntuales con valores arbitrarios.

## 6. Referencias

- Skills instalados: `.agents/skills/redesign-existing-projects/SKILL.md` y `.agents/skills/high-end-visual-design/SKILL.md`. Aplicables vía Claude Code.
- Repo origen: <https://github.com/Leonxlnx/taste-skill>.
- Documento de voz: `docs/voz.md`.
