function solution(n, edge) {
    let arr = [...new Array(n + 1)].map(() => [])
    let depth = new Array(n + 1).fill(-1); // 각 노드가 1번 노드로부터 떨어진 깊이를 저장
    
    // 각 노드에 연결된 다른 노드들을 저장
    edge.forEach(([start, end]) => {
        arr[start].push(end)
        arr[end].push(start);
    })

    depth[1] = 0; // 1번 노드는 자기 자신이므로
    
    const BFS = (start) => {
        let queue = [start];
        
        while(queue.length > 0){
            let cur = queue.shift();
            
            for(let num of arr[cur]){
                if(depth[num] === -1){
                    depth[num] = depth[cur] + 1; // num 노드의 깊이를 현재 노드의 깊이보다 1만큼 증가시켜 저장
                    queue.push(num)
                }
            } 
        }
    }

    BFS(1);
    
    let maxDepth = Math.max.apply(null, depth);
    
    return depth.filter((v) => v === maxDepth).length;
}