package programmers.level1;

import java.util.ArrayList;
import java.util.List;

public class 같은_숫자는_싫어 {
    public static void main(String[] args) {
        int[] arr = {4,4,4,3,3};
        solution(arr);
    }

    public static int[] solution(int[] arr) {
        List<Integer> list = new ArrayList<>();
        list.add(arr[0]);

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                list.add(arr[i]);
            }
        }

        /* stream 보다 list 순회하면서 값 빼서 int[]에 삽입하는 방식이 더 빠름
        int[] answer = new int[list.size()];

        for (int i = 0; i < answer.length; i++)
            answer[i] = list.get(i);
         */

        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}
