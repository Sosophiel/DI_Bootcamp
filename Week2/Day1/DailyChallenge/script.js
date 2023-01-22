
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.splice(0, 1);
fruits.sort();

fruits.push("Kiwi");
console.log(fruits);

fruits.shift();

console.log(fruits);

fruits.reverse()

console.log(fruits);

//Exercise2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0])
