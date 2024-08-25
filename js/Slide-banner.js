let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

let autoSlide = setInterval(nextSlide, 3000); // Slide every 3 seconds

// Pause on hover
document.querySelector(".slide-banner").addEventListener("mouseover", () => {
  clearInterval(autoSlide);
});

document.querySelector(".slide-banner").addEventListener("mouseleave", () => {
  autoSlide = setInterval(nextSlide, 3000);
});
