package programmers.level1;

import java.util.Arrays;

public class 평균_구하기 {
    public static void main(String[] args) {
        int[] arr = {5, 5};
        solution(arr);
    }

    public static double solution(int[] arr) {
        return Arrays.stream(arr).sum() / (double) arr.length;
    }
}
