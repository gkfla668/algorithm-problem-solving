let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [K, N] = input.shift().split(" ").map(Number);
let arr = [];
while (input.length > 0) arr.push(Number(input.shift()));

// 이분탐색
let min = 1; // 가장 작게 자를 수 있는 최소 길이
let max = Math.max(...arr);
let mid = 0;

let answer = 0;

while (min <= max) {
  mid = Math.floor((min + max) / 2);

  let count = 0;
  for (let i = 0; i < K; i++) {
    count += Math.floor(arr[i] / mid);
  }

  if (count < N) {
    max = mid - 1;
  } else {
    answer = mid;
    min = mid + 1; // 더 긴 랜선도 가능한지 확인하기 위해
  }
}

console.log(answer);
