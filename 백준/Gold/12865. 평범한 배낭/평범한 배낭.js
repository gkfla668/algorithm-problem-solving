let fs = require("fs");
const path = require("path"); // path 모듈 추가

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input.shift().split(" ").map(Number);

let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const dp = Array(K + 1).fill(0);

for (const [weight, value] of arr) {
  // 같은 물건을 중복해서 넣는 걸 방지하기 위해 뒤에서부터 시작
  for (let w = K; w >= weight; w--) {
    dp[w] = Math.max(dp[w], dp[w - weight] + value); // 현재 물건을 배낭에 넣는 경우와 넣지 않는 경우 중 더 큰 가치를 선택
  }
}

console.log(dp[K]); // 배낭의 무게가 K일 때 얻는 가치의 최댓값