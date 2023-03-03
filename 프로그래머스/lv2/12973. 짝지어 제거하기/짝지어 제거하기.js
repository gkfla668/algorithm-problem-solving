function solution(s){
    let basket = [];

    [...s].forEach((val) => {
        if(basket.length === 0) basket.push(val);
        else val !== basket[basket.length - 1] ? basket.push(val) : basket.pop();
        
    })
        
    return basket.length === 0 ? 1 : 0;  
}