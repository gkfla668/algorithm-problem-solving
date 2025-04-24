const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

let [N, M] = input.shift().split(" ").map(Number);
let arr = Array.from(N); // 미로 배열

while (input.length > 0) {
  arr.push(input.shift().split("").map(Number));
}

// 최소의 칸 수를 구해야 하므로 BFS

let ix = [1, 0, -1, 0];
let iy = [0, 1, 0, -1];
let visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => false)
);

const bfs = (x, y) => {
  let queue = [[x, y]];
  visited[x][y] = true; // 방문 처리

  while (queue.length !== 0) {
    let [dx, dy] = queue.shift();

    // 상하좌우 탐색
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [dx + ix[i], dy + iy[i]];

      // 좌표가 유효범위인지
      if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
        // 이동할 수 있는 칸이며 아직 방문하지 않았을 경우
        if (arr[nx][ny] === 1 && !visited[nx][ny]) {
          arr[nx][ny] = arr[dx][dy] + 1; // 칸 수 누적
          visited[nx][ny] = true; // 방문 처리
          queue.push([nx, ny]);
        }
      }
    }
  }
};

bfs(0, 0);
console.log(arr[N - 1][M - 1]);
