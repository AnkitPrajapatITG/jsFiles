// JavaScript Statements
// JavaScript statements are composed of:

// Values, Operators, Expressions, Keywords, and Comments.

// Statements
// Example
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4

/*
JavaScript Code Blocks
JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.

The purpose of code blocks is to define statements to be executed together.

One place you will find statements grouped together in blocks, is in JavaScript functions:
*/
// Example

function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello !";
    document.getElementById("demo2").innerHTML = "How are you?";
}

// JavaScript Keywords
// JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

// Our Reserved Words Reference lists all JavaScript keywords.

// var	         Declares a global variable
var v = 5;

// let           Declares a block variable
let str = "Varibles";

// const         Declares a block constant
const PI = 3.14;

// if	         Marks a block of statements to be executed on a condition

if (PI == 3.14) {
    console.log("Correct Value");
}

// switch        Marks a block of statements to be executed in different cases
const day = "1";
switch (day) {
    case 1:
        alert("today is sunday")
        break;
    default:
        alert("value does not match");
        break;

}

// for           Marks a block of statements to be executed in a loop

for (i = 1; i < 10; i++) console.log(i)

// function      Declares a function

function myFunction1() {
    console.log("i am function");
}

// return	     Exits a function

function myFunction2() {
    const sum = 45 + 79;
    return sum // exit from this function
}

// try	    Implements error handling to a block of statements

try {
    const value = 230;
    const result = value / 0; // why 
    console.log(result)
}
catch (error) {
    console.log(error);
}


// JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.
