let fs = require("fs");
const path = require("path"); // path 모듈 추가
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [M, N, K] = input.shift().split(" ").map(Number);

let arr = Array.from(Array(M), () => Array(N).fill(0));

// 직사각형 내부 채우기
for (let i = 0; i < K; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      arr[y][x] = 1;
    }
  }
}

arr = arr.reverse();

// dfs
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

function DFS(y, x) {
  const stack = [[y, x]];
  arr[y][x] = -1; // 방문한 셀을 -1로 마킹

  let areaSize = 0;

  while (stack.length > 0) {
    const [cy, cx] = stack.pop();
    areaSize++;
    for (let i = 0; i < 4; i++) {
      const ny = cy + dy[i];
      const nx = cx + dx[i];

      if (ny >= 0 && ny < M && nx >= 0 && nx < N && arr[ny][nx] === 0) {
        arr[ny][nx] = -1; // 방문한 셀을 -1로 마킹
        stack.push([ny, nx]);
      }
    }
  }

  return areaSize;
}

let areaCount = 0;
let areas = [];
for (let y = 0; y < M; y++) {
  for (let x = 0; x < N; x++) {
    if (arr[y][x] === 0) {
      // 새로운 분리된 영역 발견
      areas.push(DFS(y, x));
      areaCount++;
    }
  }
}
console.log(areaCount + "\n" + areas.sort((a, b) => a - b).join(" "));
