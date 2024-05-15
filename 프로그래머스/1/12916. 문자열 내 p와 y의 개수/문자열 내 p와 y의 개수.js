function solution(s){
  
    return [...s].filter(ch => ch === 'p' || ch === 'P').length === [...s].filter(ch => ch === 'y' || ch === 'Y').length ? true : false;
    //  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}