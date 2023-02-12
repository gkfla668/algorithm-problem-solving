const { timeEnd } = require("console");
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n, ...arr] = input;

let times = arr
  .map((it) => it.split(" ").map((num) => Number(num)))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]; // 끝나는 시간이 같으면 시작 시간도 오름차순으로 정렬
    // 예를 들어, (10, 10) 의 회의와 (9,10)회의가 있을 때, 둘의 종료 시간은 같지만, (9,10)를 먼저 선택하면, (10,10)의 회의를 선택할 기회가 주어진다. 하지만, (10, 10)의 회의가 먼저 선택되면, 종료시간이 10을 넘어갔기 때문에 9시작은 고려되지 않기 때문이다.

    return a[1] - b[1]; // 끝나는 시간 오름차순으로 정렬
  });

let cnt = 0;
let end = 0;
times.forEach((time) => {
  let start = time[0];
  if (start >= end) {
    end = time[1];
    cnt++;
  }
});

console.log(cnt);
