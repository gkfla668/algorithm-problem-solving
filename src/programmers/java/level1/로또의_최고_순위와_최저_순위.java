package programmers.level1;

import java.util.*;
import java.util.stream.Collectors;

public class 로또의_최고_순위와_최저_순위 {
    public static void main(String[] args) {
        int[] lottos = {45, 4, 35, 20, 3, 9};
        int[] win_nums = {20, 9, 3, 45, 4, 35};
        solution(lottos, win_nums);
    }

    public static int[] solution(int[] lottos, int[] win_nums) {
        Map<Integer, Integer> rank = new HashMap<>() {{
            put(0, 6);
            put(1, 6);
            put(2, 5);
            put(3, 4);
            put(4, 3);
            put(5, 2);
            put(6, 1);
        }};

        List<Integer> userLotto = Arrays.stream(lottos).boxed().collect(Collectors.toList());
        List<Integer> winLotto = Arrays.stream(win_nums).boxed().collect(Collectors.toList());

        int count = Collections.frequency(userLotto, 0);
        userLotto.retainAll(winLotto);
        int matchCount = userLotto.size();
        int[] answer = {rank.get(matchCount + count), rank.get(matchCount)};

        System.out.println(Arrays.toString(answer));
        return answer;
    }
}
