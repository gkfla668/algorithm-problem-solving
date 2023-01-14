package programmers.level1;

import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class 폰켓몬 {
    public static void main(String[] args) {
        int[] nums = {3, 1, 2, 3};
        solution(nums);
    }

    public static int solution(int[] nums) {
        Set<Integer> numbers = Arrays.stream(nums).boxed().collect(Collectors.toSet());

        return numbers.size() > (nums.length / 2) ? nums.length / 2 : numbers.size();
    }
}
