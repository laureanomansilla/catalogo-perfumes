# Contexto del proyecto — Fragance of the Viking

Este archivo resume todo lo necesario para retomar el trabajo en este
proyecto en una conversación nueva (con Claude o con cualquier otra
persona/IA). El `README.md` explica el día a día (cargar productos, fotos);
este archivo explica el panorama completo.

## Qué es esto

Catálogo web del emprendimiento de venta de perfumes y decants
**"Fragance of the Viking"**. Es un sitio estático (sin backend, sin base de
datos): HTML + CSS + JavaScript plano, sin frameworks ni paso de build.

## Links importantes

- **Sitio publicado**: https://laureanomansilla.github.io/catalogo-perfumes/
- **Repositorio**: https://github.com/laureanomansilla/catalogo-perfumes
- **Instagram**: https://instagram.com/fragance.of.the.viking

## Cuentas y accesos

- **Cuenta de GitHub del dueño del proyecto**: `laureanomansilla`
  (repositorio público, plan gratuito).
- **GitHub CLI (`gh`)**: instalado y autenticado en esta PC como
  `laureanomansilla`. `git` está configurado para usar esas credenciales
  (`gh auth setup-git`). Si en el futuro un `git push` pide login y falla,
  correr `gh auth login` de nuevo.
- **Hosting**: GitHub Pages, sirviendo la rama `main` desde la raíz (`/`).
  Cualquier `git push` a `main` republica el sitio en 1-2 minutos, sin pasos
  manuales adicionales.

## Estructura de archivos

```
catalogo-perfumes/
├── index.html          Estructura de la página (header, filtros, grilla)
├── css/styles.css       Todos los estilos (tema oscuro + dorado, estilo vikingo)
├── js/config.js         Datos del emprendimiento (nombre, Instagram, mensajes)
├── js/productos.js      Lista de productos (la parte que más se edita)
├── js/main.js            Lógica: filtros, orden, búsqueda, botón de Instagram
├── images/logo.png       Logo del emprendimiento
├── images/productos/     Una imagen por perfume
├── README.md             Instrucciones de uso para cargar productos/fotos
└── CONTEXTO.md            Este archivo
```

No hay `package.json` ni dependencias: el sitio se abre directo con
doble clic en `index.html`, o publicado tal cual en GitHub Pages.

## Modelo de datos (js/productos.js)

Cada perfume es **una sola tarjeta con una sola foto**, y adentro tiene un
array `opciones` con sus variantes de venta (decant, frasco entero, etc.),
cada una con su propio precio. Esto se decidió así (2026-09-20) para evitar
que la misma foto apareciera repetida en dos tarjetas separadas cuando un
perfume se vende en más de un formato.

```js
{
  id: 1,
  nombre: "Asad Elixir",
  marca: "Lattafa",
  genero: "Hombre",        // "Hombre" | "Mujer" | "Unisex"
  imagen: "asad-elixir.png",
  descripcion: "...",
  destacado: true,          // aparece primero en el orden por defecto
  opciones: [
    { tipo: "Decant", ml: 5, precio: 5440, disponible: true },
    { tipo: "Perfume", ml: 100, precio: 40000, disponible: true },
  ],
}
```

Un perfume puede tener **una sola opción** (por ejemplo, si todavía no hay
frasco entero, solo decant) o varias del mismo tipo (ej. decant de 3ml y de
10ml). El filtro "Decants"/"Perfumes completos" de la web filtra por tipo de
opción, no por producto completo.

## Diseño

- Tema oscuro con acentos dorados (`#d4af6a`), inspirado en el logo
  vikingo que mandó el cliente.
- Tipografía de títulos: **Cinzel** (Google Fonts). Texto: **Inter**.
- El botón "Consultar" de cada opción copia un mensaje al portapapeles y
  abre `https://ig.me/m/<usuario>` (deep link a un chat de Instagram
  Direct, no al perfil).

## Catálogo actual (al 2026-09-20)

