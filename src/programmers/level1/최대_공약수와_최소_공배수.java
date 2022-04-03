package programmers.level1;

public class 최대_공약수와_최소_공배수 {
    public static void main(String[] args) {
        int n = 36;
        int m = 48;
        solution(n, m);
    }

    public static int[] solution(int n, int m) {
        int[] answer = new int[2];
        int gcd = 0;
        int lcm = m;
        int count = 2;

        for (int i = 1; i <= m; i++) {
            if (n % i == 0 && m % i == 0 && gcd < i)
                gcd = i;
        }

        answer[0] = gcd;

        while (true) {
            if (lcm % n == 0) {
                answer[1] = lcm;
                break;
            } else {
                lcm = m * count;
                count++;
            }
        }

        return answer;
    }
}
