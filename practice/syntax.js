/*
JavaScript syntax is the set of rules, how JavaScript programs are constructed:

syntax for declare Varibles

keyword varible name = value

variable creation in js 

*/

let a;
let b;

// How to use variables:

x = 5;
y = 6;
let z = x + y;

// syntax for declare a function

// Syntax to declare a function
function functionName() {
    // Function body
    console.log("Hello from the function!");
}

// Example function call
function myFunction() {
    console.log("This is the function body.");
}

myFunction();  // Calling the function

// synaxt for loop

{
    for (let i = 0; i < 5; i++) {
        console.log(i);  // Output: 0, 1, 2, 3, 4
    }
}

{
    i = 0;
    while (i < 5) {
        console.log(i);  // Output: 0, 1, 2, 3, 4
        i++;
    }
}

{
    i = 0;
    do {
        console.log(i);  // Output: 0, 1, 2, 3, 4
        i++;
    } while (i < 5);

}