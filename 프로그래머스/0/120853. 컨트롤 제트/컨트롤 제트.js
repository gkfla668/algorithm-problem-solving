function solution(s) {
    let arr = s.split(' ');
    let stack = [];
    
    for(let num of arr){
        if(num === 'Z') stack.pop();
        else stack.push(Number(num));
    }
    
   return stack.reduce((a, c) => a + c, 0)

}