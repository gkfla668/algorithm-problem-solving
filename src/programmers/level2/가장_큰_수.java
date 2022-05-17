package programmers.level2;

import java.util.Arrays;
import java.util.Comparator;

public class 가장_큰_수 {
    public static void main(String[] args) {
        int[] numbers = {3, 30, 34, 5, 9};
        solution(numbers);
    }

    public static String solution(int[] numbers) {
        StringBuilder answer = new StringBuilder();
        String[] str = new String[numbers.length];

        for (int i = 0; i < numbers.length; i++)
            str[i] = String.valueOf(numbers[i]);

        Arrays.sort(str, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                return (o2 + o1).compareTo(o1 + o2);
            }
        });

        for (String s : str) answer.append(s);

        return str[0].equals("0") ? "0" : answer.toString();
    }
}
