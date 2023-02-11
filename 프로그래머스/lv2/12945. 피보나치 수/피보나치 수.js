function solution(n) {
    const arr = new Array(100001);
    arr[0] = 0;
    arr[1] = 1;
    
    for(let i = 2; i < 100001; i++)
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567 ;
    
    return arr[n];
}