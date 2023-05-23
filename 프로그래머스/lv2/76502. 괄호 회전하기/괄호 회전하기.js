function solution(s) {
    var answer = 0;
    
    for(let i = 0; i < s.length; i++){
        let start = [];
        for(let j = 0; j < s.length; j++){
            let target = s.charAt(j);
            if(target === '(' || target === '[' || target === '{'){
                start.push(s.charAt(j));
            } else {
                let tmp = start.pop()
                if(target === ')' && tmp !== '(') start.push(tmp);
                if(target === ']' && tmp !== '[') start.push(tmp);
                if(target === '}' && tmp !== '{') start.push(tmp);
            }
        }
        
        if(start.length === 0) answer++;
        
        let first = s.substring(0, 1);
        s = s.substring(1, s.length);
        s += first;

    }
    
    return answer;
}