// Assignment 3
let div = document.querySelector(".our-element");
let start = document.createElement("div")
start.className = "start",start.title = "Start Element",start.setAttribute("data-value","Start");
start.textContent = "Start";
let end = document.createElement("div")
end.className = "End",end.title = "End Element",end.setAttribute("data-value","End");
end.textContent = "End";

div.nextElementSibling.remove();
div.before(start);
div.after(end);