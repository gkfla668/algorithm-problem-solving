package programmers.level1;

import java.util.Arrays;

public class K번째_수 {
    public static void main(String[] args) {
        int[] array = {1, 5, 2, 6, 3, 7, 4};
        int[][] commands = {{2, 5, 3}, {4, 4, 1}, {1, 7, 3}};
        solution(array, commands);
    }

    public static int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];

        for (int i = 0; i < commands.length; i++) {
            int[] arr = array;
            int start = commands[i][0];
            int end = commands[i][1];
            int k = commands[i][2];

            arr = Arrays.copyOfRange(arr, start - 1, end);
            Arrays.sort(arr);
            answer[i] = arr[k- 1];
        }

        return answer;
    }
}
