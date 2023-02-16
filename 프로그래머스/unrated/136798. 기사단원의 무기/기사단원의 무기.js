function solution(number, limit, power) {
    var answer = 0;
    let divisorCnt = 1;
    
    for(let i = 1; i <= number; i++){
        divisorCnt = 1;
        
        for(let j = 1; j <= i / 2; j++){
            if(i % j === 0)
                divisorCnt++;
        }
        
        answer += divisorCnt > limit ? power : divisorCnt;
    }
    
    return answer;
}