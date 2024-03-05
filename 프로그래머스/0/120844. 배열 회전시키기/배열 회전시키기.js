function solution(numbers, direction) {
    var deque = [];
    
    numbers.forEach((num) => deque.push(num));
 
    if(direction === 'right'){
        let num = deque.pop();
        deque.unshift(num);
    } else{
        // direction === 'left'
        let num = deque.shift();
        deque.push(num);
    }
    
    return deque;
}