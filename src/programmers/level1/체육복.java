package programmers.level1;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class 체육복 {
    public static void main(String[] args) {
        int n = 5;
        int[] lost = {2, 4};
        int[] reserve = {3, 1};
        solution(n, lost, reserve);
    }

    public static int solution(int n, int[] lost, int[] reserve) {
        List<Integer> lostStd = Arrays.stream(lost).boxed().collect(Collectors.toList());
        List<Integer> reserveStd = Arrays.stream(reserve).boxed().collect(Collectors.toList());

        for (int i : reserve) {
            if (lostStd.contains(i)) { // 여벌 체육복 도난
                lostStd.remove(Integer.valueOf(i));
                reserveStd.remove(Integer.valueOf(i));
            }
        }

        Collections.sort(reserveStd);

        for (int i : reserveStd) {
            if (lostStd.contains(i - 1))
                lostStd.remove(Integer.valueOf(i - 1));
            else if (lostStd.contains(i + 1))
                lostStd.remove(Integer.valueOf(i + 1));
        }

        return n - lostStd.size();
    }
}