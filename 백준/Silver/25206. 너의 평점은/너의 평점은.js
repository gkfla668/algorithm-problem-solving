let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let subjectScore = {
  "A+": 4.5,
  A0: 4,
  "B+": 3.5,
  B0: 3,
  "C+": 2.5,
  C0: 2,
  "D+": 1.5,
  D0: 1,
  F: 0,
};

let sumBySubject = 0;
let sumByScore = 0;

while (input.length !== 0) {
  let [A, B, C] = input.shift().split(" ");

  if (C === "P") continue;

  sumBySubject += B * subjectScore[C];
  sumByScore += Number(B);
}

console.log((sumBySubject / sumByScore).toFixed(6));
