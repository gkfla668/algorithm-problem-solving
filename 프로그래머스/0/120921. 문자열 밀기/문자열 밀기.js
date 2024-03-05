function solution(A, B) {
    var answer = 0;
    let queue = [];
    
    if(A === B) return 0;
    
    A = [...A]
    
    for(let ch of A)
        queue.push(ch);
    
     for(let ch of queue){
        let num = queue.pop();
         queue.unshift(num);

         answer++;
         if(queue.join('') === B) return answer;
     }

    return -1;
}