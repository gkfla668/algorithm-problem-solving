package programmers.level1;

import java.util.Arrays;

public class 자연수_뒤집어_배열로_만들기 {
    public static void main(String[] args) {
        long n = 5;
        solution(n);
    }

    public static int[] solution(long n) {
        /* 형변환 주의 */
        /* long type 길이 구하는 법
        * String a = "" + n;
        * a.length(); */

        int length = (int) (Math.log10(n) + 1);
        int[] answer = new int[length];

        for (int i = 0; i < length; i++) {
            answer[i] = (int) (n % 10);
            n /= 10;
        }

        return answer;
    }
}
