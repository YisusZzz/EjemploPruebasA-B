let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}

// Lógica para los botones Manuales (se mantiene)
document.getElementById("nextBtn").addEventListener("click", () => {
  showSlide(++slideIndex);
});
document.getElementById("prevBtn").addEventListener("click", () => {
  showSlide(--slideIndex);
});

// Lógica del Botón "Me Gusta" para la Versión B
document.getElementById("likeButton").addEventListener("click", () => {
  alert("¡Gracias por tu opinión!");

  // Envía el evento a Google Analytics
  if (typeof gtag === "function") {
    gtag("event", "clic_me_gusta", {
      event_label: "Version B - Automatico", // <-- CAMBIO 1
    });
  }
});

// Mostrar el primer slide
showSlide(slideIndex);

// --- INICIO CÓDIGO VERSIÓN B --- // <-- CAMBIO 2
// Inicia el carrusel automático
setInterval(() => {
  showSlide(++slideIndex);
}, 3000); // Cambia de foto cada 3 segundos
// --- FIN CÓDIGO VERSIÓN B ---
