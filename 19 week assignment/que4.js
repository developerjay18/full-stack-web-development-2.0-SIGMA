// Develop a set of classes in JavaScript for calculating the area and perimeter of various shapes. Begin with a base class Shape that provides default methods for area and perimeter calculation and includes subclasses like Circle, Rectangle, and Triangle. Each subclass should inherit from Shape and override the area and perimeter calculation methods to provide accurate results for their respective shapes

class Shape {
  constructor() {}

  calculateArea() {
    console.log(
      `Area calculation is not possible without proper shape defination`
    );
  }

  calculatePerimeter() {
    console.log(
      `Perimeter calculation is not possible without proper shape defination`
    );
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.width * this.length;
  }

  calculatePerimeter() {
    return 2 * (this.length + this.width);
  }
}

class Triangle extends Shape {
  constructor(base, height, side1, side2, side3) {
    super();
    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    return (this.height * this.base) / 2;
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// test-case
const circle = new Circle(5);
console.log(
  `Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`
);
console.log();

const rectangle = new Rectangle(4, 6);
console.log(
  `Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`
);
console.log();

const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(
  `Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`
);
