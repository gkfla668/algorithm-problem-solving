function solution(sizes) {
    var answer = 0;
    let row = [];
    let col = [];
    
    sizes.forEach((size) => {
        if(size[0] <= size[1]){
            col.push(size[1])
            row.push(size[0]);
        }else {
            row.push(size[1])
            col.push(size[0])
        }
        
    })
    
    return Math.max(...row) * Math.max(...col);
}