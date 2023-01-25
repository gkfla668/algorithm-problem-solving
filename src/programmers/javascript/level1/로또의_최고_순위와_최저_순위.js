function solution(lottos, win_nums) {
    let lank = [6, 6, 5, 4, 3, 2, 1];
    
    let minCnt = lottos.filter((num) => win_nums.includes(num)).length;
    let zeroCnt = lottos.filter((num) => num === 0).length;
    
    let maxCnt = minCnt + zeroCnt;
    
    return [lank[maxCnt], lank[minCnt]];
}