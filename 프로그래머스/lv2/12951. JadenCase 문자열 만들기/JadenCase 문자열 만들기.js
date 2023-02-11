function solution(s) {  
    return s.split(' ').map((it) => it.charAt(0).toUpperCase() + it.substring(1).toLowerCase()).join(" ");
}