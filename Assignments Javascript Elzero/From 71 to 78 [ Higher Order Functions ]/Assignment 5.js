// Assignment 5
let nums = [2, 12, 11, 5, 10, 1, 99];
                     // Anonymous Functin
// let sum=nums.reduce(function(acc,current){
//   return  current % 2 === 0 ? acc*current :acc+current;
// },1)

// Arrow Functin
let sum = nums.reduce((acc, current) => current % 2 === 0 ? acc * current : acc + current, 1);

console.log(sum);
// 500