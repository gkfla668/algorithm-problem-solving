function solution(order) {
    let stack = [];
    let n = 1;
    
    for(let i = 0; i < order.length; i++) { 
        while(n <= order[i]){
            stack.push(n);
            n++;
        }
        
        if(stack.length !== 0 && stack[stack.length - 1] === order[i]){
            stack.pop();
            continue;
        } 
        
        return i;
    }
    
    return order.length;
}