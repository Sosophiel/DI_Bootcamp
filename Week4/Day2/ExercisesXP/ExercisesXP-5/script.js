

function makeJuice(size) {

    function addIngredients(first, second, third) {
        document.getElementById("juice").textContent = `The client wants a ${size} juice, containing ${first} ${second} ${third}`;
    }

    addIngredients("chocolate", "vanilla", "strawberry");
}

makeJuice("small");



function makeJuice2(size) {
    let ingredients = [];
    function addIngredients(first, second, third) {
        ingredients.push(first);
        ingredients.push(second);
        ingredients.push(third);
    }

    function displayJuice() {
        let sentence = `The client wants a ${size} juice, containing `

        ingredients.forEach(ingredient => { 
            sentence += ` ${ingredient}`
        })
        document.getElementById("juice2").textContent = sentence;
    }

    addIngredients("chocolate", "vanilla", "strawberry");
    addIngredients("coconut", "peach", "melon");
    displayJuice()
}

makeJuice2("large");

/*
You will use nested functions, to open a new juice bar.

Part I:

The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like 
The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


Part II:

In the makeJuice function, create an empty array named ingredients.

The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

Create a new inner function named displayJuice that displays on the DOM a sentence like 
The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". 
Use the forEach method.

The client wants 6 ingredients in his juice, therefore, 
invoke the addIngredients function TWICE. 
Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

*/