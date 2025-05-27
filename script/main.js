var openButton = document.querySelector(".btn-open");
var closeButton = document.querySelector(".btn-close");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
function toggleModal() {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}
closeButton.addEventListener("click", toggleModal);
openButton.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        toggleModal();
    }
});
