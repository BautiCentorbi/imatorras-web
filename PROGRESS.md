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

**Rutas reales** (sitemap propuesto en la auditoría inicial, salvo
Visitas/Enoturismo que sigue pausado):

- `/` — Home: hero, Historia, Viñedos, Vinos, Contacto (resumen de
  cada sección, con link "ver más" a la página dedicada).
- `/historia` — historia completa + los 6 principios de marca.
- `/vinedos` — overview de terroir + detalle de las 3 fincas
  (altitud/suelo/riego/varietales en `<dl>`).
- `/vinos` — índice de las 3 líneas, cada tarjeta linkea a su página.
- `/vinos/[linea]` — página dinámica (`generateStaticParams` desde
  `lib/wines.ts`) para `don-jose` / `apelacion` / `matorras`: lista
  los vinos de la línea con ficha técnica donde hay datos reales
  confirmados del brandbook (cosecha/crianza/alcohol/puntaje). Los
  vinos sin ficha confirmada muestran "Ficha técnica próximamente" en
  vez de inventar números.
- `/donde-comprar` — distribución por provincia (dato real de la
  auditoría del sitio viejo) + CTA de exportación (USD/EUR/ARS) +
  compra directa, todo derivando a WhatsApp/email — nunca checkout.
- `/blog` — estado vacío honesto (sin posts fake) con link a
  Instagram mientras no hay CMS conectado; el array `posts` en
  `app/blog/page.tsx` es donde entra el futuro fetch al CMS.
- `/contacto` — WhatsApp, datos de contacto y un formulario real
  (ver `components/ContactForm.tsx`).

**Componentes/datos compartidos** (nuevos, para no duplicar entre
Home y las páginas nuevas):

- `lib/fincas.ts`, `lib/wines.ts` — única fuente de verdad para
  fincas y líneas/vinos; Home y las páginas dedicadas importan de acá.
- `components/SiteFooter.tsx`, `components/icons.tsx` — extraídos de
  lo que antes vivía inline en `app/page.tsx`.
- `components/PageHeader.tsx` — encabezado de página interior,
  **siempre con fondo oscuro** (foto opcional o Basalto plano): el nav
  flotante asume texto claro por defecto, así que sin un fondo oscuro
  detrás quedaría invisible antes de hacer scroll. Cualquier página
  nueva sin hero propio necesita este componente (o algo igual de
  oscuro) arriba de todo.
- `components/ContactBand.tsx` — banda de cierre con WhatsApp +
  link a `/contacto`, reutilizada en todas las páginas.
- `components/ContactForm.tsx` — formulario real pero **sin backend
  todavía**: arma un `mailto:` con los datos cargados. Es el único
  archivo a tocar cuando se elija un servicio de formularios.
- `app/layout.tsx` — fuente Host Grotesk vía `next/font/google`,
  metadata SEO real en español (con `title.template` para que cada
  página herede "— iMatorras").
- `app/globals.css` — tokens de color de marca como `@theme` de
  Tailwind v4.
- `components/SiteHeader.tsx` — nav flotante tipo vidrio, ahora con
  links reales a las rutas de arriba (antes eran anclas `#`). A
  pantalla completa en reposo (`backdrop-blur` + `bg-basalto/12`, sin
  fondo sólido ni borde de línea completa), se condensa en una isla
  oscura centrada y más chica al hacer scroll (`scrollY > 48px`), y
  vuelve a la normalidad al subir. Todo con una sola transición
  sincronizada (importante: el `max-width` **siempre** tiene un valor
  numérico concreto en ambos estados — animar desde/hacia `none`
  rompe la interpolación y corta la animación). **Sin menú mobile
  todavía** — el `<nav>` de links está `hidden md:flex`; en mobile
  solo se ve el logo y el botón de WhatsApp. Pendiente si se necesita.
