
{
  // JavaScript Number Methods and Notes

// 1. Creating Numbers
// Numbers in JavaScript can be created directly using numeric literals or the Number constructor.

let num1 = 10; // Integer
let num2 = 10.5; // Floating point number
let num3 = Number("123"); // From string (Returns 123)
let num4 = Number("abc"); // Invalid number (Returns NaN)

// 2. Number Properties

// .MAX_VALUE - The largest number representable in JavaScript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// .MIN_VALUE - The smallest positive number representable in JavaScript
console.log(Number.MIN_VALUE); // 5e-324

// .NEGATIVE_INFINITY - Represents negative infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

// .POSITIVE_INFINITY - Represents positive infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

// .NaN - Represents "Not-a-Number" value
console.log(Number.NaN); // NaN

// 3. Number Methods

// .toString() - Converts a number to a string
let numToStr = num1.toString(); // "10"

// .toFixed() - Formats a number using fixed-point notation (rounds to a specified number of decimals)
let fixedNum = num2.toFixed(1); // "10.5"

// .toPrecision() - Formats a number to a specified length (total number of digits)
let precisionNum = num2.toPrecision(3); // "10.5"

// .valueOf() - Returns the primitive value of a number
let primitiveValue = num1.valueOf(); // 10

// .isInteger() - Checks if a number is an integer
let isInteger = Number.isInteger(num1); // true

// .isNaN() - Checks if a value is NaN
let isNotNumber = Number.isNaN(num4); // true

// .isFinite() - Checks if a number is finite (not Infinity, -Infinity, or NaN)
let isFiniteNum = Number.isFinite(num1); // true

// .parseInt() - Parses a string and returns an integer
let parsedInt = parseInt("123.45"); // 123

// .parseFloat() - Parses a string and returns a floating-point number
let parsedFloat = parseFloat("123.45"); // 123.45

// 4. Mathematical Operations

// Addition (+)
let sum = 5 + 3; // 8

// Subtraction (-)
let difference = 10 - 2; // 8

// Multiplication (*)
let product = 4 * 3; // 12

// Division (/)
let quotient = 10 / 2; // 5

// Modulus (%) - Returns the remainder of a division
let remainder = 10 % 3; // 1

// Exponentiation (**)
let power = 2 ** 3; // 8 (2 raised to the power of 3)

// Increment (++)
let incremented = num1++; // 10 (Post-increment)
let incrementedPre = ++num1; // 12 (Pre-increment)

// Decrement (--)
let decremented = num1--; // 12 (Post-decrement)
let decrementedPre = --num1; // 10 (Pre-decrement)

// 5. Math Object
// JavaScript provides the Math object to perform various mathematical operations.

// .abs() - Returns the absolute value of a number
let absValue = Math.abs(-5); // 5

// .ceil() - Rounds a number up to the nearest integer
let ceilValue = Math.ceil(4.1); // 5

// .floor() - Rounds a number down to the nearest integer
let floorValue = Math.floor(4.9); // 4

// .round() - Rounds a number to the nearest integer
let roundValue = Math.round(4.5); // 5

// .max() - Returns the largest of the given numbers
let maxNum = Math.max(1, 3, 2, 4); // 4

// .min() - Returns the smallest of the given numbers
let minNum = Math.min(1, 3, 2, 4); // 1

// .random() - Returns a random number between 0 (inclusive) and 1 (exclusive)
let randomNum = Math.random(); // A random number between 0 and 1

// .pow() - Returns the base to the exponent power
let powerOf = Math.pow(2, 3); // 8 (2 raised to the power of 3)

// .sqrt() - Returns the square root of a number
let squareRoot = Math.sqrt(16); // 4

// .log() - Returns the natural logarithm (base e) of a number
let logValue = Math.log(10); // 2.302585092994046

// .exp() - Returns e raised to the power of a number
let expValue = Math.exp(2); // 7.389056098930649

// .sin(), .cos(), .tan() - Trigonometric functions
let sineValue = Math.sin(Math.PI / 2); // 1 (sine of 90 degrees)

// 6. Number Comparison

// Equality (==) - Checks if two values are equal
let isEqual = 5 == "5"; // true (loose comparison)

let isStrictEqual = 5 === "5"; // false (strict comparison, checks type)

// Greater than (>)
let greaterThan = 5 > 3; // true

// Less than (<)
let lessThan = 5 < 3; // false

// Greater than or equal to (>=)
let greaterThanOrEqual = 5 >= 5; // true

// Less than or equal to (<=)
let lessThanOrEqual = 5 <= 3; // false

// 7. Number Parsing

// .parseInt() - Parses a string and returns an integer value
let parsedInt1 = parseInt("100px"); // 100 (parses the integer before non-numeric characters)

// .parseFloat() - Parses a string and returns a floating-point number
let parsedFloat1 = parseFloat("10.5px"); // 10.5

// 8. Handling Infinity and NaN
// Infinity and NaN are special values in JavaScript that represent unbounded or undefined values.

let isInf = Number.isFinite(Infinity); // false (Infinity is not finite)
let isNan = Number.isNaN(NaN); // true (NaN is "Not-a-Number")

// Checking if a number is not a valid number (NaN)
let isNotANumber = isNaN("hello"); // true

// 9. Type Conversion

// Converting a number to a string
let numToStr1 = num1.toString(); // Converts number to a string (Returns "10")

// Converting a string to a number
let strToNum = Number("123"); // Converts string to number (Returns 123)
let invalidConversion = Number("abc"); // NaN (invalid conversion)

let numFromBoolean = Number(true); // Converts boolean to number (Returns 1)
let numFromFalse = Number(false); // Converts boolean to number (Returns 0)

// 10. Handling Floating Point Precision
// Floating-point numbers in JavaScript can suffer from precision issues.

let precisionIssue = 0.1 + 0.2; // 0.30000000000000004 (floating-point precision issue)

let fixedPrecision = (0.1 + 0.2).toFixed(2); // "0.30" (rounded to two decimal places)

// 11. Using BigInt for Large Numbers (ES2020)
let bigInt1 = 123456789123456789123456789n; // Using BigInt for very large integers
let bigInt2 = 987654321987654321987654321n; // Another BigInt number

// Arithmetic with BigInt
let bigIntSum = bigInt1 + bigInt2; // Works with BigInt

// You cannot mix BigInt with regular numbers directly
// let invalidSum = bigInt1 + 10; // TypeError


}
let n = 100000000;

