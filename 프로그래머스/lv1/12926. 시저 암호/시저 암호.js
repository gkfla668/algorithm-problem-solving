function solution(s, n) {
    return [...s].map((it) => {
        if(it === ' ')
            return it;
        
        if(it.charCodeAt(0) <= 90){ // 대문자인 경우
            if(it.charCodeAt(0) + n > 90) // 초과
                return String.fromCharCode(64 + it.charCodeAt(0) + n - 90);
        }
        
        // 소문자인 경우
        if(it.charCodeAt(0) + n > 122) // 초과
            return String.fromCharCode(96 + it.charCodeAt(0) + n - 122);
        
        return String.fromCharCode(it.charCodeAt(0) + n)
    }).join("");
}