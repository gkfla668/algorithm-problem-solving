function solution(citations) {
//     let  idx = 0;
//     citations = citations.sort((a, b) => b - a)
//     while(idx + 1 <= citations[idx]) idx++;
    
//     return idx;

    return citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
}