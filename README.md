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

## Cómo agregar fotos

1. Guardá la foto del perfume dentro de la carpeta `images/productos/`
   (por ejemplo: `sauvage.jpg`)
2. En `js/productos.js`, en el producto correspondiente, cambiá:
   `imagen: "placeholder.svg"` por `imagen: "sauvage.jpg"`

Tip: para que el catálogo se vea prolijo, usá fotos cuadradas (por ejemplo 800x800px).

## Cómo cambiar el nombre, el eslogan o el Instagram

Abrí `js/config.js` y editá esos valores. Están comentados y son fáciles de ubicar.

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
