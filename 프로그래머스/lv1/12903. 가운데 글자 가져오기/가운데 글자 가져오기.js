function solution(s) {
    let length = s.length;
    return length % 2 === 0 ? s.slice((length / 2) - 1, (length / 2) + 1) : s.slice(Math.floor(length / 2), length / 2 + 1);
}