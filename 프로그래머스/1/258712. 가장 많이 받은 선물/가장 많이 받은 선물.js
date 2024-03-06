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
            
            console.log(`${i}번이랑 ${j}번이랑 시작\n`)
            console.log(`${i}번이 준거 ${arr[i][j]},${j}번이 준거 ${arr[j][i]}`)
            
            // A > B 이면 다음달 A가 받음
            if(arr[i][j] > arr[j][i]) {
                answer[i]++;
                console.log(`${i}번이 ${j}에게 받습니다.\n`)
            } else if (arr[i][j] < arr[j][i]) { // A < B 이면 다음달 B가 받음
                answer[j]++;
                console.log(`${j}번이 ${i}에게 받습니다.\n`)
            } else if(arr[i][j] >= 0 && arr[i][j] === arr[j][i] || arr[i][j] === 0 && arr[j][i] === 0){ // A == B 이거나 0이면
                // 선물지수가 더 큰 사람이 받음
                 console.log(`${i}번의 선물지수는 ${score[i]}, ${j}번의 선물 지수는 ${score[j]}\n`)
                if(score[i] > score[j]) answer[i]++; 
                else if(score[i] < score[j]) answer[j]++; 
            }
            
            arr[i][j] = -1;
            arr[j][i] = -1;
        }
    }
    
    return answer.sort((a, b) => b - a)[0];
}