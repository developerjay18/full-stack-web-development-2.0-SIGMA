// 5. Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.

function zones() {
  console.log(demo); // this lines throws an error
  let demo = 'dead zone';
  console.log(demo); // this shows the value of the variable
}

zones();

// given screen-shot of ouput will be taken after commenting the error throwing codes.
