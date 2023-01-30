
let button = document.getElementById("lib-button")
button.addEventListener("click", createStory)

function createStory(event) {
   event.preventDefault()

   let noun = document.getElementById("noun")
   let adjective = document.getElementById("adjective")
   let person = document.getElementById("person")
   let verb = document.getElementById("verb")
   let place = document.getElementById("place")

   let story = document.getElementById("story")

   if(noun.value == "" || adjective.value == "" || person.value == "" || verb.value == "" || place.value == "" ) {
        alert("All fields are required")
        return
   }

   story.textContent = `${person.value} ${verb.value} in ${place.value} and got a ${adjective.value} ${noun.value}  `

}