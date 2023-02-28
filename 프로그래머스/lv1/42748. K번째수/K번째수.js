function solution(array, commands) {
    var answer = [];
    
    commands.forEach((val) => {
        let i = val[0];
        let j = val[1];
        let k = val[2];
        
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b).find((val, index) => index === k - 1))
    })
    
    return answer;
}