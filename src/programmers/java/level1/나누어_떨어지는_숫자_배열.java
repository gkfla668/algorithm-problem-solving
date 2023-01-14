package programmers.level1;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class 나누어_떨어지는_숫자_배열 {
    public static void main(String[] args) {
        int[] arr = {2,36,1,3};
        int divisor = 1;
        solution(arr, divisor);
    }

    public static int[] solution(int[] arr, int divisor) {
        /* Arrays.stream(arr).filter(f -> f % divisor == 0).toArray(); */

        List<Integer> list = new ArrayList<>();

        for (int num : arr) {
            if (num % divisor == 0)
                list.add(num);
        }

        if (list.size() == 0)
            list.add(-1);

        int[] answer = new int[list.size()];
        for (int i = 0; i < list.size(); i++)
            answer[i] = list.get(i);

        Arrays.sort(answer);
        return answer;
    }
}
