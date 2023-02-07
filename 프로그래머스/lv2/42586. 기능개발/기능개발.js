function solution(progresses, speeds) {
    let successDays = progresses.map((num, idx) => Math.ceil((100 - num) / speeds[idx]))
    let answer = new Array(successDays.length).fill(0);
    let day = 0;
    answer[day] = 1;
    
    for(let i = 1; i < successDays.length; i++){
        if(successDays[i] <= successDays[i - 1]){
            answer[day]++;
            successDays.splice(i, 1);
            i--;
        }else
            answer[++day]++;
    }

    return answer.filter((cnt) => cnt !== 0);
    }