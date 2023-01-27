
let number = prompt("Give a number to start dropping the bottles")


let bottleDown = 1
for (let index = number; index > 0; index --) {
   
    console.log(index + " bottles of beer on the wall")
    console.log(index + " bottles of beer")

    if (bottleDown == 1) { 
        console.log(`Take ${bottleDown} down, pass it around`)
        
    }else { 
        console.log(`Take ${bottleDown} down, pass them around`)
    }
    
    console.log(number - bottleDown + " bottles of beer on the wall")
    console.log("")

    bottleDown++

}