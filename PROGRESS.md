# Bitácora del rediseño — iMatorras

Este documento existe para no perder el hilo entre sesiones: qué se
decidió, qué se construyó y qué quedó pendiente. Se actualiza en cada
sesión de trabajo relevante — antes de cerrar, sumar una entrada nueva
arriba de todo (orden cronológico descendente).

## Por qué este proyecto

`imatorras.com` (WordPress) es una sola página de ~31 minutos de
lectura: sin formulario de contacto, sin WhatsApp, sin tienda, sin
blog, y sin la identidad visual del brandbook 2025 aplicada. El
objetivo es reconstruirlo en este proyecto Next.js con una identidad
fiel al manual de marca, orientado a informar y convertir (WhatsApp +
formularios calificados).

## Decisiones de alcance (no re-discutir sin motivo)

- **Sin e-commerce.** El sitio solo deriva a distribuidores/vendedores
  o al encargado comercial (WhatsApp / formulario); nunca carrito ni
  checkout.
- **Enoturismo/visitas: pausado.** No construir el flujo de reservas
  por ahora. Si se referencia en el nav, marcar "Próximamente" o
  directamente omitir.
- **Bilingüe ES/EN**, estructural desde la base (no parche después) —
  hay fichas y listas de precios en ambos idiomas y en ARS/EUR/USD.
- **Blog/contenido:** decidido usar un **CMS headless** (tipo
  Sanity/Contentful) desde el día uno para posts, vinos y precios —
  no Markdown plano, no admin a medida. Migración pendiente de
  implementar.

## Sistema de marca (fuente: `public/claude_context/iMatorras-Brandbook_compressed.pdf`,
no se sube al repo — ver nota de privacidad abajo)

- **Tipografía: solo Host Grotesk** (sans). El manual pide explícitamente
  evitar serif/cursiva para diferenciarse de la competencia.
- **Colores base:** Basalto `#212121` (oscuro) / Alba `#EBEBEB` (claro).
  Acento `#AB1644` es de **uso excepcional**, no un color dominante.
  4 colores de línea: Apelación San José `#911915`, Apelación
  Tupungato `#52748D`, Apelación El Peral `#83A563`, Matorras Rosado
  `#E5A1B3`.
- **Isotipo:** diagonal + columna con remate + punto. Assets reales en
  `public/logos/` (ver abajo) — nunca recolorear a mano, nunca sobre
  bajo contraste.
- **Tono de voz:** sobria, contemplativa, precisa; nunca grandilocuente
  ni impostada.
- **Jerarquía tipográfica exacta** (tracking/peso) documentada en
  `app/globals.css` (clases `.t-headline`, `.t-subtitle`, `.t-cta`,
  `.t-body`, `.t-destacado`).

## Estado actual del código

- `app/layout.tsx` — fuente Host Grotesk vía `next/font/google`,
  metadata SEO real en español.
- `app/globals.css` — tokens de color de marca como `@theme` de
  Tailwind v4.
- `app/page.tsx` — Home completa: hero (foto real de
  `public/images/hero-tupungato.jpg`), Historia, Viñedos (3 fincas),
  Vinos (Don José / Apelación / Matorras con puntajes de prensa),
  Contacto (WhatsApp real vía `wa.me`), footer.
- `components/SiteHeader.tsx` — nav flotante tipo vidrio: a pantalla
  completa en reposo (`backdrop-blur` + `bg-basalto/12`, sin fondo
  sólido ni borde de línea completa), se condensa en una isla oscura
  centrada y más chica al hacer scroll (`scrollY > 48px`), y vuelve
  a la normalidad al subir. Todo con una sola transición sincronizada
  (importante: el `max-width` **siempre** tiene un valor numérico
  concreto en ambos estados — animar desde/hacia `none` rompe la
  interpolación y corta la animación).
- `components/Logo.tsx` — `Logo` (isotipo/wordmarks principales) y
  `LineWordmark` (wordmarks de línea). Los archivos reales del
  brandbook están en `public/logos/` y **cada lockup existe en un solo
  color** (la mayoría en oscuro, los wordmarks de línea en claro); el
  color que falta se deriva con el filtro `invert` de Tailwind
  (animable), en vez de duplicar archivos.
- `components/Reveal.tsx` — microinteracción de scroll-reveal
  (fundido + desplazamiento), respeta `prefers-reduced-motion`.
- `lib/site-config.ts` — constantes de contacto (WhatsApp, email,
  dirección).

## Pendientes / decisiones abiertas

- **Número de WhatsApp sin confirmar.** El sitio viejo tenía DOS
  números distintos (uno en el texto de contacto, otro en el
  schema.org). `lib/site-config.ts` tiene un placeholder marcado
  `TODO` — confirmar cuál es el vigente antes de publicar.
- **CMS headless:** elegir proveedor (Sanity es el candidato natural
  por su plan gratuito y buen soporte en Next.js) y migrar el
  contenido de Vinos/Fincas/Blog a él.
- **i18n ES/EN:** todavía no implementado (todo el contenido actual
  está en español, hardcodeado).
- **Resto de páginas** del sitemap propuesto (Historia, Viñedos,
  Vinos, Dónde Comprar, Blog como páginas propias — hoy todo vive en
  la Home como secciones con anchors) — pendiente de construir como
  rutas reales para SEO.

## Nota de privacidad

`public/claude_context/` (brandbook, brochure, fichas técnicas,
listas de precios ARS/EUR/USD) está en `.gitignore` a propósito:
**todo lo que vive en `public/` se sirve tal cual en el sitio
publicado.** Esos documentos son de referencia interna — si se
necesitan en otra sesión/máquina, hay que volver a copiarlos ahí a
mano; no se suben al repo.

---

## Historial de sesiones

### 2026-09-14 — Auditoría + primer Home real
- Auditoría del sitio actual (1 sola URL indexable, sin WhatsApp/form,
  sin blog) → propuesta de arquitectura, estrategia de conversión y
  SEO (ver artifact publicado, buscar en el historial de chat el link
  si hace falta retomarlo).
- Definiciones de alcance (sin e-commerce, enoturismo pausado,
  bilingüe, CMS headless) confirmadas con el usuario.
- Primer mockup visual de Home (herramienta de diseño) — corregido
  una vez tras detectar que no reflejaba el brandbook real (se había
  leído incompleto la primera vez).
- Pasado a código real en este proyecto Next.js: Home completa,
  header animado tipo vidrio (varias iteraciones hasta que la
  transición quedó fluida — ver nota de `max-width` arriba, es fácil
  volver a romperla si se toca sin cuidado), logos reales integrados
  desde `public/logos/`.
- Primer commit + PR a GitHub (`BautiCentorbi/imatorras-web`).
