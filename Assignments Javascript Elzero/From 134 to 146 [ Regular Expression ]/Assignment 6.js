// Assignment 6
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';


let urChallenge = 'https://elzero.org/javascript-2021-regular-expression-challenge/';
let urMyFacebook = 'https://www.facebook.com/profile.php?id=100009101370608';
let urCodeForces = 'https://codeforces.com/problemset?order=BY_SOLVED_DESC&tags=900-1000';
let urMyGithub = 'https://github.com/elkwawy';



let re = /(https?:\/\/)?(www.)?\w+(.org|.com)(\w+|\W+)*/g;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

console.log(urChallenge.match(re));
console.log(urMyFacebook.match(re));
console.log(urCodeForces.match(re));
console.log(urMyGithub.match(re));