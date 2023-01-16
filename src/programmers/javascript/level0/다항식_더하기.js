function solution(polynomial) {
    let coefficient = 0;
    let constant = 0;
    
    let arr = polynomial.split(' + ');
    
    arr.forEach((it) => {
        if(it.split('').includes('x')){
            coefficient += it.length !== 1 ? parseInt(it.substr(0, it.length - 1)) : 1;
        } else{
            constant += parseInt(it);
        }
    });
    
    // 계수 1 생략
    let coeffiStr = (coefficient === 1 ? '' : coefficient) + 'x';
    
    return constant === 0 ? coeffiStr : (coefficient === 0 ? constant.toString() 
       : coeffiStr + ' + ' + constant);
}