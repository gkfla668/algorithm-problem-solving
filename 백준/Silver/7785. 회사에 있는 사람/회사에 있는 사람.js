let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let map = new Map();

input.forEach((line) => {
  let [name, record] = line.trim().split(" ");

  record === "enter" ? map.set(name, true) : map.set(name, false);
});

let currentInRoom = [];

map.forEach((value, key) => {
  if (value) currentInRoom.push(key);
});

console.log(currentInRoom.sort().reverse().join("\n"));
