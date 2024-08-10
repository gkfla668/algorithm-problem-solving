function solution(s) {
    s = s.toUpperCase();
    let words = s.split(' ');
    let index = 0;
    
    for(let i = 0; i < words.length; i++){
        index = 0;
        
        for(let char of words[i]){
            if(index % 2 !== 0) // 홀수 인덱스 소문자로
                words[i] = words[i].slice(0, index) + words[i].charAt(index).toLowerCase() + words[i].slice(index + 1);
            index++;
        }
    }
    
    return words.join(' ');
}