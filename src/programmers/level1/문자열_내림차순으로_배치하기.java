package programmers.level1;

import java.util.*;

public class 문자열_내림차순으로_배치하기 {
    public static void main(String[] args) {
        String s = "Zbcdefg";
        solution(s);
    }

    public static String solution(String s) {
        char[] string = s.toCharArray();
        Arrays.sort(string);

        return new StringBuilder(new String(string)).reverse().toString();
    }
}
