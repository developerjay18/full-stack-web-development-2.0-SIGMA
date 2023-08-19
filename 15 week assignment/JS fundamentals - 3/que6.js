// Create a function that takes a string as input and returns the string reversed using string manipulation techniques.

const reverseString = (str) => {
  let reversedStr = ' ';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  str = reversedStr;
  console.log(str);
};

// test-case
reverseString('rahul');
reverseString('aayush');
