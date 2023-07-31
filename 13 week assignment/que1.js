// Suppose you are building a payment checkout page and must display the final price after the discount. Create a simple discount calculator that takes two values from the variables - the total cost and the discount percentage - and prints the discounted value

function finalPriceCalculator(totalValue, discountPercentage) {
  let discount = (discountPercentage / 100) * totalValue;
  let finalPrice = totalValue - discount;
  console.log(
    `Original price is : ${totalValue} and discount is ${discountPercentage}%`
  );
  return `The final price after discount is : ${finalPrice}`;
}

let example = finalPriceCalculator(2000, 20);
console.log(example);
