const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, R] = input.shift().split(" ").map(Number);

let graph = [...new Array(N + 1)].map(() => []);
let visited = new Array(N).fill(0);

input.forEach((v) => {
  let [start, end] = v.split(" ").map(Number);

  graph[start].push(end);
  graph[end].push(start);
});

graph.map((e) => e.sort((a, b) => a - b));

let cnt = 1;

const BFS = (start) => {
  let queue = [];
  queue.push(start);
  visited[start - 1] = cnt;

  while (queue.length > 0) {
    let cur = queue.shift();
    for (let i = 0; i < graph[cur].length; i++) {
      let val = graph[cur][i];
      if (visited[val - 1] === 0) {
        queue.push(val);
        cnt++;
        visited[val - 1] = cnt;
      }
    }
  }
};

BFS(R);

console.log(visited.join("\n"));
