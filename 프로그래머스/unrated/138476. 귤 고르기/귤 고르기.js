function solution(k, tangerine) {   
    let map = new Map();
    for(let i = 0; i < tangerine.length; i++)
        map.set(tangerine[i], (map.get(tangerine[i]) || 0) + 1);

    map = [...map].sort((a, b) => b[1] - a[1]);
    
    let sum = 0;
    for(let i = 0; i < map.length; i++){
        sum += map[i][1];
        if( sum >= k)
            return i +1;
    }
}