function solution(cacheSize, cities) {
    var answer = 0;
    let queue = [];
    
    if(cacheSize === 0)
        return cities.length * 5;
    
    cities.forEach((city) => {
        let hitIdx = queue.findIndex((it) => it.toUpperCase() === city.toUpperCase());
        
        if(hitIdx !== -1){ // 캐시에 있음 hit
            answer += 1;
            
            queue.splice(hitIdx, 1);
            queue.push(city);
        } else{ // 캐시에 없음 miss
            answer += 5;
            
            if(queue.length === cacheSize) queue.shift(); // 제일 옛날에 참조된 요소 제거
            queue.push(city);
        }
        
    })
    
    return answer;
}