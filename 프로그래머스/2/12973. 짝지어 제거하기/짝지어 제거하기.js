function solution(s){
    let stack = [];

    [...s].forEach((alphabet) => {
        alphabet !== stack[stack.length - 1] ? stack.push(alphabet) : stack.pop();
        
    })
        
    return stack.length === 0 ? 1 : 0;  
}