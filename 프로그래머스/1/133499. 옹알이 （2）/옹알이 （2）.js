function solution(babbling) {
    let answer = 0;
    let arr = ['aya', 'ye', 'woo', 'ma'];
    
    for(let i = 0; i < babbling.length; i++){
        let str = babbling[i];
        
        for(let j = 0; j < arr.length; j++){
            // 연속되는 발음 처리
            if(str.includes(arr[j].repeat(2))) break;
            
            // 연속되는 발음 처리때문에 빈칸으로 변환
            str = str.replaceAll(arr[j], " ");
        }
        
        // 문자열에서 모든 빈칸을 제거
        // 길이가 0이라면, 이는 주어진 문자열이 모두 유효한 발음들로만 이루어져 있음을 의미
        if(str.replaceAll(" ", "").length === 0) answer++;
    }
    
    return answer;
}