function search() {
  let searchBar = document.querySelector(".search-input").value.toUpperCase();
  let productList = document.querySelector(".products-list");
  let product = document.querySelectorAll(".product");

  let productName = document.getElementsByTagName("h2");
  let productPrice = document.getElementsByTagName("h3");

  for (let i = 0; i < productName.length; i++) {
    if (productName[i].textContent.toUpperCase().indexOf(searchBar) >= 0) {
      product[i].style.display = "block";
    } else {
      product[i].style.display = "none";
    }
  }
}
