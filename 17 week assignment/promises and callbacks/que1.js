// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.

// main-function
const doubleByCallback = (arr, callback) => {
  let value = callback(arr);
  return value;
};

// callback function
const double = (arr) => {
  let newArr = [];
  arr.map((elem) => {
    newArr.push(elem * 2);
  });

  return newArr;
};

// test-case
console.log(doubleByCallback([1, 2, 3, 4, 5], double));
