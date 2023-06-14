const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input.shift());

const area = [...new Array(N)].map(() => []);

input.forEach((v, idx) => {
  let row = v.split(" ").map(Number);
  area[idx] = row;
});

let cnt = 0;
let cntList = [];

const rangeCheck = (row, col) => {
  return row >= 0 && row < N && col >= 0 && col < N;
};

const BFS = (row, col, height, visited) => {
  let queue = [[row, col]];
  visited[row][col] = true;

  while (queue.length !== 0) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (rangeCheck(nx, ny) && !visited[nx][ny] && area[nx][ny] > height) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
};

for (let height = 0; height <= 100; height++) {
  let visited = Array.from(Array(N), () => Array(N).fill(false));
  cnt = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && area[i][j] > height) {
        BFS(i, j, height, visited);
        cnt++;
      }
    }
  }
  cntList.push(cnt);
}

console.log(Math.max(...cntList));
