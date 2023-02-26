function solution(str1, str2) {
    let str1Set = [];
    let str2Set = [];
    let pattern = /[a-zA-Z]/; // 영문자
    
    for(let i = 0; i < str1.length - 1; i++){
        if(!pattern.test(str1.charAt(i)) || !pattern.test(str1.charAt(i + 1))) continue;
        str1Set.push(str1.slice(i, i + 2))
    }
        
     for(let i = 0; i < str2.length - 1; i++){ 
         if(!pattern.test(str2.charAt(i)) || !pattern.test(str2.charAt(i + 1))) continue;
        str2Set.push(str2.slice(i, i + 2))
    }
    
    if(str1Set.length === 0 && str2Set.length === 0)
        return 65536;
    
    let map = new Map();
    str2Set.forEach((str) => {
        map.set(str.toUpperCase(), (map.get(str.toUpperCase()) || 0) + 1);
    })
    
    let intersectionLength = str1Set.filter((str) => {
        if(map.get(str.toUpperCase()) >= 1){
            map.set(str.toUpperCase(), map.get(str.toUpperCase()) - 1);
            return true;
        }
    }).length;
    
    let unionLength = str1Set.length - intersectionLength;
    
    map.forEach((val) => {
        if(val > 0) unionLength += val;
    })
    
    return Math.trunc((intersectionLength / (unionLength + intersectionLength)) * 65536);
}