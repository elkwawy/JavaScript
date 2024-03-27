// Assignment 3
let dollar = document.querySelector('[name="dollar"]');
let printDE = document.getElementsByTagName("div")[0];


document.forms[0].onkeyup = function() {
  
    let valueD = dollar.value;
    let valueE = (valueD * 15.6).toFixed(2);
   
    printDE.innerHTML = `{${valueD}} USD Dollar = {${ valueE }} Egyptian Pound`
}
document.forms[0].onclick = function() {
  
    let valueD = dollar.value;
    let valueE = (valueD * 15.6).toFixed(2);
   
    printDE.innerHTML = `{${valueD}} USD Dollar = {${ valueE }} Egyptian Pound`
}
// حل ابسط وافضل
// let dollar = document.querySelector("input");
// let result = document.querySelector(".result");

// document.forms[0].oninput = function() {
//   result.innerHTML = `{${dollar.value}} USD Dollar = {${(dollar.value * 15.6).toFixed(2)}} Egyptian Pound`;
// }