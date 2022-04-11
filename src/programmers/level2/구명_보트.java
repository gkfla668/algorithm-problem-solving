package programmers.level2;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class 구명_보트 {
    public static void main(String[] args) {
        int[] people = {70, 50, 80, 50};
        int limit = 100;
        solution(people, limit);
    }

    public static int solution(int[] people, int limit) {
        Arrays.sort(people);

        Deque<Integer> deque = new ArrayDeque<>(50005);
        for (int p : people)
            deque.add(p);

        int answer = 0;
        while (!deque.isEmpty()) {
            int weight = deque.pollLast(); // 오름차순 정렬 배열에서 왼쪽 오른쪽 더했을 때 limit 초과하면 오른쪽(큰쪽)을 먼저 보내야하므로
            if (!deque.isEmpty() && weight + deque.peekFirst() <= limit)
                deque.pollFirst();
            answer++;

        }

        return answer;
        /* 다른 사람 풀이
        Arrays.sort(people);
        int i = 0, j = people.length - 1;
        for (; i < j; --j) {
            if (people[i] + people[j] <= limit)
                ++i;
        }
        return people.length - i;
        */
    }
}
