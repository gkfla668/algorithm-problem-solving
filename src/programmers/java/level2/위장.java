package programmers.level2;

import java.util.HashMap;
import java.util.Map;

public class 위장 {
    public static void main(String[] args) {
        String[][] clothes = {{"yellowhat", "headgear"}, {"bluesunglasses", "eyewear"}, {"green_turban", "headgear"}};
        solution(clothes);
    }

    public static int solution(String[][] clothes) {
        int combination = 1;
        Map<String, Integer> map = new HashMap<>();

        for (String[] str : clothes)
            map.put(str[1], map.getOrDefault(str[1], 0) + 1);

        for (String key : map.keySet())
            combination *= map.get(key) + 1;

        combination--;

        return map.size() == 1 ? clothes.length : combination;
    }
}
