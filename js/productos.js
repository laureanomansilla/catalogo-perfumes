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
    nombre: "Sauvage",
    marca: "Dior",
    tipo: "Decant",
    genero: "Hombre",
    ml: 5,
    precio: 6000,
    imagen: "placeholder.svg",
    descripcion: "Fresco y especiado, ideal para el día a día.",
    destacado: true,
    disponible: true,
  },
  {
    id: 2,
    nombre: "Sauvage",
    marca: "Dior",
    tipo: "Perfume",
    genero: "Hombre",
    ml: 100,
    precio: 85000,
    imagen: "placeholder.svg",
    descripcion: "Frasco original 100ml.",
    destacado: false,
    disponible: true,
  },
  {
    id: 3,
    nombre: "Good Girl",
    marca: "Carolina Herrera",
    tipo: "Decant",
    genero: "Mujer",
    ml: 5,
    precio: 6500,
    imagen: "placeholder.svg",
    descripcion: "Dulce y sensual, con un toque de almendra.",
    destacado: true,
    disponible: true,
  },
  {
    id: 4,
    nombre: "Bleu de Chanel",
    marca: "Chanel",
    tipo: "Decant",
    genero: "Hombre",
    ml: 10,
    precio: 11000,
    imagen: "placeholder.svg",
    descripcion: "Amaderado y elegante, un clásico moderno.",
    destacado: false,
    disponible: true,
  },
  {
    id: 5,
    nombre: "Libre",
    marca: "Yves Saint Laurent",
    tipo: "Decant",
    genero: "Mujer",
    ml: 5,
    precio: 7000,
    imagen: "placeholder.svg",
    descripcion: "Floral y especiado, con lavanda y azahar.",
    destacado: false,
    disponible: false,
  },
  {
    id: 6,
    nombre: "One Million",
    marca: "Paco Rabanne",
    tipo: "Decant",
    genero: "Hombre",
    ml: 5,
    precio: 5500,
    imagen: "placeholder.svg",
    descripcion: "Intenso y dulce, con canela y cuero.",
    destacado: false,
    disponible: true,
  },
];
