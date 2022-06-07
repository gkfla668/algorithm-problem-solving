package programmers.level2;

public class 카펫 {
    public static void main(String[] args) {
        int brown = 10;
        int yellow = 2;
        solution(brown, yellow);
    }

    public static int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int num = brown + yellow;

        for (int i = 3; i < num; i++) { // 가운데 yellow 이려면 가로세로 3이상이여야 함
            if (num % i == 0 && ((i - 2) * ((num / i) - 2) == yellow)) { // 약수면서
                answer[0] = num / i;
                answer[1] = i;
                break;
            }
        }

        return answer;
    }
}
