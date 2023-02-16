function solution(board, moves) {
    var answer = 0;
    let stack = [];
    
    moves.forEach((move) => {        
        let now = move - 1;
        
        for(let i = 0; i < board.length; i++){
            if(board[i][now] !== 0){   
                let target = board[i][now];
        
                 if(stack.length === 0){
                    stack.push(target);
                } else {
                    let tmp = stack.pop();
                    if(tmp === target){
                        answer += 2;
                    } else {
                        stack.push(tmp);
                        stack.push(target);
                    }
                }
            
                board[i][now] = 0;
                break;
            }
        }
    })
    
    return answer;
}