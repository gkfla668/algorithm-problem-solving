// DFS, 가능한 모든 탐험 순서를 시도
function solution(k, dungeons) {
    let N = dungeons.length;
    let visited = new Array(N).fill(false);
    let maxCnt = 0;
    
    const DFS = (curK, cnt) => {
        maxCnt = Math.max(maxCnt, cnt);
        
        for(let i = 0; i < N; i++){
            const [minRequired, consumption] = dungeons[i];
            
            if(curK >= minRequired && !visited[i]){
                visited[i] = true;
                DFS(curK - consumption, cnt + 1);
                visited[i] = false; // 백트래킹, 초기화, 다른 경로 탐험하기 위해
            }
        }
    }
    
    DFS(k, 0);
    
    return maxCnt;
}