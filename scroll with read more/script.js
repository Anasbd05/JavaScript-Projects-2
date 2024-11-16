// for scroll to top
let btn = document.getElementById("btn");
btn.style.display = "none";
addEventListener("scroll", () => {
  if (scrollY > 1000) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});
btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// for read more

let read = document.querySelector(".read");
let text2 = document.querySelector(".cont2");

read.addEventListener("click", () => {
  text2.classList.toggle("active");
  if (text2.classList.contains("active")) {
    read.textContent = "Read Less";
  } else {
    read.textContent = "Read More";
  }
});
