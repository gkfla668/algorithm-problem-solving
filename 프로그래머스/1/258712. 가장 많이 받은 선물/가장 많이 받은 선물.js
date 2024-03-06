function solution(friends, gifts) {
    var answer = Array(friends.length).fill(0)
    const arr = Array.from(Array(friends.length), () => Array(friends.length).fill(0))
    
    gifts.forEach((it) => {
        let [A, B] = it.split(' ');
        arr[friends.indexOf(A)][friends.indexOf(B)]++;
    })
    
    // 주고 받은 갯수
    let raw = new Array(friends.length).fill(0);
    let column = new Array(friends.length).fill(0);
    
    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends.length; j++) {
          raw[i] += arr[i][j];
          column[i] += arr[j][i];
        }
    }
    
    // 선물 지수
    let score = raw.map((it, index) => it - column[index]);
    
    for(let i = 0; i < friends.length; i++){
        for(let j = 0; j < friends.length; j++){
            if(i === j) continue; 
            
            // A > B 이면 다음달 A가 받음
            if(arr[i][j] > arr[j][i]) answer[i]++;
            // A < B 이면 다음달 B가 받음
            else if (arr[i][j] < arr[j][i]) answer[j]++;
            else if(arr[i][j] >= 0 && arr[i][j] === arr[j][i] || arr[i][j] === 0 && arr[j][i] === 0){ // A == B 이거나 0이면
                // 선물지수가 더 큰 사람이 받음
                if(score[i] > score[j]) answer[i]++; 
                else if(score[i] < score[j]) answer[j]++; 
            }
            
            // 이미 처리
            arr[i][j] = -1;
            arr[j][i] = -1;
        }
    }
    
    return Math.max(...answer);
}