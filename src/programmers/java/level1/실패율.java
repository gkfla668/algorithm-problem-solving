package programmers.level1;

import java.util.*;

public class 실패율 {
    public static void main(String[] args) {
        int N = 5;
        int[] stages = {2, 1, 2, 6, 2, 4, 3, 3};
        solution(N, stages);
    }

    public static int[] solution(int N, int[] stages) {
        Map<Integer, Double> lose = new HashMap<>();
        Map<Integer, Integer> stage = new HashMap<>();

        for (int i = 1; i <= N; i++)
            stage.put(i, 0);

        for (int num : stages)
            stage.put(num, stage.getOrDefault(num, 0) + 1);

        lose.put(1, (double) stage.get(1) / stages.length);
        int denominator = stages.length - stage.get(1);

        for (int i = 2; i <= N; i++) {
            if (denominator == 0) {
                lose.put(i, 0.0);
            } else {
                lose.put(i, (double) stage.get(i) / denominator);
                denominator = denominator - stage.get(i);
            }
        }

        List<Integer> result = new ArrayList<>(lose.keySet());
        Collections.sort(result, (value1, value2) -> (lose.get(value2).compareTo(lose.get(value1))));

        return result.stream()
                .mapToInt(Integer::intValue)
                .toArray();
    }
}
