function solution(record) {
    var answer = [];
    let map = new Map();
    
    record.forEach((action) => {
        let [state, uid, nick] = action.split(' ');
        
        if(state === 'Enter' || state === 'Change')
            map.set(uid, nick);
    } )
    
    record.forEach((action) => {        
        let [state, uid] = action.split(' ');
        
        if(state === 'Enter')
            answer.push(`${map.get(uid)}님이 들어왔습니다.`);
        if(state === 'Leave')
            answer.push(`${map.get(uid)}님이 나갔습니다.`);
    } )
    
    
    return answer;
}