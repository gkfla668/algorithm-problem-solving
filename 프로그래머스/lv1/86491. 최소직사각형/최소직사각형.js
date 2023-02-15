function solution(sizes) {
    let maxSize = [0, 0];
    sizes = sizes.map((size) => size[0] < size[1] ? [size[1], size[0]] : [size[0], size[1]])
    
    sizes.forEach((size) => {
        if(maxSize[0] < size[0]) maxSize[0] = size[0];
        if(maxSize[1] < size[1]) maxSize[1] = size[1];
    })
    
    return maxSize[0] * maxSize[1];
}

// function solution(sizes) {
//     var answer = 0;
//     let row = [];
//     let col = [];
    
//     sizes.forEach((size) => {
//         if(size[0] <= size[1]){
//             col.push(size[1])
//             row.push(size[0]);
//         }else {
//             row.push(size[1])
//             col.push(size[0])
//         }
        
//     })
    
//     return Math.max(...row) * Math.max(...col);
// }