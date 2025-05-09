const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

let N = input.shift();
let inputArr = input.shift().split(" ").map(Number);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push([i, inputArr[i - 1]]);
}

let reversedArr = [...arr].reverse();

for (let i = 0; i < N; i++) {
  let curHeight = reversedArr[i][0];
  let curCount = reversedArr[i][1];

  if (i === 0 && curCount === 0) {
    continue;
  }

  let previousElements = reversedArr.slice(0, i);

  let largerCount = previousElements.filter(
    (item) => item[0] > curHeight
  ).length;

  if (largerCount === curCount) {
    continue;
  } else if (largerCount > curCount) {
    let moveLeft = largerCount - curCount; // 이동해야 할 거리

    let moveElement = reversedArr.splice(i, 1)[0];

    reversedArr.splice(i - moveLeft, 0, moveElement);
  }
}

console.log(reversedArr.map((item) => item[0]).join(" "));
