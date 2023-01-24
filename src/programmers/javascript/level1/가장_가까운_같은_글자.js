function solution(s) {
    let obj = {};
    var answer = [...s].map((item, idx) => {  
        let result = !obj[item] ? -1 : idx - obj[item];
        obj[item] = idx; // 가장 가까운 위치로 갱신

        return result;
    })
}