// Assignment 1
let number_one = 10;
let Number_Two = 20;

console.log(number_one + "" + Number_Two);   // Normal Concatenate => 1020
console.log(typeof (number_one + "" + Number_Two));  // Normal Concatenate => String

console.log(`${number_one}${Number_Two}`); // Template Literals Way => 1020
console.log(typeof `${number_one}${Number_Two}`);  // Template Literals Way => String

console.log(Number_Two + "\n" + number_one); 
/*
  Normal Concatenate
  20
  10
*/
console.log(`${Number_Two}
${number_one}`);
/*
  Template Literals Way
  20
  10
*/