


let input = document.createElement("INPUT")
input.setAttribute("type", "text");
document.body.appendChild(input)


input.addEventListener("keyup", onlyLetters)

function onlyLetters(event){
    const validLetter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(!validLetter.includes(event.key)) {
        event.target.value = event.target.value.slice(0, -1)
    }
}


/* 
create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

Hint: use one of the following events to remove any character that is not a letter

keyup event
or keypress event
or keydown event
or input event

Hint : Check out keycodes in Javascript or Regular Expressions 
*/
