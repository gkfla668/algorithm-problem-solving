package programmers.level2;

import java.util.Stack;

public class 짝지어_제거하기 {
    public static void main(String[] args) {
        String s = "cdcd";
        solution(s);
    }

    public static int solution(String s) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (!stack.isEmpty() && ch == stack.peek())
                stack.pop();
            else
                stack.push(ch);
        }

        return stack.isEmpty() ? 1 : 0;
    }
}
