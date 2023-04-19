function solution(numbers) {
  let stack = [numbers.pop()];
  let answer = [];

  while (numbers.length !== 0) {
    let num = numbers.pop();
    let backMax = stack[stack.length - 1];

    if (num < backMax) answer.push(backMax);
    else {
      while (num >= stack[stack.length - 1]) stack.pop();

      if (stack.length !== 0) {
        backMax = stack[stack.length - 1];
        answer.push(backMax);
      } else answer.push(-1);
    }

    stack.push(num);
  }

  answer.reverse();
  answer.push(-1);
  return answer;
}
