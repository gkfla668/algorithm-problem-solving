function solution(ingredient) {
    let cnt = 0
    let stack = [];
    
    for(let i of ingredient){
        stack.push(i);
        
        if (
            stack[stack.length-1] === 1 &&
            stack[stack.length-2] === 3 &&
            stack[stack.length-3] === 2 &&
            stack[stack.length-4] === 1
        ) {
            cnt++;
            stack.splice(-4);
        }
    }
        
    return cnt;
}