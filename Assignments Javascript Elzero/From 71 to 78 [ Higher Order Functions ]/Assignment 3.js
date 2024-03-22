// Assignment 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
                          // Anonymous Functin
// let Updata = myArray.reduce(function (acc, current) {
//     return `${acc}${current}`
// }).replace(",", "");

// Arrow Functin
let Updata = myArray.reduce((acc, current) =>`${acc}${current}`).replace(",", "");

console.log(Updata)
// Elzero