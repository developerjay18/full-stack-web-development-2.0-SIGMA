// 5. Greeting Promise.
// You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!*.
// For example, if the input to the function is "Mithun*, the promise should resolve with the string "Hello, Mithun!".

// promise function
const greetWithPromise = (name) => {
  return new Promise((resolve, reject) => {
    if (typeof name === 'string' && name.trim() !== '') {
      let greeting = `Hello ${name}!`;
      resolve(greeting);
    } else {
      reject('Please try again');
    }
  });
};

// test-case
let result = greetWithPromise('aayush');

result
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
