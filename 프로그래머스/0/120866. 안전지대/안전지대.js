
function solution(board) {
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    var answer = 0;
    
    const n = board.length;
    const danger = JSON.parse(JSON.stringify(board)); 

    for(let x = 0; x < n; x++){
        for(let y = 0; y < n; y++){
            if(board[x][y] === 0) continue;
            
            for(let i = 0; i < 8; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx < 0 || nx >= n || ny < 0 || ny >= n)
                    continue;
                
                danger[nx][ny] = 2;
            }
        }
    }
    
    danger.forEach((b) => {
        b.forEach(num => num === 0 && answer++);
    })
    
    return answer;
}