console.log(n.toString());

console.log( n.toFixed(2));


const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"


console.log(n.toPrecision());

console.log(n.toExponential(2));


const x = Number.MAX_SAFE_INTEGER       ;
const y = Number.MAX_SAFE_INTEGER ;

console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9007199254740991

console.log(y);
console.log(x);
// Expected output: 9007199254740992

console.log(x  ==  y);

function warn(x) {
    if (Number.isSafeInteger(x)) {
      return "Precision safe.";
    }
    return "Precision may be lost!";
  }
  
  console.log(warn(x));
  // Expected output: "Precision may be lost!"
  
  console.log(warn(y));
  // Expected output: "Precision safe."



  function clean(x) {
    // eslint-disable-next-line use-isnan
    if (x === Number.NaN) {
      // Can never be true
      return null;
    }
    if (isNaN(x)) {
      return 0;
    }
  }
  
  console.log(clean("gg"));
  // Expected output: 0
  

  function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return "Fits!";
    }
    return "Does NOT fit!";
  }
  
  console.log(fits(5, 10));
  // Expected output: "Fits!"
  
  console.log(fits(5, 1));
  // Expected output: "Does NOT fit!"
  

  console.log(Number.isFinite(1 / 0));
// Expected output: false

console.log(Number.isFinite(10 / 5));
// Expected output: true

console.log(Number.isFinite(0 / 0));
// Expected output: false


// Properties  
/* 

EPSILON	            The difference between 1 and the smallest number > 1.
MAX_VALUE	        The largest number possible in JavaScript
MIN_VALUE	        The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (2^53 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(2^53 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)
NaN	                A "Not-a-Number" value
*/

// methods 

