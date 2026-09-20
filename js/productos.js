/*
  LISTA DE PRODUCTOS
  ---------------------------------
  Cada PERFUME es un bloque entre { }, con UNA sola foto, y adentro tiene
  una lista de "opciones" (decant, frasco entero, etc.) con su propio
  precio. Para agregar un perfume nuevo, copiá un bloque completo (desde
  la { hasta la }, ) y pegalo antes del ] final, después cambiá los datos.

  Campos del perfume:
    id            -> número único, no repetir (1, 2, 3, ...)
    nombre        -> nombre del perfume
    marca         -> marca del perfume
    genero        -> "Hombre", "Mujer" o "Unisex"
    imagen        -> nombre del archivo de imagen dentro de images/productos/
                     (si no tenés foto todavía, dejá "placeholder.svg")
    descripcion   -> texto corto sobre el perfume
    destacado     -> true si querés que aparezca primero, si no false
    opciones      -> lista de formatos en los que se vende (ver abajo)

  Campos de cada opción (dentro de "opciones"):
    tipo          -> "Decant" o "Perfume" (perfume completo)
    ml            -> tamaño en mililitros (número, sin la palabra "ml")
    precio        -> precio en números, sin puntos ni comas (ej: 5000)
    disponible    -> true si hay stock, false si está agotado

  Un perfume puede tener más de una opción del mismo tipo, por ejemplo
  dos decants de distinto tamaño (3ml y 10ml): simplemente agregá otro
  bloque { tipo, ml, precio, disponible } dentro de "opciones".
*/

window.PRODUCTOS = [
  {
    id: 1,
    nombre: "Asad Elixir",
    marca: "Lattafa",
    genero: "Hombre",
    imagen: "asad-elixir.png",
    descripcion: "Eau de Parfum intenso y amaderado, inspirado en la fuerza del león.",
    destacado: true,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5440, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 40000, disponible: true },
    ],
  },
  {
    id: 3,
    nombre: "Mandaryn Sky",
    marca: "Armaf",
    genero: "Hombre",
    imagen: "mandaryn-sky.png",
    descripcion: "Odyssey Homme Limited Edition, fresco y vibrante.",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5260, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 50000, disponible: true },
    ],
  },
  {
    id: 5,
    nombre: "Hawas Ice",
    marca: "Rasasi",
    genero: "Hombre",
    imagen: "hawas-ice.png",
    descripcion: "Frescura intensa que deja huella.",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5550, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 45000, disponible: true },
    ],
  },
  {
    id: 7,
    nombre: "His Confession",
    marca: "Lattafa",
    genero: "Hombre",
    imagen: "his-confession.png",
    descripcion: "Edición exclusiva, elegante y envolvente.",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5810, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 55000, disponible: true },
    ],
  },
  {
    id: 9,
    nombre: "9 PM Night Out",
    marca: "Afnan",
    genero: "Hombre",
    imagen: "9pm-night-out.png",
    descripcion: "Una fragancia más allá del tiempo, para noches inolvidables.",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5850, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 50000, disponible: true },
    ],
  },
  {
    id: 11,
    nombre: "Khamrah",
    marca: "Lattafa",
    genero: "Hombre",
    imagen: "khamrah.png",
    descripcion: "Oriental gourmand, fuerza en cada esencia.",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5100, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 50000, disponible: true },
    ],
  },
  {
    id: 13,
    nombre: "La Bomba",
    marca: "Carolina Herrera",
    genero: "Mujer",
    imagen: "la-bomba.png",
    descripcion: "Esencia nórdica, fuerza en cada nota.",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 4787, disponible: true },
      { tipo: "Perfume", ml: 80, precio: 50000, disponible: true },
    ],
  },
];
