// que - 5
// Let’s say you are working for an event management company. You have a list of guest names as an array of strings. Your task is to return a sentence that has all the guest names, separated by commas.

const guests = ['Anurag', 'Mithun', 'Alka', 'Prabir', 'Shivam', 'Farman'];

// function
const joinArray = (arr) => {
  return arr.join(', ');
};

// test-case
let result = joinArray(guests);
console.log(result);
