function solution(genres, plays) {
    var answer = [];
    
    let map = new Map();
    
    genres.forEach((s, idx) => {
        if(map.has(s)) map.set(s, map.get(s) + plays[idx])
        else map.set(s, plays[idx])
    })

    let sortedByValueDsc = new Map([...map].sort((a, b) => a[1] - b[1]).reverse());
    
    let arr = [];
    sortedByValueDsc.forEach((v, k) => {
        genres.forEach((genre, idx) => {
            if(genre === k) arr.push([plays[idx], idx]);
        })
       
arr = arr.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1]; // 재생 횟수가 같을 때는 고유 번호가 낮은 순서대로 정렬
    } else {
        return b[0] - a[0]; // 장르가 다를 때는 장르를 기준으로 정렬
    }
})
        
        console.log(arr)
        
        let secondValues = arr.map((arr) => {
            return arr[1];
        });
        
       answer.push(secondValues.slice(0,2))
        
        arr = [];
    })
    
    return answer.flat();
}