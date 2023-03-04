function solution(n,a,b)
{
    let answer = 1;

    while(true){
        if(a % 2 === 0 && a - 1 === b) return answer;
        if(b % 2 === 0 && b - 1 === a) return answer;
        
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }

    return answer;
}