function solution(n) {
    // n을 2진수로 변환했을 때의 1의 갯수
    let oneCnt = (n.toString(2).match(/1/g) || []).length;
    
    while(n++){
        if(oneCnt === (n.toString(2).match(/1/g) || []).length)
            return n;
    }
}