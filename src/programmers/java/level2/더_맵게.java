package programmers.level2;

import java.util.PriorityQueue;

public class 더_맵게 {
    public static void main(String[] args) {
        int[] scoville = {1, 2, 3, 9, 10, 12};
        int k = 7;
        solution(scoville, k);
    }

    public static int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        for (int s : scoville)
            heap.add(s);

        while (heap.peek() < K) {
            if (heap.size() == 1)
                return -1;

            int one = heap.poll();
            int two = heap.poll();
            heap.add(one + (two * 2));
            answer++;
        }

        return answer;
    }
}
