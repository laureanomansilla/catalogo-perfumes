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
    notas         -> (OPCIONAL) notas olfativas separadas por coma, para
                     mostrar en el detalle del perfume (ej: "Bergamota,
                     lavanda, ámbar"). Si no la sabés, dejala vacía "".
    destacado     -> true si querés que aparezca primero, si no false
    fechaAlta     -> (OPCIONAL) fecha en la que cargaste el perfume, en
                     formato "AAAA-MM-DD" (ej: "2026-09-21"). Si la ponés,
                     durante las primeras 24hs aparece una etiqueta
                     "NUEVO" en la foto, y después desaparece sola. Si no
                     la ponés, el perfume nunca muestra esa etiqueta.
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
    imagen: "asad-elixir.jpg",
    descripcion: "Eau de Parfum intenso y amaderado, inspirado en la fuerza del león.",
    notas: "Pimienta rosa, azafrán, pomelo, tabaco, vainilla, cedro, ámbar, incienso, pachulí",
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
    imagen: "mandaryn-sky.jpg",
    descripcion: "Odyssey Homme Limited Edition, fresco y vibrante.",
    notas: "Mandarina, naranja, azafrán, salvia, caramelo, haba tonka, ámbar, vetiver, cedro",
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
    imagen: "hawas-ice.jpg",
    descripcion: "Frescura intensa que deja huella.",
    notas: "Manzana, limón, bergamota, anís estrellado, ciruela, azahar, cardamomo, almizcle, ámbar, musgo",
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
    imagen: "his-confession.jpg",
    descripcion: "Edición exclusiva, elegante y envolvente.",
    notas: "Canela, lavanda, mandarina, iris, benjuí, vainilla, haba tonka, ámbar, incienso, cedro, pachulí",
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
    imagen: "9pm-night-out.jpg",
    descripcion: "Una fragancia más allá del tiempo, para noches inolvidables.",
    notas: "Pitahaya, coñac, lavanda, manzana, bergamota, toffee, gamuza, cardamomo, haba tonka, pachulí",
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
    imagen: "khamrah.jpg",
    descripcion: "Oriental gourmand, fuerza en cada esencia.",
    notas: "Canela, nuez moscada, bergamota, dátiles, praliné, vainilla, haba tonka, mirra, benjuí",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5100, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 50000, disponible: true },
    ],
  },
  {
    id: 15,
    nombre: "Yara Candy",
    marca: "Lattafa",
    genero: "Mujer",
    imagen: "yara-candy.jpg",
    descripcion: "Dulzura que te define, con frutos rojos y vainilla envolvente.",
    notas: "Grosella negra, mandarina verde, caramelo de frutilla, gardenia, vainilla, almizcle, ámbar, sándalo",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5440, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 40000, disponible: true },
    ],
  },
  {
    id: 16,
    nombre: "Sabah Al Ward",
    marca: "Al Wataniah",
    genero: "Mujer",
    imagen: "sabah-al-ward.jpg",
    descripcion: "Notas amaderadas y toque floral, con fondo cálido y sofisticado.",
    notas: "Pimienta rosa, mandarina, azahar, cacao, jazmín, vainilla, haba tonka, pachulí",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5100, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 40000, disponible: true },
    ],
  },
  {
    id: 17,
    nombre: "My Sweet Lover",
    marca: "Genérico",
    genero: "Mujer",
    imagen: "my-sweet-lover.jpg",
    descripcion: "Notas frutales, toque dulce y vainilla envolvente.",
    notas: "",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 4930, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 30000, disponible: true },
    ],
  },
  {
    id: 18,
    nombre: "Miss Dear",
    marca: "Dear",
    genero: "Mujer",
    imagen: "miss-dear.jpg",
    descripcion: "Elegancia en cada detalle, con notas frutales y toque floral.",
    notas: "Mandarina, rosa, jazmín, pachulí, almizcle",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 4930, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 30000, disponible: true },
    ],
  },
  {
    id: 19,
    nombre: "Sweet Tooth",
    marca: "Sabrina Carpenter",
    genero: "Mujer",
    imagen: "sweet-tooth.jpg",
    descripcion: "Dulzura que deja huella, con vainilla cremosa y toque gourmand.",
    notas: "Bergamota, jengibre confitado, malvavisco de chocolate, jazmín, leche de coco, vainilla, madera cashmere, crema chantilly, almizcle",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 6100, disponible: true },
      { tipo: "Perfume", ml: 75, precio: 40000, disponible: true },
    ],
  },
  {
    id: 20,
    nombre: "Fakhar Rose",
    marca: "Lattafa",
    genero: "Mujer",
    imagen: "fakhar-rose.jpg",
    descripcion: "Elegancia que deja huella, con vainilla cremosa y toque amaderado.",
    notas: "Frutos, lirio, granada, nardo, jazmín, gardenia, ylang-ylang, rosa, madreselva, peonía, vainilla, almizcle blanco, sándalo",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 4930, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 50000, disponible: true },
    ],
  },
  {
    id: 21,
    nombre: "Club de Nuit Urban Man Elixir",
    marca: "Armaf",
    genero: "Hombre",
    imagen: "club-de-nuit-urban-man-elixir.jpg",
    descripcion: "Distinción en cada detalle, con bergamota, lavanda, maderas nobles y ámbar.",
    notas: "Bergamota, pimienta rosa, jazmín, azahar, lavanda, geranio, vetiver, azafrán, ámbar, cedro, pachulí",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5100, disponible: true },
      { tipo: "Perfume", ml: 105, precio: 45000, disponible: true },
    ],
  },
  {
    id: 22,
    nombre: "Hawas Malibu",
    marca: "Rasasi",
    genero: "Hombre",
    imagen: "hawas-malibu.jpg",
    descripcion: "Frescura que deja huella, con bergamota, lavanda, maderas nobles y ámbar.",
    notas: "Ananá, naranja, pomelo, lirio, ámbar, lavanda, haba tonka, almizcle, pachulí",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 5550, disponible: true },
      { tipo: "Perfume", ml: 100, precio: 45000, disponible: true },
    ],
  },
  {
    id: 13,
    nombre: "La Bomba",
    marca: "Carolina Herrera",
    genero: "Mujer",
    imagen: "la-bomba.jpg",
    descripcion: "Esencia nórdica, fuerza en cada nota.",
    notas: "Pitahaya, ananá, mandarina, frangipani, peonía roja, azahar, jazmín, vainilla, pachulí, haba tonka",
    destacado: false,
    opciones: [
      { tipo: "Decant", ml: 5, precio: 4787, disponible: true },
      { tipo: "Perfume", ml: 80, precio: 50000, disponible: true },
    ],
  },
  {
    id: 23,
    nombre: "Jorge di Profumo",
    marca: "Maison Alhambra",
    genero: "Hombre",
    imagen: "jorge-di-profumo.jpg",
    descripcion: "Fresco y amaderado, con tabaco y vetiver de fondo.",
    notas: "Bergamota, pimienta negra, limón siciliano, lavanda, tabaco, geranio, vetiver, sándalo, almizcle",
    destacado: false,
    fechaAlta: "2026-09-27",
    opciones: [
      { tipo: "Decant", ml: 5, precio: 4000, disponible: true },
    ],
  },
  {
    id: 24,
    nombre: "Bross London Gold",
    marca: "Fragancias Cannon",
    genero: "Hombre",
    imagen: "bross-london-gold.jpg",
    descripcion: "Elegante y especiado, con azafrán y grosella negra de apertura.",
    notas: "Azafrán, grosella negra, pomelo, rosa, canela, geranio, pachulí, sándalo, cedro, ámbar gris",
    destacado: false,
    fechaAlta: "2026-09-27",
    opciones: [
      { tipo: "Decant", ml: 5, precio: 4000, disponible: true },
    ],
  },
  {
    id: 25,
    nombre: "Homem Potence",
    marca: "Natura",
    genero: "Hombre",
    imagen: "homem-potence.jpg",
    descripcion: "Amaderado y especiado, potente y sofisticado.",
    notas: "Pimienta rosa, azafrán, ámbar, maderas",
    destacado: false,
    fechaAlta: "2026-09-27",
    opciones: [
      { tipo: "Decant", ml: 5, precio: 6000, disponible: true },
    ],
  },
  {
    id: 26,
    nombre: "Liquid Brun",
    marca: "French Avenue",
    genero: "Hombre",
    imagen: "liquid-brun.jpg",
    descripcion: "Amaderado gourmand, cálido y envolvente.",
    notas: "Canela, azahar, cardamomo, bergamota, vainilla bourbon, elemí, praliné, ambroxán, almizcle, madera de guayaco",
    destacado: false,
    fechaAlta: "2026-09-27",
    opciones: [
      { tipo: "Decant", ml: 5, precio: 6500, disponible: true },
    ],
  },
  {
    id: 27,
    nombre: "Le Male Elixir",
    marca: "Jean Paul Gaultier",
    genero: "Hombre",
    imagen: "le-male-elixir.jpg",
    descripcion: "Cálido, ahumado y seductor, con miel y tabaco de fondo.",
    notas: "Lavanda, menta, vainilla, benjuí, miel, haba tonka, tabaco",
    destacado: false,
    fechaAlta: "2026-09-27",
    opciones: [
      { tipo: "Decant", ml: 5, precio: 7500, disponible: true },
    ],
  },
  {
    id: 28,
    nombre: "Toy Boy 2",
    marca: "Moschino",
    genero: "Hombre",
    imagen: "toy-boy-2.jpg",
    descripcion: "Amaderado especiado, con nuez moscada, café y mirra.",
    notas: "Nuez moscada, jengibre, akigalawood, café, mirra, vetiver",
    destacado: false,
    fechaAlta: "2026-09-27",
    opciones: [
      { tipo: "Decant", ml: 5, precio: 7000, disponible: true },
    ],
  },
];
