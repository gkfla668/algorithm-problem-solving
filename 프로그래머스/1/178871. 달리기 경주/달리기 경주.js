function solution(players, callings) {
    let map = new Map(); // 핵심 !
    
    players.forEach((name, idx) => {
        map.set(name, idx); // 참여자들의 이름을 key로 설정
    })
    
    callings.forEach((name) => {
        let currIdx = map.get(name); // 핵심 ! O(1)
        let frontPlayer = players[currIdx - 1]; 
        
        map.set(name, currIdx - 1); // 추월
        map.set(frontPlayer, currIdx); // 뒤로 밀림
        
       // 원본 순서 변경
      [players[currIdx], players[currIdx -1]] = [players[currIdx -1], players[currIdx]];
    })
             
    return players;
}