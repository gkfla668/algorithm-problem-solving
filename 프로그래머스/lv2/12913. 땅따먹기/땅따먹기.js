function solution(land) {
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