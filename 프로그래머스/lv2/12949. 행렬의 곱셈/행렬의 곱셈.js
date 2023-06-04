function solution(arr1, arr2) {
    return arr1.map((arr) => arr2[0].map((val, row) => arr.reduce((acc, cur, col) => acc + (cur * arr2[col][row]), 0)))
}