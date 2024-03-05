function solution(i, j, k) {
    var answer = 0;
    for(let num = i; num <= j; num++){
        answer += num.toString().split('').filter((n) => n === k.toString()).length;
    }
    return answer;
}