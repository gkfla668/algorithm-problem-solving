package programmers.level2;

import java.util.Stack;

public class 올바른_괄호 {
    public void main(String[] args) {
        String s = "()()";
        solution(s);
    }

    boolean solution(String s) {
        boolean answer = true;

        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            if (stack.isEmpty())
                stack.push(s.charAt(i));
            else {
                if (s.charAt(i) == ')' && stack.peek() == '(') {
                    stack.pop();
                } else
                    stack.push(s.charAt(i));
            }
        }

        answer = stack.isEmpty();

        return answer;
    }
}
