function solution(n) {
    let target = n + 1;
    let oneCnt1 = (n.toString(2).match(/1/g) || []).length;
    
    while(true){
        if(oneCnt1 === (target.toString(2).match(/1/g) || []).length)
            return target;
    
        target++;
    }
}