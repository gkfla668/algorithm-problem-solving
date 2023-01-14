package programmers.level2;

import java.util.Collections;
import java.util.PriorityQueue;

public class 프린터 {
    public static void main(String[] args) {
        int[] priorities = {2, 1, 3, 2};
        int location = 2;
        solution(priorities, location);
    }

    public static int solution(int[] priorities, int location) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>(Collections.reverseOrder());
        int answer = 0;

        for (int p : priorities)
            priorityQueue.add(p);

        while (!priorityQueue.isEmpty()) {
            for (int i = 0; i < priorities.length; i++) {
                if (!priorityQueue.isEmpty() && priorities[i] == priorityQueue.peek()) {
                    priorityQueue.poll();
                    answer++;
                    if (i == location) {
                        System.out.println(answer);
                        return answer;
                    }
                }
            }
        }

        return -1;
    }
}
