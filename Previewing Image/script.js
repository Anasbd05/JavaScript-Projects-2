let file = document.getElementById("file");

file.addEventListener("change", (e) => {
  let file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    document.images[0].src = url;
  }
});
