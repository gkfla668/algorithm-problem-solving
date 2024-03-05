function solution(n) {
    let factorial = 1;
    
    for(let i = 2; i <= 10; i++){
        factorial *= i;
        
        if(factorial >= n) {
            if(factorial === n) return i;
            return i - 1;
        }
    }
}