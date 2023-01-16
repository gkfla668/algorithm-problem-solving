function solution(quiz) {
    var answer = [];
    
    quiz.forEach((it) => {
        let arr = it.split(" = ");
        eval(arr[0]) === parseInt(arr[1]) ? answer.push("O") : answer.push("X");
    })
    
    return answer;
}