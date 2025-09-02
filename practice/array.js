// const person = [];
// person[0] = 9890;
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// console.log(person, person["firstName"], person.length)

// const point = new Array(543, 53, 535, 3453);
// const point2 = [53453, 532, 232324, 5234];

// console.log(point, point2);

// {
//     const points = new Array(40,2);
//     // Create an array with one element:
//     const points2 = [40];

//     console.log(point == point2,points,points2);

// }


/* 
Array iteration methods operate on every array item:

Array forEach
Array map()
Array flatMap()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array with()
Array Spread (...)
*/

{
    // JavaScript Arrays - Complete Notes

// 1. **What is an Array?**
// An array in JavaScript is a special type of object used to store an ordered collection of values (items).
// Arrays can hold items of any type, including numbers, strings, objects, and even other arrays.

const arr1 = [1, 2, 3, "Hello", true, null];  // Array with mixed types

console.log(arr1);  // [1, 2, 3, "Hello", true, null]

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 2. **Array Indexes**
 * Arrays are indexed, meaning each element in an array has a unique index, starting from 0.
 * Access array elements using their index.
 */

// Accessing array elements by index
console.log(arr1[0]);  // 1 (first element)
console.log(arr1[3]);  // "Hello" (fourth element)

// Changing array values by index
arr1[2] = 99;  // Changing the value at index 2
console.log(arr1);  // [1, 2, 99, "Hello", true, null]

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 3. **Array Length**
 * The `.length` property returns the number of elements in the array.
 */

const arr1Length = arr1.length;
console.log(arr1Length);  // 6 (The number of elements in the array)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 4. **Array Methods**
 * JavaScript arrays come with many useful methods for manipulation and iteration.

 **Adding Elements**
 */

// Push - Adds an element to the end of the array
arr1.push(42);
console.log(arr1);  // [1, 2, 99, "Hello", true, null, 42]

// Unshift - Adds an element to the beginning of the array
arr1.unshift("New First Element");
console.log(arr1);  // ["New First Element", 1, 2, 99, "Hello", true, null, 42]

//  **Removing Elements**
//  */

// Pop - Removes the last element of the array
arr1.pop();
console.log(arr1);  // ["New First Element", 1, 2, 99, "Hello", true, null]

// Shift - Removes the first element of the array
arr1.shift();
console.log(arr1);  // [1, 2, 99, "Hello", true, null]

//  **Splicing**
//  */

// Splice - Adds/removes elements from a specified index and returns the removed elements
arr1.splice(2, 1, "New Element");  // Remove 1 element at index 2, then add "New Element"
console.log(arr1);  // [1, 2, "New Element", "Hello", true, null]

//  **Concatenation**
//  */

// Concat - Combines two or more arrays and returns a new array
const arr2 = [100, 200, 300];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr);  // [1, 2, "New Element", "Hello", true, null, 100, 200, 300]

//  **Joining**
//  */

// Join - Joins all elements of an array into a single string with a specified separator
const joinedArr = arr1.join("-");
console.log(joinedArr);  // "1-2-New Element-Hello-true-null"

//  **Slicing**
//  */

// Slice - Returns a shallow copy of a portion of the array into a new array
const slicedArr = arr1.slice(1, 4);  // Extracts elements from index 1 to 3 (not inclusive of index 4)
console.log(slicedArr);  // [2, "New Element", "Hello"]

//  **Searching**
//  */

// IndexOf - Returns the index of the first occurrence of a specified element
const index = arr1.indexOf("Hello");
console.log(index);  // 3 (Position of "Hello" in the array)

// Includes - Checks if an array contains a specified element
const contains = arr1.includes(2);
console.log(contains);  // true

//  **Reversing**
//  */

// Reverse - Reverses the order of the elements in the array
arr1.reverse();
console.log(arr1);  // [null, true, "Hello", "New Element", 2, 1]

//  **Sorting**
//  */

// Sort - Sorts the array elements in ascending order by default
arr1.sort();
console.log(arr1);  // [1, 2, "Hello", "New Element", true, null]

// Custom Sort - You can define your own sorting criteria
const numbers = [5, 10, 2, 30, 1];
numbers.sort((a, b) => a - b);  // Sorting numbers in ascending order
console.log(numbers);  // [1, 2, 5, 10, 30]

//  **Finding Elements**
//  */

// Find - Returns the first element in the array that satisfies a condition
const found = arr1.find(element => typeof element === "number");
console.log(found);  // 1 (First number in the array)

// FindIndex - Returns the index of the first element that satisfies a condition
const foundIndex = arr1.findIndex(element => typeof element === "number");
console.log(foundIndex);  // 0 (Index of the first number)

//  **Filtering**
//  */

// Filter - Returns a new array containing all elements that satisfy a condition
const numbersOnly = arr1.filter(element => typeof element === "number");
console.log(numbersOnly);  // [1, 2] (Array of numbers)

//  **Mapping**
//  */

// Map - Creates a new array with the results of calling a function on every element
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 10, 20, 60]

//  **Reducing**
//  */

// Reduce - Applies a function to each element in the array (from left to right) and returns a single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 48 (The sum of all elements)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 5. **Multidimensional Arrays**
 * Arrays can hold other arrays, creating multidimensional arrays.
 */

// Example of a 2D array (Array of arrays)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements in a 2D array
console.log(matrix[1][2]);  // 6 (second row, third column)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 6. **Array Destructuring**
 * Array destructuring allows you to unpack values from arrays into individual variables.
 */

