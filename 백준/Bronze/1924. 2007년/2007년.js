let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [month, day] = input;

console.log(
  new Date(2007, month - 1, day).toString().split(" ")[0].toUpperCase()
);
