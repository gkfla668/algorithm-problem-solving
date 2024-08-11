function solution(k, score) {
    let answer = [];
    let queue = [];
    
    score.forEach((s) => {
        if(queue.length < k)
            queue.push(s);
        else {
            if(queue[k - 1] < s){
                queue.pop();
                queue.push(s);
            }
        }
        
        queue.sort((a,b) => b-a);
        answer.push(queue[queue.length - 1]);
    })
       
    return answer;
}