function solution(a, b, n) {
    let answer = 0;
    let tmp = 0;
    
    while(n >= a){  // 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없다.
        tmp = 0;
        if(n % a !== 0) tmp = n % a
        
        n = Math.floor(n / a) * b;
        answer += n;
        n += tmp;
    }

    return answer;
}