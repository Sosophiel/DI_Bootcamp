//Exercise1

/* 
function infoAboutMe() {
    console.log("My name is Sophie, I'm 38, I like music")
}

infoAboutMe()


Part II : function with three parameters

 *//* 
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
}


infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
 */


//exercise2

/* function calculateTip() {

    let bill = Number(prompt("What's the amount of the bill ?"))
    let tip = 0

    if (bill < 50) {
        tip = 0.2
    } 
 if (bill >= 50 && bill < 200 ) {
        tip = 0.15
    } 
    if (bill > 200 ) {
        tip = 0.1
    } 

    let tipAmount = bill * tip
    let finalBill = bill + tipAmount
    console.log(`Tip amount is ${tipAmount} and final bill is ${finalBill}`)
}

calculateTip()
 */

//exercise3

/*  function isDivisible(divisor) {
          
    let sum = 0
    for (let i=0; i<=500; i++)
    {
        if (i % divisor === 0) {
         
            console.log(i)
            sum = sum + i
        }
    }
    console.log(sum)

}


isDivisible(3)
isDivisible(45)



//exercise4

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]

function myBill() {
    let totalPrice = 0;
    for (let fruit of shoppingList) {
        console.log(fruit);
        if(stock[fruit] > 0)
        {
            stock[fruit] = stock[fruit] -1
            totalPrice = totalPrice + prices[fruit]
        }
    }
    return totalPrice
}

let result = myBill()
console.log(result) */


//exercise 5

/* function changeEnough(itemPrice, amountOfChange) {

    let total = 0
    let changeValue = [0.25, 0.10, 0.05, 0.01]


    for (let i = 0; i < amountOfChange.length; i++) {

        total = total + amountOfChange[i] * changeValue [i]  
        
    }
    console.log(total)

    if (total >= itemPrice) {
        return true
    }
    else
   {
   return false
   }
}

let result = changeEnough(4.25, [25, 20, 5, 0])

console.log(result) 

let result = changeEnough(14.11, [2,100,0,0])

console.log(result)

 */

//Exercise 6 :


function hotelCost() {

    let priceHotel;
    let userAnswerHotel = prompt("How many nights would you like to stay");
    
    while (isNaN(userAnswerHotel) || userAnswerHotel === null) {
        userAnswerHotel = prompt("How many night will you like to stay");
    } 
    
    priceHotel = Number(userAnswerHotel)*140;
    return priceHotel;
}


function planeRideCost() {
    let userAnswerPlane = prompt("Where do you want to go").toLowerCase();
    
    while (userAnswerPlane === null || !isNaN(userAnswerPlane)) {
        userAnswerPlane = prompt("Where do you want to go").toLowerCase();
    }

    if(userAnswerPlane === "paris"){
        return 220;
    } else if (userAnswerPlane === "london") {
        return 183;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let userAnswerRent = prompt("How many days would you rent the car ?");
    
    while (isNaN(userAnswerRent) || userAnswerRent === null) {
        userAnswerRent = prompt("How many days would you rent the car ?");
    } 

   let price = userAnswerRent * 40
   if(userAnswerRent >= 10) {
        price = userAnswerRent * 40 * 0.05
   }

   return price
}

function totalVacationCost () {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}. `);
}

totalVacationCost() 

/* Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly. */