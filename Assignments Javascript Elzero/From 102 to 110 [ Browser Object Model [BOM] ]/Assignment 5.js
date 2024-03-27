// Assignment 5
let div = document.createElement("div");
div.textContent = "10";
document.body.appendChild(div);

let counter = setInterval(function () {
  div.textContent--;
  if (div.textContent === "5"){
    window.open("https://elzero.org/","_blank"," width = 400; , height = 400 ,left= 300px, top= 100px");
  } 
  if  (div.textContent === "0") clearInterval(counter);
}, 1000);