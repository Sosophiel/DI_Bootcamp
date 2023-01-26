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

 function isDivisible(divisor) {
          
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
console.log(result)