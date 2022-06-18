package programmers.level2;

public class N_개의_최소공배수 {
    public static void main(String[] args) {
        int[] arr = {1, 2};
        solution(arr);
    }

    public static int solution(int[] arr) {
        int lcm = arr[0] * arr[1] / gcd(arr[0], arr[1]);
        int i = 2;

        while (i != arr.length) {
            lcm = lcm * arr[i] / gcd(lcm, arr[i]);
            i++;
        }

        return lcm;
    }

    private static int gcd(int a, int b) {
        if (b == 0)
            return a;

        return gcd(b, a % b);
    }
}
