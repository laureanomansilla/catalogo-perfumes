/*
  LISTA DE PRODUCTOS
  ---------------------------------
  Cada producto es un bloque entre { }. Para agregar uno nuevo, copiá un
  bloque completo (desde la { hasta la }, ) y pegalo antes del ] final,
  después cambiá los datos.

  Campos:
    id            -> número único, no repetir (1, 2, 3, ...)
    nombre        -> nombre del perfume
    marca         -> marca del perfume
    tipo          -> "Decant" o "Perfume" (perfume completo)
    genero        -> "Hombre", "Mujer" o "Unisex"
    ml            -> tamaño en mililitros (número, sin la palabra "ml")
    precio        -> precio en números, sin puntos ni comas (ej: 5000)
    imagen        -> nombre del archivo de imagen dentro de images/productos/
                     (si no tenés foto todavía, dejá "placeholder.svg")
    descripcion   -> texto corto sobre el perfume
    destacado     -> true si querés que aparezca primero, si no false
    disponible    -> true si hay stock, false si está agotado
*/

window.PRODUCTOS = [
  {
    id: 1,
    nombre: "Asad Elixir",
    marca: "Lattafa",
    tipo: "Decant",
    genero: "Unisex",
    ml: 5,
    precio: 5440,
    imagen: "asad-elixir.png",
    descripcion: "Eau de Parfum intenso y amaderado, inspirado en la fuerza del león.",
    destacado: true,
    disponible: true,
  },
  {
    id: 2,
    nombre: "Asad Elixir",
    marca: "Lattafa",
    tipo: "Perfume",
    genero: "Unisex",
    ml: 100,
    precio: 40000,
    imagen: "asad-elixir.png",
    descripcion: "Frasco original 100ml.",
    destacado: true,
    disponible: true,
  },
];
