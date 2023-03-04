function solution(n)
{
    let min = 0;
    
    while(n > 0){
        if(n % 2 !== 0){
            min++;
            n--;
        } else n /= 2;
    }
    
    return min;
}