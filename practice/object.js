
// 1. Object Display

{
  // JavaScript Objects - Complete Notes

  // 1. **What is an Object?**
  // In JavaScript, an object is a collection of key-value pairs, where each key (also called a property) is a string (or Symbol) and each value can be any data type (strings, numbers, arrays, functions, etc.).
  // Objects are fundamental in JavaScript as they are used to represent and store data.

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 2. **Creating an Object**
   * There are two main ways to create an object in JavaScript: using object literals and using the `new Object()` constructor.
   */

  // **Object Literal Notation** - The most common and preferred way to create an object.
  const person = {
    name: "John",
    age: 30,
    isEmployed: true
  };

  console.log(person);  // Output: { name: "John", age: 30, isEmployed: true }

  // **Using the Object Constructor**
  const car = new Object();
  car.brand = "Toyota";
  car.model = "Corolla";
  car.year = 2020;

  console.log(car);  // Output: { brand: "Toyota", model: "Corolla", year: 2020 }

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 3. **Accessing Object Properties**
   * You can access object properties in two ways: using dot notation or bracket notation.
   */

  // Dot notation
  console.log(person.name);  // Output: John
  console.log(person.age);   // Output: 30

  // Bracket notation (useful if the property name contains spaces or special characters)
  console.log(person["name"]);  // Output: John

  // Bracket notation can also be used with variables
  const propName = "age";
  console.log(person[propName]);  // Output: 30

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 4. **Adding and Modifying Object Properties**
   * You can add new properties to an object or modify existing properties by using dot or bracket notation.
   */

  // Adding new properties
  person.country = "USA";
  console.log(person.country);  // Output: USA

  // Modifying existing properties
  person.age = 35;
  console.log(person.age);  // Output: 35

  // Adding/Modifying using bracket notation
  person["job"] = "Engineer";
  console.log(person["job"]);  // Output: Engineer

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 5. **Deleting Object Properties**
   * You can delete properties from an object using the `delete` operator.
   */

  // Deleting a property
  delete person.isEmployed;
  console.log(person.isEmployed);  // Output: undefined (property is deleted)

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 6. **Object Methods**
   * Objects in JavaScript can also contain methods (functions as properties).
   */

  // Example of an object with methods
  const personWithMethod = {
    firstName: "Jane",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(personWithMethod.fullName());  // Output: Jane Doe

  // Using arrow functions in objects (Note: `this` will refer to the lexical scope, not the object)
  const personWithArrowMethod = {
    firstName: "Alice",
    lastName: "Smith",
    fullName: () => {
      return `${personWithArrowMethod.firstName} ${personWithArrowMethod.lastName}`;
    }
  };

  console.log(personWithArrowMethod.fullName());  // Output: Alice Smith

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 7. **Accessing All Object Keys and Values**
   * You can get all the keys or values of an object using `Object.keys()` and `Object.values()` methods.
   */

  // `Object.keys()` returns an array of the object's property names (keys)
  const keys = Object.keys(person);
  console.log(keys);  // Output: ["name", "age", "country", "job"]

  // `Object.values()` returns an array of the object's property values
  const values = Object.values(person);
  console.log(values);  // Output: ["John", 35, "USA", "Engineer"]

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 8. **Object Destructuring**
   * Object destructuring allows you to extract properties from an object and assign them to variables in a more concise way.
   */

  // Example of object destructuring
  const user = {
    username: "john_doe",
    email: "john@example.com",
    age: 25
  };

  // Extracting properties into variables
  const { username, email, age } = user;

  console.log(username);  // Output: john_doe
  console.log(email);     // Output: john@example.com
  console.log(age);       // Output: 25

  // Destructuring with default values
  const { name = "Guest", city = "Unknown" } = { name: "Alice" };
  console.log(name);  // Output: Alice
  console.log(city);  // Output: Unknown

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 9. **Nested Objects**
   * Objects can contain other objects, creating a hierarchical structure.
   */

  // Example of a nested object
  const student = {
    name: "Bob",
    grades: {
      math: 90,
      english: 85,
      science: 92
    },
    getGrades: function () {
      return `Math: ${this.grades.math}, English: ${this.grades.english}, Science: ${this.grades.science}`;
    }
  };

  console.log(student.grades.math);  // Output: 90
  console.log(student.getGrades()); // Output: Math: 90, English: 85, Science: 92

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 10. **Object Constructor**
   * In JavaScript, objects can also be created using a constructor function.
   */

  // Constructor function
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Creating a new object using the constructor
  const myCar = new Car("Tesla", "Model S", 2021);
  console.log(myCar);  // Output: Car { make: "Tesla", model: "Model S", year: 2021 }

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 11. **Prototype and Inheritance**
   * Every JavaScript object has a prototype. The prototype is an object from which the object inherits properties and methods.
   */

  // Example: Creating a new object that inherits from a prototype
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.speak = function () {
    console.log(this.name + " makes a sound.");
  };

  const dog = new Animal("Dog");
  dog.speak();  // Output: Dog makes a sound.

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 12. **Object.freeze()**
   * The `Object.freeze()` method prevents the modification of an object (i.e., it makes the object immutable).
   */

  // Example of freezing an object
  const car2 = Object.freeze({
    make: "Honda",
    model: "Civic",
    year: 2022
  });

  car2.year = 2023;  // This will not change the `year` property because the object is frozen
  console.log(car2.year);  // Output: 2022 (remains unchanged)

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 13. **Object Sealing (Object.seal())**
   * `Object.seal()` prevents new properties from being added to an object and marks all existing properties as non-configurable.
   */

  // Example of sealing an object
  const personSealed = { name: "Mark", age: 29 };
  Object.seal(personSealed);

  // Modifying an existing property
  personSealed.age = 30;
  console.log(personSealed.age);  // Output: 30

  // Attempting to add a new property will fail
  personSealed.job = "Developer";  // The property will not be added
  console.log(personSealed.job);  // Output: undefined

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 14. **Object.assign()**
   * The `Object.assign()` method is used to copy all properties from one or more source objects to a target object.
   */

  // Example of using `Object.assign()`
  const person1 = { name: "Alice", age: 25 };
  const person2 = { job: "Engineer", country: "USA" };

  const mergedPerson = Object.assign({}, person1, person2);
  console.log(mergedPerson);  // Output: { name: "Alice", age: 25, job: "Engineer", country: "USA" }

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 15. **Object Iteration**
   * You can iterate over the keys and values of an object using `for...in` loops or `Object.entries()`.
  
   */

  // Using a `for...in` loop to iterate over an object
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  // Output:
  // name: John
  // age: 35
  // country: USA
  // job: Engineer

  // Using `Object.entries()` to get key-value pairs as an array
  const entries = Object.entries(person);
  console.log(entries);
  // Output: [ ["name", "John"], ["age", 35], ["country", "USA"], ["job", "Engineer"] ]

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 16. **Summary of Key Concepts**
   * - Objects in JavaScript are collections of key-value pairs and are used to store and manage data.
   * - You can create objects using object literals, constructors, or the `new Object()` method.
   * - Object properties can be accessed using dot or bracket notation.
   * - You can add, modify, delete properties, and define methods in an object.
   * - Object destructuring allows you to extract properties into variables.
   * - Objects can be nested, and can also use prototypes for inheritance.
   * - JavaScript provides several methods like `Object.keys()`, `Object.values()`, `Object.assign()`, `Object.freeze()`, and more to manipulate objects.
   */


}

// Displaying an object using console.log
const person = {
  name: "Alice",
  age: 25
};

console.log(person);  // Output: { name: "Alice", age: 25 }

// Converting an object to a string using JSON.stringify
console.log(JSON.stringify(person))
// Iterating over an object's properties using a for...in loop
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 25


// 2. Object Constructor

// Using the Object() constructor
let person1 = new Object();
person1.name = "Alice";
person1.age = 25;
console.log(person1);  // Output: { name: "Alice", age: 25 }

// Creating a custom constructor function to create objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person2 = new Person("Bob", 30);
console.log(person2);  // Output: Person { name: "Bob", age: 30 }


// 3. Object Properties

// Accessing properties using dot notation and bracket notation
console.log(person.name);  // Output: Alice
console.log(person["age"]);  // Output: 25

// Adding and modifying properties
person.city = "New York";  // Adding a new property
person.age = 26;           // Modifying an existing property
console.log(person);       // Output: { name: "Alice", age: 26, city: "New York" }

// Deleting a property
delete person.city;
console.log(person);       // Output: { name: "Alice", age: 26 }

// Checking if a property exists
console.log("name" in person);          // Output: true
console.log(person.hasOwnProperty("age"));  // Output: true
console.log("city" in person);          // Output: false



function Employee(name, age, sallary, mobile, getSallary) {

  this.name = name;
  this, age = age;
  this.sallary = sallary;
  this.mobile = mobile;
  this.getSallary = getSallary;
}


const emp1 = new Employee("user", 44, 5000, 45365934, function () {

  return this.sallary;

});
console.log(emp1)

console.log(emp1.hasOwnProperty("mobile"));
console.log("sallary" in emp1);

delete emp1.mobile;

console.log(emp1, emp1.getSallary());


// common object methods


{
  let obj = {
    name:"abc",
    writable:false,
    extensible:false,
  }
  // Object.preventExtensions(obj);
  // Object.freeze(obj)
  // Object.seal(obj);
  obj.age = 55;

  console.log("obj",obj,Object.getOwnPropertyDescriptors(obj))
}

{
  // Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)
}


{
  // Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)
}

{
  // Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)

}