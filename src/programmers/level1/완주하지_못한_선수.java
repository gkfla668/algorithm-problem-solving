package programmers.level1;

import java.util.*;

public class 완주하지_못한_선수 {
    public static void main(String[] args) {
        String[] participant = {"mislav", "stanko", "mislav", "ana"};
        String[] completion = {"stanko", "ana", "mislav"};
        solution(participant, completion);
    }

    public static String solution(String[] participant, String[] completion) {
        String answer = "";
        Map<String, Integer> map = new HashMap<>();

        for (String part : participant) map.put(part, map.getOrDefault(part, 0) + 1);

        for (String comp : completion) map.put(comp, map.get(comp) - 1);


        for (String part : participant) {
            if (map.get(part) == 1)
                answer = part;
        }

        return answer;
    }
}
