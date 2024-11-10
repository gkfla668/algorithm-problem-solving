const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

let arr = new Array(N + 1);

for (let i = 0; i < N; i++) {
  arr[i] = input.shift().split(" ").map(Number);
}

let dp = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] =
      arr[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1];
  }
}

for (let i = 0; i < M; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  console.log(
    dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1]) + dp[x1 - 1][y1 - 1]
  );
}
