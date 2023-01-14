package programmers.level1;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class 예산 {
    public static void main(String[] args) {
        int[] d = {2, 2, 3, 3};
        int budget = 10;
        solution(d, budget);
    }

    public static int solution(int[] d, int budget) {
        List<Integer> safe = Arrays.stream(d).boxed().collect(Collectors.toList());
        int sum = safe.stream().mapToInt(Integer::intValue).sum();

        while (sum > budget) {
            safe.remove(Integer.valueOf(Collections.max(safe)));
            sum = safe.stream().mapToInt(Integer::intValue).sum();
        }


        return safe.size();

        /*
        int answer = 0;

        Arrays.sort(d);
        for (int i = 0; i < d.length; i++) {
            budget -= d[i];

            if (budget < 0) break;

            answer++;
        }

        return answer;
        */
    }
}
