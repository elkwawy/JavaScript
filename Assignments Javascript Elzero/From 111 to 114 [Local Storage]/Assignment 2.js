// Assignment 2
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let select = document.querySelector("#select");

one.oninput = function () {
  window.sessionStorage.setItem("text-1", one.value);
};
two.oninput = function () {
  window.sessionStorage.setItem("text-2", two.value);
};
three.oninput = function () {
  window.sessionStorage.setItem("text-3", three.value);
};
select.onchange = function () {
  window.sessionStorage.setItem("select", select.value);
};

one.value = window.sessionStorage.getItem("text-1");
two.value = window.sessionStorage.getItem("text-2");
three.value = window.sessionStorage.getItem("text-3");
select.value = window.sessionStorage.getItem("select");
/* HTML
  <form action="">
    <input id="one" type="text" placeholder="first name">
    <input id="two" type="text" placeholder="last name">
    <input id="three" type="text" placeholder="enter your phone">
    <select name="" id="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </form>
*/
