// 2. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

console.log(multiplyNumbers(9, 2));

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};
