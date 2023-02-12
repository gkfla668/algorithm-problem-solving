function solution(brown, yellow) {
    let num = brown + yellow;
    
    for(let col = 3; col <= num / col; col++){ // 세로
        let row = num / col;
        
        // 한줄로 감싸져 있으므로
        if(((row - 2) * (col - 2)) === yellow)
            return [row, col];
    }
}    