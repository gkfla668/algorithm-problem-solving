const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, R] = input.shift().split(" ").map(Number);

let graph = [...new Array(N + 1)].map(() => []);
let depth = new Array(N + 1).fill(-1);

input.forEach((v) => {
  let [start, end] = v.split(" ").map(Number);

  graph[start].push(end);
  graph[end].push(start);
});

graph.map((sibling) => sibling.sort((a, b) => a - b));

const BFS = (root) => {
  let queue = [root];
  depth[root] = 0;

  while (queue.length > 0) {
    let parent = queue.shift();

    for (let child of graph[parent]) {
      if (depth[child] === -1) {
        depth[child] = depth[parent] + 1; // 부모에서 depth 하나 차이
        queue.push(child);
      }
    }
  }
};

BFS(R);

console.log(depth.slice(1).join("\n"));
