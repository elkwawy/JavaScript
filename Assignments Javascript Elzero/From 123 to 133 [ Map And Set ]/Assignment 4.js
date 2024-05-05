// Assignment 4
let theNumber = 100020003000;

console.log(+[...new Set(String(theNumber))].map((el) => (el > 0 ? el : "")).join(""));

// طريقه اخري 
console.log( +[...new Set([...theNumber.toString()].sort())].slice(1).join("") );
// Needed Output
// 123