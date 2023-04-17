function solution(a, b, n) {
    let answer = 0;
    let cola = n;
    let tmp = 0;
    
    while(cola >= a){  // 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없다.
        tmp = 0;
        
        if(cola % a !== 0) {
            tmp = cola % a;
            console.log(`남은 빈병 ${tmp}`);
        } 
        
        cola = Math.floor(cola / a) * b;
        answer += cola;
        console.log(`받은 콜라 ${cola}`)
        cola += tmp;
    }

    return answer;
}