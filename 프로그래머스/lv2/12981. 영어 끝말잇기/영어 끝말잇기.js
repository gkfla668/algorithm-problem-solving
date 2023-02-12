function solution(n, words) {
    let obj = {};
    obj[words[0]] = true;
    
    for(let i = 1; i < words.length; i++){
        if(obj[words[i]] || words[i - 1].substr(-1) !== words[i].charAt(0))
            return [(i % n) + 1, Math.trunc((i / n) + 1)]
        
        obj[words[i]] = true;
    }

    return [0, 0];
}