package programmers.level1;

import java.util.*;
import java.util.stream.Collectors;

public class 문자열_내_마음대로_정렬하기 {
    public static void main(String[] args) {
        String[] strings = {"abce", "abcd", "cdx"};
        int n = 2;
        solution(strings, n);
    }

    public static String[] solution(String[] strings, int n) {
        List<Character> list = new ArrayList<>();
        String[] answer = new String[strings.length];

        for (String string : strings)
            list.add((string.charAt(n)));

        list = list.stream().distinct().collect(Collectors.toList());
        Collections.sort(list);

        int count = 0;
        for (int i = 0; i < list.size(); i++) {
            for (String string : strings) {
                if (list.get(i) == string.charAt(n)) {
                    answer[count] = string;
                    count++;
                }
            }
        }

        return answer;
    }
}
