let availableKeyWords = [
  "HTML",
  "CSS",
  "Next Js",
  "Javascript",
  "Web design",
  "React Js",
  "learning coding",
  "focused",
];
let inputBox = document.getElementById("input-box");
let resultBox = document.querySelector(".result-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.length) {
    result = availableKeyWords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

function display(result) {
  let content = result.map((list) => {
    return "<li onclick = selectInput(this)>" + list + "</li>";
  });
  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}
function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
