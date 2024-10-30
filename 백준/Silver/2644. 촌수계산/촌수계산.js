let fs = require("fs");
const path = require("path"); // path 모듈 추가
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift().split("\n").map(Number);
let [A, B] = input.shift().split(" ").map(Number);
let M = input.shift().split("\n").map(Number);

let arr = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  let [parent, child] = input.shift().split(" ").map(Number);

  arr[parent].push(child);
  arr[child].push(parent);
}

// BFS
let visited = Array.from({ length: N + 1 }, () => false);
let queue = [[A, 0]];
visited[A] = true;

while (queue.length > 0) {
  const [currentPerson, count] = queue.shift();

  // 목표 인물 B에 도달하면 촌수 출력
  if (currentPerson === B) {
    return console.log(count);
  }

  for (let i = 0; i < arr[currentPerson].length; i++) {
    if (!visited[arr[currentPerson][i]]) {
      visited[arr[currentPerson][i]] = true;
      queue.push([arr[currentPerson][i], count + 1]);
    }
  }
}

// 두 사람의 친척 관계가 전혀 없을 경우
console.log(-1);
