function solution(t, p) {
    let count = 0;
    let leng = p.length;
    
    for(let i = 0; i <= t.length - leng; i++){
        let tmp = t.substr(i, leng);
        
        if(Number(tmp) <= Number(p))
            count++;
    }
    
    return count;
}