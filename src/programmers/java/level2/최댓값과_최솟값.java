package programmers.level2;

import java.util.Arrays;

public class 최댓값과_최솟값 {
    public static void main(String[] args) {
        String s = "1 2 3 4";
        solution(s);
    }

    public static String solution(String s) {
        String[] str = s.split(" ");
        int[] nums = new int[str.length];

        for (int i = 0; i < str.length; i++)
            nums[i] = Integer.parseInt(str[i]);

        Arrays.sort(nums);
        return nums[0] + " " + nums[nums.length - 1];
    }
}
