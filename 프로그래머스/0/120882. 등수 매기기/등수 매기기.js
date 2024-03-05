function solution(score) {
    var answer = [];
    
    let average = score.map((item) => (item[0] + item[1]) / 2)
    let sortArr = average.slice().sort((a, b) => b - a); // 원본 변경 주의, slice() 추가
    
    return average.map((it) => sortArr.indexOf(it) + 1);
}