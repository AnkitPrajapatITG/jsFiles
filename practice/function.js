//  functions in js 
{
  // JavaScript Functions - Complete Notes

// 1. **What is a Function?**
// A function in JavaScript is a block of reusable code that performs a specific task or operation.
// Functions can take input (parameters), process it, and return a result.

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 2. **Function Declaration**
 * A function declaration is a way to define a function. It can be called before or after it is defined.
 */

function greet(name) {
  console.log("Hello, " + name);
}

// Calling the function
greet("Alice");  // Output: Hello, Alice

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 3. **Function Expression**
 * A function expression defines a function and assigns it to a variable. 
 * It cannot be called before it is defined.
 */

const sum = function(a, b) {
  return a + b;
};

// Calling the function
console.log(sum(5, 10));  // Output: 15

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 4. **Arrow Functions**
 * Arrow functions are a more concise way to write functions using the `=>` syntax.
 * They are best used for simple functions and work well in callbacks.
 */

// Basic arrow function
const multiply = (a, b) => a * b;
console.log(multiply(5, 3));  // Output: 15

// Arrow function with a single parameter
const square = x => x * x;
console.log(square(4));  // Output: 16

// Arrow function with no parameters
const sayHello = () => console.log("Hello!");
sayHello();  // Output: Hello!

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 5. **Function Parameters and Arguments**
 * Functions can accept parameters (input values), which are passed when the function is called.
 * Arguments are the actual values passed to the parameters when calling the function.
 */

// Function with parameters
function add(a, b) {
  return a + b;
}

console.log(add(3, 4));  // Output: 7

// Default Parameters - Parameters with default values if no argument is passed
function greetUser(name = "Guest") {
  console.log("Hello, " + name);
}

greetUser();  // Output: Hello, Guest
greetUser("Bob");  // Output: Hello, Bob

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 6. **Return Statement**
 * The `return` statement is used to return a value from a function. It can also exit the function early.
 */

// Function with return statement
function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 3));  // Output: 7

// Returning early (Exit function early)
function checkAge(age) {
  if (age < 18) {
    return "You are underage.";
  }
  return "You are an adult.";
}

console.log(checkAge(16));  // Output: You are underage.

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 7. **Function Scope**
 * Variables declared inside a function are local to that function and cannot be accessed from outside.
 * The scope of a function refers to where variables can be accessed within the code.

 */

// Example of local scope
function localScopeExample() {
  let localVar = "I'm inside the function!";
  console.log(localVar);  // Output: I'm inside the function!
}

// Calling the function
localScopeExample();

// Trying to access the local variable outside the function will throw an error
// console.log(localVar);  // Error: localVar is not defined

// Example of global scope
let globalVar = "I'm outside the function!";

function globalScopeExample() {
  console.log(globalVar);  // Output: I'm outside the function!
}

globalScopeExample();

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 8. **Anonymous Functions**
 * Anonymous functions are functions that are defined without a name. They are typically used in function expressions.
 */

// Anonymous function assigned to a variable
const divide = function(a, b) {
  return a / b;
};

console.log(divide(20, 4));  // Output: 5

// Anonymous function as an argument to another function (callback function)
setTimeout(function() {
  console.log("This message is delayed by 1 second");
}, 1000);  // Output: This message is delayed by 1 second (after 1 second)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 9. **IIFE (Immediately Invoked Function Expressions)**
 * An IIFE is a function that is defined and executed immediately after its creation.
 * It is often used to create a new scope to avoid polluting the global scope.

 */

// IIFE example
(function() {
  let message = "This is an IIFE!";
  console.log(message);  // Output: This is an IIFE!
})();  // Immediately invoked

// Variables inside IIFE are not accessible outside
// console.log(message);  // Error: message is not defined

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 10. **Rest Parameters**
 * The rest parameter syntax (`...`) allows a function to accept an indefinite number of arguments as an array.
 */

// Example of rest parameters
function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4));  // Output: 10
console.log(sumAll(5, 10, 15));  // Output: 30

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 11. **Arguments Object**
 * The `arguments` object is an array-like object that contains all the arguments passed to a function.
 * Note: The `arguments` object is not available in arrow functions, but it is available in regular functions.
 */

