package programmers.level1;

import java.util.*;

public class 두개_뽑아서_더하기 {
    public static void main(String[] args) {
        int[] numbers = {5, 0, 2, 7};
        solution(numbers);
    }

    public static int[] solution(int[] numbers) {
        Set<Integer> number = new HashSet<>();

        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = i + 1; j < numbers.length; j++)
                number.add( numbers[i] + numbers[j]);
        }

        return number.stream().sorted().mapToInt(Integer::intValue).toArray();
    }
}
