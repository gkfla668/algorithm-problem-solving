function solution(array, commands) {
    var answer = [];
    
    commands.forEach((val) => {
        let [i, j, k] = val;
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b).find((val, index) => index === k - 1));
    })
    
    return answer;
}