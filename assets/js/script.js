const slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide img");
  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
}
