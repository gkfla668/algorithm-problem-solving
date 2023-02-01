// DFS
function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let answer = 0;
    
    const DFS = (start) => {
        for(let i = 0; i < n; i++){
            if(computers[start][i] === 1 && !visited[i]){
                visited[i] = true;
                DFS(i);
            }
        }
    }
    
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            DFS(i);
            answer++;
        }
    }
    
    return answer;
}