- `components/Logo.tsx` — `Logo` (isotipo/wordmarks principales) y
  `LineWordmark` (wordmarks de línea, con `fill` + escala por línea
  medida con `sharp` — ver historial de sesiones más abajo si hay que
  volver a tocar esto). Los archivos reales del brandbook están en
  `public/logos/` y **cada lockup existe en un solo color**; el color
  que falta se deriva con el filtro `invert` de Tailwind (animable),
  en vez de duplicar archivos.
- `components/Reveal.tsx` — microinteracción de scroll-reveal
  (fundido + desplazamiento), respeta `prefers-reduced-motion`.
- `lib/site-config.ts` — constantes de contacto (WhatsApp, email,
  dirección).

## Pendientes / decisiones abiertas

- **Número de WhatsApp sin confirmar.** El sitio viejo tenía DOS
  números distintos (uno en el texto de contacto, otro en el
  schema.org). `lib/site-config.ts` tiene un placeholder marcado
  `TODO` — confirmar cuál es el vigente antes de publicar.
- ~~Formulario de contacto con Resend + reCAPTCHA v3~~ — **resuelto**:
  claves cargadas, dominio verificado en Resend, DMARC/SPF-equivalente
  en regla (ver entrada "Dominio verificado en Resend" más abajo).
- **CMS headless:** elegir proveedor (Sanity es el candidato natural
  por su plan gratuito y buen soporte en Next.js) y migrar el
  contenido de Vinos/Fincas/Blog a él (`lib/wines.ts`, `lib/fincas.ts`
  y el array vacío de `app/blog/page.tsx` son los tres puntos de
  entrada).
- **Menú mobile del nav:** todavía no existe (ver nota en
  `SiteHeader.tsx` arriba).
- **Fichas técnicas incompletas:** de los 9 vinos listados en
  `lib/wines.ts`, solo 3 tienen datos técnicos confirmados del
  brandbook (Don José Cabernet Franc, Apelación El Peral Semillón,
  Matorras Malbec/Rosado). El resto muestra "Ficha técnica
  próximamente" a propósito, para no inventar números — completar
  cuando haya fuente confiable para cada uno.
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

### 2026-09-14 (cont. 6) — Historia (estampilla + "por qué iMatorras"), hero con parallax, y un bug real de alineación
- **Historia:** se sumó la estampilla de San Martín (`public/images/Estampilla-San_Martin.webp`)
  como recurso en el Hero (vía `children` de `PageHeader`), y una
  sección nueva "El nombre" — por qué "iMatorras" (la "i" como forma
  de decir que el legado de Gregoria Matorras se sostiene hoy, con
  mirada contemporánea — reusa el "tradición y modernidad" que ya
  aparece varias veces en las fichas de vino, no es un dato inventado).
  La frase del fundador quedó como "iMatorras fue fundada en 2019 por
  Joaquín Campos..." (antes arrancaba con el nombre de la persona).
- **Viñedos:** el Hero pasó a ser la foto con parallax de fondo
  (`Parrallax-Viñedos.webp`, `public/images/`), con el texto
  encima — se sacó el bloque de parallax que antes vivía aparte más
  abajo en la página, y se le sumó el párrafo largo de intro al Hero
  para que quede más alto.
- **`components/Parallax.tsx` (nuevo):** efecto de scroll real (no
  `background-attachment:fixed`, que anda mal en mobile Safari),
  respeta `prefers-reduced-motion`. Tuvo dos bugs de diseño reales
  en el camino, los dos ya resueltos — anotados acá porque son
  fáciles de reintroducir si se vuelve a tocar este componente:
  1. La fórmula de desplazamiento inicial dependía de qué tan
     visible estaba el bloque, lo que la hacía casi imperceptible
     cuando el bloque es el primero de la página (ya visible al
     cargar, sin "entrada" desde abajo). Se cambió a `offset =
     -rect.top * speed`: directo y proporcional a cuánto se scrolleó.
  2. Para darle margen de desplazamiento sin mostrar bordes vacíos,
     agrandaba la CAJA de la imagen (con `top`/`bottom` negativos).
     Eso hacía que la caja quedara desproporcionadamente alta/angosta
     y `object-position` perdiera el margen vertical para posicionar
     — cualquier valor de encuadre daba igual. Arreglado escalando la
     imagen ya encuadrada (`transform: scale(1.35)`) en vez de
     agrandar el contenedor — así `object-position` se respeta.
