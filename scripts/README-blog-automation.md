# Sistema de publicación automática del blog

Publica un post nuevo cada lunes a las 07:00 UTC (08:00 CET invierno / 09:00 CEST verano) usando la API de Anthropic.

## Cómo funciona

1. **Cron de GitHub Actions** se dispara cada lunes.
2. El script `scripts/generate-weekly-post.mjs` lee el siguiente tema pendiente en `content/blog/_queue.json`.
3. Llama a la API de Claude (Sonnet 4.5) con un prompt de sistema que replica la voz de Aram y un prompt de usuario con el tema, ángulo, audiencia y tags.
4. Escribe un archivo `content/blog/<slug>.md` con frontmatter YAML + cuerpo markdown.
5. Marca el tema como `published: true` en la cola.
6. Crea una rama `auto/blog-YYYY-MM-DD-<slug>` y abre un Pull Request hacia `main`.
7. **Tú revisas y mergeas** — nunca se publica sin aprobación humana.

## Configuración inicial (una vez)

### 1. Obtener una API key de Anthropic

https://console.anthropic.com/settings/keys → crea una clave nueva. Cada post cuesta aproximadamente 0,05–0,15 USD.

### 2. Añadirla como GitHub Secret

```bash
gh secret set ANTHROPIC_API_KEY --repo Aram9574/Portafolio
# pega la clave cuando te la pida
```

O en la UI: Settings → Secrets and variables → Actions → New repository secret → nombre `ANTHROPIC_API_KEY`.

### 3. Añadir el label "blog" y "automated" (opcional pero recomendado)

```bash
gh label create blog --color 0E8A16
gh label create automated --color 5319E7
```

## Uso diario

### Ejecutar manualmente (local)

```bash
# Dry-run: genera un placeholder sin llamar a la API
npm run blog:dry

# Real: consume la API y genera un post completo
export ANTHROPIC_API_KEY=sk-ant-...
npm run blog:generate

# Específico: fuerza un tema concreto por id
node scripts/generate-weekly-post.mjs --topic=ehds-calendario-aplicacion
```

Después de ejecutar local, levanta el dev server y revisa el post en `/blog/<slug>`.

### Ejecutar manualmente desde GitHub

Actions → Weekly Blog Post → Run workflow → opcionalmente elige `topic_id` o marca `dry_run`.

## Gestionar la cola de temas

Edita `content/blog/_queue.json`. Cada tema tiene:

```json
{
  "id": "slug-del-post",
  "title": "Título completo",
  "angle": "Tesis/ángulo: qué argumenta este post y por qué importa",
  "audience": "A quién va dirigido",
  "tags": ["Tag1", "Tag2"],
  "published": false
}
```

El script coge siempre el **primero con `published: false`** en orden de aparición.

**Orden recomendado**: pon primero los temas más estratégicos (los que quieres que se publiquen antes). Reordenar temas = cambiar su orden en el array.

Para **despublicar y reintentar** un post: cambia `published: true` de vuelta a `false`, y borra el archivo `content/blog/<slug>.md`. El siguiente lunes lo regenerará.

## Añadir un tema nuevo

Edita `content/blog/_queue.json` y añade al final (o donde prefieras por prioridad):

```json
{
  "id": "mi-tema-nuevo",
  "title": "Título SEO-friendly",
  "angle": "Brief detallado: qué argumenta, ejemplos concretos, por qué importa a la audiencia",
  "audience": "CIO hospitales / Partners consultoras / etc",
  "tags": ["Tag1", "Tag2"],
  "published": false
}
```

**El campo `angle` es el más importante**. Cuanto más detallado, mejor el post generado.

## Qué pasa cuando la cola se vacía

El workflow sale con exit code 2 y genera un warning en GitHub Actions:

> Cola de temas vacía. Añade temas en content/blog/_queue.json

No se abre PR. Añade temas nuevos y el próximo lunes volverá a ejecutarse.

## Arquitectura

```
content/blog/
├── _queue.json              ← banco de temas
├── <slug>.md                ← posts generados (frontmatter + markdown)
└── ...

scripts/
└── generate-weekly-post.mjs ← generador

.github/workflows/
└── weekly-blog-post.yml     ← cron + PR

lib/data/blog.ts             ← lee TSX posts + MD posts
app/blog/[slug]/page.tsx     ← renderiza TSX (si existe) o markdown
```

## Seguridad y control editorial

- La API key nunca se expone: vive solo como GitHub Secret.
- Nada se publica sin tu aprobación: siempre abre PR, nunca hace merge.
- Si un post generado es mediocre: cierras el PR sin mergear, editas el prompt o el angle en `_queue.json`, reviertes `published` a `false`, y vuelves a ejecutar.

## Editar el prompt de sistema

Si quieres cambiar el estilo general (tono, voz, formato), edita `SYSTEM_PROMPT` en `scripts/generate-weekly-post.mjs`.

Si quieres cambiar el formato de salida de un post específico, edita `buildUserPrompt()` en el mismo archivo.

## Coste estimado

- Sonnet 4.5 con 8K tokens max: ~0,05–0,15 USD por post.
- 52 posts/año: ~3–8 USD/año.
- Si la factura te preocupa, cambia el modelo a `claude-haiku-4-5-20251001` en el script — más barato pero texto menos sofisticado.

## Troubleshooting

**"No existe ANTHROPIC_API_KEY"** → no configuraste el secret. Ver paso 2 de la configuración.

**"API error 401"** → clave mal pegada o revocada. Regenera y actualiza el secret.

**"API error 429"** → límite de rate o créditos agotados. Espera o añade saldo.

**"El archivo ya existe"** → ya había un post con ese slug. Bórralo o cambia el id del tema en la cola.

**"Post demasiado corto"** → la API devolvió menos de 400 palabras. Relanza el workflow; si persiste, revisa el `angle` del tema (quizás muy genérico).

**PR no se abre** → revisa los permisos del workflow en Actions → weekly-blog-post → logs. Necesita `contents: write` y `pull-requests: write`.
