function solution(s1, s2) {
    return s1.filter((c1) => s2.includes(c1)).length;
}