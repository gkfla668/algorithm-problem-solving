function solution(progresses, speeds) {
    let answer = [];
    let stack = [];
    let cnt = 1;
    
    // 작업 완료까지 걸리는 일수 계산
    for(let i = progresses.length - 1; i >= 0; i--){
        stack.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    let target = stack.pop();
    while(stack.length > 0){
        let lastStackItem = stack.pop();
        
        if(target < lastStackItem){
            answer.push(cnt);
            cnt = 1; // 초기화
            target = lastStackItem;
        } else cnt++;
    }
    
    answer.push(cnt);
    return answer;
}