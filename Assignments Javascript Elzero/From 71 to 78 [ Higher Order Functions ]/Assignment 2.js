// Assignment 2
let myString = "EElllzzzzzzzeroo";
let uniqueChars = new Set();
let notRepeat = myString.split("").filter(function (ele) {
    if (!uniqueChars.has(ele)) {

        uniqueChars.add(ele);
        return ele;
    }
}).join("");
console.log(notRepeat)

// Elzero