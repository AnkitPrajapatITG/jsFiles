/*
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const

here, x, y, and z are undeclared variables.

They are automatically declared when first used:

Example
x = 5;
y = 6;
z = x + y;


The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.


When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.


JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ 
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
*/

{
    // valid identifiers

    let name;       // Valid
    let _age;       // Valid
    let $price;     // Valid
    let total_Amount;  // Valid
    let firstName;  // Valid

}


{
    // invalid identifiers

    // let 1stName;    // Invalid: cannot start with a number
    // let var;        // Invalid: "var" is a reserved word
    // let let;        // Invalid: "let" is a reserved word

}

{
    // Using const for a value that should not change
    const PI = 3.14159;

    // Using let for variables that will change
    let radius = 5;
    let area = PI * radius * radius;
    console.log("Area of circle:", area);

    //not recommended in modern code
    var oldVariable = "I am old!";
    console.log(oldVariable);

    // Avoid using 'var' in modern JavaScript unless absolutely necessary

}


// brief introdunction of let

{
    /*

    The let keyword was introduced in ES6 (2015)

    Cannot be re-declared in the same scope.

    Can be updated.

    Block-scoped.

    Hoisted but not initialized (accessing before declaration gives error).
    
    */
    let a = 10;
    a = 20; // Allowed (Reassignment)

    if (true) {
        let b = 30;
    }
    console.log(b); // Error (b is block-scoped)

    console.log(c); // ReferenceError (Not hoisted like var)
    let c = 40;

}



// brief introdunction of const
{
    /* 
    const (Block-scoped, Immutable Reference)
    Cannot be re-declared or updated.

    Block-scoped.

    Must be initialized at declaration.
    */

    const PI = 3.14;
    // PI = 3.14159; // Error (Cannot reassign)

    if (true) {
        const d = 50;
    }
    // console.log(d); // Error (Block-scoped)

    const arr = [1, 2, 3];
    arr.push(4); // Allowed (modifying array elements)
    console.log(arr); // [1, 2, 3, 4]

    // arr = [5, 6]; // Error (Reassignment not allowed)

}


{
    /* 
    can be re-declared and updated.

    Function-scoped (not block-scoped).

    Hoisted, but initialized as undefined.
    */

    var x = 10;
    var x = 20; // No error (Re-declaration allowed)

    if (true) {
        var y = 30; ///can be access outside 
    }
    console.log(y); // 30 (var is not block-scoped)

    console.log(z); // undefined (hoisted)
    var z = 50;

}