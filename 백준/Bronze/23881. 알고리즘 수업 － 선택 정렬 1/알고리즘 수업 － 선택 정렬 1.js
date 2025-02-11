const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let count = 0;
let result = -1;

for (let i = N - 1; i >= 1; i--) {
  let maxIdx = i;

  // 마지막 위치부터 첫 번째까지 배열에서 가장 큰 수의 인덱스 찾기
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[maxIdx]) {
      maxIdx = j;
    }
  }

  // 현재 i와 maxIdx가 다르면 교환
  if (i !== maxIdx) {
    [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]]; // 교환
    count++;

    if (count === K) {
      result = [arr[i], arr[maxIdx]].sort((a, b) => a - b).join(" ");
      break;
    }
  }
}

console.log(result);
