function solution(n, lost, reserve) {
//     const onlyOne = new Array(n + 1).fill(false);
    
//     for(let i = 1; i <= n; i++){
//         if((reserve.includes(i) && lost.includes(i)) || (!lost.includes(i) && !reserve.includes(i))) { // 나 여벌이 있었는데 도난 당함. 못 빌려줌 또는 나 안빌려줘도 됨
//             onlyOne[i] = true;
//         }
//     }
    
//     for(let i = 1; i <= n; i++){
//         if(onlyOne[i]) continue;
        
//         if(reserve.includes(i)){ // 여벌 있음
//             if(i - 1 !== 0 && lost.includes(i - 1) && !onlyOne[i - 1]){ // 앞 번호가 체육복이 없는 경우
//                 onlyOne[i - 1] = true;
//             }else if(i + 1 !== n + 1 && lost.includes(i + 1) && !onlyOne[i + 1]){ // 뒷 번호가 체육복이 없는 경우
//                 onlyOne[i + 1] = true;
//             }
            
//             onlyOne[i] = true; // 빌려줘서 이제 못빌려줌
//         }
//     }
    
//     return onlyOne.filter((it) => it).length;

    const students = new Array(n + 1).fill(1);

    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2){ // 빌려줄 수 있음
            if(students[i - 1] === 0) students[i - 1]++;
            else if(students[i + 1] === 0) students[i + 1]++;
            
            students[i]--; // 빌려줘서 이제 하나임
        }
    }
    
    return students.filter((student) => student >= 1).length - 1;
}