// JavaScript BigInt variables are used to store big integer values that are too big to be represented 
// by a normal JavaScript Number.
// In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).

// With this standard, large integer cannot be exactly represented and will be rounded.

// Because of this, JavaScript can only safely represent integers:

// Up to 9007199254740991 +(2^53-1)

// and

// Down to -9007199254740991 -(2^53-1).

// Integer values outside this range lose precision.

// how to create bigint

// by adding n in the end of the number

let n = 53752375n;

console.log(typeof n);

// by constructor

{
    let n =  BigInt(53309);
    console.log(typeof n);
    
}

{
    /* 
    Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).

    Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).
    */
}