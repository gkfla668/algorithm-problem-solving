function solution(keymap, targets) {
    var answer = [];
    
    targets.forEach((target) => {
        let cnt = 0; 
        
        [...target].forEach((ch) => { 
            let min = 1000;
            
            keymap.forEach((key) => {
                if([...key].includes(ch) && [...key].indexOf(ch) < min) min = [...key].indexOf(ch);
            }) 
            
            cnt += min + 1;
        })
        
        if(cnt > 1000) answer.push(-1)
        else answer.push(cnt)
    })
    return answer;
}