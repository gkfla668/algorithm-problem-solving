function solution(s) {
    let midIdx = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s[midIdx - 1] + s[midIdx] : s[midIdx];
}