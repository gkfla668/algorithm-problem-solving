function solution(order) {
    let orderIdx = 0;
    const stack = [];
    let answer = 0;

    // 컨베이어 벨트는 [1, 2, 3, 4, 5] 순서로 초기 상태의 상자를 전달합니다.
    // 주어진 order 배열이 [4, 3, 1, 2, 5]라면, 영재는 4번 상자부터 차례대로 실어야 합니다.
    for(let i = 1; i <= order.length; i++){
        stack.push(i);
            
        while(stack.length > 0 && stack[stack.length - 1] === order[orderIdx]){
            stack.pop();
            orderIdx++;
        }
    }

    return orderIdx;
}