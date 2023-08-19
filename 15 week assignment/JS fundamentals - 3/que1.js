// 1. Create an object representing a car with properties like "make," "model," and "year." Write a function to display all the properties of the car.

const car = {
  make: 'Mercedes',
  model: 'Mercedes benz GLS',
  year: 2023,
};

// function to display properties
const displayProps = (car) => {
  console.log(`Properties of you car =>`);
  for (let props in car) {
    console.log(`${props} : ${car[props]}`);
  }
};

// test-case
displayProps(car);
