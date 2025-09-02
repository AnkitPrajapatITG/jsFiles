// JavaScript Data Types Notes

// JavaScript has 7 primitive data types:
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Symbol
// 7. Null

// And 1 non-primitive type:
// 1. Object    
{
    // JavaScript Data Types - Complete Notes

    // 1. **Primitive Data Types**
    // Primitive data types are immutable and directly represent a value.

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 1.1 **String**:
     * A sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
     */

    // Example of Strings
    let str1 = "Hello, World!";  // Double quotes
    let str2 = 'JavaScript is awesome!';  // Single quotes
    let str3 = `Template literals allow expressions like ${1 + 1}`;  // Template literals

    console.log(str1); // "Hello, World!"
    console.log(str3); // "Template literals allow expressions like 2"


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 1.2 **Number**:
     * Numbers can be integers or floating-point (decimal) values.
     * Example: 1, 3.14, -100, 0.99
     */

    let num1 = 42;  // Integer
    let num2 = 3.14; // Floating point
    let num3 = -7;   // Negative number

    console.log(num1); // 42
    console.log(num2); // 3.14
    console.log(num3); // -7


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 1.3 **Boolean**:
     * A Boolean value can be either `true` or `false`.
     */

    let bool1 = true;
    let bool2 = false;

    console.log(bool1); // true
    console.log(bool2); // false


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 1.4 **Undefined**:
     * A variable that is declared but not assigned a value is of type `undefined`.
     */

    let undefinedVar;

    console.log(undefinedVar); // undefined


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 1.5 **Null**:
     * `null` is a special value representing "no value" or "empty value".
     */

    let nullVar = null;

    console.log(nullVar); // null


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 1.6 **Symbol** (ES6):
     * A Symbol is a unique and immutable primitive value. Used mainly for object property keys.
     */

    let sym1 = Symbol("description");
    let sym2 = Symbol("description");

    console.log(sym1); // Symbol(description)
    console.log(sym1 === sym2); // false (Symbols are unique)


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 1.7 **BigInt** (ES2020):
     * BigInt is used to represent integers larger than 2^53 - 1, which is the limit for the Number type.
     */

    let bigInt1 = 1234567890123456789012345678901234567890n; // Using BigInt (n suffix)
    let bigInt2 = BigInt(1234567890123456789012345678901234567890); // Using BigInt constructor

    console.log(bigInt1); // 1234567890123456789012345678901234567890n
    console.log(bigInt1 + 10n); // 1234567890123456789012345678901234567900n


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 2. **Non-Primitive (Reference) Data Types**
     * These data types are mutable and reference objects or arrays in memory.
     * These types are passed by reference.
     */

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 2.1 **Object**:
     * An object is a collection of key-value pairs (properties and methods).
     * Objects can hold multiple values of any data type.
     */

    let person = {
        name: "Alice",
        age: 30,
        isStudent: false,
        greet: function () {
            console.log("Hello, " + this.name);
        }
    };

    console.log(person.name); // Alice
    console.log(person['age']); // 30
    person.greet(); // Hello, Alice


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 2.2 **Array**:
     * Arrays are ordered collections of values, which can be of different data types.
     * Arrays are zero-indexed.
     */

    let arr = [10, 20, "hello", true, null];

    console.log(arr[0]); // 10
    console.log(arr[2]); // hello
    console.log(arr.length); // 5


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 2.3 **Function**:
     * Functions are also objects in JavaScript.
     * A function is a block of code designed to perform a task.
     */

    function greetUser(name) {
        return "Hello, " + name;
    }

    console.log(greetUser("Bob")); // Hello, Bob


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 3. **Type Checking**
     * You can check the type of a variable using the `typeof` operator for most types.
     * For Objects, Arrays, and Functions, you might use `Array.isArray()` or `instanceof`.
     */

    // Using `typeof` for primitive types
    let numberCheck = typeof 123; // 'number'
    let stringCheck = typeof "hello"; // 'string'
    let booleanCheck = typeof true; // 'boolean'
    let undefinedCheck = typeof undefined; // 'undefined'
    let nullCheck = typeof null; // 'object' (this is a known JavaScript bug)
    let symbolCheck = typeof Symbol(); // 'symbol'
    let bigIntCheck = typeof 10n; // 'bigint'

    console.log(numberCheck); // 'number'
    console.log(stringCheck); // 'string'
    console.log(booleanCheck); // 'boolean'
    console.log(undefinedCheck); // 'undefined'
    console.log(nullCheck); // 'object' (known JavaScript issue)
    console.log(symbolCheck); // 'symbol'
    console.log(bigIntCheck); // 'bigint'

    // Using `Array.isArray()` to check if it's an array
    let arrCheck = Array.isArray(arr); // true

    // Using `instanceof` for objects and functions
    let functionCheck = greetUser instanceof Function; // true
    let objectCheck = person instanceof Object; // true

    console.log(arrCheck); // true
    console.log(functionCheck); // true
    console.log(objectCheck); // true


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 4. **Type Coercion**
     * JavaScript automatically converts (coerces) values from one type to another in certain situations.
     * This can result in unexpected behavior.
     */

    let coercedNum = "5" - 2; // 3 (String "5" is coerced to number 5)
    let coercedConcat = "5" + 2; // "52" (Number 2 is coerced to string "2")

    console.log(coercedNum); // 3
    console.log(coercedConcat); // "52"

    // Other coercion examples
    let coercedTrue = 5 + true; // 6 (true is coerced to 1)
    let coercedFalse = 5 + false; // 5 (false is coerced to 0)

    console.log(coercedTrue); // 6
    console.log(coercedFalse); // 5


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 5. **Null vs Undefined**
     * - `undefined` is automatically assigned to variables that are declared but not yet initialized.
     * - `null` is a deliberate assignment of "no value".
     */

    let uninitializedVar;
    let emptyValue = null;

    console.log(uninitializedVar); // undefined
    console.log(emptyValue); // null


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 6. **Dynamic Typing in JavaScript**
     * JavaScript is dynamically typed, meaning variables do not have fixed types.
     * You can assign a variable a number, then reassign it a string or object.
     */

    let dynamicVar = 42; // Initially a number
    dynamicVar = "Now I'm a string"; // Reassigned to a string
    dynamicVar = { key: "value" }; // Reassigned to an object

    console.log(dynamicVar); // { key: "value" }


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 7. **Equality Comparisons**
     * JavaScript has two equality operators: `==` (loose equality) and `===` (strict equality).
     */

    // Loose Equality (`==`) performs type coercion
    let looseEqual = 5 == "5"; // true (string "5" coerced to number 5)
    let looseNotEqual = 5 != "5"; // false (string "5" coerced to number 5)

    // Strict Equality (`===`) checks both value and type
    let strictEqual = 5 === "5"; // false (different types)
    let strictNotEqual = 5 !== "5"; // true (different types)

    console.log(looseEqual); // true
    console.log(strictEqual); // false


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 8. **Object Mutability**
     * Non-primitive types such as objects and arrays are mutable, meaning their values can be changed after creation.
     */

    let obj = { name: "Alice" };
    obj.name = "Bob"; // Mutating object property

    console.log(obj.name); // Bob


    ///////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 9. **Conclusion**
     * JavaScript has seven primitive data types (String, Number, Boolean, Undefined, Null, Symbol, and BigInt)
     * and three non-primitive (reference) data types (Object, Array, and Function).
     * Understanding how these data types behave, especially in comparison and type coercion, is essential for writing effective JavaScript.
     */

}

