function solution(array, height) {
    var answer = 0;
    let idx = array.findIndex(num => num > height);
    return array.length - (idx === -1 ? array.length : idx);
}