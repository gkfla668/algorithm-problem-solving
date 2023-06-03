function solution(keymap, targets) {
    var answer = [];
    
    targets.forEach((target) => {
        let cnt = 0; 
        
        [...target].forEach((ch) => { 
            let arr = [];
            
            keymap.forEach((key) => {
                if([...key].includes(ch)) arr.push([...key].indexOf(ch) + 1);
            }) 
            
            cnt += arr.length > 0 ? Math.min(...arr) : Number.MAX_VALUE;
        })
        
        cnt >= Number.MAX_VALUE ? answer.push(-1) : answer.push(cnt)
    })
    
    return answer;
}