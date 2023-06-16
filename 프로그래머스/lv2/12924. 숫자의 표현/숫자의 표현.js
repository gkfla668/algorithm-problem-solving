function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= Math.floor(n/2); i++){
        let [next, sum] = [i, 0];
        
        while(sum < n){
            sum += next++;  
            
            if(sum === n) {
                answer++;
                break;
            }
        }
        
      
      
    }
    
    return answer + 1;
}