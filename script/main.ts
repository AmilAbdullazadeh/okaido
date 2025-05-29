const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

let currentSlide = 0;
let latestSlide = slides.length - 1;

function nextSlide() {

  if (currentSlide > latestSlide) {
     currentSlide = 1
  } else {
    currentSlide++;
  }

  slides.forEach((slide, index) => { // slide 1, slide 2, slide 3
    (slide as HTMLElement).style.transform = `translateX(${100 * (index - currentSlide)}%)`; // 100 * (0 - 1) = -100%, 100 * (1 - 1) = 0%, 100 * (2 - 1) - 100%
  });

}

nextBtn?.addEventListener("click", nextSlide);