let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
  productImg.src = "image1.png";
  btn[0].classList.add("active");
  btn[2].classList.remove("active");
  btn[1].classList.remove("active");
};
btn[1].onclick = function () {
  productImg.src = "image2.png";
  btn[1].classList.add("active");
  btn[0].classList.remove("active");
  btn[2].classList.remove("active");
};
btn[2].onclick = function () {
  productImg.src = "image3.png";
  btn[2].classList.add("active");
  btn[1].classList.remove("active");
  btn[0].classList.remove("active");
};
