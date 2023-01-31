
let id = null
let width = 0;

function myMove (){
    id = setInterval(move, 1);
}

function move () {
    let div = document.querySelector("#animate")
    if (width == 350) {
        clearInterval(id);
    } else {
        width++; 
        div.style.left = width + 'px' ;
    }
 }
