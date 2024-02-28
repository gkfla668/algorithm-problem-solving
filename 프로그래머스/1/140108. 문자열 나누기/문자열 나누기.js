function solution(s) {
    let cnt = 0;
    let newCnt = 0;
    
    let answer = 0;
    
    let target = "";
    

    for(let ch of s){
        if(!target) target = ch;
    
        ch === target ? cnt++ : newCnt++;
            
        if(cnt === newCnt){
            cnt = 0;
            newCnt = 0;
            answer++;
            target = "";
            }
        }
    
     if (target) answer++;
    
    return answer;
}