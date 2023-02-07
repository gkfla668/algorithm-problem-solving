function solution(progresses, speeds) {
    let successDays = progresses.map((num, idx) => {
        return Math.ceil((100 - num) / speeds[idx]);
    })
    
    let answer = new Array(Math.max(...successDays) + 1).fill(0);
    
    for(let i = 0; i < successDays.length; i++){
        let day = successDays[i];
        
        if(i > 0 && successDays[i] < successDays[i - 1]){
            day = successDays[i - 1];
            answer[day]++;
            successDays.splice(i, 1);
            i--;
        }else
            answer[day]++;
    }
    
    return answer.filter((num) => num !== 0);
}