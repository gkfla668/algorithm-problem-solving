function solution(arr1, arr2) {
    var answer = [[]];
    let newArr2 = [[]];
    
    for(let i = 0; i < arr2[0].length; i++){
        let arr = [];
        
        arr2.forEach(val => arr.push(val[i])); 
        
        newArr2.push(arr);
    }
    
    newArr2 = newArr2.filter((arr) => arr.length !== 0 );
        
    arr1 = arr1.map((a1) => {
        let result = [];
        
        newArr2.forEach((a2) => {
            let value = 0;
            
            for(let i = 0; i < newArr2[0].length; i++){
                value += a1[i] * a2[i];
            } 
            
            result.push(value);
        })
        
        return result;
    })
    
    
    return arr1;
}