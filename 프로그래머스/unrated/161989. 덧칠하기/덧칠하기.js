function solution(n, m, section) {
    var answer = 0;
    let arr = new Array(n+1).fill(0);
    
    for(let i = 1; i < arr.length; i++){
        if(section.includes(i)){
            answer++;
            i += m - 1;
        }
    }
    
    return answer;
}