var slides = document.querySelectorAll(".slide");
var nextBtn = document.querySelector(".btn-next");
var prevBtn = document.querySelector(".btn-prev");
var currentSlide = 1;
var latestSlide = slides.length - 1;
function nextSlide() {
    if (currentSlide > latestSlide) {
        currentSlide = 1;
    }
    else {
        currentSlide++;
    }
    slides.forEach(function (slide, index) {
        slide.style.transform = "translateX(".concat(100 * (index - currentSlide), "%)"); // 100 * (0 - 1) = -100%, 100 * (1 - 1) = 0%, 100 * (2 - 1) - 100%
    });
}
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener("click", nextSlide);
