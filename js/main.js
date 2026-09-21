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
  const selectMarca = $("#filtro-marca");
  const selectOrden = $("#orden");
  const checkAgotados = $("#filtro-agotados");

  const modalOverlay = $("#modal-overlay");
  const modalImg = $("#modal-img");
  const modalMarca = $("#modal-marca");
  const modalNombre = $("#modal-nombre");
  const modalGenero = $("#modal-genero");
  const modalDesc = $("#modal-desc");
  const modalNotasWrap = $("#modal-notas-wrap");
  const modalNotas = $("#modal-notas");
  const modalOpciones = $("#modal-opciones");
  const modalCerrar = $("#modal-cerrar");

  function registrarEvento(nombre, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", nombre, params);
    }
  }

  function cargarGoogleAnalytics() {
    const id = CONFIG.googleAnalyticsId;
    if (!id) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", id);
  }

  function poblarMarcas() {
    const marcas = [...new Set(PRODUCTOS.map((p) => p.marca))].sort((a, b) => a.localeCompare(b));
    marcas.forEach((marca) => {
      const option = document.createElement("option");
      option.value = marca;
      option.textContent = marca;
      selectMarca.appendChild(option);
    });
  }

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

  function consultarOpcion(producto, opcion) {
    const mensaje = CONFIG.mensajeConsulta.replace(
      "{producto}",
      `${producto.nombre} (${producto.marca}) - ${opcion.tipo} ${opcion.ml}ml`
    );

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(mensaje).catch(() => {});
    }

    registrarEvento("consultar_producto", {
      producto: producto.nombre,
      marca: producto.marca,
      tipo: opcion.tipo,
      ml: opcion.ml,
    });

    mostrarToast("Mensaje copiado. Se abrió tu perfil de Instagram, ¡pegalo en el chat!");
    window.open(`https://ig.me/m/${CONFIG.instagramUsername}`, "_blank", "noopener");
  }

  function opcionesVisibles(producto, mostrarAgotados) {
    return producto.opciones.filter((op) => mostrarAgotados || op.disponible);
  }

  const VEINTICUATRO_HORAS_MS = 24 * 60 * 60 * 1000;

  function esNuevo(producto) {
    if (!producto.fechaAlta) return false;
    const transcurrido = Date.now() - new Date(producto.fechaAlta).getTime();
    return transcurrido >= 0 && transcurrido < VEINTICUATRO_HORAS_MS;
  }

  function crearFilaOpcion(producto, opcion) {
    const fila = document.createElement("div");
    fila.className = "opcion" + (opcion.disponible ? "" : " opcion-agotada");

    fila.innerHTML = `
      <div class="opcion-top">
        <span class="badge ${opcion.tipo === "Decant" ? "badge-decant" : "badge-perfume"}">${opcion.tipo}</span>
        <span class="opcion-ml">${opcion.ml} ml</span>
        ${!opcion.disponible ? '<span class="badge badge-agotado">Agotado</span>' : ""}
      </div>
      <div class="opcion-bottom">
        <span class="opcion-precio">${formatearPrecio(opcion.precio)}</span>
        <button class="opcion-consultar" ${opcion.disponible ? "" : "disabled"}>
          ${opcion.disponible ? "Consultar" : "No disponible"}
        </button>
      </div>
    `;

    const boton = fila.querySelector(".opcion-consultar");
    if (opcion.disponible) {
      boton.addEventListener("click", () => consultarOpcion(producto, opcion));
    }

    return fila;
  }

  function abrirModal(producto, opciones) {
    modalImg.src = `images/productos/${producto.imagen}`;
    modalImg.alt = producto.nombre;
    modalMarca.textContent = producto.marca;
    modalNombre.textContent = producto.nombre;
    modalGenero.textContent = producto.genero;
    modalDesc.textContent = producto.descripcion || "";

    if (producto.notas) {
      modalNotas.textContent = producto.notas;
      modalNotasWrap.hidden = false;
    } else {
      modalNotasWrap.hidden = true;
    }

    modalOpciones.innerHTML = "";
    opciones.forEach((op) => modalOpciones.appendChild(crearFilaOpcion(producto, op)));

    modalOverlay.hidden = false;
    document.body.style.overflow = "hidden";

    registrarEvento("ver_producto", { producto: producto.nombre, marca: producto.marca });
  }

  function cerrarModal() {
    modalOverlay.hidden = true;
    document.body.style.overflow = "";
  }

  modalCerrar.addEventListener("click", cerrarModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) cerrarModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalOverlay.hidden) cerrarModal();
  });

  function crearCard(producto, opciones) {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="card-img-wrap card-clickeable">
        ${esNuevo(producto) ? '<span class="badge-nuevo">Nuevo</span>' : ""}
        <img src="images/productos/${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
      </div>
      <div class="card-body">
        <span class="card-marca">${producto.marca}</span>
        <h3 class="card-nombre card-clickeable">${producto.nombre}</h3>
        <p class="card-desc">${producto.descripcion || ""}</p>
        <span class="card-genero">${producto.genero}</span>
        <div class="opciones"></div>
      </div>
    `;

    card.querySelectorAll(".card-clickeable").forEach((el) => {
      el.addEventListener("click", () => abrirModal(producto, opciones));
    });

    const contenedorOpciones = card.querySelector(".opciones");
    opciones.forEach((op) => contenedorOpciones.appendChild(crearFilaOpcion(producto, op)));

    return card;
  }

  function precioMin(opciones) {
    return Math.min(...opciones.map((o) => o.precio));
  }

  function precioMax(opciones) {
    return Math.max(...opciones.map((o) => o.precio));
  }

  function filtrarYOrdenar() {
    const texto = inputBusqueda.value.trim().toLowerCase();
    const tipo = selectTipo.value;
    const genero = selectGenero.value;
    const marca = selectMarca.value;
    const orden = selectOrden.value;
    const mostrarAgotados = checkAgotados.checked;

    let resultado = PRODUCTOS.map((p) => {
      let opciones = opcionesVisibles(p, mostrarAgotados);
      if (tipo !== "todos") {
        opciones = opciones.filter((op) => op.tipo === tipo);
      }
      return { producto: p, opciones };
    }).filter(({ producto: p, opciones }) => {
      if (opciones.length === 0) return false;
      if (genero !== "todos" && p.genero !== genero) return false;
      if (marca !== "todas" && p.marca !== marca) return false;
      if (texto) {
        const enNombre = p.nombre.toLowerCase().includes(texto);
        const enMarca = p.marca.toLowerCase().includes(texto);
        if (!enNombre && !enMarca) return false;
      }
      return true;
    });

    switch (orden) {
      case "nombre-asc":
        resultado.sort((a, b) => a.producto.nombre.localeCompare(b.producto.nombre));
        break;
      case "precio-asc":
        resultado.sort((a, b) => precioMin(a.opciones) - precioMin(b.opciones));
        break;
      case "precio-desc":
        resultado.sort((a, b) => precioMax(b.opciones) - precioMax(a.opciones));
        break;
      case "destacados":
      default:
        resultado.sort((a, b) => (b.producto.destacado ? 1 : 0) - (a.producto.destacado ? 1 : 0));
        break;
    }

    return resultado;
  }

  function render() {
    const items = filtrarYOrdenar();

    grilla.innerHTML = "";
    items.forEach(({ producto, opciones }) => grilla.appendChild(crearCard(producto, opciones)));

    sinResultados.hidden = items.length !== 0;

    const total = PRODUCTOS.length;
    contador.textContent = `Mostrando ${items.length} de ${total} perfumes`;
  }

  [inputBusqueda, selectTipo, selectGenero, selectMarca, selectOrden, checkAgotados].forEach((el) => {
    el.addEventListener("input", render);
    el.addEventListener("change", render);
  });

  aplicarConfiguracion();
  poblarMarcas();
  cargarGoogleAnalytics();
  render();
})();
