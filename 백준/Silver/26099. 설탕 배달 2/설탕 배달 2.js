const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = BigInt(input); // 큰 숫자를 처리하기 위해 BigInt로 변환

// 그리디 알고리즘
const greedy = (n) => {
  let count = n / 5n; // 5kg 봉지를 최대한 사용

  // 남은 무게가 3kg 봉지로 정확히 채울 수 있으면 그만
  while (count >= 0n) {
    let remainder = n - count * 5n; // 남은 무게
    if (remainder % 3n === 0n) {
      return count + remainder / 3n; // 결과 출력
    }

    count--; // 5kg 봉지 개수를 하나 줄임
  }

  return -1; // 정확히 N킬로그램을 만들 수 없다면 -1을 출력
};

console.log(greedy(N).toString());
