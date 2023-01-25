function solution(food) {
    var answer = '';
    
    for(let i = 1; i < food.length; i++){
        answer += i.toString().repeat(Math.trunc(food[i] / 2));
    }
    answer += '0' + [...answer].reverse().join(""); // reverse는 배열의 순서를 반전. 이후 join()을 통하여 문자열로 변환
    
    return answer;
}