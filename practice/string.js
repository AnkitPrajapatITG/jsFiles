/* 
String is Premitive Data type
Strings are useful for holding data that can be represented in text form. Some of the most-used operations 
on strings are to check their length, to build and concatenate them using the + and += string operators, 
checking for the existence or location of substrings with the indexOf() method, or extracting substrings 
with the substring() method.
*/
// JavaScript String Methods and Notes

// 1. Creating Strings
// You can create strings using single quotes (' '), double quotes (" "), or backticks (``).

let str1 = 'Hello, World!'; // Single quotes
let str2 = "Hello, JavaScript!"; // Double quotes
let str3 = `Hello, Template Literals!`; // Template literals (allows multiline and interpolation)

// 2. String Length
// You can get the length of a string using the `.length` property.
let length = str1.length; // Returns 13 for 'Hello, World!'

// 3. Accessing Characters
// You can access a specific character of a string using bracket notation or the `.charAt()` method.

let char1 = str1[0]; // Access character at index 0 (Returns 'H')
let char2 = str1.charAt(1); // Access character at index 1 (Returns 'e')

// 4. String Concatenation
// You can concatenate strings using the `+` operator or the `.concat()` method.

let combined = str1 + ' ' + str2; // Using `+` operator (Returns "Hello, World! Hello, JavaScript!")
let concatenated = str1.concat(' ', str2); // Using `.concat()` method (Returns "Hello, World! Hello, JavaScript!")

// 5. String Interpolation (Template Literals)
// Template literals allow you to embed expressions inside strings using `${}` syntax.

let name = 'Alice';
let greeting = `Hello, ${name}!`; // Interpolation (Returns "Hello, Alice!")

// 6. String Methods

// .toUpperCase() - Converts the string to uppercase
let upperCaseStr = str1.toUpperCase(); // Returns "HELLO, WORLD!"

// .toLowerCase() - Converts the string to lowercase
let lowerCaseStr = str1.toLowerCase(); // Returns "hello, world!"

// .includes() - Checks if a substring exists within the string
let hasWorld = str1.includes('World'); // Returns true

// .indexOf() - Returns the first index of the substring, or -1 if not found
let index = str1.indexOf('World'); // Returns 7

// .lastIndexOf() - Returns the last index of the substring, or -1 if not found
let lastIndex = str1.lastIndexOf('o'); // Returns 8

// .slice() - Extracts a portion of the string and returns it
let slicedStr = str1.slice(0, 5); // Returns "Hello"

// .substring() - Similar to `.slice()`, but doesn't allow negative indices
let subStr = str1.substring(0, 5); // Returns "Hello"

// .substr() - Returns a portion of the string starting at a specific index and for a specific length
 substr = str1.substr(0, 5); // Returns "Hello"

// .replace() - Replaces a substring with another string (first occurrence)
let replacedStr = str1.replace('World', 'JavaScript'); // Returns "Hello, JavaScript!"

// .split() - Splits a string into an array of substrings based on a separator
let splitStr = str1.split(','); // Returns ['Hello', ' World!']

// .trim() - Removes whitespace from both ends of a string
let paddedStr = '  Hello  ';
let trimmedStr = paddedStr.trim(); // Returns "Hello"

// .padStart() - Pads the current string with another string at the beginning until it reaches a given length
let paddedStart = '5'.padStart(3, '0'); // Returns "005"

// .padEnd() - Pads the current string with another string at the end until it reaches a given length
let paddedEnd = '5'.padEnd(3, '0'); // Returns "500"

// .charCodeAt() - Returns the Unicode of the character at a specified index
let unicode = str1.charCodeAt(0); // Returns 72 (Unicode for 'H')

// .fromCharCode() - Converts a Unicode value to a character
let charFromCode = String.fromCharCode(72); // Returns 'H'

// .repeat() - Repeats the string a given number of times
let repeatedStr = 'abc'.repeat(3); // Returns "abcabcabc"

// 7. String Comparison
// Strings can be compared using comparison operators (==, ===, <, >, etc.).

let isEqual = str1 === 'Hello, World!'; // Returns true

// 8. Escape Characters
// Sometimes you need to use special characters in a string. You can escape them using the backslash (\).

let quoteStr = 'She said, "Hello!"'; // No need to escape double quotes because we're using single quotes
let escapeStr = 'This is a newline character: \n See it?'; // \n for newline
let tabStr = 'This is a tab: \tHere'; // \t for tab

// 9. Multiline Strings (Template Literals)
// Template literals allow you to create multiline strings easily.

let multiLineStr = `This is a 
multiline
string.`;

// 10. String Conversion (to String)
let num = 123;
let strFromNum = num.toString(); // Converts the number to a string (Returns "123")

