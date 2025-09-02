//                                       Operators 

/* 

Types of JavaScript Operators (8 types)

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators

*/ 


//                                 Arithmetic Operators


// JavaScript Operators

/*
  1. Arithmetic Operators
  Used to perform basic arithmetic operations.

  - `+` (Addition): Adds two operands.
  console.log(5 + 3); // 8

  - `-` (Subtraction): Subtracts the second operand from the first.
  console.log(5 - 3); // 2

  - `*` (Multiplication): Multiplies two operands.
  console.log(5 * 3); // 15

  - `/` (Division): Divides the first operand by the second.
  console.log(6 / 3); // 2

  - `%` (Modulus): Returns the remainder of division.
  console.log(5 % 2); // 1

  - `++` (Increment): Increases the value of the operand by 1.
  let a = 5;
  a++; // 6
  console.log(a);

  - `--` (Decrement): Decreases the value of the operand by 1.
  let b = 5;
  b--; // 4
  console.log(b);
*/

// 2. Assignment Operators
// Used to assign values to variables.

let a = 5; // `=` (Simple assignment)
console.log(a);

a += 3; // `+=` (Addition assignment)
console.log(a); // 8

a -= 2; // `-=` (Subtraction assignment)
console.log(a); // 6

a *= 3; // `*=` (Multiplication assignment)
console.log(a); // 18

a /= 3; // `/=` (Division assignment)
console.log(a); // 6

// 3. Comparison Operators
// Used to compare two values and return a boolean result.

console.log(5 == '5'); // true (Equal to)
console.log(5 === '5'); // false (Strict Equal to)

console.log(5 != '5'); // false (Not equal to)
console.log(5 !== '5'); // true (Strict not equal to)

console.log(5 > 3); // true (Greater than)
console.log(3 < 5); // true (Less than)

console.log(5 >= 5); // true (Greater than or equal to)
console.log(5 <= 7); // true (Less than or equal to)

// 4. Logical Operators
// Used to perform logical operations, typically with boolean values.

console.log(true && false); // false (Logical AND)
console.log(true || false); // true (Logical OR)
console.log(!true); // false (Logical NOT)

// 5. Bitwise Operators
// Operate on 32-bit binary numbers.

console.log(5 & 3); // 1 (Bitwise AND)
console.log(5 | 3); // 7 (Bitwise OR)
console.log(5 ^ 3); // 6 (Bitwise XOR)
console.log(~5); // -6 (Bitwise NOT)
console.log(5 << 1); // 10 (Left shift)
console.log(5 >> 1); // 2 (Right shift)


// 6. Ternary Operator
// A shorthand for an if-else statement.

let x = 5;
let result = (x > 3) ? 'Greater' : 'Smaller';
console.log(result); // "Greater"

// 7. Type Operators
// Used to check types or convert values.

console.log(typeof 'hello'); // "string"
console.log(typeof 5); // "number"
console.log(typeof null); // "object" (this is a bug in JS)

let arr = [];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // false

// 8. Unary Operators
// A single operand is used.

console.log(+ "5"); // 5 (Unary plus)
console.log(- "5"); // -5 (Unary minus)

let y = 5;
console.log(++y); // 6 (Increment)
console.log(--y); // 4 (Decrement)

// 9. Nullish Coalescing Operator (??)
// Returns the right-hand operand if the left-hand operand is `null` or `undefined`.

let aVal = null;
let bVal = aVal ?? 'default';
console.log(bVal); // "default"


// decimal to binary 

let num = parseInt(prompt("enter a number"));
let binary = "";

while(num > 0){
    binary = binary +  (num%2);
    num = Math.floor(num / 2);
}

alert(`your binary number ${binary}`);

// binary to decimal 

{
    let binary = prompt("enter a binary number");
    let num = 0;
    binary = binary.split("").reverse().join("");
     let cnt = 0;
    for(let i of binary){
       num = num + (parseInt(i) * (2**cnt));
       cnt++;
    }
    alert(`your decimal number is ${num}`)
}