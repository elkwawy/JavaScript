// Assignment 2
// Arrow Function Syntax التالية ل Function من ال Function قم بتحويل كل 

// example 1
// function itsMe() {
//     return `Iam A Normal Function`;
//   }
// Arrow Function
let itsMe = _ => `Iam A Normal Function`;
// let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// example 2
// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
//   }
// Arrow Function
let urlCreate = (protocol,web,tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org