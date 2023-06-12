let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let T = input.shift();

for (let i = 0; i < T; i++) {
  let [N, M] = input.shift().split(" ");

  console.log(Math.round(factorial(M) / factorial(M - N) / factorial(N)));
}

function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}
