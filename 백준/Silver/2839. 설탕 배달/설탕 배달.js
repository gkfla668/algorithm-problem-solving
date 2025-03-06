const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

const greedy = (n) => {
  let count = Math.floor(N / 5); // 5kg 봉지를 최대한 사용
  let remainder = N % 5; // 남은 무게

  while (count >= 0) {
    // 5kg 봉지를 줄여가며 체크
    if (remainder % 3 === 0) {
      // 3kg 봉지로 채울 수 있으면 정답 반환
      return console.log(count + Math.floor(remainder / 3));
    }
    count--; // 5kg 봉지 개수를 줄이고 다시 시도
    remainder += 5;
  }
    
    console.log(-1)
};

greedy(N);