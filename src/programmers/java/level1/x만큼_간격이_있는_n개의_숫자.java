package programmers.level1;

public class x만큼_간격이_있는_n개의_숫자 {
    public static void main(String[] args) {
        int x = 4;
        int n = 3;
        solution(x, n);
    }

    public static long[] solution(int x, int n) {
        /* long type 주의 */
        long[] answer = new long[n];

        for (int i = 1; i <= n; i++)
            answer[i-1] = (long) x * i;

        return answer;
    }
}
