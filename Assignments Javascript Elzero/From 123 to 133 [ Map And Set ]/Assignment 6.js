// Assignment 6
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
// ["A", "B", "C", "A", "B", "C", "D", "E"];

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
let counter = 0;
chars.map((el) => !isNaN(el) ? counter++ : "");
chars.sort();

chars.copyWithin(0,counter,counter+counter);

console.log(chars);
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// // Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

// chars.copyWithin(2);
// console.log(chars);