const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 상하좌우, 대각선
const dx = [-1, 1, 0, 0, 1, -1, 1, -1];
const dy = [0, 0, -1, 1, 1, -1, -1, 1];

const rangeCheck = (x, y, W, H) => {
  return x >= 0 && x < H && y >= 0 && y < W;
};

const BFS = (x, y, graph, visited) => {
  let queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length > 0) {
    let [curX, curY] = queue.shift();

    for (let i = 0; i < 8; i++) {
      let [nx, ny] = [curX + dx[i], curY + dy[i]];

      if (
        rangeCheck(nx, ny, graph[0].length, graph.length) &&
        !visited[nx][ny] &&
        graph[nx][ny] === 1
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
};

while (input.length > 1) { // 마지막 0 0을 제외하고
  let [W, H] = input.shift().split(" ").map(Number);

  let graph = new Array(H).map(() => []);

  for (let i = 0; i < H; i++) {
    graph[i] = input.shift().split(" ").map(Number);
  }

  let visited = Array.from(Array(H), () => Array(W).fill(false));

  let cnt = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (!visited[i][j] && graph[i][j] === 1) {
        BFS(i, j, graph, visited);
        cnt++;
      }
    }
  }

  console.log(cnt);
}
