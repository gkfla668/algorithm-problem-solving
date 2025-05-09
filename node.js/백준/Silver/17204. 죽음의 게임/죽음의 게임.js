const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

let [N, K] = input.shift().split(" ").map(Number);
let arr = new Array(N); // 미로 배열
let visited = new Array(N).fill(false);

for (let i = 0; i < N; i++) {
  arr[i] = Number(input.shift());
}

let M = 0; // 보성이가 벌주를 마시기 위해 영기가 불러야 하는 가장 작은 양의 정수

const bfs = (start) => {
  let queue = [start];
  visited[start] = true;

  while (queue.length !== 0) {
    let s = queue.shift();
    let next = arr[s];

    if (visited[next]) break; // 어떤 방법으로도 보성이가 걸리지 않는 경우

    if (next === K) return console.log(M + 1);
    else {
      M++;
      queue.push(next);
      visited[next] = true;
    }
  }
  console.log(-1);
};

bfs(0);
