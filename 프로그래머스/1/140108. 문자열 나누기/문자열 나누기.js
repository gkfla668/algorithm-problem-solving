function solution(s) { 
    let answer = 0;
    let target = "";
    let count1 = 0;
    let count2 = 0;
    
    for(let ch of s){
        if(!target) target = ch;
    
        ch === target ? count1++ : count2++;
         
        // 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리
        if(count1 === count2){
            count1 = 0;
            count2 = 0;
            answer++;
            target = "";
        }
    }
    
    // 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리
    if (target) answer++;
    
    return answer;
}