package programmers.level1;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class 숫자_문자열과_영단어 {
    public static void main(String[] args) {
        String s = "23four5six7";
        solution(s);
    }

    public static int solution(String s) {
        Map<String, String > map = new HashMap<>(){{
            put("zero", "0");
            put("one", "1");
            put("two", "2");
            put("three", "3");
            put("four", "4");
            put("five", "5");
            put("six", "6");
            put("seven", "7");
            put("eight", "8");
            put("nine", "9");
        }};

        Iterator<String> key = map.keySet().iterator();
        while(key.hasNext()) {
            String str = key.next();
            s = s.replaceAll(str, map.get(str));
        }

        return Integer.parseInt(s);
    }

}
