function solution(array) {
    let maxNum = Math.max(...array);

    return [maxNum, array.findIndex((it) => it === maxNum)];
}