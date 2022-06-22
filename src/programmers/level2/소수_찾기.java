package programmers.level2;

import java.util.HashSet;
import java.util.Set;

public class 소수_찾기 {
    static int answer = 0;
    static Set<Integer> set;

    public static void main(String[] args) {
        String numbers = "011";
        solution(numbers);
    }

    public static int solution(String numbers) {
        set = new HashSet<>();
        boolean[] check = new boolean[numbers.length()];

        for (int i = 1; i <= numbers.length(); i++) {// n개중 r개
            int[] output = new int[i];
            dfs(numbers, output, check, 0, i);
        }

        for (int num : set) {
            if (prime(num))
                answer++;
        }

        System.out.println(answer);
        return answer;
    }

    private static void dfs(String numbers, int[] output, boolean[] check, int depth, int r) {
        if (depth == r) {
            String str = "";
            for (int i = 0; i < depth; i++)
                str += output[i];

            set.add(Integer.valueOf(str));

            return;
        }

        for (int i = 0; i < numbers.length(); i++) {
            if (!check[i]) {
                check[i] = true;
                output[depth] = numbers.charAt(i) - '0';
                dfs(numbers, output, check, depth + 1, r);
                check[i] = false;
            }
        }
    }

    private static boolean prime(int num) {
        if (num <= 1)
            return false;

        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }

        return true;
    }

}
