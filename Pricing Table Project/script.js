let toggler = document.querySelector(".toggler");
let startPrice = document.getElementById("starter-price");
let proPrice = document.getElementById("pro-price");
let entreprise = document.getElementById("entreprise");

toggler.addEventListener("change", () => {
  if (toggler.checked) {
    startPrice.innerHTML = `$200 <span>/year</span>`;
    proPrice.innerHTML = `$800 <span>/year</span>`;
    entreprise.innerHTML = "let's Meet!";
  } else {
    startPrice.innerHTML = `$19 <span>/month</span>`;
    proPrice.innerHTML = `$99 <span>/month</span>`;
    entreprise.innerHTML = "Let's Talk!";
  }
});
