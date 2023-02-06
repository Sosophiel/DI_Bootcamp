//Exercise 2
/*
Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

First, use function declaration and invoke it.
Then, use function expression and invoke it.
Write in a one line comment, the difference between function declaration and function expression.
Finally, use a one line arrow function and invoke it. */


function weightInGrams(weight) {
    return weight * 1000;
}
console.log(weightInGrams(10))

(function weightInGrams(weight) {
    return weight * 1000;
})(10)

let weightInGrams = (weight, ) => weight * 1000;

weightInGrams(10)