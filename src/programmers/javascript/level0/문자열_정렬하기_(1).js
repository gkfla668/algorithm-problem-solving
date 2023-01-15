function solution(my_string) {
    return Array.from(my_string).filter((it) => !isNaN(it))
        .map((it) => Number(it))
        .sort((a, b) => a - b);
}