const fs = require("fs");
const trees = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let countMap = new Map();

// 갯수 세기
for (let i = 0; i < trees.length; i++) {
  const tree = trees[i].trim();
  countMap.set(tree, (countMap.get(tree) || 0) + 1);
}

let result = [];
countMap.forEach((count, tree) => {
  const percentage = ((count / trees.length) * 100).toFixed(4); // Round to 4 decimal places
  result.push(`${tree} ${percentage}`);
});

result.sort();
console.log(result.join("\n"));
