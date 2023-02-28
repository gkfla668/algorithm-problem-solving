function solution(citations) {
    return citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
}