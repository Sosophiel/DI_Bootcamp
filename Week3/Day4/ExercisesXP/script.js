

let colors = ["red","blue","green","yellow","purple","orange","white",
            "black","lime","maroon","navy","teal","olive","fuchsia",
            "silver","gray","brown","beige","aliceblue","antiquewhite","aqua",];

let selectedColor = ""
let isMouseDown = false

for (const color of colors) {
    let colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener("click", retrieveColor)
    document.querySelector("#palet").appendChild(colorDiv);
    
}

for (let index = 0; index < 24 * 60; index++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    div.style.backgroundColor = "white";
    div.addEventListener("click", addColor);
    div.addEventListener("mousedown", mouseDown);
    div.addEventListener("mouseup", mouseUp);
    div.addEventListener("mouseover", mouseOver);
    document.querySelector("#grid").appendChild(div);
}

function retrieveColor(event){
    selectedColor = event.target.style.backgroundColor;
}

function addColor(event){
    if(selectedColor != ""){   
        event.target.style.backgroundColor = selectedColor;
    }
}

function mouseDown(event){
    isMouseDown = true;
}

function mouseUp(event){
    isMouseDown = false;
}

function mouseOver(event){
    if(isMouseDown && selectedColor!= ""){
        event.target.style.backgroundColor = selectedColor;
    }
}

function clearGrid(){ 
    let grid = document.querySelector("#grid");
    for (const pixel of grid.children) {
        pixel.style.backgroundColor = "white";
    }
}
/* ## Creation Part
​
- Pallet section
    - array of 21 colors
    - loop through the array of color, and for each color create a div
    - for each div add background color
    - make each div clickable by adding an eventlistener of `click` that will call the function `retrieveColor`
    (you could also give a value attribute to each div)
    - append them the section
​
​
- Grid section
    - loop a lot of times (24 rows*60 colums) and create div
    - make each div clickable by adding an eventlistener of `click` that will call the function `addColor`
    - make each div mouseover, mousedown, mouseup by adding an eventlistener of `mouseover, mousedown, mouseup`
    - append them to the 2nd section
​
​
## retrieveColor
- evt target and find the background color
- store the color in a variable
​
## addColor
- use the variable that stores the color, to add the color as a background color
of the div I click
​
## coloring
Events
    mousedown 
    mouseover
    mouseup
​
variable flag checkIfMouseDown will start as false, as soon as the mouse is down
this variable will change to true
as soon as the mouse is up this variable will change to false
​
In the mouseover, we check, if the variable is true we can color
if not we don't
​
## ClearButton
add an event listener to the button that when clicked on, loop over the grid to hange the background color to white
​ */