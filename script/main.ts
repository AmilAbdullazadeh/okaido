const openButton = document.querySelector(".btn-open") as HTMLButtonElement;
const closeButton = document.querySelector(".btn-close") as HTMLButtonElement;
const modal = document.querySelector(".modal") as HTMLDivElement;
const overlay = document.querySelector(".overlay") as HTMLDivElement;


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