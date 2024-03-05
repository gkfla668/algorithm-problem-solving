function solution(spell, dic) {
    return dic.some((item) => [...item].sort().toString() === spell.sort().toString() ) ? 1 : 2;
}