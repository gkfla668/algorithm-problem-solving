function solution(sizes) {
    let maxSize = [0, 0];
    sizes = sizes.map((size) => size[0] < size[1] ? [size[1], size[0]] : [size[0], size[1]])
    
    sizes.forEach((size) => {
        if(maxSize[0] < size[0]) maxSize[0] = size[0];
        if(maxSize[1] < size[1]) maxSize[1] = size[1];
    })
    
    return maxSize[0] * maxSize[1];
}