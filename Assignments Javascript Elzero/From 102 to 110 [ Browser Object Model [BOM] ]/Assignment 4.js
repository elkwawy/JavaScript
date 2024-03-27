// Assignment 4
let div = document.createElement("div");
div.textContent = "10";
document.body.appendChild(div);

let counter = setInterval(function () {
  div.textContent--;
  if (div.textContent === "0") location.href = "https://elzero.org/";
  // if (div.textContent === "0"){    // طريقه اخري
  //   window.open("https://elzero.org/","_self","");
  //   clearInterval(counter);
  // } 
}, 1000);