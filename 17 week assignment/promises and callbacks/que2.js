// 2. String Manipulation.
// Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The function should return a callback function "logString" that logs the sentence "The manipulated string is: " along with the manipulated string or the new string to the console.

// main function
const manipulateString = (str, callback) => {
  return callback(str.toUpperCase());
};

// callback function
const logString = (capitalizeStr) => {
  console.log(`The manipulated string is : ${capitalizeStr}`);
};

// test-case
manipulateString('aayush', logString);
