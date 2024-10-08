let fs = require("fs");
let [N, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let stack = [];
let results = [];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i].trim().split(" ");

  switch (item[0]) {
    case "1":
      stack.push(item[1]);
      break;
    case "2":
      if (stack.length === 0) results.push("-1");
      else results.push(stack.pop());
      break;
    case "3":
      results.push(stack.length);
      break;
    case "4":
      if (stack.length === 0) results.push("1");
      else results.push("0");
      break;
    case "5":
      if (stack.length === 0) results.push("-1");
      else results.push(stack[stack.length - 1]);
      break;
    default:
      break;
  }
}

console.log(results.join("\n"));
