// Assignment 6
let start = 0;
let swappedName = "elZerO";
let swappedNameUpdata = "";

for (let i = start; i < swappedName.length; i++){
    if(swappedName[i] === swappedName[i].toUpperCase()){
      swappedNameUpdata+=  swappedName[i].toLowerCase()
    }
    else{
        swappedNameUpdata+= swappedName[i].toUpperCase()
    } 
}
console.log(swappedNameUpdata);
// Output
// "ELzERo"