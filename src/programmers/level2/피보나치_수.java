package programmers.level2;

public class 피보나치_수 {
    public static void main(String[] args) {
        int n = 5;
        solution(n);
    }

    /* bottom-up */
    public static int solution(int n) {
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i < dp.length; i++) {
            dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
        }

        return dp[n] % 1234567;
    }

    /* top-down
    public static int solution(int n) {
        int[] dp = new int[n + 1];
        return fibo(n, dp) % 1234567;
    }

    private static int fibo(int num, int[] dp) {
        if (num == 0)
            return 0;
        else if (num == 1)
            return 1;

        if (dp[num] != 0)
            return dp[num];

        return dp[num] = (fibo(num - 1, dp) + fibo(num - 2, dp)) % 1234567;
    }
    */
}
