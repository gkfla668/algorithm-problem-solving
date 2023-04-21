function solution(babbling) {
    let answer = 0;
    regex = /[a-z]/g;
    
    babbling.forEach((it) => {
        it = String(it.split('aya'));
        it = String(it.split('ye'));
        it = String(it.split('woo'));
        it = String(it.split('ma'));
        
        answer += it.match(regex) === null ? 1 : 0;
    })
    
    return answer;
}