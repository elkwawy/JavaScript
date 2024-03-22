// Assignment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
                  // Anonymous Functin
// let str = mix.map(function (ele) {
//     return isNaN(ele) ? ele : "";
// }).reduce(function (acc, current) {
//     return `${acc}${current}`
// });

// Arrow Functin
let str = mix.map((ele) => isNaN(ele) ? ele : "").reduce((acc, current) =>`${acc}${current}`);


console.log(str);
// Elzero