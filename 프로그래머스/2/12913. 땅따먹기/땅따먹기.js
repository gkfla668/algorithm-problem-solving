// 현재까지의 최적해를 다음 단계로 넘기면서 최종적인 최적해를 구하는 방식으로 문제를 해결하는 DP 기법
function solution(land) {
    land.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            // 동일한 열에 위치하지 않는 값들 중에서 최대값을 선택하여 누적 합을 계산
            let arr = row.filter((it, idx) => idx !== colIdx);
            
            if(rowIdx < land.length - 1){
                land[rowIdx + 1][colIdx] += Math.max(...arr);
            }
        })
    })

    return Math.max(...land[land.length - 1]);
}