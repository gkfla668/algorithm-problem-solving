function solution(A,B){
    const size = A.length;
    var answer = 0;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for(let i = 0; i < size; i++)
        answer += A.shift() * B.shift();

    return answer;
}