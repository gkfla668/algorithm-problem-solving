function solution(s){
     if(s.length === 1)
        return false;
    
    let stackCnt = 0;
    
    for(let bracket of s){
        stackCnt += bracket === '(' ? 1 : -1;
        if(stackCnt === -1) return false;
    }
    
    return stackCnt === 0;
}