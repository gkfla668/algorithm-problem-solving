const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [A, B] = input.shift().split(" ");

let min = Number(A.replaceAll("6", "5")) + Number(B.replaceAll("6", "5"));
let max = Number(A.replaceAll("5", "6")) + Number(B.replaceAll("5", "6"));

console.log(min, max);
