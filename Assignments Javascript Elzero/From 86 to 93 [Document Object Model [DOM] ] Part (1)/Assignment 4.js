// Assignment 4
let divOne = document.getElementsByClassName("one")[0];
let divTwo = document.getElementsByClassName("two")[0];
let save = "";

save=divOne.title;
divOne.title  = divTwo.title;
divTwo.title = save;

save=divOne.innerHTML;
divOne.innerHTML  = divTwo.innerHTML;
divTwo.innerHTML = `${save} ${divTwo.attributes.length}`;

console.log(divTwo.innerHTML);