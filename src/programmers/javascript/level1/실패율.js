function solution(N, stages) {
    let answer = [];
    
    for(let i = 1; i <= N; i++){
        let yet = stages.filter((it) => i === it).length;
        let total = stages.filter((it) => i <= it).length;
    
        answer.push([i, yet/total]);
    }

    let sorted = answer.sort((a, b) => {
        return b[1] - a[1];
    }); 
    
    
    return sorted.map((it) => it[0]);
}