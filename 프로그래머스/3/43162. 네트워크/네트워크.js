// DFS
// 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방식
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