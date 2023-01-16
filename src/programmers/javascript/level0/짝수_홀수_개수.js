function solution(num_list) {
    var answer = [];
    
    answer.push((num_list.filter((it) => it % 2 === 0)).length);
    answer.push((num_list.filter((it) => it % 2 !== 0)).length);
    
    return answer;
}

/* 다른 사람의 풀이 - 나머지를 배열의 인덱스로 사용 */

// function solution(num_list) {
//     var answer = [0, 0];

//     for(let num of num_list){
//         answer[num % 2]++;
//     }

//     return answer;
// }