let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
let [A, B, C] = input.shift();

let cnt = new Array(101).fill(0);

input.forEach((value) => {
  let [start, end] = value;
  for (let i = start; i < end; i++) {
    cnt[i]++;
  }
});

cnt = cnt.filter((v) => v !== 0);

let answer = 0;
cnt.forEach((value) => {
  switch (value) {
    case 1:
      answer += A;
      break;
    case 2:
      answer += B * 2;
      break;
    case 3:
      answer += C * 3;
      break;
  }
});

console.log(answer);
