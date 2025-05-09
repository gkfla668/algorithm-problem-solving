const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

let [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));

let max = 0; // 안전 영역의 최댓값

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

// 안전 영역 갯수를 세는 함수
const bfs = (mapWithNewWall) => {
  let queue = [];

  // 바이러스가 있는 곳 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (mapWithNewWall[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length > 0) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [curX + dx[i], curY + dy[i]];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        mapWithNewWall[nx][ny] === 0
      ) {
        mapWithNewWall[nx][ny] = 2; // 바이러스 퍼짐
        queue.push([nx, ny]);
      }
    }
  }

  // 안전 영역 0 의 갯수

  let cntOfSafeZone = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (mapWithNewWall[i][j] === 0) cntOfSafeZone++;
    }
  }

  return cntOfSafeZone;
};

// 벽을 세우는 DFS
const dfs = (wall) => {
  // 벽 3개를 다 세운 경우
  if (wall === 3) {
    const mapWithNewWall = board.map((row) => [...row]);
    let cntOfSafeZone = bfs(mapWithNewWall);
    max = Math.max(cntOfSafeZone, max);

    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) {
        // 벽이 없을 경우
        board[i][j] = 1; // 벽을 세운다.
        dfs(wall + 1);
        board[i][j] = 0; // 재귀를 완료한 후에 벽을 다시 없앤다.
      }
    }
  }
};

dfs(0);
console.log(max);
