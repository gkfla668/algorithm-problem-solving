let [start, end] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let visited = Array(100001).fill(false);

const BFS = () => {
  let queue = [[start, 0]]; // 시작 위치와 시간
  visited[start] = true;

  while (queue.length > 0) {
    let [cur, time] = queue.shift();
    if (cur === end) return time;

    for (next of [cur - 1, cur + 1, cur * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
};

console.log(BFS());
