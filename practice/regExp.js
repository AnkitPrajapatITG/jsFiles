
// "use strict";
/* 
Literal Characters:

A regex can match exact characters.

Example: /hello/ will match the string "hello" in "hello world".

Special Characters:

.: Matches any character except a newline.

^: Matches the start of a string.

$: Matches the end of a string.

*: Matches 0 or more occurrences of the previous character.

+: Matches 1 or more occurrences of the previous character.

?: Makes the previous character optional (0 or 1 occurrence).

[]: Matches any one character inside the brackets (e.g., [abc] matches "a", "b", or "c").

|: Acts like an OR operator (matches either the pattern on the left or right).

Example: /a.b/ matches "a", followed by any character (except newline), followed by "b" (like "axb", "a1b", etc.).

Character Classes:

\d: Matches any digit (equivalent to [0-9]).

\w: Matches any word character (letters, digits, or underscore).

\s: Matches any whitespace character (space, tab, newline).

Example: /\d/ matches any digit like "1", "7", or "9".

Quantifiers:

{n}: Matches exactly n occurrences of the previous character.

{n,}: Matches n or more occurrences of the previous character.

{n,m}: Matches between n and m occurrences of the previous character.

Example: /a{3}/ matches "aaa" but not "aa" or "aaaa".

Escape Characters:

To match special characters like . or *, you need to escape them using a backslash (\).

Example: /\./ matches a literal dot (".").
*/
ar = "an";
console.log(ar)
function helper(reg,str){
    return reg.test(str);
}
let x = 15 * 5;
console.log(x,"debugger");

// console.log(helper(reg,"hello abc"));

reg = /.a/  // any number after a except new line

console.log(helper(reg,"abbbca"))

reg = /^love|much$/  //^ matches start $ matches end 

console.log(helper(reg,"love india so "))

reg = /z+/; //+: Matches 0 or more occurrences of the previous character.

console.log(helper(reg,"run"))

reg = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z0-9!@#$%^&*]{8,})/; //+: Matches 1 or more occurrences of the previous character.

console.log(helper(reg,"*A8az%A8az%"))
  
reg = /\w(@gmail\.com)$/;

console.log(helper(reg,"ankit@gmailcom"));

// let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

reg = /^[a-z]{8,}\d$/;

console.log(helper(reg,"ankitkumar9"))
 reg =  /(?=.*[a-z])|(?=.*[0-9])/

 console.log(helper(reg,"!@$%%"))

reg = /(?=.*[a-z])[A-Z]{1,}[0-9]+$/;

console.log(helper(reg,"Ra7"))

function validatePassword(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
  
  }
  
  // Test cases
  console.log(validatePassword("Password123"));  // "Password is valid!"
  console.log(validatePassword("password123"));  // "Password must be at least 8 characters long..."
  console.log(validatePassword("PASSWORD123"));  // "Password must be at least 8 characters long..."
  console.log(validatePassword("Pass1!"));       // "Password must be at least 8 characters long..."
  console.log(validatePassword("P@ssw0rd123"))  //[a-zA-Z0-9._%+-]+@gmail\.com$/; ;  // "Password is valid!"
  

  function validateGmail(email) {
    const regex = /^/ // for . we have use \
    
    if (regex.test(email)) {
      return "Valid Gmail address!";
    } else {
      return "Invalid Gmail address!";
    }
  }
  
  // Test cases
  console.log(validateGmail("example@gmail.com"));  // Valid Gmail address!
  console.log(validateGmail("example123@gmail.com"));  // Valid Gmail address!
  console.log(validateGmail("example_abc@gmail.com"));  // Valid Gmail address!
  console.log(validateGmail("example@google.com"));  // Invalid Gmail address!
  console.log(validateGmail("examplegmail.com"));  // Invalid Gmail address!

  v = "";

  /* 
    Validate a Phone Number (Indian Format)
    Write a regular expression to validate an Indian phone number. It should:

    Begin with +91 or 91 (optional + sign).

    Be followed by a 10-digit number.

    The first digit after the country code must be between 7-9.

    Examples of valid numbers:

    +919876543210
  */


