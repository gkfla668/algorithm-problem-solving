function solution(land) {
    // 현재 행에서 동일한 열에 위치하지 않은 나머지 열들 중에서 최대값을 선택하여 더하는 것
    land.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            let arr = row.filter((it, idx) => idx !== colIdx);
            if(rowIdx < land.length - 1){
                land[rowIdx + 1][colIdx] += Math.max(...arr);
            }
        })
    })

    return Math.max(...land[land.length - 1]);
}