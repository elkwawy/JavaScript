// Assignment 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// Anonymous Functin
// let nums = numsAndStrings.map(function (ele) {
//     return !isNaN(ele) ? ele : "";
// }).filter(function (ele) {
//     return ele
// }).map(function (ele) {
//     return -ele
// })

// Arrow Functin
let nums = numsAndStrings.map((ele) => !isNaN(ele) ? ele : "").filter((ele) => ele).map((ele) => -ele)

console.log(nums)

// [-1, -10, 10, 20, -5, -3]