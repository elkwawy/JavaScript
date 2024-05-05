// Assignment 3
let phone1 = "+(995)-123 (4567)";
let phone2 = "012566844";
let phone3 = "(995) 123 (4567)";
let phone4 = "+(164)-999 (2003)";
let phone5 = "(1164)-99449 (244444003)";

let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phoneRe.test(phone1));
console.log(phoneRe.test(phone2));
console.log(phoneRe.test(phone3));
console.log(phoneRe.test(phone4));
console.log(phoneRe.test(phone5));