- **`components/PageHeader.tsx` — bug real de alineación:** para
  anclar el texto abajo en los heroes con foto, se le agregó
  `flex flex-col justify-end` a la sección — pero eso se aplicaba
  **siempre**, no solo con foto, y rompió la alineación horizontal en
  todos los headers (incluido el de Historia, sin foto, que se vio
  con la estampilla superpuesta) corriendo el bloque de texto hacia
  la derecha respecto del resto de las secciones de la página
  (confirmado comparando el HTML/clases renderizadas real contra la
  sección de fincas — mismo `mx-auto max-w-[1440px] px-6 md:px-16`
  en ambos, pero el resultado visual difería por el `flex` del
  padre). Arreglado sacando el `flex` por completo y anclando el
  texto abajo con `position: absolute; bottom: 0` en su lugar —
  mecanismo más simple, sin la ambigüedad de cómo un margen `auto`
  interactúa con `align-items: stretch` en un contenedor flex.
  **Si en el futuro hace falta un hero con contenido anclado abajo,
  usar `absolute inset-x-0 bottom-0`, no `flex justify-end`.**

### 2026-09-14 (cont. 5) — Fichas técnicas reales de los 9 vinos + limpieza de contenido
- El usuario marcó que la sección "Seis principios" de `/historia` no
  tenía sentido para un visitante (eran los principios de estilo del
  brandbook, contenido interno de diseño, no algo que le importe a un
  cliente) — se sacó esa sección entera de la página.
- A pedido del usuario de "recaudar más información" en vez de dejar
  contenido pobre, se leyeron los 9 PDF de ficha técnica individual
  (`public/claude_context/FT-*.pdf`, uno por vino) que no se habían
  usado todavía. Tenían datos exactos (cosecha, proceso de
  maceración/fermentación, crianza, alcohol, producción en botellas,
  puntajes por crítico) que **no estaban en el brochure general** o
  que el brochure resumía distinto.
- Esto corrigió errores reales metidos antes:
  - **Finca Gottardini** (Tupungato) da Chardonnay y **Pinot Noir**
    (línea Don José) — no "Cabernet Sauvignon de Apelación" como
    había puesto mal en `lib/fincas.ts`.
  - Existe un vino real **"Apelación Tupungato"** (Cabernet Sauvignon
    · Malbec, de El Peral + San José) — se había descartado esa
    línea por error al no encontrarla nombrada así en el brochure.
  - Matorras Malbec y Rosado son de **El Peral y San José** (viñas
    mezcladas), no solo San José — dato que había "corregido" mal
    hacia atrás basándome en el brochure resumido.
- `lib/wines.ts` reescrito con las 9 fichas completas y reales (ya no
  hay ningún vino con "ficha técnica próximamente" — los 9 tienen
  datos verificados). `app/vinos/[linea]/page.tsx` ahora muestra
  cosecha/crianza/alcohol/producción reales por vino, no solo un
  párrafo genérico.
- El usuario confirmó año de fundación (**2019**) y fundador
  (**Joaquín Campos**) — sumado como crédito discreto en `/historia`.
  También compartió contexto adicional sobre el origen de la bodega
  que **no está publicado todavía** (nombres de terceros y una
  historia societaria sensible) — se guardó aparte, fuera del repo, y
  el usuario fue claro en que todavía no decidió si/cómo contar esa
  parte en la web. No tocar ese tema sin volver a preguntar.

