package programmers.level1;

public class 정수_제곱근_판별 {
    public static void main(String[] args) {
        long n = 1;
        solution(n);
    }

    public static long solution(long n) {
        long answer = -1;

        for (long i = 1; i * i <= n; i++) { /* long 타입 주의 */
            if (i * i == n) {
                answer = (i + 1) * (i + 1);
                break;
            }
        }

        return answer;
    }
}
