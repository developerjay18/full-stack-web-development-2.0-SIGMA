// 3. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

const doSum = (num1, num2) => {
  var sum;
  console.log(sum); // gives undefined
  sum = num1 + num2;
  return sum; // gives sum of both numbers
};

console.log(doSum(10, 8));
