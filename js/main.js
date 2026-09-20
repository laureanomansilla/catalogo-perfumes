(function () {
  const CONFIG = window.CONFIG;
  const PRODUCTOS = window.PRODUCTOS || [];

  const $ = (selector) => document.querySelector(selector);

  const grilla = $("#grilla-productos");
  const contador = $("#contador-resultados");
  const sinResultados = $("#sin-resultados");
  const toast = $("#toast");

  const inputBusqueda = $("#filtro-busqueda");
  const selectTipo = $("#filtro-tipo");
  const selectGenero = $("#filtro-genero");
  const selectOrden = $("#orden");
  const checkAgotados = $("#filtro-agotados");

  function aplicarConfiguracion() {
    document.title = `${CONFIG.nombreEmprendimiento} — Catálogo`;
    $("#brand-name").textContent = CONFIG.nombreEmprendimiento;
    $("#brand-slogan").textContent = CONFIG.eslogan;
    document.querySelector(".footer-brand").textContent = CONFIG.nombreEmprendimiento;
    $("#anio").textContent = new Date().getFullYear();

    const igLink = $("#instagram-link");
    igLink.href = `https://instagram.com/${CONFIG.instagramUsername}`;
  }

  function formatearPrecio(valor) {
    return `${CONFIG.simboloMoneda}${Number(valor).toLocaleString("es-AR")}`;
  }

  function mostrarToast(mensaje) {
    toast.textContent = mensaje;
    toast.hidden = false;
    clearTimeout(mostrarToast._t);
    mostrarToast._t = setTimeout(() => {
      toast.hidden = true;
    }, 2500);
  }

  function consultarProducto(producto) {
    const mensaje = CONFIG.mensajeConsulta.replace(
      "{producto}",
      `${producto.nombre} (${producto.marca}, ${producto.ml}ml)`
    );

    const copiar = () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mensaje).catch(() => {});
      }
    };
    copiar();

    mostrarToast("Mensaje copiado. Se abrió tu perfil de Instagram, ¡pegalo en el chat!");
    window.open(`https://ig.me/m/${CONFIG.instagramUsername}`, "_blank", "noopener");
  }

  function crearCard(producto) {
    const card = document.createElement("article");
    card.className = "card" + (producto.disponible ? "" : " agotado");

    const tipoClase = producto.tipo === "Decant" ? "badge-decant" : "badge-perfume";

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="images/productos/${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="badges">
          <span class="badge ${tipoClase}">${producto.tipo}</span>
          ${!producto.disponible ? '<span class="badge badge-agotado">Agotado</span>' : ""}
        </div>
        <span class="card-marca">${producto.marca}</span>
        <h3 class="card-nombre">${producto.nombre}</h3>
        <p class="card-desc">${producto.descripcion || ""}</p>
        <div class="card-meta">
          <span class="card-ml">${producto.ml} ml · ${producto.genero}</span>
          <span class="card-precio">${formatearPrecio(producto.precio)}</span>
        </div>
        <button class="card-consultar" ${producto.disponible ? "" : "disabled"}>
          ${producto.disponible ? "Consultar por Instagram" : "No disponible"}
        </button>
      </div>
    `;

    const boton = card.querySelector(".card-consultar");
    if (producto.disponible) {
      boton.addEventListener("click", () => consultarProducto(producto));
    }

    return card;
  }

  function filtrarYOrdenar() {
    const texto = inputBusqueda.value.trim().toLowerCase();
    const tipo = selectTipo.value;
    const genero = selectGenero.value;
    const orden = selectOrden.value;
    const mostrarAgotados = checkAgotados.checked;

    let resultado = PRODUCTOS.filter((p) => {
      if (!mostrarAgotados && !p.disponible) return false;
      if (tipo !== "todos" && p.tipo !== tipo) return false;
      if (genero !== "todos" && p.genero !== genero) return false;
      if (texto) {
        const enNombre = p.nombre.toLowerCase().includes(texto);
        const enMarca = p.marca.toLowerCase().includes(texto);
        if (!enNombre && !enMarca) return false;
      }
      return true;
    });

    switch (orden) {
      case "nombre-asc":
        resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case "precio-asc":
        resultado.sort((a, b) => a.precio - b.precio);
        break;
      case "precio-desc":
        resultado.sort((a, b) => b.precio - a.precio);
        break;
      case "destacados":
      default:
        resultado.sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));
        break;
    }

    return resultado;
  }

  function render() {
    const productos = filtrarYOrdenar();

    grilla.innerHTML = "";
    productos.forEach((p) => grilla.appendChild(crearCard(p)));

    sinResultados.hidden = productos.length !== 0;

    const total = PRODUCTOS.length;
    contador.textContent = `Mostrando ${productos.length} de ${total} productos`;
  }

  [inputBusqueda, selectTipo, selectGenero, selectOrden, checkAgotados].forEach((el) => {
    el.addEventListener("input", render);
    el.addEventListener("change", render);
  });

  aplicarConfiguracion();
  render();
})();
