function solution(s) {
    var answer = 0;
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    
    for(let i = 0; i < s.length; i++){
        let start = [];
        
        s = s.slice(1, s.length) + s.slice(0, 1);
        [...s].forEach((ch) => {
            let target = ch;
            if(target === '(' || target === '[' || target === '{')
                start.push(ch);
            else {
                let tmp = start.pop()
                if(target !== map.get(tmp)) start.push(tmp);
            }
        })
        
        if(start.length === 0) answer++;

    }
    
    return answer;
}