### 2026-09-14 (cont. 3) — Altitudes, marquee, y formulario funcionando de verdad
- **Altitudes corregidas** (dato del usuario, no del brandbook — la
  fuente PDF tenía "1200 msnm" para las tres fincas, pero es
  incorrecto): Finca Gottardini (Tupungato) = **1100 msnm**, Finca
  Manoni (El Peral) = **1300 msnm**, Finca La Meli (San José) sigue en
  1200 msnm. Corregido en `lib/fincas.ts` y en las fichas técnicas de
  `lib/wines.ts` que mencionaban una altitud (los vinos que mezclan uva
  de más de una finca ahora dicen "entre 1200 y 1300 msnm" en vez de
  un número único incorrecto).
- **Bug del marquee arreglado:** solo se repetía el contenido 2 veces,
  así que en pantallas grandes (el 42" del usuario) las dos copias
  entraban enteras en el viewport y se veía el salto/reinicio del
  loop a mitad de pantalla. Se subió a 10 repeticiones (contenido de
  sobra para cualquier ancho real) y se ajustó la duración de 32s a
  140s en `app/globals.css` para mantener la misma velocidad percibida
  con más contenido recorriendo la pantalla.
- **Ícono de WhatsApp** reemplazado por `react-icons` (`FaWhatsapp`) en
  vez del SVG dibujado a mano — se instaló `react-icons`.
- **Formulario de contacto funcional de verdad:** se instaló `resend`
  y se creó `app/api/contact/route.ts` (Route Handler) que verifica
  reCAPTCHA v3 server-side y envía el email con Resend.
  `components/ContactForm.tsx` ahora hace `fetch` a esa ruta (con
  estados de carga/éxito/error) en vez de abrir un `mailto:`.
  `components/RecaptchaScript.tsx` carga el script de Google solo si
  hay site key configurada; `components/CookieConsent.tsx` es un
  banner simple (acepta/rechaza, guarda en localStorage) que avisa
  sobre esa cookie técnica.
  Sin esas variables el formulario sigue de pie y responde con un
  error prolijo en vez de romperse (probado con `curl` contra
  `/api/contact`).

### 2026-09-14 (cont. 4) — Dominio verificado en Resend + deliverability
- El usuario cargó las 5 variables de `.env.local` con sus claves
  reales de Resend/reCAPTCHA y verificó el dominio `imatorras.com` en
  Resend. Confirmado con `curl` que el server las toma (Next recarga
  `.env.local` solo, sin reiniciar el `next dev`).
- Primer email de prueba llegó, pero a spam. Se debuggeó el DNS real
  del dominio (`nslookup`) y se encontraron y corrigieron dos
  problemas, ambos ya resueltos y verificados por DNS:
  - **DMARC duplicado**: había dos TXT en `_dmarc.imatorras.com` (uno
    por defecto del proveedor + el que agregó el usuario) — con más
    de uno, los proveedores de correo lo tratan como inválido. Se
    borró el duplicado, queda uno solo: `v=DMARC1; p=none;
    rua=mailto:contacto@imatorras.com`.
  - **SPF sin Resend**: el SPF de la raíz (`v=spf1
    include:comp.hostmar.com -all`, de Hostmar, el hosting de mail
    actual) no incluía a Resend y el `-all` es estricto. En vez de
    tocar ese registro compartido (arriesgando el correo existente de
    Hostmar), Resend ofreció el método moderno: dos CNAME en un
    subdominio propio que Resend controla —
    `rsend.imatorras.com` → `rsend-sae1.forge.rmta.net` y
    `send.imatorras.com` → `send.forge.rmta.net` — que dan el
    equivalente de alineación SPF sin tocar el SPF de la raíz. Ya
    agregados y confirmados por DNS.
- Se mejoró también `app/api/contact/route.ts`: el email ahora manda
  versión HTML además de texto plano (antes solo texto, lo que pesa
  para spam), remitente "iMatorras" en vez de "iMatorras Web", y un
  pie con la dirección real — todo ayuda a la clasificación como
  correo legítimo.
- Resultado final confirmado por el usuario: **"siempre salió todo
  perfecto"** — dominio verificado, deliverability resuelta. Si en
  algún momento hay que tocar DNS de este dominio de nuevo, ya está
  todo mapeado acá: no volver a tocar el SPF de la raíz (es de
  Hostmar), DMARC ya existe (no crear uno nuevo, editar el existente).

### 2026-09-14 (cont. 2) — Resto de páginas del sitemap
- Se pasó de sitio de una sola página (con anchors) a sitio
  multi-página real: `/historia`, `/vinedos`, `/vinos` +
  `/vinos/[linea]`, `/donde-comprar`, `/blog`, `/contacto`. Visitas
  sigue sin página, por la decisión de pausar enoturismo.
- Se extrajeron a `lib/fincas.ts` y `lib/wines.ts` los datos que antes
  vivían hardcodeados dentro de `app/page.tsx`, para que Home y las
  páginas nuevas lean de la misma fuente sin duplicar.
- Se armaron componentes compartidos nuevos: `PageHeader` (headers de
  página interior, siempre con fondo oscuro por el nav flotante),
  `ContactBand`, `ContactForm` (mailto, sin backend todavía),
  `SiteFooter`, `icons`.
- El nav (`SiteHeader`) pasó de anclas (`#historia`) a rutas reales.
- Las fichas técnicas de vinos solo incluyen datos que están
  confirmados en el brandbook — el resto dice "próximamente" en vez
  de inventar cosecha/alcohol/puntaje.
- Las 10 rutas se probaron con `curl` contra el dev server (todas
  200) y con `next build` completo (10 páginas, 3 de ellas estáticas
  vía `generateStaticParams`).

### 2026-09-14 (cont.) — Pulido de header y tarjetas de Vinos
- Nav vidrio: varias iteraciones hasta que quedó bien — clave técnica
  que costó encontrar: **`max-width` siempre necesita un valor
  numérico concreto en ambos estados** (`100vw` en reposo, `900px` al
  scrollear). Si un estado no declara `max-width` (queda en `none`),
  el navegador no puede interpolarlo y la transición se corta de
  golpe apenas arranca. El ancho del vidrio y el ancho del contenido
  interno (nav, logo, WhatsApp) están separados en dos capas para que
  el fondo llegue de punta a punta sin estirar el contenido.
- Header: el logo pasó a ser `Logo iMatorras_Texto.png` (solo
  wordmark, sin isotipo) y ahora escala responsivo (`h-10` →
  `md:h-12` → `xl:h-14`) — antes era un tamaño fijo chico que en
  pantallas grandes (TV) no se notaba.
- Tarjetas de Vinos: las tres ahora tienen foto real de botella de
  fondo (`public/images/Banner-{Don_Jose,Apelacion,Matorras}.webp`),
  no fondo plano. Donde la botella queda a la izquierda de la foto
  (Don José, Matorras) el bloque de contenido se corre a la derecha
  con un `margin-left` porcentual (`ml-[46%]`) para no taparla; donde
  queda a la derecha (Apelación) el contenido se queda a la
  izquierda con `max-w-[54%]`. El puntaje de Matorras se corrigió a
  **93** (específico del Rosado de Malbec, que es la foto usada).
- Wordmarks de línea (`components/Logo.tsx`): bug real encontrado con
  `sharp` — el componente declaraba `width={1080} height={320}` fijo
  para los tres, pero el archivo de Apelación en realidad tiene un
  lienzo más ancho (`1487×320`), lo que rompía su relación de
  aspecto. Se cambió a `fill` (toma las dimensiones reales del
  archivo) y se agregó un `LINE_SCALE` por línea (Don José = 1,
  referencia; Apelación ×1.024; Matorras ×1.035) calculado midiendo
  cuánto ocupa la letra dentro de cada lienzo, para que las tres se
  vean a la misma altura visual pase lo que pase con el archivo.
- Commit + PR de esta sesión: revisar el historial de PRs en GitHub
  para el link exacto (la rama base ya tiene el PR #1 mergeado).

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
