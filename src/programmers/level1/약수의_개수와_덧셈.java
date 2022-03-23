package programmers.level1;

public class 약수의_개수와_덧셈 {
    public static void main(String[] args) {
        int left = 24;
        int right = 27;
        solution(left, right);
    }

    /* 제곱수를 통해 약수의 갯수를 알 수 있음
            if (i % Math.sqrt(i) == 0) {
                answer -= i;
            }
            //제곱수가 아닌 경우 약수의 개수가 짝수
            else {
                answer += i;
            }
     */

    public static int solution(int left, int right) {
        int answer = 0;

        for (int i = left; i <= right; i++) {
            int count = 2;

            for (int j = 1; j <= i; j++) {
                if (i % j == 0)
                    count++;
            }
            answer += count % 2 != 0 ? i * (-1) : i;
        }

        return answer;
    }
}

