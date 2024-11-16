let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

let ToTop = document.getElementById("ToTop");

ToTop.style.display = "none";

addEventListener("scroll", () =>{
  if (scrollY > 800) {
    ToTop.style.display = "flex";
  } else {
    ToTop.style.display = "none";
  }
});

ToTop.onclick =  () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
