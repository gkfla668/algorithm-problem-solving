function solution(record) {
    var answer = [];
    let map = new Map();
    
    record.forEach((action) => {
        let arr = action.split(' ');
        if(arr[0] === 'Enter' || arr[0] === 'Change')
            map.set(arr[1], arr[2]);
    } )
    
    record.forEach((action) => {
        let arr = action.split(' ');
        if(arr[0] === 'Enter')
            answer.push(`${map.get(arr[1])}님이 들어왔습니다.`);
        if(arr[0] === 'Leave')
            answer.push(`${map.get(arr[1])}님이 나갔습니다.`);
    } )
    
    
    return answer;
}