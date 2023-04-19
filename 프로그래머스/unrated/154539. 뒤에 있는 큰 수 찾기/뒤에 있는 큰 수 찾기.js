function solution(numbers) {
    // return numbers.map((val, idx) => {
    //     let arr = numbers.slice(idx + 1, numbers.length);
    //     let num = arr.find((it) => it > val);
    //     return num ? num : -1;
    // })
    
    let arr = [...numbers];
    let stack = [arr.pop()];
    let answer = [];
    
    while(arr.length !== 0) {  
        let num = arr.pop();
        let backMax = stack[stack.length - 1];
        
        if(num < backMax) {
            answer.push(backMax);
            stack.push(num);
        } else {
            while(num >= stack[stack.length - 1]){
                stack.pop()
                continue;
            }
            if(stack.length !== 0) {
                let big = stack[stack.length - 1];
                answer.push(big);
            } else answer.push(-1);
            stack.push(num);
        }   
    }
    
    answer.reverse()
    answer.push(-1)
    return answer;
    
}