function solution(k, tangerine) {   
    let obj = {};
    tangerine.forEach((it) => obj[it] = (obj[it] || 0) + 1); // 중복 갯수
    let cnt = Object.values(obj).sort((a, b) => b - a); // 갯수 기준 내림차순 정렬
    
    let sum = 0;
    for(let i = 0; i < cnt.length; i++){
        sum += cnt[i];
        if(sum >= k)
            return i + 1;
    }
}