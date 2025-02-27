const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let [A, B] = input.shift().split(" ").map(Number);
let C = Number(input.shift());

let toppings = [];

for (let i = 0; i < N; i++) {
  toppings.push(Number(input.shift()));
}

toppings.sort((a, b) => b - a); // 내림차순 정렬 (1원당 열량이 최대가 되도록 토핑을 선택해야 한다.)

let totalCalory = C; // 기본 열량
let totalPrice = A; // 기본 가격

// 토핑을 전혀 선택하지 않았을 때
let maxCalPerWon = totalCalory / totalPrice;
fs;

for (let i = 0; i < N; i++) {
  totalCalory += toppings[i];
  totalPrice += B; // 토핑 1개 가격 추가

  let newCalPerWon = totalCalory / totalPrice;
  if (maxCalPerWon < newCalPerWon) maxCalPerWon = newCalPerWon;
  else break;
}

console.log(Math.floor(maxCalPerWon));
