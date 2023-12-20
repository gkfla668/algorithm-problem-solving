function solution(babbling) {
    let answer = 0;
    let arr = ['aya', 'ye', 'woo', 'ma'];
    
    for(let i = 0; i < babbling.length; i++){
        let str = babbling[i];
        
        for(let j = 0; j < arr.length; j++){
            if(str.includes(arr[j].repeat(2))) break;
            
            str = str.replaceAll(arr[j], " ");
        }
        
        if(str.replaceAll(" ", "").length === 0) answer++;
    }
    
    return answer;
}