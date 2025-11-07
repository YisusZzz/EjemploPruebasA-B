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

// Lógica para los botones Manuales
document.getElementById("nextBtn").addEventListener("click", () => {
  showSlide(++slideIndex);
});
document.getElementById("prevBtn").addEventListener("click", () => {
  showSlide(--slideIndex);
});

// Lógica del Botón "Me Gusta" para la Versión A
document.getElementById("likeButton").addEventListener("click", () => {
  alert("¡Gracias por tu opinión!");

  // Envía el evento a Google Analytics
  if (typeof gtag === "function") {
    gtag("event", "clic_me_gusta", {
      event_label: "Version A - Manual",
    });
  }
});

// Mostrar el primer slide
showSlide(slideIndex);
