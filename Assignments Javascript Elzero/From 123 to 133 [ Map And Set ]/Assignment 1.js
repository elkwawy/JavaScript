// Assignment 1
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

console.log(Array.from(setOfNumbers)[2]); // 2
console.log([...set][2]); //2