// Create a Temperature class in JavaScript that manages both Celsius and Fahrenheit temperatures with getters and setters for each unit, allowing for automatic conversion between the two scales. The class should have an initial state of 0°C and 32°F, and it should validate input values for temperature updates, ensuring they are numeric. When setting the temperature in either Celsius or Fahrenheit, the class should correctly update the corresponding value in the other scale. For example, setting the Celsius temperature to 25°C should automatically update the Fahrenheit temperature to 77°F. Your challenge is to implement the Temperature class following the provided code structure and requirements while ensuring that it handles conversions and input validation accurately.

class Temperature {
  constructor() {
    this.celsius = 0;
    this.fahrenheit = 32;
  }

  // set celsius and auto update fahrenheit
  set setCelsius(temp) {
    if (typeof temp === 'number') {
      this.celsius = temp;
      this.fahrenheit = this.celsius * (9 / 5) + 32;
    }
  }

  // set fahrenheit and auto update celsius
  set setFahrenheit(temp) {
    if (typeof temp === 'number') {
      this.fahrenheit = temp;
      this.celsius = (this.fahrenheit - 32) * (5 / 9);
    }
  }

  // get celsius
  get getCelsius() {
    return this.celsius;
  }

  // get fahrenheit
  get getFahrenheit() {
    return this.fahrenheit;
  }
}

// test-case
const temprature = new Temperature();

console.log(`Initial Celsius: ${temprature.getCelsius}°C`);
console.log(`Initial Fahrenheit: ${temprature.getFahrenheit}°F`);
console.log();

temprature.setCelsius = 25;
console.log(`Celsius: ${temprature.getCelsius}°C`);
console.log(`Fahrenheit: ${temprature.getFahrenheit}°F`);
console.log();

temprature.setFahrenheit = 68;
console.log(`Celsius: ${temprature.getCelsius}°C`);
console.log(`Fahrenheit: ${temprature.getFahrenheit}°F`);
