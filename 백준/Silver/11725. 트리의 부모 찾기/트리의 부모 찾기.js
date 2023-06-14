const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());

let graph = [...new Array(N + 1)].map(() => []);
let parents = new Array(N + 1).fill(-1);

input.forEach((v) => {
  let [start, end] = v.split(" ").map(Number);

  graph[start].push(end);
  graph[end].push(start);
});

const BFS = (root) => {
  let queue = [root];
  parents[root] = 0;

  while (queue.length > 0) {
    let parent = queue.shift();
    
    for (let child of graph[parent]) {
      if (parents[child] === -1) {
        parents[child] = parent;
        queue.push(child);
      }
    }
  }
};

BFS(1);

console.log(parents.slice(2).join("\n"));