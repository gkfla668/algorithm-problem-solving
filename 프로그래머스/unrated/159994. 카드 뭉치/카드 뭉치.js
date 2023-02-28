function solution(cards1, cards2, goal) {
    for(let str of goal){
        if(cards1[0] === str){
            cards1.shift();
        } else if(cards2[0] === str){
            cards2.shift();
        } else return 'No';
    }
    
    return 'Yes';
}