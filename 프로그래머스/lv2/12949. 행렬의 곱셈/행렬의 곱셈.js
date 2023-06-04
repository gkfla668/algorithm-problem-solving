function solution(arr1, arr2) {
    var answer = [[]];
    let newArr2 = [[]];
    
    for(let i = 0; i < arr2[0].length; i++){
        let arr = [];
        
        arr2.forEach((val) => {
            arr.push(val[i]);
        }) 
        
        newArr2.push(arr)
    }
    
    newArr2 = newArr2.filter((arr) => arr.length !== 0 );
    
    console.log(newArr2)
    
    
    arr1.map((a1) => {
        let arr = [];
        
        newArr2.forEach((v) => {
            let value = 0;
           for(let i = 0; i < newArr2[0].length; i++){
                value += a1[i] * v[i];
            } 
            arr.push(value);
        })
        
        answer.push(arr);
    })
    
    return answer.filter((a) => a.length !== 0);
}