function solution(n, m, section) {
    var answer = 0;
    let arr = new Array(n+1).fill(0);
    
    section.forEach(v => arr[v] = -1);
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === -1){
            answer++;
            i += m - 1;
        }
    }
    
    return answer;
}