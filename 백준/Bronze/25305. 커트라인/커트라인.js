let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input.shift().split(" ").map(Number);

let arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(arr[K - 1]);
