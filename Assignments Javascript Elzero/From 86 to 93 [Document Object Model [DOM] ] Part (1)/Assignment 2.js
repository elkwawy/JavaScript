// Assignment 2

// let attrImg = document.getElementsByTagName("img");

// for(let i = 0; i<attrImg.length; i++){
//     attrImg[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     attrImg[i].alt = "Elzero Logo";
//     console.log(attrImg[i]);
// }

// حل اسهل وابسط
[...document.images].forEach((el) => {
   el.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
   el.alt = "Elzero Logo";
   console.log(el);
})