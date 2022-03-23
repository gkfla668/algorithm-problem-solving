package programmers.level1;

public class 두_정수_사이의_합 {
    public static void main(String[] args) {
        int a = 5;
        int b = 3;
        solution(a, b);
    }

    public static long solution(int a, int b) {
        /* 등차수열 공식
        public long solution(int a, int b) {
            return sumAtoB(Math.min(a, b), Math.max(b, a));
        }

        private long sumAtoB(long a, long b) {
            return (b - a + 1) * (a + b) / 2;
        }
        */

        long answer = 0;
        int temp;

        if (a > b) {
            temp = a;
            a = b;
            b = temp;
        }

        for (int i = a; i <= b; i++)
            answer += i;

        return answer;
    }
}
