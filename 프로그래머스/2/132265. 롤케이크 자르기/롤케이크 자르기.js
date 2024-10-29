function solution(topping) {
    let answer = 0;
    
    let left = new Map();
    let right = new Map();
    
    for(let t of topping){
        right.set(t, (right.get(t) || 0) + 1);
    }
    
    for(let t of topping){
        left.set(t, (left.get(t) || 0) + 1);
        
        if(right.get(t) === 1) right.delete(t);
        else right.set(t, right.get(t) - 1);
        
        if(left.size === right.size) answer++;
    }
    
    return answer;
    
}