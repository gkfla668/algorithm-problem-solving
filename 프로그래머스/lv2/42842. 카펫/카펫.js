function solution(brown, yellow) {
    let num = brown + yellow;
    let col, row;
    
    const divisors = [];
    for(let i = 1 ; i <= num/2 ; i++){
        if(num % i === 0) divisors.push(i);
    }
    
    for(let i = 0; i < divisors.length; i++){
        col = divisors[i];
        for(let j = i; j < divisors.length; j++){
            row = divisors[j];
            
            if(((row - 2) * (col - 2)) === yellow && row * col === num)
                return [row, col];
        }
    }    
}