const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

let arr = input.shift().split(" ").map(Number);
arr.unshift(0);

for (let i = 1; i <= N; i++) {
  arr[i] += arr[i - 1];
}

for (let i = 0; i < M; i++) {
  let [s, e] = input[i].split(" ").map(Number);

  console.log(arr[e] - arr[s - 1]);
}
