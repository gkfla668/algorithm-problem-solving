function solution(s) {
    const numbers = s.split(' ').map((num) => Number(num));
    
    return [Math.min(...numbers), Math.max(...numbers)].join(" ");
}