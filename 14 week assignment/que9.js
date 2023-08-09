// que - 9
// As a web developer, you need to create a function that takes a username string as input and checks if it contains only unique characters. Use a Set to implement this efficiently.

// function
const uinqueCharCheck = (str) => {
  let unique = true;
  let charSet = new Set();
  for (let char of str) {
    if (charSet.has(char)) {
      unique = false;
      console.log(`The input strings contains duplicates.`);
      break;
    } else {
      charSet.add(char);
    }
  }

  if (unique === true) {
    console.log(`The input strings contains unique characters.`);
  }
};

// test-case
uinqueCharCheck('jay');
uinqueCharCheck('aayush');
