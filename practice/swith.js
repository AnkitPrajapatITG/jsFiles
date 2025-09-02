
let x = 6 + 3 * 1;

switch (x % 2) {
    case 0:
        console.log("even value", x)
        break;

    default:
        console.log("odd value", x)
        break;
}

switch (new Date().getDay()) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is WednesDay");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Day not valid")
}

{
    const fruits = ['Apple', 'Banana', 'Cherry'];
    let x = '';
    myfavorite: {
        x = fruits[0];
        break myfavorite;
        x = fruits[1];
        x = fruits[2];
    }
    console.log(x);
}

// The default case does not have to be the last case in a switch block:

// Example

switch (new Date().getDay()) {
    default:
        text = "Looking forward to the Weekend";
        break;
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
}

console.log(text);


/* 
common Code Blocks
Sometimes you will want different switch cases to use the same code.

In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

Example
*/
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}

console.log(text);


/* 

Strict Comparison
Switch cases use strict comparison (===).

The values must be of the same type to match.

A strict comparison can only be true if the operands are of the same type.

In this example there will be no match for x:

Example
*/

x = "0";
switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}

console.log(text);

// conditions 
/*
JavaScript we have the following conditional statements:

Use "if" to specify a block of code to be executed, if a specified condition is true
Use "else" to specify a block of code to be executed, if the same condition is false
Use "else if" to specify a new condition to test, if the first condition is false
Use "switch" to specify many alternative blocks of code to be executed
// */

{
    let hour = 9;
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    console.log(greeting);

}

let condition1, condition2;

if (condition1) {
    //  block of code to be executed if condition1 is true
} else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
} else {
    //  block of code to be executed if the condition1 is false and condition2 is false
}
{
    // JavaScript Switch Statement - Complete Notes

// 1. **What is a Switch Statement?**
// A `switch` statement is a control structure in JavaScript that allows you to test a value against a series of possible outcomes (cases). 
// It is an alternative to using multiple `if-else` statements when you have multiple possible conditions to check.

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 2. **Basic Syntax of Switch Statement**
 * The basic syntax of a `switch` statement is as follows:
 * 
 * switch(expression) {
 *   case value1:
 *     // Block of code executed if expression === value1
 *     break;
 *   case value2:
 *     // Block of code executed if expression === value2
 *     break;
 *   default:
 *     // Block of code executed if none of the cases match
 * }
 */

// Example of a simple switch statement
const day = 2;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// Output: "Tuesday" (because day === 2)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 3. **Working of Switch Statement**
 * - The `switch` statement evaluates the expression (e.g., `day` in the above example) and compares it against each `case` value.
 * - When a match is found, the code inside that `case` block is executed.
 * - If no case matches, the `default` block (if defined) is executed.
 * - The `break` statement is used to exit the `switch` statement after a match is found, preventing the execution of subsequent cases.
 * - If `break` is omitted, the code will "fall through" and execute all subsequent cases until a `break` is encountered or the end of the `switch` block is reached.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 4. **Fall-through Behavior**
 * If you omit the `break` statement, JavaScript will continue to execute the code in the following cases, even if they don't match.
 * This is called "fall-through" behavior.
 */

// Example of fall-through behavior
const fruit = 'apple';
switch(fruit) {
    case 'banana':
        console.log('Banana is yellow');
        break;
    case 'apple':
    case 'orange':  // No break here, so both cases will run
        console.log('Apple and Orange are fruits');
        break;
    default:
        console.log('Unknown fruit');
}

// Output: "Apple and Orange are fruits" (because 'apple' matches the second case, and 'orange' is executed due to fall-through)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 5. **Default Case**
 * The `default` case is optional but is used when none of the other cases match the expression.
 * If no match is found and no `default` is defined, the `switch` statement will not execute any code.
 * 
 * The `default` case is always executed if no case matches, but it is only executed after all `case` statements have been checked.
 * 
 * **Important**: The `default` case is typically placed at the end, but it can be placed anywhere in the `switch` statement.
 */

// Example of default case
const color = 'green';
switch(color) {
    case 'red':
        console.log("The color is red");
        break;
    case 'blue':
        console.log("The color is blue");
        break;
    default:
        console.log("The color is unknown");
}

// Output: "The color is unknown" (because no case matches the color 'green')

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 6. **Comparison in Switch Statement**
 * JavaScript's `switch` statement uses strict equality (`===`) to compare the expression to the case values.
 * This means both value and type must match for a case to execute. JavaScript does **not perform type coercion**.
 */

// Example with strict comparison (===)
const num = '10';
switch(num) {
    case 10:
        console.log("Matched 10");
        break;
    case '10':  // This matches because both value and type are the same
        console.log("Matched string '10'");
        break;
    default:
        console.log("No match");
}

// Output: "Matched string '10'" (because '10' is a string, and the second case matches)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 7. **Switch Statement with Multiple Cases**
 * A `switch` statement can have multiple `case` blocks that match the same expression.
 * In this case, you can group multiple `case` statements together to execute the same block of code.
 */

// Example of grouped cases
const month = 8;
switch(month) {
    case 1:
    case 2:
    case 3:
        console.log("First Quarter");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Second Quarter");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Third Quarter");
        break;
    default:
        console.log("Fourth Quarter");
}

// Output: "Third Quarter" (because month === 8)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 8. **Switch Statement with Expressions**
 * The expression in a `switch` statement can be any valid expression, such as variables, function calls, and arithmetic expressions.
 * It does not need to be a simple value or variable.
 */

// Example with arithmetic expressions
const x = 5;
const y = 10;
switch(x + y) {  // The expression is evaluated as 5 + 10, which equals 15
    case 15:
        console.log("The sum is 15");
        break;
    case 20:
        console.log("The sum is 20");
        break;
    default:
        console.log("Sum is unknown");
}

// Output: "The sum is 15"

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 9. **Best Practices for Using Switch Statements**
 * - Always use `break` to prevent fall-through unless intentionally needed.
 * - Put the `default` case at the end, but it can be placed anywhere.
 * - Use a `default` case to handle unexpected values.
 * - Switch statements are ideal for handling many conditions on a single expression. If conditions are more complex, consider using `if-else` statements.
 * - Avoid using a `switch` statement when there are only two or three conditions; `if-else` may be more appropriate.
 * 
 * **Example of best practices:**
 */

const age = 21;
switch(true) {  // Using a switch with boolean expressions (commonly used in ranges)
    case (age >= 18 && age < 21):
        console.log("Young Adult");
        break;
    case (age >= 21 && age < 40):
        console.log("Adult");
        break;
    default:
        console.log("Age does not fall within defined ranges");
}

// Output: "Adult" (since age is 21)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 10. **Summary of Switch Statement**
 * - The `switch` statement evaluates an expression and compares it with multiple `case` values.
 * - The first `case` that matches will execute its block of code, and the `break` statement will terminate the `switch`.
 * - If no `case` matches, the `default` case will execute (if provided).
 * - The expression used in the `switch` is strictly compared with `===` (no type coercion).
 * - Switch statements can have multiple `case` labels grouped together, and you can also use expressions in the `switch`.
 * - Best practices: Use `break`, include a `default` case, and use `switch` when comparing a single value against multiple possibilities.
 */


}