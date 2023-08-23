// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 2 seconds before reversing the string. The reversed string should then be printed as output.

const reverseString = (input) => {
  return setTimeout(() => {
    let reversed = input.split('').reverse().join('');
    return console.log(reversed);
  }, 2000); // return string after 2S
};

// test-case
reverseString('rahul');