// Example using the arguments object
function showArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

showArguments(1, "hello", true, [1, 2, 3]);  
// Output: 1, hello, true, [1, 2, 3]

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 12. **Function Hoisting**
 * Function declarations are hoisted to the top of their scope. This means they can be called before they are defined.
 * However, function expressions are not hoisted.
 */

// Example of hoisting
hoistedFunction();  // Output: Function has been hoisted!

function hoistedFunction() {
  console.log("Function has been hoisted!");
}

// Example of function expression (not hoisted)
try {
  expressionFunction();  // Error: expressionFunction is not a function
} catch (error) {
  console.log(error);  // Error: expressionFunction is not a function
}

const expressionFunction = function() {
  console.log("This function is not hoisted");
};

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 13. **Callback Functions**
 * A callback function is a function passed into another function as an argument and is executed later.
 */

// Example of a callback function
function greetUser(callback) {
  console.log("Hello!");
  callback();
}

greetUser(function() {
  console.log("Good to see you!");
});
// Output:
// Hello!
// Good to see you!

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 14. **Recursive Functions**
 * A recursive function is a function that calls itself in order to solve a problem.
 * The function must have a base case to stop the recursion.

 */

// Example of a recursive function (factorial)
function factorial(n) {
  if (n === 0) {
    return 1;  // Base case
  } else {
    return n * factorial(n - 1);  // Recursive call
  }
}

console.log(factorial(5));  // Output: 120

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 15. **Function Binding**
 * `.bind()` is used to create a new function that, when called, has its `this` keyword set to a specified value.

 */

// Example of binding a function
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
};

const person2 = {
  firstName: "Alice",
  lastName: "Smith"
};

const boundFunction = person.fullName.bind(person2);
boundFunction();  // Output: Alice Smith

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 16. **Function Closures**
 * A closure is a function that "remembers" its lexical environment, even when the function is executed outside its original scope.

 */

// Example of closure
function outerFunction() {
  const outerVar = "I'm from the outer function";
  
  function innerFunction() {
    console.log(outerVar);  // innerFunction has access to outerVar
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample();  // Output: I'm from the outer function

///////////////////////////////////////////////////////////////////////////////////////////////////


}
// --- Types of Functions in JavaScript ---

// 1. Function Declaration (Function Statement)
function greet(name) {
    console.log("Hello, " + name);
  }
  
  greet("Alice");  // Output: Hello, Alice
  
  
  // 2. Function Expression
  const greetExpression = function(name) {
    console.log("Hello, " + name);
  };
  
  greetExpression("Bob");  // Output: Hello, Bob
  
  
  // 3. Arrow Function (ES6)
  const greetArrow = (name) => {
    console.log("Hello, " + name);
  };
  
  greetArrow("Charlie");  // Output: Hello, Charlie
  
  // Shortened arrow function syntax
  const greetShortArrow = name => console.log("Hello, " + name);
  greetShortArrow("Dana");  // Output: Hello, Dana
  
  
  // 4. Anonymous Function (No Name)
  setTimeout(function() {
    console.log("This message is displayed after 1 second.");
  }, 1000);
  

  
  // 6. Constructor Function
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person1 = new Person("Alice", 25);
  console.log(person1.name);  // Output: Alice
  
  
  // 7. Generator Function (ES6)
  function* greetGenerator() {
    yield "Hello";
    yield "World";
  }
  
  const greet = greetGenerator();
  console.log(greet.next().value);  // Output: Hello
  console.log(greet.next().value);  // Output: World
  
  
  // 8. Async Function (ES8)
  async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  }
  
  fetchData();  // This will log data once it's fetched
  
  

  // 10. Method (Function inside an object)
  const person = {
    name: "Alice",
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  person.greet();  // Output: Hello, Alice
  
  // ES6 Method Shorthand
  const personES6 = {
    name: "Bob",
    greet() {
      console.log("Hello, " + this.name);
    }
  };
  
  personES6.greet();  // Output: Hello, Bob
  