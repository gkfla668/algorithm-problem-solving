function solution(s) {
    let zeroCnt = 0;
    let changeCnt = 0;
    
    while(s.length !== 1){
        changeCnt++;
        zeroCnt += (s.match(/0/g) || []).length;
        s = s.replaceAll('0', "").length.toString(2);
    }
    
    return [changeCnt, zeroCnt];
}