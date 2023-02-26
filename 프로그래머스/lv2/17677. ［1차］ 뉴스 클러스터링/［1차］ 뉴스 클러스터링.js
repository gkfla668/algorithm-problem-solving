function solution(str1, str2) {
    let str1Arr = [];
    let str2Arr = [];
    let pattern = /[a-zA-Z]/; // 영문자
    
    for(let i = 0; i < str1.length; i++)
        str1Arr.push(str1.slice(i, i + 2))
    
    str1Arr = str1Arr.filter((str) => {
        let check = true;
        for(let i = 0; i < 2; i++)
            if(!pattern.test(str.charAt(i))) check = false; 
    
        return check;
    })
    
    for(let i = 0; i < str2.length; i++)
        str2Arr.push(str2.slice(i, i + 2))
    
    str2Arr = str2Arr.filter((str) => {
        let check = true;
        for(let i = 0; i < 2; i++)
            if(!pattern.test(str.charAt(i))) check = false; 
        
        return check;
    })
    
    if(str1Arr.length === 0 && str2Arr.length === 0)
        return 65536;
    
    let intersection = []; // 교집합
    let union = []; // 합집합
    
    let map = new Map();
    str2Arr.forEach((it) => {
        map.set(it.toUpperCase(), (map.get(it.toUpperCase()) || 0) + 1);
    })
    
    str1Arr.forEach((it) => {
        if(map.get(it.toUpperCase()) && map.get(it.toUpperCase()) >= 1){
            intersection.push(it);
            map.set(it.toUpperCase(), map.get(it.toUpperCase()) - 1);
        }else
            union.push(it);
    })

    map.forEach((val, key) => {
        while(val > 0){
            union.push(key);
            val--;
        }
    })
    
    return Math.trunc((intersection.length / (union.length + intersection.length) * 65536));
}