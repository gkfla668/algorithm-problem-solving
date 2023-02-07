function solution(priorities, location) {
   var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });
   
    let queue = [];
    
    while(arr.length !== 0){
        target = arr.shift(); 
        
        if(arr.some((num) => num.priority > target.priority)){
            arr.push(target);
        }else {  
            queue.push(target); 
		}
	}
    
    return queue.findIndex((num) => num.index === location) + 1;
}