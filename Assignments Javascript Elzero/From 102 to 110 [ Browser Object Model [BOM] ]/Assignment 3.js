// Assignment 3
let div = document.createElement("div");
div.textContent = "10";
document.body.appendChild(div);

let counter = setInterval(function () {
  div.textContent--;
  if (div.textContent === "0") clearInterval(counter);
}, 1000);