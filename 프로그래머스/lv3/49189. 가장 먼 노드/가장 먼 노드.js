function solution(n, edge) {
    var answer = 0;
    let arr = [...new Array(n + 1)].map(() => [])
    let visited = new Array(n + 1).fill(-1);
    
    edge.forEach(([start, end]) => {
        arr[start].push(end)
        arr[end].push(start);
    })

    visited[1] = 0;
    
    const BFS = (start) => {
        let queue = [start];
        
        while(queue.length > 0){
            let x = queue.shift();
            
            for(let num of arr[x]){
                if(visited[num] === -1){
                    visited[num] = visited[x] + 1;
                    queue.push(num)
                }
            } 
        }
    }

    BFS(1);
    let max = Math.max.apply(null, visited);
    return visited.filter((v) => v === max).length;
}