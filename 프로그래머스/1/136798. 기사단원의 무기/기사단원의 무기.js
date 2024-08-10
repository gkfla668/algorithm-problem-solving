function solution(number, limit, power) {
    var answer = 0;
    let count = 0;
    
    for(let i = 1; i <= number; i++){
        count = 0;
        
        for (let j = 1; j * j <= i; j++)
        {
            if (j * j == i) count++;
            else if (i % j == 0) count += 2;
        }
        
        answer += count > limit ? power : count;
    }
    
    return answer;
}