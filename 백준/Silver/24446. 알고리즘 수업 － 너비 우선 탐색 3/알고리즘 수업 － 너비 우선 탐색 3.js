const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, R] = input.shift().split(" ").map(Number);

let graph = [...new Array(N + 1)].map(() => []);
let visited = new Array(N).fill(-1);

input.forEach((v) => {
  let [start, end] = v.split(" ").map(Number);

  graph[start].push(end);
  graph[end].push(start);
});

graph.map((e) => e.sort((a, b) => a - b));

const BFS = (start) => {
  let queue = [];
  queue.push(start);
  visited[start - 1] = 0;

  while (queue.length > 0) {
    let cur = queue.shift();
    for (let end of graph[cur]) {
      if (visited[end - 1] === -1) {
        visited[end - 1] = visited[cur - 1] + 1;
        queue.push(end);
      }
    }
  }
};

BFS(R);

console.log(visited.join("\n"));
