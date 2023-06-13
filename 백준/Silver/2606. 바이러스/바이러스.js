let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = Number(input[0]);
let pair = Number(input[1]);

let computers = [...new Array(N + 1)].map(() => []);
let visited = new Array(N + 1).fill(false);
let cnt = 0;

for (let i = 2; i < pair + 2; i++) {
  // 2부터 쌍
  let start = Number(input[i].split(" ")[0]);
  let end = Number(input[i].split(" ")[1]);

  computers[start].push(end);
  computers[end].push(start);
}

visited[1] = true; // 1번 컴퓨터가 바이러스에 걸렸으므로 1부터 시작. 1 방문처리.

const BFS = (start) => {
  let queue = [];

  queue.push(start);

  while (queue.length !== 0) {
    let node = queue.shift();

    for (let i = 0; i < computers[node].length; i++) {
      if (!visited[computers[node][i]]) {
        queue.push(computers[node][i]);
        visited[computers[node][i]] = true;
        cnt++;
      }
    }
  }
};

BFS(1);
console.log(cnt);