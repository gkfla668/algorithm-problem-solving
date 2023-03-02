function solution(s){
    s = [...s]; // stack
    let basket = [];

    s.forEach((val) => {
        if(basket.length === 0)
            basket.push(val);
        else {
            let ch = basket.pop();
            if(val !== ch){
                basket.push(ch);
                basket.push(val);
            }
        }
    })
        
    return basket.length === 0 ? 1 : 0;
        
}