// Assignment 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);
numsOne.push(...numsTwo);
console.log(numsOne);

// Needed Output
// [1, 2, 3, 4, 5, 6]