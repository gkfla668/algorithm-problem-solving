function solution(sequence, k) {
    var index = []; // 결과
    let minLength = Infinity;
    let left = 0;
    let sum = 0;
    
    // 윈도우의 오른쪽을 확장
    for(let right = 0; right < sequence.length; right++){
        sum += sequence[right];
        
        while(sum > k && left <= right){
            sum -= sequence[left] // 왼쪽 값을 빼서 윈도우를 줄임
            left++; 
        }
        
        if(sum === k){
            let curLength = right - left + 1;
            
            if(curLength < minLength){ // 더 짧으면
                minLength = curLength; // 갱신
                index = [left, right]; // 갱신
            }
        }
    }
    
    return index;
}