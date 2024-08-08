function solution(food) {
    let answer = '';

    // food[0]은 수웅이가 준비한 물의 양이며, 항상 1이므로 i는 1부터 시작
    for(let i = 1; i < food.length; i++){
        answer += i.toString().repeat(Math.trunc(food[i] / 2));
    }
    answer += '0' + [...answer].reverse().join(""); // reverse는 배열의 순서를 반전. 이후 join()을 통하여 문자열로 변환
    
    return answer;
}
