function solution(clothes) {
    const map = clothes.reduce((accu,curr)=> {
      accu.set(curr[1], (accu.get(curr[1])||0) +1) ;
      return accu;
    },new Map());
    
    let combination = 1;
    for(let [k, v] of map){
        combination *= v + 1;
    }
    
    return combination - 1;
}