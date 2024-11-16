let selectFiled = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let options = document.querySelectorAll(".options");

let menu = document.getElementById("menu");

selectFiled.addEventListener("click", () => {
  list.classList.toggle("hide");
  menu.classList.toggle("rotate");
});

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    menu.classList.toggle("rotate");
  };
}
