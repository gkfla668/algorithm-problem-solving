function solution(cacheSize, cities) {
    var answer = 0;
    let queue = [];
    
    if(cacheSize === 0)
        return cities.length * 5;
    
    cities.forEach((city) => {
        let hitIdx = queue.findIndex((it) => it.toUpperCase() === city.toUpperCase());
        
        if(hitIdx !== -1){ // 캐시에 있음 hit
            answer += 1; // cache hit일 경우 실행시간은 1이다.
            
            queue.splice(hitIdx, 1);
        } else{ // 캐시에 없음 miss
            answer += 5; // cache miss일 경우 실행시간은 5이다.
            
            if(queue.length === cacheSize) queue.shift(); // 제일 옛날에 참조된 요소 제거 (LRU 기법)
        }
        
        queue.push(city);
        
    })
    
    return answer;
}