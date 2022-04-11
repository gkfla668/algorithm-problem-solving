package programmers.level2;

public class 큰_수_만들기 {
    public static void main(String[] args) {
        String number = "4177252841";
        int k = 4;
        solution(number, k);
    }

    public static String solution(String number, int k) {
        /* 순서를 거르지 않고 숫자를 지워서 숫자를 만들어야 하는 게 핵심 */
        int start = 0;
        int max;
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = 0; i < number.length() - k; i++) {
            max = 0;
            for (int j = start; j <= k + i; j++) {
                if (max < number.charAt(j) - '0') {
                    max = number.charAt(j) - '0';
                    start = j + 1;
                }
            }
            stringBuilder.append(max);
        }

        return stringBuilder.toString();

        /* 다른 사람 풀이
        char[] result = new char[number.length() - k];
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < number.length(); i++) {
            char c = number.charAt(i);

            while (!stack.isEmpty() && stack.peek() < c && k-- > 0)
                stack.pop();

            stack.push(c);
        }

        for (int i=0; i<result.length; i++)
            result[i] = stack.get(i);

        return new String(result);
        */
    }
}
