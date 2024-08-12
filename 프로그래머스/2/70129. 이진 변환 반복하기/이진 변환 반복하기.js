function solution(s) {
    let zeroCnt = 0;
    let changeCnt = 0;
    
    while(s.length !== 1){
        changeCnt++;
        zeroCnt += (s.match(/0/g) || []).length; // x의 모든 0을 제거합니다.
        s = s.replaceAll('0', "").length.toString(2); // x를 "x의 길이를 2진법으로 표현한 문자열"로 바꿉니다.
    }
    
    return [changeCnt, zeroCnt];
}