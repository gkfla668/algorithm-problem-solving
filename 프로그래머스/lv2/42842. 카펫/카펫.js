function solution(brown, yellow) {
    let num = brown + yellow;
    let col, row;
    
    for(let i = 1; i <= num/2; i++){
        if(num % i === 0){
            col = i;
            row = col;

            for(let j = i; j <= num/2; j++){
                if(num % j === 0){
                    row = j;

                    if(((row - 2) * (col - 2)) === yellow && row * col === num)
                        return [row, col];
                }
            }
        }
    }    
}