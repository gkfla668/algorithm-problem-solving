let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let [N, K] = input.shift().split(" ").map(Number);
let arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr[K - 1]);
