function solution(board, moves) {
    var answer = 0;
    let stack = []; // 바구니
    
    moves.forEach((move) => {        
        let position = move - 1; // 크레인을 작동시킬 위치
        
        for(let i = 0; i < board.length; i++){
            if(board[i][position] !== 0){   
                let target = board[i][position];
        
                // 바구니에 담기
                 if(stack.length === 0){
                    stack.push(target);
                } else {
                    let tmp = stack.pop();
                    
                    if(tmp === target){
                        answer += 2; // 사라진 같은 모양 인형 두개
                    } else {
                        stack.push(tmp);
                        stack.push(target);
                    }
                }
            
                board[i][position] = 0; // 집어 올렸으니 0 표시
                break;
            }
        }
    })
    
    return answer;
}