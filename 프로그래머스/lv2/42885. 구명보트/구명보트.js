function solution(people, limit) {
    people.sort((a, b) => a - b); 
    
    // 퀵 정렬과 비슷. 가장 큰 것과 가장 작은 것 비교해가면서 ..
    for(var i = 0, j = people.length - 1; i < j; j--){
        if(people[i] + people[j] <= limit) i++;
    }
    
    return people.length - i;
}