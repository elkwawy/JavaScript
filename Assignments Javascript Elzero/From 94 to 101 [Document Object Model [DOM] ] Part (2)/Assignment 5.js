// Assignment 5
[...document.body.children].forEach((el) => {
    el.onclick = () => console.log(`This is ${el.localName}`);
});