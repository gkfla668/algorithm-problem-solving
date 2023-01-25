function solution(k, m, score) {
    var answer = 0;
    score.sort();
    
    for(let i = score.length % m; i < score.length; i += m){
        answer += score[i] * m;
    }

    return answer;
}