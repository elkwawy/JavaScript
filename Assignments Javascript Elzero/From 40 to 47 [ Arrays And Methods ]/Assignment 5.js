// Assignment 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if(haystack.indexOf(needle) !== -1 ){
  console.log("Found")
}
if(haystack.lastIndexOf(needle) !== -1 ){
  console.log("Found")
}
if(haystack.includes(needle) === true ){
  console.log("Found")
}