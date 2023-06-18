function solution(n, edge) {
    let arr = [...new Array(n + 1)].map(() => [])
    let depth = new Array(n + 1).fill(-1);
    
    edge.forEach(([start, end]) => {
        arr[start].push(end)
        arr[end].push(start);
    })

    depth[1] = 0;
    
    const BFS = (start) => {
        let queue = [start];
        
        while(queue.length > 0){
            let cur = queue.shift();
            
            for(let num of arr[cur]){
                if(depth[num] === -1){
                    depth[num] = depth[cur] + 1;
                    queue.push(num)
                }
            } 
        }
    }

    BFS(1);
    let max = Math.max.apply(null, depth);
    return depth.filter((v) => v === max).length;
}