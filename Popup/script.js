let signUp = document.getElementById("open");
let modalContainer = document.querySelector(".modal-container");
let Close = document.getElementById("close");

signUp.addEventListener("click", () => {
  modalContainer.classList.add("show");
});
Close.onclick = function () {
  modalContainer.classList.remove("show");
};

// To close the pop up on click on the page not the close buttom
window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.classList.remove("show");
  } else {
    false;
  }
});