let boolean = true;
let strFromBoolean = boolean.toString(); // Converts the boolean to a string (Returns "true")

// 11. String Matching with Regular Expressions
// You can use regular expressions with the `.match()` method to find patterns in a string.

let regexMatch = str1.match(/World/); // Returns ['World']

// .search() - Tests if a pattern exists in a string (Returns the index of the match or -1)
let searchResult = str1.search('World'); // Returns 7

// .replace() - Replaces matches of a regular expression in a string
let replacedWithRegex = str1.replace(/World/, 'JavaScript'); // Returns "Hello, JavaScript!"

// 12. String Formatting (using .toLocaleString())
// You can format strings for different locales using `.toLocaleString()`.

let number = 123456.789;
let formattedNumber = number.toLocaleString('en-US'); // Returns "123,456.789"

// 13. Unicode and Encoding
// JavaScript strings are UTF-16 encoded, meaning characters are represented as 16-bit code units.

let unicodeString = '\u00A9'; // Returns the copyright symbol (©)

// 14. String Iteration (For...of loop)
// You can iterate through each character of a string using a `for...of` loop.

for (let char of str1) {
    console.log(char);
}
// Outputs each character in str1: 'H', 'e', 'l', 'l', 'o', ...

// 15. String.includes() - Case Insensitive Search
// Check if a string contains a substring (case-sensitive by default).

let caseInsensitiveCheck = str1.toLowerCase().includes('hello'); // Returns true


// Methods for creating a string 

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;


const str = new String("hello world");


/* 

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
See Also:
String Search Methods
String Templates
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/

/* 
Character access
Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/

console.log(str.charAt(1)) // e
console.log(str[0]) // h


// String operations 

// Substring - it gives a small part of original string it takes two perameter starting and ending

const substr = str.substring(0, 4);

console.log(substr) // "hell"

//or we can give only one perameter starting index then it will take sub part between starting index and length - 1 

console.log(str.substring(5))//  world

// uppercase 

console.log(str.toUpperCase());

// lowercase

console.log(str.toLowerCase());


// how to check two string are equal or not


function checkEqual(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(checkEqual("hello", "Hello"));


// how to reverse a string


// as we know that strings are immutable in js so we cant reverse the original string but we can make new 
// reverse string throgh the array 

const reverseString = str.split("").reverse().join("");

console.log(reverseString) //dlrow olleh

//add two string 


// using + 

const combineString = string1 + string2;

console.log(combineString);


// using concat
{
    const s = str.concat(" Good Morning");
    console.log(s)
}


// trim - removes the white space from beginning and ending

let containSpaces = "    good afternoon      ";

containSpaces = containSpaces.trim();

console.log(containSpaces); // good afternoon 


// find index of char

// indexof 

let firstindex = containSpaces.indexOf('n');

console.log(firstindex)

let lastindex = containSpaces.lastIndexOf('n');

console.log(lastindex)


{
    let text = "HELLO WORLD";
    let char = text.charCodeAt(0);
}
// pad()

{
    let text = "5";
    let padded = text.padStart(10, "x");
    console.log(padded);
}


{
    let text = "Hello world! ";
    let result = text.repeat(4);
    console.log(result)
}


{
    let text = "Please visit Microsoft and Microsoft !";
    let newText = text.replace("Microsoft", "W3Schools");
    console.log(newText)
}

// search in string 


{
    let str = "my name is deepsekk , i am an AI";

    const result = str.search("a");

    console.log(result);

}
// match
{
    let str = "my name is deepsekk , i am an AI";

    const result = str.matchAll("i");

    console.log(result);

}

//startwith


{
    let str = "my name is deepsekk , i am an AI";

    const result = str.startsWith("my");

    console.log(result);
}

{
    let str = "my name is deepsekk , i am an AI";

    const result = str.endsWith("an");

    console.log(result);
}

//slice 

{
    //         slice(start, end)
    //         substring(start, end)
    //         substr(start, length)

    let text = "Apple, Banana, Kiwi";
    let part = text.slice(7, 13);
    console.log(text.substring(0, 5));
    console.log(text.substr(1, 10));

}

// String Templates 

// Back-Tics Syntax
// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

// Example

{
    let text = `Hello World!`;
}

// Quotes Inside Strings
// Template Strings allow both single and double quotes inside a string:

// Example

{
    let text = `He's often called "Johnny"`;
}

// HTML Templates
// Example

{
    // HTML Templates
    // Example

    let header = "Template Strings";
    let tags = ["template strings", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;
    for (const x of tags) {
        html += `<li>${x}</li>`;
    }
    html += `</ul>`;

    // document.querySelector("body").innerHTML = html;


}