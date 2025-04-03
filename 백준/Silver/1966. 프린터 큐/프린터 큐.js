const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\r?\n/);

let N = input.shift();

// testcase
for (let i = 0; i < N; i++) {
  let [n, targetIndex] = input.shift().split(" ").map(Number);
  let arr = input.shift().split(" ").map(Number);

  // 인덱스랑 각 문서랑 매핑
  let mapped = arr.map((value, index) => ({ index, value }));
  let queue = [...mapped];

  let count = 0; // 몇번째로 출력되는지

  while (queue.length > 0) {
    let target = queue.shift();
    // 나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면
    if (queue.some((other) => other.value > target.value)) {
      queue.push(target); // 가장 뒤에 재배치
    } else {
      count++;
      if (target.index === targetIndex) break;
    }
  }
  console.log(count);
}
