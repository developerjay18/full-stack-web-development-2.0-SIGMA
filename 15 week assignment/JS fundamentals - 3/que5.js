// 5. Write a JavaScript program that calculates the area of a circle using the Math object's properties and methods.

const calcCircleArea = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};

// test-case
let result = calcCircleArea(10);
console.log(result);
