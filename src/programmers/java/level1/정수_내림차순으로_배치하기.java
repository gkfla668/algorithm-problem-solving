package programmers.level1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class 정수_내림차순으로_배치하기 {
    public static void main(String[] args) {
        long n = 118372;
        solution(n);
    }

    public static long solution(long n) {
        List<Long> nums = new ArrayList<>();

        while (n != 0) {
            nums.add(n % 10);
            n /= 10;
        }

        Collections.sort(nums);

        String str = "";
        for (int i = nums.size() - 1; i >= 0; i--)
            str += nums.get(i);

        return Long.parseLong(str);

        /* 다른 사람의 풀이
        String[] list = String.valueOf(n).split("");
        Arrays.sort(list);

        StringBuilder sb = new StringBuilder();
        for (String aList : list) sb.append(aList);

        return Long.parseLong(sb.reverse().toString());
        */
    }
}
