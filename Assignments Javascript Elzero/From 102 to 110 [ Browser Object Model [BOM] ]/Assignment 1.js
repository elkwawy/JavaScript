// Assignment 1
let promPt = window.prompt("Print Number From - To", "Example: 5-20");

let value = promPt.split("-");
let max=0, min=0;

if(value[0] > value[1]) max = value[0], min = value[1];
else  max = value[1], min = value[0];

for (let i = +min; i <= +max; i++){
    document.write(`<p>${i}</p>`);
}