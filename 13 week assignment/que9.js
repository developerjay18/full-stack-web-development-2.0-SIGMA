// You are given an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print “Found the First String” and its value.

const arr = [1, 2, 999, 56, 'Mithun', 1234, 'PW'];

for (let i = 0; i <= arr.length - 1; i++) {
  if (typeof arr[i] === 'string') {
    console.log(`Found the first thing ${arr[i]}`);
    break;
  }
}
