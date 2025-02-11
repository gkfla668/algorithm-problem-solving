const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, L] = input.shift().split(" ").map(Number);
const fruits = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); // 오름차순 정렬

for (let i = 0; i < N; i++) {
  // 자신의 길이보다 작거나 같은 높이에 있는 과일을 먹을 수 있다.
  if (fruits[i] <= L) {
    L += 1; // 과일 하나를 먹으면 길이가 1만큼 늘어난다.
  } else break;
}

console.log(L);
