function solution(want, number, discount) {
    var answer = 0;
    let cnt = discount.length - 9;
    
    for(let i = 0; i < cnt; i++){
        let arr = discount.slice(i, i + 10);
        let check = true;
        
        for(let j = 0; j < want.length; j++){
            if(arr.filter((a) => a === want[j]).length !== number[j]){
                check = false;
                break;
            }
        }
        
        if(check) answer++;
    }
      
    
    return answer;
}