const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

let N = Number(input[0]);

let num = 666;
let cnt = 0;

while (cnt < N) {
  if (num.toString().includes("666")) cnt++;
  num++;
}
console.log(num - 1);

