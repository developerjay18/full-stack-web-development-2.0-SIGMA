// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.

const itemsInUSD = {
  bat: 150,
  ball: 10,
  pads: 50,
  gloves: 40,
  helmet: 60,
  shoes: 80,
};

const convertUSDToINR = (obj, exchangeRate) => {
  const itemsinINR = {};

  Object.keys(obj).map((item) => {
    let priceInINR = itemsInUSD[item] * exchangeRate;
    itemsinINR[item] = priceInINR;
  });

  return itemsinINR;
};

// test-case
console.log(convertUSDToINR(itemsInUSD, 80));
