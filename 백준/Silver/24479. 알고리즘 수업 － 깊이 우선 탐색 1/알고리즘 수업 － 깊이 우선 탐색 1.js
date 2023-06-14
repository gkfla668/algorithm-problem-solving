let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [N, M, R] = input.shift().split(" ").map(Number);

let graph = [...Array(N + 1)].map(() => []);
let visited = new Array(N).fill(0);

const arr = input.map((v) => v.split(" ").map(Number));

arr.map(([start, end]) => {
  graph[start].push(end);
  graph[end].push(start);
});

graph.map((e) => e.sort((a, b) => a - b));

let cnt = 0;
const DFS = (start) => {
  visited[start - 1] = ++cnt;

  for (let end of graph[start]) {
    if (visited[end - 1] === 0) {
      DFS(end);
    }
  }
};

DFS(R);

console.log(visited.join("\n"));
