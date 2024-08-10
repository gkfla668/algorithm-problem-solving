function solution(price, money, count) {
    let totalMoney = 0;
    
    while(count > 0) {
        totalMoney += count * price;
        count--;
    }

    return money < totalMoney ? totalMoney - money : 0;
}