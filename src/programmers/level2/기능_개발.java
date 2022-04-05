package programmers.level2;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class 기능_개발 {
    public static void main(String[] args) {
        int[] progresses = {95, 90, 99, 99, 80, 99};
        int[] speeds = {1, 1, 1, 1, 1, 1};
        solution(progresses, speeds);
    }

    public static int[] solution(int[] progresses, int[] speeds) {
        Queue<Integer> daysQueue = new LinkedList<>();
        List<Integer> list = new ArrayList<>();

        for (int i = 0; i < progresses.length; i++) {
            double quotient = (100 - progresses[i]) / (double) speeds[i];
            int day = (int) Math.ceil(quotient);

            if (!daysQueue.isEmpty() && daysQueue.peek() < day) {
                list.add(daysQueue.size());
                daysQueue.clear();
                daysQueue.add(day);
            } else
                daysQueue.add(day);
        }

        list.add(daysQueue.size());

        return list.stream().mapToInt(Integer::intValue).toArray();
    }
}