15 perfumes cargados, todos con decant (5ml) + frasco entero. Marcas:
Lattafa, Armaf, Rasasi, Afnan, Al Wataniah, Dear, Sabrina Carpenter, y
Carolina Herrera. El cliente avisó que próximamente va a sumar perfumes
que **solo** se venden en decant (sin frasco entero) — para esos casos,
`opciones` va a tener un solo bloque.

## Optimización automática de fotos

Las fotos de `images/productos/` se optimizan solas: `.github/workflows/optimize-images.yml`
corre `scripts/optimize-images.js` cada vez que se sube o cambia algo ahí
(por `git push` o editando directo en la web de GitHub), las achica a
900x900px máx. y las convierte a JPG calidad 78. Si el archivo cambia de
extensión (ej. `.png` -> `.jpg`), el script corrige solo la referencia en
`js/productos.js`. El resultado se commitea de vuelta automáticamente
como `github-actions[bot]`. No requiere que nadie lo corra a mano.

Para que el bot pueda pushear hace falta que el repo tenga los permisos
de Actions en "Read and write" (`gh api -X PUT
repos/laureanomansilla/catalogo-perfumes/actions/permissions/workflow -f
default_workflow_permissions=write`) — ya está configurado así.

## Etiqueta "Nuevo"

Campo opcional `fechaAlta: "AAAA-MM-DD"` en cada producto de `productos.js`.
Si está presente y pasaron menos de 24hs desde esa fecha, `main.js`
(función `esNuevo`) muestra una etiqueta "NUEVO" sobre la foto; pasadas las
24hs desaparece sola, sin ninguna acción manual. Implementado 2026-09-21;
los 15 perfumes cargados hasta esa fecha no tienen `fechaAlta` a propósito
(para no mostrar la etiqueta en todos a la vez) — de ahí en más, cada
producto nuevo puede sumarla.

## Modal de detalle + notas olfativas

Al hacer click en la foto o el nombre de un perfume (clase `.card-clickeable`
en `main.js`) se abre `#modal-overlay` con foto grande, descripción y notas
olfativas (campo `notas` en `productos.js`, texto separado por comas). Se
cierra con la ✕, click afuera, o Escape. **Importante**: las notas de los 15
perfumes cargados hasta el 2026-09-21 fueron buscadas una por una en
Fragrantica (no inventadas) — si se agregan perfumes nuevos, buscar sus
notas reales de la misma forma antes de cargarlas, o dejar `notas: ""` si
no se encuentran (es el caso de "My Sweet Lover", una fragancia genérica
sin ficha en Fragrantica).

## Google Analytics

Preparado pero **desactivado por defecto**: `js/config.js` tiene el campo
`googleAnalyticsId: ""`. Cuando el usuario cree su propiedad de GA4 y pase
el ID (formato `G-XXXXXXX`), completar ese campo — `main.js`
(`cargarGoogleAnalytics`) inyecta el script de gtag.js solo si ese campo
tiene un valor. Ya están instrumentados dos eventos personalizados:
`ver_producto` (al abrir el modal de un perfume) y `consultar_producto`
(al tocar "Consultar" en una opción), para poder ver qué perfumes generan
más interés y más consultas, no solo visitas a la página.

## Pendientes / ideas anotadas, no implementadas

- Falta que el usuario cree la propiedad de Google Analytics y pase el ID
  (ver sección de arriba) para activar las estadísticas.

**Descartado a propósito**: botón de WhatsApp como alternativa a Instagram.
El usuario pidió explícitamente no agregarlo (2026-09-21): el WhatsApp
vinculado es el celular personal de su hijo (menor) y no quiere exponerlo
a desconocidos. No proponer esto de nuevo salvo que el usuario lo pida.

## Cómo seguir trabajando

- **Cargar productos nuevos**: seguir el formato de `js/productos.js`
  (ver comentarios arriba de la lista en ese mismo archivo).
- **Publicar cambios**: `git add -A && git commit -m "..." && git push`
  desde `C:\Dev\catalogo-perfumes`. Se actualiza solo en GitHub Pages.
- Si se abre una conversación nueva con Claude Code sin este historial,
  alcanza con decir "mirá el archivo CONTEXTO.md" para que tenga todo el
  panorama del proyecto.
