package programmers.level1;

import java.util.ArrayList;
import java.util.List;

public class 모의고사 {
    public static void main(String[] args) {
        int[] answers = {1, 3, 2, 4, 2};
        solution(answers);
    }

    public static int[] solution(int[] answers) {
        int[] std1 = {1, 2, 3, 4, 5};
        int[] std2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] std3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};

        int count1 = 0, count2 = 0, count3 = 0;

        for (int i = 0; i < answers.length; ++i) {
            if (std1[i % std1.length] == answers[i]) {
                count1++;
            }
            if (std2[i % std2.length] == answers[i]) {
                count2++;
            }
            if (std3[i % std3.length] == answers[i]) {
                count3++;
            }
        }

        int max = Math.max(Math.max(count1, count2), count3);

        List<Integer> list = new ArrayList<>();
        if (max == count1) list.add(1);
        if (max == count2) list.add(2);
        if (max == count3) list.add(3);

        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}
