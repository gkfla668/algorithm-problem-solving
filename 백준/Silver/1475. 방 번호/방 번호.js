let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input.shift());

let nums = new Array(10).fill(0);
let cnt = 0;

[...String(N)].forEach((num) => {
  if (num === "6" || num === "9") {
    cnt++;
    if (cnt % 2 !== 0) {
      nums[6]++;
    }
  } else nums[num]++;
});

console.log(Math.max.apply(null, nums));
