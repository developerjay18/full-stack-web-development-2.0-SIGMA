// You are given with an array of numbers both positive and negative. Your task is to print only the positive numbers.

let arr = [1, 2, -3, 5, -9, -8, -7, 7];

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] > 0) {
    console.log(arr[i]);
  }
}
