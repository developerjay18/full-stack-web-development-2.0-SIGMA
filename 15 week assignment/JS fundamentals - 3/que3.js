// 3.  Write a program that takes an object as input and returns the number of properties it has.

const cricketer = {
  name: 'virat kohli',
  jerseyNo: 18,
  centuries: 76,
  nationality: 'indian',
  spouse: 'anushka sharma',
  titleName: 'king kohli',
};

// func to count props in an obj
const countProps = (obj) => {
  return `There are total ${Object.keys(obj).length} properties`;
};

// test-case
let result = countProps(cricketer);
console.log(result);