// 1. String: Represents a sequence of characters enclosed in single, double, or backticks.
let name = "John";  // Using double quotes
let greeting = 'Hello, World!';  // Using single quotes
let message = `Hi, ${name}!`;  // Using backticks (template literals)

// 2. Number: Represents both integer and floating-point numbers.
let age = 30;        // Integer
let price = 19.99;   // Floating-point number
let temperature = -5.5; // Negative number

// 3. BigInt: Represents large integers that are beyond the range of the Number type.
let largeNumber = 1234567890123456789012345678901234567890n; // BigInt (note the 'n' at the end)

// 4. Boolean: Represents true or false values.
let isActive = true;  // Boolean value true
let isCompleted = false;  // Boolean value false

// 5. Undefined: Represents a variable that has not been assigned a value.
let x;
console.log(x); // undefined

// 6. Symbol: Represents a unique and immutable value, often used as object property keys.
let uniqueID = Symbol("id");
console.log(uniqueID);  // Symbol(id)

// 7. Null: Represents the intentional absence of any object value.
let obj = null;
console.log(obj);  // null

// JavaScript Non-Primitive (Reference) Data Types Notes

// Non-primitive data types in JavaScript are:
// 1. Object
// 2. Array
// 3. Function
// 4. Map
// 5. Set

// 1. Object: A collection of key-value pairs, where keys are strings (or symbols) and values can be any data type.
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log(person.name); // "Alice"
person.age = 31;          // Modifying object properties
console.log(person.age);  // 31


// 3. Function: Functions in JavaScript are also objects. A function is a reusable block of code.
function greet(name) {
    return `Hello, ${name}`;
}

let sayHello = greet;  // Functions are first-class objects
console.log(sayHello("Alice")); // "Hello, Alice"

// 4. Map: A collection of key-value pairs, where keys can be any data type (objects, primitives, etc.).
let map = new Map();
map.set("name", "John");
map.set(1, "one");
map.set(true, "yes");

console.log(map.get("name"));  // "John"
console.log(map.has(1));       // true

// 5. Set: A collection of unique values (no duplicates). Values can be of any type.
let set = new Set([1, 2, 3, 3, 4]);
console.log(set);  // Set { 1, 2, 3, 4 } (duplicates are removed)
set.add(5);        // Adds 5 to the set
console.log(set);  // Set { 1, 2, 3, 4, 5 }

// Non-Primitive Characteristics:
// - Mutable: Non-primitive types can be modified after creation.
// - Stored by Reference: Variables hold references to the data, not the actual data itself.
// - Can Store Multiple Values: Unlike primitive types (e.g., number, string), non-primitives can store more complex structures.

// Example of Reference Behavior:
let arr1 = [10, 20, 30];
let arr2 = arr1;  // arr2 references the same array as arr1
arr2.push(40);    // Modifies the array that both arr1 and arr2 reference
console.log(arr1); // [10, 20, 30, 40]
console.log(arr2); // [10, 20, 30, 40]



// Example of an array (a type of object)
let fruits = ["apple", "banana", "cherry"];  // Array of strings

// Dynamic Typing in JavaScript: JavaScript is dynamically typed, meaning variables can change their type.
let variable = "hello";  // String
variable = 42;           // Now it's a number

// Type Conversion: Converting between different types
let number = 123;
let numberAsString = String(number);  // Convert number to string
let stringToNumber = Number("123");  // Convert string to number
console.log(numberAsString);  // "123"
console.log(stringToNumber);  // 123

// Checking Data Types: Using typeof operator to check a variable's type
console.log(typeof name);        // "string"
console.log(typeof age);         // "number"
console.log(typeof isActive);    // "boolean"
console.log(typeof obj);         // "object" (null is a special case)
console.log(typeof uniqueID);    // "symbol"
console.log(typeof person);      // "object"
console.log(typeof undefinedVar); // "undefined"



