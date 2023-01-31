/* 
PART I/
setTimeout(helloWorld, 2000)


function helloWorld () {
    alert('Hello World')
}
 


//PART II/
setTimeout(addPara, 2000)


function addPara() {
    const container = document.querySelector("#container")
    const p = document.createElement("p")
    p.textContent = "Hello World"
    container.appendChild(p)
}*/

//PART III

let counter = 0
function newPara() {
    const container = document.querySelector("#container")
    const p = document.createElement("p")
    p.textContent = "Hello World"
    container.appendChild(p)
    counter++

    if(counter == 5) {
        stop()
    }
}

function stop () {
    clearInterval(id)
}

const id = setInterval(newPara, 2000)
 

const button = document.querySelector("#btn")
button.addEventListener("click", stop)    

