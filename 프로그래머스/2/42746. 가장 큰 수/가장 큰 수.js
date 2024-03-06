function solution(numbers) {
    let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
    return answer.charAt(0) === '0' ? "0" : answer;
}