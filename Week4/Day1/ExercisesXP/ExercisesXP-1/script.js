// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
/* a = 3 */

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

/* a = 5  */

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

//a=0

// #2.1 - run in the console:
funcThree() // a = 0
funcTwo()//a = 5
funcThree()// a = 5

//a = 5

// #2.2 What will happen if the variable is declared 
// with const instead of let ?

// a = 0

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// a = "hello"

// #3.1 - run in the console:
funcFour()
funcFive()

// a = indefined

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// a = 1

// #4.1 - run in the console:
funcSix()

// a = "test"

// #4.2 What will happen if the variable is declared 
// with const instead of let ?

// a = 1

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // a = 5
}
alert(`outside of the if block ${a}`); // a = 2

// #5.1 - run the code in the console

// #5.2 What will happen if the variable is declared with const instead of let ?
// global a = 2, outside of the if block. 
// inside the if block a = 5
