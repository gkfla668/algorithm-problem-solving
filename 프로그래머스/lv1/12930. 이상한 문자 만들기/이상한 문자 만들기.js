function solution(s) {
    let index = 0;
    s = s.toUpperCase();
    
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) !== ' '){
            if(index % 2 !== 0)// 홀수 인덱스 소문자로
                s = s.slice(0, i) + s.charAt(i).toLowerCase() + s.slice(i + 1);
            index++;
        }else index = 0;
    }
    
    return s;
}