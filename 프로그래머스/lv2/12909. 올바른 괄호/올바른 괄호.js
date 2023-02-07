function solution(s){
    let stackCnt = 0;
    
    for(let bracket of s){
        stackCnt += bracket === '(' ? 1 : -1;
        if(stackCnt === -1) return false;
    }
    
    return stackCnt === 0;
}