// Method           	Description
// toString()	        Returns a number as a string
// toExponential()  	Returns a number written in exponential notation
// toFixed()	        Returns a number written with a number of decimals
// toPrecision()    	Returns a number written with a specified length
// valueOf()	        Returns a number as a number


// Number Methods and Properties in JavaScript

// 1. toString()
// Converts a number to a string representation
let num1 = 100000000;
console.log(num1.toString());  // "100000000"
// Example: Converts the number 100000000 into the string "100000000"

// 2. toExponential([fractionDigits])
// Converts a number into exponential (scientific) notation.
// The optional parameter 'fractionDigits' determines the number of digits after the decimal point.
let num2 = 100000000;
console.log(num2.toExponential(2));  // "1.00e+8"
// Example: Converts the number 100000000 into scientific notation "1.00e+8" with 2 digits after the decimal.

// 3. toFixed([digits])
// Converts a number to a string, keeping the specified number of decimal places.
let num3 = 100000000;
console.log(num3.toFixed(2));  // "100000000.00"
// Example: Converts the number 100000000 to a string with 2 decimals (even though no decimal exists, it adds .00).

// 4. toPrecision([precision])
// Converts a number to a string with the specified number of significant digits.
let num4 = 100000000;
console.log(num4.toPrecision(6));  // "1000000"
// Example: Converts the number 100000000 into a string with 6 significant digits "1000000".

// 5. valueOf()
// Returns the primitive value of a number object (unwrapping the Number object).
const numObj1 = new Number(42);
console.log(numObj1.valueOf());  // 42
// Example: If you have a Number object, it returns its primitive value (42 in this case).

// Number Properties in JavaScript

// 1. EPSILON
// The difference between 1 and the smallest number greater than 1 that can be represented by the Number type.
console.log(Number.EPSILON);  // 2.220446049250313e-16
// Example: This value represents the smallest difference that can be added to 1 to get a number that is distinct from 1 in JavaScript.

// 2. MAX_VALUE
// The largest number that can be represented in JavaScript.
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
// Example: This is the largest finite number JavaScript can represent. Any number larger than this will become Infinity.

// 3. MIN_VALUE
// The smallest positive number that can be represented in JavaScript.
console.log(Number.MIN_VALUE);  // 5e-324
// Example: This is the smallest positive non-zero number JavaScript can represent. It is very close to zero.

// 4. MAX_SAFE_INTEGER
// The maximum integer that JavaScript can safely represent without losing precision (2^53 - 1).
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
// Example: This is the largest integer that can be safely used in JavaScript without losing precision.

// 5. MIN_SAFE_INTEGER
// The minimum integer that JavaScript can safely represent without losing precision (-(2^53 - 1)).
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
// Example: This is the smallest integer that can be safely used in JavaScript without losing precision.

// 6. POSITIVE_INFINITY
// Represents infinity, returned when a number exceeds the maximum possible value in JavaScript.
console.log(Number.POSITIVE_INFINITY);  // Infinity
// Example: When a calculation results in a number too large to represent, JavaScript returns Infinity.


// 7. NEGATIVE_INFINITY
// Represents negative infinity, returned when a negative number exceeds the minimum possible value in JavaScript.
console.log(Number.NEGATIVE_INFINITY);  // -Infinity
// Example: When a calculation results in a number too small to represent, JavaScript returns -Infinity.

// 8. NaN (Not-a-Number)
// Represents a "Not-a-Number" value, usually returned when an invalid operation or result occurs (e.g., 0/0).
console.log(Number.NaN);  // NaN
// Example: This value indicates an invalid number operation. For example, 0/0 or an invalid mathematical operation results in NaN.

// Checking if a number is finite

// Example 1: Checking if a number is finite
console.log(Number.isFinite(10 / 5));  // true
// 10/5 is a finite number, so the result is true.

// Example 2: Checking if infinity is finite
console.log(Number.isFinite(1 / 0));  // false
// 1/0 results in Infinity, which is not a finite number.

// Example 3: Checking if NaN is finite
console.log(Number.isFinite(0 / 0));  // false
// 0/0 results in NaN, which is not a finite number.
