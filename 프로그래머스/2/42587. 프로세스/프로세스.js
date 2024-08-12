function solution(priorities, location) {
   let queue = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });
    
    let arr = [];
    
    while(queue.length > 0){
        let target = queue.shift(); 
        
        // 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면
        if(queue.some((num) => num.priority > target.priority)){
            queue.push(target); // 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
        } else {  
            arr.push(target); 
		}
	}
    
    // 해당 프로세스가 몇 번째로 실행되는지
    return arr.findIndex((num) => num.index === location) + 1;
}