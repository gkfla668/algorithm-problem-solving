function solution(players, callings) {
    let map = new Map(); // 핵심 !
    
    players.forEach((name, idx) => {
        map.set(name, idx); // 참여자들의 이름을 key로 설정
    })
    
    callings.forEach((name) => {
        let currIdx = map.get(name); // 핵심 ! O(1)
        let front = players[currIdx - 1]; 
        
        map.set(name, currIdx - 1);
        map.set(front, map.get(front) + 1);
      
      [players[currIdx], players[currIdx -1]] = [players[currIdx -1], players[currIdx]]; // 원본 순서 변경
    })
             
    return players;
}