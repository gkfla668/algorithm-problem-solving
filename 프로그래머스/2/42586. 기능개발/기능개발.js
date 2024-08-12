function solution(progresses, speeds) {
    let answer = [];
    let stack = [];
    let tmp = 0;
    let cnt = 1;
    
    for(let i = progresses.length - 1; i >= 0; i--){
        stack.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    let target = stack.pop();
    while(stack.length > 0){
        let tmp = stack.pop();
        
        if(target < tmp){
            answer.push(cnt);
            cnt = 1;
            target = tmp;
        } else cnt++;
    }
    
    answer.push(cnt);
    
    return answer;
}