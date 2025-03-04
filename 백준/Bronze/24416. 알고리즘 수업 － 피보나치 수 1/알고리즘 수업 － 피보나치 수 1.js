const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

let count1 = 0;
let count2 = 0;

const fib = (n) => {
  if ((n == 1) | (n == 2)) {
      count1++;
      
    return 1;
  } else return fib(n - 1) + fib(n - 2);
};

const fibonacci = (n) => {
  let f = Array(n).fill(0);

  f[0] = 1;
  f[1] = 1;

  for (let i = 2; i < n; i++) {
    count2++;
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n - 1];
};

fib(N);
fibonacci(N);

console.log(count1, count2);
