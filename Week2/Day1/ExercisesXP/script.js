/* //exercise1 

const favoriteFood = "chocolate"
const favoriteMeal = "breakfast"

const sentence = `I eat ${favoriteFood} at every ${favoriteMeal}`

console.log (sentence)
 */


//exercise2

//PART 1

/* let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory";

let sentence = `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`;
console.log (sentence);

//PART 2

myWatchedSeries.splice(2, 1,"friends");
myWatchedSeries.push("fauda");
myWatchedSeries.unshift("ninjago");

myWatchedSeries.splice(1, 1);

console.log (myWatchedSeries[1][2]);

console.log (myWatchedSeries);
 */

//exercise3

/* let celsiusTemperature = 20
let fahrenheitTemperature = celsiusTemperature / 5 * 9 + 32

console.log (`${celsiusTemperature} °C is ${fahrenheitTemperature} °F.`)

 */

//exercise4


/* let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because 34 and 21 are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 23, because 2 and 21 are numbers
// Actual: 23
// The value of c is undefined

console.log (c)

console.log(3 + 4 + '5');
// Prediction: It will output 75, because 3 and 4 are numbers and '5' is a string
// Actual: 75

 */

//exercise5

typeof(15)
// Prediction: number
// Actual: Number

typeof(5.5)
// Prediction: number
// Actual: Number

typeof(NaN)
// Prediction: not a number
// Actual: number

typeof("hello")
// Prediction: Text
// Actual: string

typeof(true)
// Prediction: true 
// Actual: boolean

typeof(1 != 2)
// Prediction: true
// Actual: boolean

"hamburger" + "s"
// Prediction: concatenate
// Actual: Hamburgers

"hamburgers" - "s"
// Prediction: convert the strings into numbers
// Actual: NaN

"1" + "3"
// Prediction: concatenate the 2 strings
// Actual: 13

"1" - "3"
// Prediction: converts 1 and 3 into numbers 
// Actual: -2

"johnny" + 5
// Prediction: convert 5 into string and concatenate
// Actual: Johnny5

"johnny" - 5
// Prediction: convert string into a number 
// Actual: NaN

99 * "hello"
// Prediction: convert string into a number
// Actual: NaN

1 != 1
// Prediction: compare if one is different from one as a number
// Actual: false

1 == "1"
// Prediction: compare if the number one is equal to the string one
// Actual: true

1 === "1"
// Prediction: strict comparaison between a number and a string 
// Actual: false


//Exercise6

5 + "34"
// Prediction: convert 5 into string and concatenate
// Actual: 534

5 - "4"
// Prediction: convert 4 into number and calculate
// Actual: 1

10 % 5
// Prediction: it divided 10 by 5 and give the reminder
// Actual: 0

5 % 10
// Prediction: it divided 5 by 10 and give the reminder
// Actual: 5

"Java" + "Script"
// Prediction: concatenate the strings
// Actual: JavaScript

" " + " "
// Prediction: it concatenate the strings and gives 2 spaces
// Actual:  

" " + 0
// Prediction: it converts the 0 into a string and concatenate
// Actual:  0

true + true
// Prediction: it converts the boolean into numbers, true=1, and add them
// Actual: 2

true + false
// Prediction: it converts the boolean into numbers, true=1, false=0, and add them
// Actual: 1

false + true
// Prediction: it converts the boolean into numbers, true=1, false=0, and add them
// Actual: 1

false - true
// Prediction: it converts the boolean into numbers, true=1, false=0, and substract them
// Actual: -1

!true
// Prediction: "!" gives the opposite 
// Actual: false

3 - 4
// Prediction: it calculates
// Actual: -1

"Bob" - "bill"
// Prediction: it convert the 2 strings into numbers and can't substract them
// Actual: NaN