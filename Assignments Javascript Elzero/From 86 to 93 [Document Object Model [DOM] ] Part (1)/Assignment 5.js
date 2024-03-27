// Assignment 5
let img = document.getElementsByTagName("img");

// solve 1
// for(let i = 0; i<img.length; i++){
//   if(img[i].getAttribute("alt") === null){
//     img[i].setAttribute("alt","Elzero New");
//   }else{
//     img[i].alt = "Old";
//   }
// }
// solve 2
for (let i = 0; i < img.length; i++) {
    if (img[i].hasAttribute("alt")) {
        img[i].alt = "Old";
    }
    else {
        img[i].setAttribute("alt", "Elzero New");
    }
}