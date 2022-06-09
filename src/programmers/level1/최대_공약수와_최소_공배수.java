package programmers.level1;

public class 최대_공약수와_최소_공배수 {
    public static void main(String[] args) {
        int n = 3;
        int m = 12;
        solution(n, m);
    }

    public static int[] solution(int n, int m) {
        int[] answer = new int[2];
        answer[0] = gcd(n, m);
        answer[1] = (n * m) / answer[0];

        return answer;
    }

    private static int gcd(int a, int b) {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }
}
