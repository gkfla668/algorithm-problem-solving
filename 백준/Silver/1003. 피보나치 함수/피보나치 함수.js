let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let T = input.shift();

let dp = new Array(40).fill(0);

dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= 40; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

for (let i = 0; i < T; i++) {
  let num = Number(input.shift());
  console.log(dp[num].join(" "));
}
