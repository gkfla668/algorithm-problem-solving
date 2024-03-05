function solution(emergency) {
    var answer = [];
    let sortArr = emergency.slice().sort((a, b) => b - a) // emergency를 변경시키지 않기 위해 새로운 배열을 생성하기 위해 slice()
    return emergency.map((num) => sortArr.indexOf(num) + 1);
}