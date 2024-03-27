// Assignment 1
let font = document.querySelector("#font");
let color = document.querySelector("#color");
let size = document.querySelector("#size");


font.onchange = function(){
  window.localStorage.setItem("font",font.value);
  document.body.style.fontFamily = font.value;
}

color.onchange = function(){
  window.localStorage.setItem("color",color.value);
  document.body.style.backgroundColor = color.value;
}
size.onchange = function(){
  window.localStorage.setItem("size",size.value);
  document.body.style.fontSize = size.value;
}

document.body.style.fontFamily = window.localStorage.getItem("font");
document.body.style.backgroundColor = window.localStorage.getItem("color");
document.body.style.fontSize = window.localStorage.getItem("size");

font.value = window.localStorage.getItem("font");
color.value = window.localStorage.getItem("color");
size.value = window.localStorage.getItem("size");
/* HTML
 <div>
      <label for="fonts">Check A Font</label>
      <select name="" id="font">
        <option value="Open-Sans">Open-Sans</option>
        <option value="Cairo">Cairo</option>
        <option value="Roboto">Roboto</option>
      </select>
    </div>
    <div>
      <label for="colors">Check A Color</label>
      <select name="" id="color" >
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Black">Black</option>
        <option value="Orange">Orange</option>
      </select>
    </div>
    <div>
      <label for="font-size">Check A Font Size</label>
      <select name="" id="size">
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
        <option value="22px">22</option>
        <option value="24px">24</option>
        <option value="26px">26</option>
        <option value="28px">28</option>
        <option value="30px">30</option>
      </select>
    </div> 
*/
/* CSS
@import url('https://fonts.googleapis.com/css2?family=Cairo&family=Open+Sans&family=Roboto&display=swap');
body{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0;
}
body div{
    margin: 20px 0;
}
select{
    padding: 10px 8px;
    border-radius: 4px;
    margin-left: 10px;
}
*/