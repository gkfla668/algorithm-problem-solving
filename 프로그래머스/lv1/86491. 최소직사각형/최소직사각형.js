function solution(sizes) {
    let maxSize = [0, 0];
    let map = sizes.map((size) => size[0] < size[1] ? [size[1], size[0]] : [size[0], size[1]])
    
    map.forEach((size) => {
        if(maxSize[0] < size[0]) maxSize[0] = size[0];
        if(maxSize[1] < size[1]) maxSize[1] = size[1];
    })
    
    return maxSize[0] * maxSize[1];
}