/*
  Optimiza las fotos de productos automáticamente.
  ---------------------------------
  Se corre solo, en GitHub, cada vez que se sube una foto nueva a
  images/productos/ (ver .github/workflows/optimize-images.yml).
  No hace falta ejecutarlo a mano.

  Qué hace:
    - Achica las fotos a un máximo de 900x900px (de sobra para el catálogo)
    - Las convierte a JPG de buena calidad (mucho más liviano que PNG
      para fotos, que es el formato en el que suelen llegar las piezas
      publicitarias)
    - Si una foto cambia de nombre (por ejemplo, de .png a .jpg), corrige
      automáticamente la referencia en js/productos.js
*/

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "images", "productos");
const PRODUCTOS_JS = path.join(ROOT, "js", "productos.js");

const MAX_DIM = 900;
const JPEG_QUALITY = 78;
const EXCLUIR = new Set(["placeholder.svg"]);

async function main() {
  const archivos = fs
    .readdirSync(IMAGES_DIR)
    .filter((f) => /\.(png|jpe?g)$/i.test(f) && !EXCLUIR.has(f));

  let huboCambios = false;
  let productosJs = fs.readFileSync(PRODUCTOS_JS, "utf8");

  for (const archivo of archivos) {
    const fullPath = path.join(IMAGES_DIR, archivo);
    const antes = fs.statSync(fullPath).size;

    const ext = path.extname(archivo).toLowerCase();
    const base = path.basename(archivo, ext);
    const nombreNuevo = base + ".jpg";
    const rutaNueva = path.join(IMAGES_DIR, nombreNuevo);
    const rutaTemp = rutaNueva + ".tmp";

    const buffer = await sharp(fullPath)
      .resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();

    // Si ya está optimizada y no cambia nada, no tocar el archivo
    // (evita commits vacíos cuando el workflow se vuelve a correr).
    const yaExiste = ext === ".jpg" && fs.existsSync(rutaNueva);
    const igual = yaExiste && Buffer.compare(buffer, fs.readFileSync(rutaNueva)) === 0;
    if (igual) continue;

    fs.writeFileSync(rutaTemp, buffer);

    if (ext === ".png") {
      fs.unlinkSync(fullPath);
      if (productosJs.includes(`"${archivo}"`)) {
        productosJs = productosJs.split(`"${archivo}"`).join(`"${nombreNuevo}"`);
      }
    }
    fs.renameSync(rutaTemp, rutaNueva);

    const despues = fs.statSync(rutaNueva).size;
    console.log(`${archivo} -> ${nombreNuevo}: ${(antes / 1024).toFixed(0)}KB -> ${(despues / 1024).toFixed(0)}KB`);
    huboCambios = true;
  }

  if (huboCambios) {
    fs.writeFileSync(PRODUCTOS_JS, productosJs);
    console.log("\nListo, se optimizaron fotos nuevas.");
  } else {
    console.log("Todas las fotos ya estaban optimizadas, no hubo cambios.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
