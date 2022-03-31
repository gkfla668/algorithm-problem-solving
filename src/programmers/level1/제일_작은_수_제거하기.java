package programmers.level1;

import java.util.Arrays;

public class 제일_작은_수_제거하기 {
    public static void main(String[] args) {
        int[] arr = {4};
        solution(arr);
    }

    public static int[] solution(int[] arr) {
        int min = Arrays.stream(arr).min().getAsInt();
        int[] answer = Arrays.stream(arr).filter(num -> num != min).toArray();
        if(answer.length == 0)
            answer = new int[] {-1};

        return answer;
    }
}
