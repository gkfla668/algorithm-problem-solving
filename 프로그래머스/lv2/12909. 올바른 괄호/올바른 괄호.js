function solution(s){
    let cnt = 0;
    
    if(s.length === 1)
        return false;
    
    for(let i = 0; i < s.length; i++){
        let bracket = s.charAt(i);
        
        if(bracket === '('){
            cnt++;
        }else { // ')'
            if(cnt === 0)
                return false;
            cnt--;
        }
    }
    
    return cnt === 0;
}