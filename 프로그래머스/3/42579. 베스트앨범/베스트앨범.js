function solution(genres, plays) {
    var answer = [];
    
    let map = new Map();
    
    // 각 장르별 재생 횟수 합산
    genres.forEach((s, idx) => {
        if(map.has(s)) map.set(s, map.get(s) + plays[idx])
        else map.set(s, plays[idx])
    })

    // 재생 횟수를 기준으로 map 재정렬
    let sortedByValueDsc = new Map([...map].sort((a, b) => a[1] - b[1]).reverse());
    
    console.log(sortedByValueDsc)
    
    // 장르 내에서 곡 정렬 및 상위 두 곡 선택
    let arr = [];
    sortedByValueDsc.forEach((v, k) => {
        genres.forEach((genre, idx) => {
            if(genre === k) arr.push([plays[idx], idx]); // [재생 횟수, 인덱스]
        })
       
        arr = arr.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1]; // 재생 횟수가 같을 때는 고유 번호가 낮은 순서대로 정렬
            } else {
                return b[0] - a[0]; // 장르가 다를 때는 장르를 기준으로 내림차순 정렬
            }
        })
        
        // 정렬된 arr에서 상위 두 곡의 인덱스만 추출
        let indexList = arr.map((arr) => {
            return arr[1];
        });
        
        // 상위 두 곡 선택
        answer.push(indexList.slice(0,2))
        
        arr = [];
    })
    
    // 평탄화. 다차원 배열이 1차원 배열로 변환
    return answer.flat();
}