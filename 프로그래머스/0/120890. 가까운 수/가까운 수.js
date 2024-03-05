function solution(array, n) {
    array.push(n);
    array = array.sort(((a, b) => a - b));
    
    let targetIndex = array.findIndex((num) => num === n);
    
    let targetValue = array[targetIndex];
    let prevValue = array[targetIndex - 1];
    let nextValue = array[targetIndex + 1];
    
    if(targetIndex === 0) return nextValue;
    if(targetIndex === array.length - 1) return prevValue;
    
    return targetValue - prevValue > nextValue - targetValue ? nextValue : prevValue;
}