function solution(X, Y) {
    let arrX = X.split('').map((it) => Number(it));
    let arrY = Y.split('').map((it) => Number(it));
    
    let answer = '';
    
    for(let i = 9; i >= 0; i--) {
        const curX = arrX.filter((it) => it === i).length;
        const curY = arrY.filter((it) => it === i).length;
         
        answer += String(i).repeat(Math.min(curX, curY));
    }; 
    
    if(answer.length === 0) return "-1";
    if(answer.charAt(0) === '0') return "0";
    return answer;
}