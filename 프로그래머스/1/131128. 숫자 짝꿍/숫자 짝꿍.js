function solution(X, Y) {
    let arrX = X.split('').map((it) => Number(it));
    let arrY = Y.split('').map((it) => Number(it));
    
    let answer = '';
    
    // 가장 큰 정수를 구해야 하므로 9부터 시작
    for(let i = 9; i >= 0; i--) {
        const curX = arrX.filter((it) => it === i).length;
        const curY = arrY.filter((it) => it === i).length;
         
        // 숫자 i가 X와 Y에서 공통으로 나타날 수 있는 최대 횟수만큼 문자 i를 반복
        answer += String(i).repeat(Math.min(curX, curY));
    }; 
    
    if(answer.length === 0) return "-1";
    if(answer.charAt(0) === '0') return "0";
    
    return answer;
}