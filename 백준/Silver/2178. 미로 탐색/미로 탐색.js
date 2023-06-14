const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const size = input.shift().split(" ");
const N = size[0];
const M = size[1];

const miro = [...new Array(N)].map(() => []);
for (let i = 0; i < N; i++) {
  miro[i] = input.shift().trim().split("").map(Number);
}

const visited = [];
for (let i = 0; i < N; i++) {
  visited.push(new Array(M).fill(false));
}

let cnt = 0;

const BFS = (x, y) => {
  let queue = [[x, y]];
  visited[x][y] = true;
  miro[x][y] = 1;

  while (queue.length !== 0) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (rangeCheck(nx, ny) && !visited[nx][ny] && miro[nx][ny] === 1) {
        visited[nx][ny] = true;
        miro[nx][ny] = miro[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

const rangeCheck = (x, y) => {
  return x >= 0 && x < N && y >= 0 && y < M;
};

BFS(0, 0);
console.log(miro[N - 1][M - 1]);
