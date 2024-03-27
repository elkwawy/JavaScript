// Assignment 6
let elNum = document.querySelector('[type="number"]');
let elText = document.getElementsByName("texts")[0];

let form = document.forms[0]
let type = document.querySelector("select")

let submit = document.querySelector('[type="submit"]');
let result = document.getElementsByClassName("results")[0];


form.onsubmit = function (el) {
    el.preventDefault();
    document.querySelectorAll(".box").forEach((el) => el.remove());

for (let i = 1; i <= elNum.value; i++) {
    let myEl = document.createElement(type.value);
    let myText = document.createTextNode(elText.value);

    myEl.className = "box";
    myEl.title = "Element"
    myEl.id = `id-${i}`

    myEl.style.display = "inline-block";
    myEl.style.width = "200px";
    myEl.style.padding = "20px";
    myEl.style.margin = "20px";
    myEl.style.color = "white";
    myEl.style.backgroundColor = "orange";
    myEl.style.textAlign = "center";
    myEl.style.borderRadius = "0.5rem";

    myEl.appendChild(myText);
    result.appendChild(myEl);
}
}

let input = document.querySelectorAll(".input");
let box = document.querySelectorAll(".box");

for (let i = 0; i < input.length; i++) {
    input[i].style.display = "block";
    input[i].style.boxSizing = "border-box"
    input[i].style.width = "200px";
    input[i].style.padding = "10px";
    input[i].style.margin= "15px auto";
    input[i].style.borderRadius = "0.5rem";
    input[i].style.border = "1px solid black";
}

submit.style.padding = "10px";
submit.style.margin= "15px auto";
submit.style.display = "block"
submit.style.width = "200px";
submit.style.backgroundColor = "#009187";
submit.style.color = "white";
submit.style.borderRadius = "0.5rem";
submit.style.border = "1px solid white";
submit.style.textAlign = "center";