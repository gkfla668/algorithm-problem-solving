const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

let [N, arr] = [input.shift(), input.map(Number)];

let pushStart = 1;
let stack = [];
let answer = [];

for (let num of arr) {
  while (pushStart <= num) {
    stack.push(pushStart++);
    answer.push("+");
  }

  if (stack.pop() === num) {
    answer.push("-");
  } else {
    return console.log("NO");
  }
}

console.log(answer.join("\n"));