let mobileNUmberReg = /\+\.?91[7-9]([0-9]{9})/;

function checkIndiaNumber(num){
    if(mobileNUmberReg.test(num)){
        console.log("valid mobile number");
    }
    else{
        console.log("not valid mobile number");
        
    }
}

checkIndiaNumber("+919103401549");
checkIndiaNumber("918103401549");
checkIndiaNumber("+91810340159");
checkIndiaNumber("+919103401549");
checkIndiaNumber("+915103401549");


/* 
Task 9: Remove Extra Spaces from Text
Write a regular expression that removes all leading and trailing spaces from a string and condenses multiple spaces between words to a single space.

Example: Input: " Hello World " Output: "Hello World"
*/

let rg = new RegExp(/^\s+/g);
let text = "            hellow world   "
console.log(text.replaceAll(rg,""));


/* 
7. Extract Hash Tags from Text
Write a regex to extract hashtags from a string. For example, from the input "This is a #test of the #regexp functionality"
, you should extract #test and #regexp.
*/

{ let text = "This is a #test of the #regexp #8 functionality";
  let reg = /(#[a-z]+)/g
  let res = text.matchAll(reg);
  for (let tag of res) {
    console.log(tag); // tag[0] contains the full match (the hashtag)
  }
}


/* 
8. Extract Domain Name from URL
Write a regular expression to extract the domain name from a URL.
 For example, extract "example.com" from https://www.example.com/path.
*/

{

  //Non-capturing group (?:...): Used to match the protocol part (http:// or https://) but not include it in the result.
  let reg = /(https?:\/\/www\.)\w+/g ///(?:https?:\/\/)?(www\.\w+\.\w+)/g; 
  let text = "https://www.example.com/path";
  
  let res = [...text.matchAll(reg)];  // Using matchAll to get all matches, including capturing groups
  
  // Extract the domain part from the match
  let domain = res.map(match =>  console.log(match));
  
  console.log(domain);  // ["www.example.com"]
  
}


/* 
15. Extract All Numbers from a String
Write a regular expression to extract all numbers from a string.
 For example, from the string "I have 2 apples and 3 bananas.", you should extract the numbers 2 and 3.
*/

{
  let reg = /\w*[0-9]/g
  let text = "I have 2 apples and 3 bananas.";
  let res = [...text.matchAll(reg)];
  res.map((res) => console.log(res))
  // console.log(res)
}

/* 
2. Extract Dates from a String
Write a regex that can match dates in the format DD/MM/YYYY or DD-MM-YYYY.
 For example, match "12/05/2023" or "01-01-2022".
*/


{
  let reg = /^(0[1-9]|[12][0-9]|3[01])([\/\-]?)(0[1-9]|1[0-2])([\/\-]?)(\d{4}|\d{2})$/;


console.log("Date validation: ", helper(reg, "12/12/2009"));  // true
console.log("Date validation: ", helper(reg, "12-12-09"));    // true
console.log("Date validation: ", helper(reg, "12/12/2009"));  // true
console.log("Date validation: ", helper(reg, "32/13/2020"));  // false
console.log("Date validation: ", helper(reg, "12/13/2000"));  // false

}

{
  //check age should be greater then 18;

  let reg = /(1[8-9]|[2-9][0-9])/;

  console.log("age validation: ",helper(reg,"20"));
  console.log("age validation: ",helper(reg,"33"));
  console.log("age validation: ",helper(reg,"0"));
  console.log("age validation: ",helper(reg,"10"));
  console.log("age validation: ",helper(reg,"17"));


}


{
  /* 
  3. Validate a Phone Number
  Write a regular expression to validate a phone number that can be in the format:

  (123) 456-7890

  123-456-7890

  123.456.7890

  +1 (123) 456-7890
  */
}