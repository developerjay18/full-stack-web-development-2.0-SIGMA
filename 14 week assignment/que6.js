// que - 6
// You are working for an e-commerce company, and you are given an object containing product-related informationg Your task is to print the product-related information details as shown in the image below.

// product details
const productDetails = {
  name: 'Apple 2020 MacBook Air Laptop',
  price: 82000,
  color: 'Grey',
  hardDisk: '256 GB',
};

// function
const printDetails = (product) => {
  console.log(`Below are the product details.`);
  for (let detail in product) {
    console.log(`${detail} : ${product[detail]}`);
  }
};

// test-case
printDetails(productDetails);
