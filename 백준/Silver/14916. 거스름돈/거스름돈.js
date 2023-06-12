let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input.shift());

if (num === 1 || num === 3) console.log(-1);
else {
  let quo = parseInt(num / 5);
  let rem = parseInt(num % 5);

  if (rem % 2 !== 0) console.log(quo - 1 + parseInt((rem + 5) / 2));
  else console.log(quo + rem / 2);
}