// Destructuring an array
const [a, b, c] = [10, 20, 30];
console.log(a);  // 10
console.log(b);  // 20
console.log(c);  // 30

// Skipping elements in array destructuring
const [x, , z] = [1, 2, 3];
console.log(x);  // 1
console.log(z);  // 3

// Using the rest operator to collect remaining elements
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4, 5]

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 7. **Array Spread Syntax**
 * Spread syntax allows you to expand an array into individual elements.
 */

// Example of spreading an array
const arr3 = [1, 2, 3];
const arr4 = [...arr3, 4, 5];
console.log(arr4);  // [1, 2, 3, 4, 5]

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 8. **Array Iteration**
 * Arrays can be iterated over using `for`, `forEach`, and other iteration methods.
 */

// Using a basic for loop
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// Using forEach method to iterate over an array
arr1.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 9. **Array in Practice**
 * Arrays are often used in real-world scenarios, such as working with lists of data, handling form inputs, or manipulating collections of objects.
 */

// Example: Working with a list of objects
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];

// Using .map() to get an array of student names
const studentNames = students.map(student => student.name);
console.log(studentNames);  // ["Alice", "Bob", "Charlie"]

// Filtering students above a certain age
const olderThan25 = students.filter(student => student.age > 25);
console.log(olderThan25);  // [{ name: "Bob", age: 30 }]

}

// craete an array
const cars = ["Saab", "Volvo", "BMW"];
// Create an Array
const cars2 = new Array("Saab", "Volvo", "BMW");

console.log(cars, cars2);


{
    // Get the  element of fruits:

    {
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let fruit = fruits.at(2);
    }

    { // Get the third element of fruits:
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        let fruit = fruits[2];
    }
}

//cancat 

{
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin"];
    const children = arr1.concat(arr2, arr3);
    console.log(children);

    console.log(arr1 + arr2 + arr3);

}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.copyWithin(2, 0);
    console.log(fruits);

}

// entries 

{
    // Create an Array
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // Create an Iterator
    const list = fruits.entries();

    // List the Entries
    for (let [index, value] of list) {
        console.log(index, value);
    }
}

// every()

{
    const ages = [22, 34, 53, 50, 64];

    function checkAge(age) {
        return age >= 18;
    }

    console.log(ages.every(checkAge));

}


// fill 


{
    const names = ["a", 'b', 'c', 'a'];

    // names.fill('a');

    names.fill('a', 1, 5)

    console.log(names);

}


//filter 

{

    const ages = [22, 34, 53, 5, 64];

    function checkAge(age) {
        return age >= 18;
    }

    const validAges = ages.filter(checkAge);

    console.log(validAges);

}

// find 

{
    const ages = [2, 34, 53, 5, 64];

    function checkAge(age) {
        return age >= 18;
    }

    const validAgesIndex = ages.find(checkAge);

    console.log(validAgesIndex, ages.indexOf(validAgesIndex));
}

//flat

{

    const myArr = [[1, 2], [3, 4], [5, 6], [[1, 2], [3, 4], [5, 6]]];
    const newArr = myArr.flat(5);

    console.log(newArr);

}

//flatMap

{
    /* 
    The flatMap() method maps all array elements and creates a new flat array.

    flatMap() creates a new array from calling a function for every array element.

    flatMap() does not execute the function for empty elements.

    flatMap() does not change the original array.
    */

    const nums = [1, 2, 3, 4, 5];

    const newArr = nums.flatMap((x) => [x, x * 10]);

    console.log(newArr);

}

//foreach 

{

    // array.forEach(function(currentValue, index, arr), thisValue)
    // return undefine

    const nums = [1, 2, 3, 4, 5];

    nums.forEach((x) => console.log(x * 10));

    console.log(nums);
}


// includes

{   //array.includes(element, start)
    const nums = [1, 2, 3, 4, 5];
    console.log(nums.includes(8, 0));
}

// index of 

{   //array.indexof(element, start)
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
    let index = fruits.indexOf("Apple", 0);

    console.log(index);   
}

//isArray

{
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
    let result = Array.isArray(fruits);
    console.log(result);   
}

//join 

{   // join return a string 
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
    let result = fruits.join("-->");
    console.log(result);   
}


let arr = [1,2,3,4];
arr[4] = 5;


// shift

let result = arr.shift();
console.log(result);

result = arr.unshift(4);

console.log(result);

// 

//spliced 

{
    let arr = [1,2,3,4];

    arr.splice(2,2,5,6,7,6);
    console.log(arr);
    
}

// sort

{
    let arr = [2,3,4,5,2];

    arr.sort();

    console.log(arr);

    arr.sort((a,b) => { return b-a});

    console.log(arr);

    let str = ["a",'b','c','a','d','z'];


    str.sort();

    console.log(str);

   // descending sort
    str.sort((a,b) =>{ 
        if(a > b) return -1;
        else if( b < a) return 1;
        else return 0;
    })
    
    console.log(str);


    let objArr = [
        {
            name:"a",
            price:100
        },
        {
            name:"h",
            price:1200
        },
        {
            name:"d",
            price:1400
        },
        {
            name:"b",
            price:10
        },
    ]
   
    objArr.sort((a,b) => { return a.price - b.price})

    console.log("obj",objArr);

    let keys = objArr.keys();
    console.log("keys",Array.isArray(keys));
    
    for(let key in keys){
        console.log(key.name,key.price);
        
    }

    // objArr.forEach((value) =>{
    //     console.log(value);
    // })
    
    
}

//slice 


{

    let arr = [19,3,5,5,5,35];

    let result = arr.slice(1,45);

    console.log(result);
    
}