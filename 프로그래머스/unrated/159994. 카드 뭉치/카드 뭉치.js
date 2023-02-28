function solution(cards1, cards2, goal) {
    var answer = '';
    
    for(let i = 0; i < goal.length; i++){
        let check = true;
        
        if(cards1[0] === goal[i]){
            check = false;
            cards1.shift()
            continue;
        }
         
        if(cards2[0] === goal[i]){
            check = false;
            cards2.shift()
            continue;
        }
        
        if(check) return 'No'
    }
    return 'Yes'
}