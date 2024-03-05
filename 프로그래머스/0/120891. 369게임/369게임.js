function solution(order) {
    return [...(order.toString())].filter((num) => ['3', '6', '9'].includes(num)).length;
}