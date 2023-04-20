function solution(players, callings) {
    let map = new Map();
    
    players.forEach((name, idx) => {
        map.set(name, idx);
    })
    
    callings.forEach((name) => {
        let currIdx = map.get(name);
        let front = players[currIdx - 1]; 
        
        
        [players[currIdx], players[currIdx -1]] = [players[currIdx -1], players[currIdx]];
        
        map.set(name, currIdx - 1);
        map.set(front, map.get(front) + 1);
    })
             
    return players;
}