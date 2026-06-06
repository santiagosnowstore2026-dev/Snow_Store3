// Cambiar estilo del banner en index
function cambiarTema() {
  const banner = document.querySelector(".banner");
  if (banner) {
    banner.style.background =
      "linear-gradient(rgba(212,175,55,0.4), rgba(0,0,0,0.7))";
    banner.style.transition = "1s";
  }
}

// Selecciona todos los botones de confirmar
document.querySelectorAll(".confirmarBtn").forEach(boton => {
  boton.addEventListener("click", function() {
    // Busca el nombre del producto en el mismo contenedor del botón
    const producto = this.closest(".producto").querySelector(".productoNombre").textContent;

    // Tu número de WhatsApp en formato internacional (57 = Colombia)
    const numeroWhatsApp = "573114867639";

    // Mensaje que se enviará
    const mensaje = `Sí estoy interesad@ en el calzado ${producto}`;

    // Crear el enlace de WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Mostrar alerta y redirigir
    alert(`Tu interés por "${producto}" ha sido confirmado. Te llevaremos a WhatsApp...`);
    window.open(url, "_blank");
  });
});
