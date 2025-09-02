// difference between == & ===
// == check the value not the type 
// === check the value as well as type 
// JavaScript Comparison - Complete Notes

// 1. **What is Comparison in JavaScript?**
// Comparison in JavaScript is the process of comparing two values to check if they are equal, greater, less, etc.
// JavaScript provides comparison operators that can compare primitive values like numbers, strings, and booleans, 
// as well as objects.

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 2. **Comparison Operators**
 * These are the fundamental operators in JavaScript for comparing values:
 */

// **Equal to (==)**: Compares two values for equality, but performs type coercion (if necessary).
console.log(5 == 5);    // Output: true
console.log(5 == "5");  // Output: true (because type coercion happens: "5" is converted to number)

// **Strict Equal to (===)**: Compares two values for equality without performing type coercion.
console.log(5 === 5);   // Output: true
console.log(5 === "5"); // Output: false (no type coercion)

// **Not Equal to (!=)**: Compares two values for inequality, but performs type coercion (if necessary).
console.log(5 != 3);    // Output: true
console.log(5 != "5");  // Output: false (because type coercion happens: "5" is converted to number)

// **Strict Not Equal to (!==)**: Compares two values for inequality without performing type coercion.
console.log(5 !== 3);    // Output: true
console.log(5 !== "5");  // Output: true (no type coercion)

// **Greater Than (>)**: Compares if the left value is greater than the right value.
console.log(10 > 5);     // Output: true
console.log(5 > 10);     // Output: false

// **Greater Than or Equal to (>=)**: Compares if the left value is greater than or equal to the right value.
console.log(10 >= 5);    // Output: true
console.log(5 >= 10);    // Output: false

// **Less Than (<)**: Compares if the left value is less than the right value.
console.log(5 < 10);     // Output: true
console.log(10 < 5);     // Output: false

// **Less Than or Equal to (<=)**: Compares if the left value is less than or equal to the right value.
console.log(5 <= 10);    // Output: true
console.log(10 <= 5);    // Output: false

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 3. **Type Coercion and Comparison**
 * In JavaScript, when using operators like `==`, JavaScript performs type coercion, meaning it tries to convert 
 * values into comparable types before making the comparison.
 */

// Example of type coercion in equality comparison
console.log(1 == "1");   // Output: true (string "1" is converted to number 1)
console.log(true == 1);  // Output: true (true is converted to 1)
console.log(null == undefined);  // Output: true (null and undefined are loosely equal)

// Example where strict equality (`===`) does not perform coercion:
console.log(1 === "1");  // Output: false (no type coercion: number 1 is not equal to string "1")
console.log(true === 1); // Output: false (boolean true is not equal to number 1)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 4. **Comparison of Objects**
 * When comparing objects in JavaScript, the comparison checks for reference equality, not deep equality.
 * This means two different objects with the same properties are considered different unless they refer to the same object.
 */

// Example of object comparison (objects are compared by reference)
{const obj1 = { name: "Alice" };
const obj2 = { name: "Alice" };
const obj3 = obj1;

console.log(obj1 === obj2);  // Output: false (obj1 and obj2 are different objects in memory)
console.log(obj1 === obj3);  // Output: true (obj1 and obj3 refer to the same object)
}
///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 5. **NaN Comparison**
 * `NaN` (Not-a-Number) is a special numeric value in JavaScript. It is important to note that `NaN` is **not equal to itself**.
 * This behavior might be surprising, but it's part of the IEEE 754 standard.
 */

// NaN is not equal to itself
console.log(NaN == NaN);    // Output: false
console.log(NaN === NaN);   // Output: false
console.log(isNaN(NaN));    // Output: true (use isNaN() to check for NaN)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 6. **Comparing Booleans**
 * Booleans are either `true` or `false`, and they can be compared using the comparison operators.
 */

// Example of comparing booleans
console.log(true === true);  // Output: true
console.log(true === false); // Output: false

// Comparison between boolean and numbers (booleans are coerced to 1 for true, and 0 for false)
console.log(true == 1);   // Output: true
console.log(false == 0);  // Output: true

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 7. **String Comparison**
 * JavaScript compares strings based on their lexicographic (alphabetical) order.
 * String comparison in JavaScript is case-sensitive.
 */

// Comparing strings lexicographically (alphabetically)
console.log("apple" < "banana");  // Output: true (because "apple" comes before "banana")
console.log("apple" > "banana");  // Output: false

// Case-sensitive string comparison
console.log("apple" === "Apple");  // Output: false (different case)
console.log("apple" === "apple");  // Output: true

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 8. **Using `Object.is()` for Comparison**
 * `Object.is()` is a method that determines whether two values are the same. It is similar to strict equality (`===`), but with two key differences:
 * - `Object.is()` considers `NaN` equal to `NaN`.
 * - `Object.is()` treats `+0` and `-0` as different.
 */

// Example using `Object.is()`
console.log(Object.is(5, 5));      // Output: true
console.log(Object.is(5, "5"));    // Output: false
console.log(Object.is(NaN, NaN));  // Output: true (unlike ===, which returns false)
console.log(Object.is(+0, -0));   // Output: false (unlike ===, which treats +0 and -0 as the same)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 9. **Comparison of Arrays**
 * When comparing arrays in JavaScript, arrays are objects, and like objects, they are compared by reference.
 */

// Example of array comparison (arrays are compared by reference)
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.log(arr1 === arr2);  // Output: false (arrays are different objects)
console.log(arr1 === arr3);  // Output: true (arrays are the same object)




let x = 5;
let y = '5';

let obj1 = {

    name:"a"
};

let obj2 = {
    name:"a"
}

console.log(x==y) // true
console.log(x===y) //false
console.log([] == []) //false because reference are different
console.log({} == "") //false because reference are different
console.log("" === "");
console.log("10" < "2"); // compare first char 1 < 2 
console.log("5" < "2"); // compare first char 5 < 2 
console.log(obj1.name === obj2.name)
console.log( 2 < "john")

//Conditional (Ternary) Operator

let age = 12;

console.log(age > 18 ? "valid age" : "too young");

//The Optional Chaining Operator (?.) *IMPORTANT
//The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

let data = {
    name:"John",
    role:"Tester",
    sallary :4000,
    client:null
}

console.log(data.name,data.role,data.sallary);


