function solution(price, money, count) {
    let totalMoney = price * count;
    
    while(count-- > 0)totalMoney += count * price;

    return money < totalMoney ? Math.abs(money - totalMoney) : 0;
}