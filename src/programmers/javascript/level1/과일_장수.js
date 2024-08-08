function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => a - b); 

    // 배열의 끝에서부터 m개씩 묶어 처리합니다
    for (let i = score.length - m; i >= 0; i -= m) {
        answer += score[i] * m; // 묶음의 가장 작은 점수와 m을 곱하여 answer에 추가
    }

    return answer; 
}
