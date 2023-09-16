// Create an Inventory system in JavaScript to manage products using prototypes. Implement a Product constructor function that defines the properties of a product such as name, category, price, and stock. Develop an Inventory constructor function that initializes an empty inventory array. Extend the Inventory prototype with a method addProduct that adds a valid Product object to the inventory and logs a
// confirmation message. Additionally, implement a method deleteProduct that removes a product from the inventory by name and logs whether the deletion was successful.

class Product {
  constructor(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
}

class Inventory {
  constructor() {
    this.products = [];
  }
}

Inventory.prototype.addProduct = function (product) {
  this.products.push(product);
  console.log(`Added ${product.name} to the Inventory`);
};

Inventory.prototype.deleteProduct = function (prod) {
  this.products.map((product, index) => {
    if (product.name === prod) {
      this.products.splice(index, 1);
      console.log(`Deleted ${product.name} from the inventory`);
    }
  });
};

// test-case
const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 899, 10);
const product2 = new Product('Books', 'Books', 20, 50);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.deleteProduct('Laptop');
