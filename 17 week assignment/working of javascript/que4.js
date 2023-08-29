// 4. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

function scope() {
  console.log(a); // gives error because of pre-declaration
  console.log(b); // gives error because of pre-declaration
  console.log(c); // gives error because of pre-declaration

  let a = 18;
  const b = 17;
  var c = 7;

  console.log(a);
  console.log(b);
  console.log(c);
}

scope();

// given screen-shot of ouput will be taken after commenting the error throwing codes.
