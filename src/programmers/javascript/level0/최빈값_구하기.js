function solution(array) {
    let map = new Map();
    
    array.forEach((num) => map.set(num, (map.get(num) || 0 ) + 1)); // 0은 매핑된 key값이 없다면 넣어줄 기본 값
    
    map = [...map].sort((a,b) => b[1] - a[1]); // value 기준 내림차순
    
    let max = map[0][1];
    
    return map.length !== 1 && map[1][1] === max ? -1 : map[0][0];
}