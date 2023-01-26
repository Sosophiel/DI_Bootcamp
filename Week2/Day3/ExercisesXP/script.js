/* let people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1)

console.log(people)
people.splice(2, 1, "Jason")

people.push("Sophie")
console.log(people)

people.indexOf("Mary")
console.log(people.indexOf("Mary")) */

/* people = people.slice(1, 3)
console.log(people) */

/* people.indexOf("Foo")
console.log(people.indexOf("Foo")) */

//It does return -1 because it does not find "foo" in the array

/* let arraySize = people.length
console.log(arraySize)

let lastPosition = arraySize -1 
console.log(lastPosition)

people[lastPosition]
console.log(people[lastPosition]) */


// Hint: What is the relationship between the index of the last element in the array and the length of the array? The relationship with the last element is the length of the array -1


//Part II - Loops

/* 

for (let position = 0; position <= lastPosition; position ++)
{
    console.log(people[position])
if (people[position].includes("jason")) { break
    
} 
}

//exercise2

let colors = ["blue", "red", "yellow", "black", "pink"]



for (let i = 0; i <= colors.length -1; i++)
{

    console.log(`My #${i+1} choice is ${colors [i]}`)
}

//exercise3

let number = prompt("Choose a number")

console.log(typeof(number))


while (number <= 10) {
    number = prompt("Choose a number")
}

//exercise4


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)

console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)

console.log(`${building.nameOfTenants[1]} ${building.numberOfRoomsAndRent.dan[0]}`)

let sarahRent = building.numberOfRoomsAndRent.sarah[1]
let davidRent = building.numberOfRoomsAndRent.david[1]
let danRent = building.numberOfRoomsAndRent.dan[1]

let totalRent = sarahRent + davidRent

if (totalRent >= danRent) { 
    building.numberOfRoomsAndRent.dan[1] = 1200
    
} 
console.log(building) */

//exercise5


/* let family ={
    dad: 'Mark',
    mom: 'Jenny',
    son: 'Jack'
}

for (const key in family) {
    console.log(key);
}

for (const key in family) {
    console.log(family[key]);
}
        */ 

//exercise6

/* const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let sentence = ""
for (const key in details) {
    sentence = sentence + `${key} ${details[key]} `;
}

console.log(sentence)

 */
//exercise7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

let societyName =""
for (let i = 0; i < names.length; i++){ 
    societyName = societyName + names[i][0]
} 

console.log(societyName);