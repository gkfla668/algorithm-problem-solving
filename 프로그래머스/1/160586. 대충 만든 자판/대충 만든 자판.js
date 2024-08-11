function solution(keymap, targets) {
    var answer = [];
    
    targets.forEach((target) => {
        let cnt = 0; 
        
        [...target].forEach((ch) => { 
            let arr = [];
            
            keymap.forEach((key) => {
                if([...key].includes(ch)) arr.push([...key].indexOf(ch) + 1);
            }) 
            
            // Number.MAX_VALUE를 사용하는 이유는, 특정 문자가 keymap에 존재하지 않는 경우를 처리하기 위함
            cnt += arr.length > 0 ? Math.min(...arr) : Number.MAX_VALUE;
        })
        
        // Number.MAX_VALUE는 문자열을 구성할 수 없다는 것을 나타내기 위해 사용되며, 
        // 최종적으로 그 문자열에 대해 -1을 반환하기 위한 조건으로 사용됩니다. 
        // 만약 어떤 문자를 찾지 못했다면, cnt가 Number.MAX_VALUE 이상이 되어 그 문자열은 유효하지 않다고 판단하게 됩니다.
        cnt >= Number.MAX_VALUE ? answer.push(-1) : answer.push(cnt)
    })
    
    return answer;
}