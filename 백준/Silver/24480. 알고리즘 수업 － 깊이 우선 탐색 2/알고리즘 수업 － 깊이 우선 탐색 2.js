let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [N, M, R] = input.shift().split(" ").map(Number);

let graph = [...Array(N + 1)].map(() => []);
let visitied = new Array(N).fill(0);
input
  .map((v) => v.split(" ").map(Number))
  .map(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
  });

graph.map((e) => e.sort((a, b) => b - a));

let cnt = 0;
const DFS = (start) => {
  visitied[start - 1] = ++cnt;

  for (let end of graph[start]) {
    if (visitied[end - 1] === 0) {
      DFS(end);
    }
  }
};

DFS(R);

console.log(visitied.join("\n"));
