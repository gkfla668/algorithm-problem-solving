let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input.shift());

let cards = [...new Array(N)].fill(0);
let answer = [];

let cnt = 1;
cards = cards.map((card) => card + cnt++);

while (cards.length > 1) {
  answer.push(cards.shift());
  let top = cards.shift();
  cards.push(top);
}

answer.push(cards[0]);
console.log(answer.join(" "));