let x = 5;
let y = 2;

if (x > y) {
    console.log(x);   
} else {
    console.log(y);
}



/* Create a variable called newDog where it’s value is “Chihuahua”.
Check and display how many letters are in newDog.
Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
Check if the variable newDog is equal to “Chihuahua”
if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’ */

const newDog = "Chihuahua"

console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog==="Chihuahua") {
   console.log("I love Chihuahuas, it’s my favorite dog breed")
   
    
} else {
    console.log("I dont care, I prefer cats")
}


//exercise 3

let number = prompt("type a number")

if (number%2 == 1) {
    console.log(`${number} is an odd number`)
} else {
    console.log(`${number} is an even number`)
}

//exercise4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

const numUsers = users.length
if (numUsers === 0 ) {
    console.log("no one is online")
}

if (numUsers === 1) {
    console.log(`${users[0]} is online`)
    
}

if (numUsers === 2) {
    console.log(`${users[0]}  and ${users[1]} are online`)
    
}

if (numUsers >2) {
console.log(`${users[0]}  and ${users[1]} and ${numUsers - 2} more are online`)    
}