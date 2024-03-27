// Assignment 6
let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
if(chosen === 1){
  let [{title:name, age, available:av, skills: [, lastSk] }] = myFriends;
  console.log(name);
  console.log(age);
  console.log(av? "Available" : "Not Available");
  console.log(lastSk);
}
else if(chosen === 2){
  let [ , {title:name, age, available:av, skills: [, lastSk] }] = myFriends;
  console.log(name);
  console.log(age);
  console.log(av? "Available" : "Not Available");
  console.log(lastSk);
}
else if(chosen === 3){
  let [ , , {title:name, age, available:av, skills: [, lastSk] }] = myFriends;
  console.log(name);
  console.log(age);
  console.log(av? "Available" : "Not Available");
  console.log(lastSk);
}
// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"