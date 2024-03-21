// Assignment 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2);

// Your Code Here
let result = allArrs[allArrs.indexOf("F")] + allArrs[allArrs.indexOf("X")] + allArrs[allArrs.indexOf("Y")];
console.log(result.toLowerCase()); // fxy