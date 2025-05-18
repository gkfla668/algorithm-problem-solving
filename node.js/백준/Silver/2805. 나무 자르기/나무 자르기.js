let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let arr = input.shift().split(" ").map(Number);

// 완전탐색 -> 시간초과
// let maxValue = Math.max(...arr);

// while (maxValue--) {
//   let sum = 0;

//   for (let i = 0; i < N; i++) {
//     sum += arr[i] - maxValue > 0 ? arr[i] - maxValue : 0;

//     if (sum >= M) {
//       return console.log(maxValue);
//     }
//   }
// }

// 이분탐색
// 시간복잡도가 N(M)에서 N(log2(M))으로 줄어든다.
let min = 0;
let max = Math.max(...arr);
let mid = 0;

while (min <= max) {
  mid = Math.floor((min + max) / 2);

  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i] - mid > 0 ? arr[i] - mid : 0;
  }

  if (sum >= M) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
