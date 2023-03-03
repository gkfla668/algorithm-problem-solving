function solution(order) {
    let stack = [];
    let answer = 0;
    let num = 1;
    
    for(let i = 0; i < order.length; i++) { 
        while(num <= order[i]){
            stack.push(num);
            num++;
        }
        
        if(stack.length !== 0 && stack[stack.length - 1] === order[i]){
            stack.pop();
            answer++;
        } else return answer;
    }
    
    return answer;
}