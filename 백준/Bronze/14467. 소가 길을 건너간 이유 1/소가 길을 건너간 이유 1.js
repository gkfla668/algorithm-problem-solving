let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let N = input.shift();

let arr = new Array(N + 1);
let answer = 0;

for (let i = 0; i < N; i++) {
  let [num, loc] = input.shift().split(" ");

  if (arr[num] && arr[num] !== loc) {
    answer++;
  }

  arr[num] = loc;
}

console.log(answer);
