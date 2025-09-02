const d = new Date();
// JavaScript Date - Complete Notes

// 1. **What is a Date in JavaScript?**
// The `Date` object in JavaScript is used to represent dates and times. It provides methods for 
// handling dates, times, and performing operations such as getting and setting date components, 
// calculating time differences, and formatting date values.

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 2. **Creating a Date Object**
 * There are several ways to create a `Date` object:
 * - Using the `Date()` constructor with or without arguments.
 * - Using the `Date.parse()` method to parse a date string.
 */

// **Using the Date() constructor without arguments** - It creates a Date object representing the current date and time.
const currentDate = new Date();
console.log(currentDate);  // Output: Current date and time (e.g., "2025-03-27T12:34:56.789Z")

// **Using the Date() constructor with a date string** - You can pass a date string in ISO 8601 format.
const dateFromString = new Date("2025-03-25T12:00:00Z");
console.log(dateFromString);  // Output: "2025-03-25T12:00:00.000Z"

// **Using the Date() constructor with individual components (year, month, day, hour, minute, second, millisecond)**
const specificDate = new Date(2025, 2, 25, 12, 0, 0);  // Month is zero-indexed (2 = March)
console.log(specificDate);  // Output: "2025-03-25T12:00:00.000Z"

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 3. **Getting the Current Date and Time**
 * You can use various methods of the `Date` object to retrieve different parts of the current date and time.
 */

// Get the full year (e.g., 2025)
console.log(currentDate.getFullYear());  // Output: 2025

// Get the month (0-11), where 0 represents January, 1 represents February, etc.
console.log(currentDate.getMonth());  // Output: 2 (March)

// Get the day of the month (1-31)
console.log(currentDate.getDate());  // Output: 27

// Get the day of the week (0-6), where 0 represents Sunday, 1 represents Monday, etc.
console.log(currentDate.getDay());  // Output: 4 (Thursday)

// Get the hour (0-23)
console.log(currentDate.getHours());  // Output: 12

// Get the minutes (0-59)
console.log(currentDate.getMinutes());  // Output: 34

// Get the seconds (0-59)
console.log(currentDate.getSeconds());  // Output: 56

// Get the milliseconds (0-999)
console.log(currentDate.getMilliseconds());  // Output: 789

// Get the timezone offset in minutes (e.g., for UTC offset)
console.log(currentDate.getTimezoneOffset());  // Output: -240 (in minutes)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 4. **Setting Date and Time**
 * You can modify the date and time of a `Date` object using the `set` methods.
 */

// Set the full year (e.g., set to 2020)
currentDate.setFullYear(2020);
console.log(currentDate);  // Output: "2020-03-27T12:34:56.789Z"

// Set the month (0-11), where 0 represents January, 1 represents February, etc.
currentDate.setMonth(5);  // June (6)
console.log(currentDate);  // Output: "2020-06-27T12:34:56.789Z"

// Set the day of the month (1-31)
currentDate.setDate(15);
console.log(currentDate);  // Output: "2020-06-15T12:34:56.789Z"

// Set the hours (0-23)
currentDate.setHours(10);
console.log(currentDate);  // Output: "2020-06-15T10:34:56.789Z"

// Set the minutes (0-59)
currentDate.setMinutes(30);
console.log(currentDate);  // Output: "2020-06-15T10:30:56.789Z"

// Set the seconds (0-59)
currentDate.setSeconds(45);
console.log(currentDate);  // Output: "2020-06-15T10:30:45.789Z"

// Set the milliseconds (0-999)
currentDate.setMilliseconds(500);
console.log(currentDate);  // Output: "2020-06-15T10:30:45.500Z"

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 5. **Date Comparison**
 * You can compare `Date` objects by converting them to their primitive form (timestamps) and comparing those values.
 */

// Example of comparing two dates
const date1 = new Date("2025-03-25T12:00:00Z");
const date2 = new Date("2025-03-25T13:00:00Z");

console.log(date1 < date2);  // Output: true (date1 is earlier than date2)
console.log(date1 > date2);  // Output: false (date1 is not later than date2)
console.log(date1.getTime() === date2.getTime());  // Output: false (timestamps are different)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 6. **Formatting Dates**
 * JavaScript does not have a built-in method for date formatting, but you can use methods like `toISOString()`, `toLocaleDateString()`, and `toLocaleString()` to format dates.
 */

// **ISO String Format** - Outputs date in ISO 8601 format (e.g., "2025-03-25T12:00:00.000Z")
console.log(currentDate.toISOString());  // Output: "2020-06-15T10:30:45.500Z"

// **Local Date Format** - Outputs date in the local format
console.log(currentDate.toLocaleDateString());  // Output: depends on local format (e.g., "6/15/2020" in US)

// **Local Date and Time Format** - Outputs date and time in local format
console.log(currentDate.toLocaleString());  // Output: depends on local format (e.g., "6/15/2020, 10:30:45 AM" in US)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 7. **Static Methods for Date Parsing**
 * JavaScript provides some static methods for parsing date strings and returning a corresponding `Date` object.
 */

// **Date.parse()** - Converts a date string into the number of milliseconds since January 1, 1970, UTC.
const timestamp = Date.parse("2025-03-25T12:00:00Z");
console.log(timestamp);  // Output: Timestamp (e.g., 1679745600000)

// **Date.UTC()** - Returns the number of milliseconds between a specified date and January 1, 1970, UTC.
const utcTimestamp = Date.UTC(2025, 2, 25, 12, 0, 0);
console.log(utcTimestamp);  // Output: Timestamp (e.g., 1679745600000)

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 8. **Date Arithmetic**
 * You can perform arithmetic operations on dates using milliseconds, and then create new `Date` objects.
 */

// Adding days to a date
const newDate = new Date();
newDate.setDate(newDate.getDate() + 5);  // Add 5 days to the current date
console.log(newDate);  // Output: Current date + 5 days

// Subtracting days from a date
const earlierDate = new Date();
earlierDate.setDate(earlierDate.getDate() - 10);  // Subtract 10 days from the current date
console.log(earlierDate);  // Output: Current date - 10 days

///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 9. **Leap Years**
 * A leap year occurs every 4 years, with the exception of years that are divisible by 100 but not divisible by 400.
 * You can check if a year is a leap year by using a custom function.
 */

// Example of checking for a leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2020));  // Output: true (2020 is a leap year)
console.log(isLeapYear(2021));  // Output: false (2021 is not a leap year)



// console.log(d);2

const d1 = new Date("2025-03-27");
const d2 = new Date();
const d3 = new Date(25, 3, 27, 11, 3, 14);
const d4 = new Date("12 march 2020 12:12:22");
const d5 = new Date("03/12/2003 20:02:10")
console.log(d5.toISOString())
console.log(d4.toDateString());

// console.log(d3)
// console.log(d2);

// console.log(d1.getDate());
// console.log(d1.getFullYear());
// console.log(d1.getHours())  
// console.log(d1.getDay())
// console.log(d2.getDay());
// console.log(d2.getMonth());

//date as a Json data 

console.log(d2.toString());
console.log(d2.toDateString());



{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()];

    console.log(month);
}

{
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = days[d.getDay()];
    console.log(day);
}

