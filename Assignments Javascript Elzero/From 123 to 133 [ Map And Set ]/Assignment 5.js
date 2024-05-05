// Assignment 5
let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Array(...theName));
console.log(Object.assign([],theName));
console.log([...new Set(theName)]);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']