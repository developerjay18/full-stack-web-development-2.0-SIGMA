// que - 2
// Imagine you work for an e-commerce company. Your task is to create a function that takes the prices of all the products in a customer's cart as input parameters. The function should then calculate and return the total sum of all the product prices. This will help the company easily calculate the total cost of the customer's shoping cart.

// function - calculates sum of cart items
const cartSum = (...cartPrices) => {
  let cartTotal = cartPrices.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
  }, 0);

  return console.log(`The total cart values is ${cartTotal}`);
};

// example
cartSum(125, 20, 30);
