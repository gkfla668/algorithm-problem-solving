// 최소 시간
// BFS

// 시작 지점을 찾는 함수
function findIndex(maps, target) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === target) {
        return [i, j];
      }
    }
  }
}

function solution(maps) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
    let N = maps.length; // y (세로 길이)
    let M = maps[0].length; // x (가로 길이)
    
    const BFS = (start, target) => {
        // 최소 시간을 찾기 위해 기록
        let time = Array.from({ length: N }, () => Array(M).fill(-1));

        // 시작 위치에서 시간을 0으로 설정
        const [startY, startX] = start;
        time[startY][startX] = 0;

        const queue = [start];

        while(queue.length !== 0){
            let [y, x] = queue.shift();

            for(let i = 0; i < 4; i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                // 유효 범위 체크
                if(nx >= 0 && nx < M && ny >= 0 && ny < N && time[ny][nx] === -1){
                    if(maps[ny][nx] === target){ 
                        return time[y][x] + 1; // target에 도달한 시간 반환
                    }

                    if(maps[ny][nx] !== 'X'){ // 통로일 경우 이동
                        queue.push([ny, nx]);
                        time[ny][nx] = time[y][x] + 1;
                    }
                }
            }
        }
         return -1; // target에 도달할 수 없는 경우
    };
    
     const start = findIndex(maps, 'S');
     const lever = findIndex(maps, 'L');
     const exit = findIndex(maps, 'E');

      // 출발 지점에서 레버까지 최단 시간
    const startToLever = BFS(start, 'L');
    if (startToLever === -1) return -1; // 레버에 도달할 수 없는 경우


      // 레버에서 출구까지 최단 시간
      const leverToExit = BFS(lever, 'E');
    if (leverToExit === -1) return -1; // 출구에 도달할 수 없는 경우

      return startToLever + leverToExit; // 총 최소 시간 반환
}
    