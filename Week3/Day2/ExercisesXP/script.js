/* //exercise1
let h1 = document.querySelector("h1")
console.log(h1)

let article = document.querySelector("article")
article.lastElementChild.remove()


let h2 = document.querySelector("h2")
h2.addEventListener("click", changeBackground)

function changeBackground(evt){
	let h2 = evt.target
	h2.style.backgroundColor = "red"
} 


let h3 = document.querySelector("h3")
h3.addEventListener("click", hideH3)

function hideH3(evt){
    let h3 = evt.target
    h3.style.display = "none"
}


let button = document.querySelector("button")
button.addEventListener("click", changeParagraphs)


function changeParagraphs(evt){
    let para = document.body.querySelectorAll("p")

for (const p of para) {
    
	p.style.fontWeight = "bold"
}
}  


function changeFontSize() {
    let newFontSize = Math.floor(Math.random() * 99) + 1;
    h1.style.fontSize = `${newFontSize}px`
    console.log(newFontSize)
}

h1.addEventListener("mouseover", changeFontSize)



BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
  

//exercise2


let form = document.forms
console.log(form);

let input = form.input
console.log(input);

let fName = document.getElementById("fname")
let lName = document.getElementById("lname")
let submit = document.getElementById("submit")

let fName2 = document.getElementsByName("fname")
let lName2 = document.getElementsByName("lname")
let submit2 = document.getElementsByName("submit")

submit.addEventListener("click", onSubmit)

function onSubmit(event) {
	event.preventDefault()
	let ul = document.querySelector(".usersAnswer")

	if(fName.value != "") {
		let li = document.createElement("li")
		li.textContent = fName.value
		ul.appendChild(li)
	}

	if(lName.value != "") {
		let li = document.createElement("li")
		li.textContent = lName.value
		ul.appendChild(li)
	}
}

//exercise3


let allBoldItems 

function getBold_items() {
    allBoldItems = document.querySelectorAll("strong")

}

function highlight() {
    for (const item of allBoldItems) {
        item.style.color = "blue"
    }
}
 
function return_normal() {
    for (const item of allBoldItems) {
        item.style.color = "black"
    }
}

getBold_items()
let p = document.querySelector("p")
p.addEventListener("mouseover", highlight)
p.addEventListener("mouseout", return_normal)


//exercise 4


document.getElementById("submit").addEventListener('click', onSubmit)

function onSubmit(event) {
    event.preventDefault()

    let radius = document.getElementById("radius")
    let volume = document.getElementById("volume")

    volume.value = calculateVolume(radius.value)
}

function calculateVolume(radius) {
    let V = 4/3 * Math.PI * Math.pow(radius, 3)
    return V
}

// exercise 5

Add many events listeners to one element on your webpage. 
Use the click, mouseover, mouseout and dblclick events.
Each listener should do a different thing, for instance - 
change position x, change position y, change color, change the font size… and more.*/