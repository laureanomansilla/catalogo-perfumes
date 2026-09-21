# Fragance of the Viking — Catálogo

Catálogo web simple para mostrar perfumes y decants, con filtros de búsqueda
y un botón para consultar por Instagram en cada producto.

## Cómo ver el catálogo en tu computadora

Simplemente abrí el archivo `index.html` con doble clic (se abre en el navegador).

## Cómo agregar o editar productos

Abrí el archivo `js/productos.js` con cualquier editor de texto (o Notepad).
Cada PERFUME es un bloque entre `{ }`, con una sola foto, y adentro tiene una
lista de `opciones` (decant, frasco entero) con su propio precio. Para agregar
un perfume nuevo:

1. Copiá un bloque completo, desde `{` hasta `},`
2. Pegalo antes del `]` final
3. Cambiá los datos (nombre, marca, precio de cada opción, etc.)
4. Guardá el archivo y actualizá la página en el navegador

Si un perfume solo se vende en decant (todavía no tenés frasco entero), dejá
una sola opción dentro de `opciones`. Los campos disponibles están explicados
con comentarios arriba de la lista, dentro del mismo archivo.

**Etiqueta "Nuevo"**: si querés que un perfume recién cargado muestre la
etiqueta "NUEVO" en la foto, agregale el campo `fechaAlta: "AAAA-MM-DD"` con
la fecha de hoy. La etiqueta aparece sola durante 24hs y después desaparece
sola — no hace falta que vuelvas a tocar nada.

**Notas olfativas**: el campo `notas` (texto separado por comas) se muestra
al hacer click en un perfume, dentro del detalle más grande. Si no la sabés
con certeza, mejor dejarla vacía (`notas: ""`) antes que inventar algo — así
no se muestra esa sección en vez de mostrar información incorrecta.

## Ver el detalle de un perfume (notas olfativas, foto grande)

Al hacer click en la foto o en el nombre de cualquier perfume del catálogo
se abre una ventana con el detalle completo, incluyendo las notas olfativas
si están cargadas. Se cierra tocando la ✕, haciendo click afuera, o con la
tecla Escape.

## Cómo agregar fotos

1. Guardá la foto del perfume dentro de la carpeta `images/productos/`
   (por ejemplo: `sauvage.jpg`)
2. En `js/productos.js`, en el producto correspondiente, cambiá:
   `imagen: "placeholder.svg"` por `imagen: "sauvage.jpg"`

Tip: para que el catálogo se vea prolijo, usá fotos cuadradas (por ejemplo 800x800px).

## Cómo cambiar el nombre, el eslogan o el Instagram

Abrí `js/config.js` y editá esos valores. Están comentados y son fáciles de ubicar.

## Cómo activar estadísticas de visitas (Google Analytics)

1. Andá a [analytics.google.com](https://analytics.google.com) y creá una
   cuenta gratuita (con el email que uses para esto).
2. Creá una "propiedad" nueva, tipo "Web", con la URL del catálogo
   (`https://laureanomansilla.github.io/catalogo-perfumes/`).
3. Te va a dar un ID que empieza con `G-` (por ejemplo `G-ABC1234XYZ`).
4. Pegalo en `js/config.js`, en el campo `googleAnalyticsId: ""`.

Mientras ese campo esté vacío, el catálogo no manda ninguna estadística a
Google. En Analytics vas a poder ver cuánta gente entra, y con los eventos
"ver_producto" y "consultar_producto" qué perfumes miran más y cuáles
generan más consultas.

## Cómo publicarlo online (gratis) con GitHub Pages

1. Creá una cuenta en [github.com](https://github.com) si no tenés una.
2. Creá un repositorio nuevo (por ejemplo `catalogo-perfumes`).
3. Subí todos los archivos de esta carpeta a ese repositorio.
4. En el repositorio, andá a **Settings → Pages**.
5. En "Branch", elegí `main` y la carpeta `/ (root)`, después guardá.
6. En un par de minutos el catálogo va a estar disponible en una dirección tipo:
   `https://tu-usuario.github.io/catalogo-perfumes/`

Si querés, decime cuando tengas la cuenta de GitHub creada y te ayudo a subirlo
directamente desde acá.
