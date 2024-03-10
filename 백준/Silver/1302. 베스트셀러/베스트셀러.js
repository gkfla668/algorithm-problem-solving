let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let map = new Map();

input.forEach((line) => {
  let name = line.trim();

  map.set(name, map.get(name) ? map.get(name) + 1 : 1);
});

let sortedArray = Array.from(map).sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  } else {
    return a[0].localeCompare(b[0]);
  }
});

console.log(sortedArray[0][0]);
