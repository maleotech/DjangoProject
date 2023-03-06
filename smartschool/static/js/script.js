const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselInner = document.querySelector('.carousel-inner');

let slideIndex = 0;

function showSlide(n) {
  slideIndex = (n + carouselInner.children.length) % carouselInner.children.length;
  carouselInner.style.transform = `translateX(-${slideIndex * (100 / carouselInner.children.length)}%)`;
}

function showPrevSlide() {
  showSlide(slideIndex - 1);
}

function showNextSlide() {
  showSlide(slideIndex + 1);
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);
