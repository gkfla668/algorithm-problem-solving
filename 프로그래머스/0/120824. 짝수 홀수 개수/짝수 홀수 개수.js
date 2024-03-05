function solution(num_list) {
    var answer = [0, 0];
    
    for(let num of num_list){
        num % 2 === 0 ? answer[0]++ : answer[1]++;
    }

    return answer;
}