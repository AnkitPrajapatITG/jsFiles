/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/
// find the root of x ^ y 

function findPower(x,y){
     return Math.pow(x,y);
}

console.log(findPower(2,3));


function findPositiveValue(x){
     return Math.abs(x);
}

console.log(findPositiveValue(-33.5))

function findMinValue(args) {
    return Math.min(...args); // Spread the array to pass individual values to Math.min
  }

function findMaxValue(arr){
    return Math.max(...arr);
}
  
  let arr = [35, 3, 44, 55523, 44, 222];
  console.log("min value from ", arr, " is:", findMinValue(arr));
  console.log("max value from ", arr, " is:", findMaxValue(arr));
  


function randomValue(min,max){

    // return Math.ceil((Math.random() * (max - min)) + min); //nearest upwords
    // return Math.floor((Math.random() * (max - min)) + min) // nearest downword
    // return Math.round((Math.random() * (max - min)) + min)  // both
    return Math.trunc((Math.random() * (max - min)) + min)   // only integer part
    
}

console.log(randomValue(2,100));



function findSignOfyourNumber(x){
    return Math.sign(x);
}



console.log(findSignOfyourNumber(-2));
console.log(findSignOfyourNumber("20"));
console.log(findSignOfyourNumber(0));

console.log( Math.ceil(Math.sqrt(15)));
