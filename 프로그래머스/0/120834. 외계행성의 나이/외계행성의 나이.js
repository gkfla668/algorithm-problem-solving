function solution(age) {
    var answer = '';
    
    [...(age.toString())].forEach((num) => answer += String.fromCharCode(Number(num) + 97));

    return answer;
}