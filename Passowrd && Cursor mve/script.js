// password //

let showClose = document.getElementById("show-close");
let password = document.getElementById("password");

showClose.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    showClose.textContent = "Hide";
  } else {
    password.type = "password";
    showClose.textContent = "Show";
  }
};

// cursor //

let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
  moveCursor(event.pageX, event.pageY);
});

let moveCursor = function (pageX, pageY) {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
