const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, ...arr] = input
  .trim()
  .split("\n")
  .map((line) => line.replace(/\r$/, ""));

const getValue = (char) => {
  return char.charCodeAt(0) - 64;
};

for (let i = 0; i < N; i++) {
  let temp = Array(28).fill(0);
  let isReal = true;

  for (let j = 0; j < arr[i].length; j++) {
    temp[getValue(arr[i][j])]++;

    // 세번째 등장
    if (temp[getValue(arr[i][j])] === 3) {
      temp[getValue(arr[i][j])] = 0;
      if (j < arr[i].length - 1 && arr[i][j] === arr[i][j + 1]) {
        isReal = true;
        j++;
      } else {
        isReal = false;
        console.log("FAKE");
        break;
      }
    }
  }

  if (isReal) console.log("OK");
}
