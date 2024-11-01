function solution(number, k) {
    let stack = [];
    
    for(let i = 0; i < number.length; i++){
        let currentNum = number[i];
        
        
        while(k > 0 && stack.length > 0 && stack[stack.length - 1] < currentNum){
            stack.pop();
            k--; // 제거할 횟수 감소
        } 
        
        stack.push(currentNum);
    }
    
    // 모든 숫자를 처리한 후에도 제거할 횟수가 남은 경우 뒤에서 처리
    // ex) '7654321', k =3
    stack = stack.slice(0, stack.length - k);
    
    return stack.join('');
}