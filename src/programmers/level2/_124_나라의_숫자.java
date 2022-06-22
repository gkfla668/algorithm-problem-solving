package programmers.level2;

public class _124_나라의_숫자 {
    public static void main(String[] args) {
        int n = 10;
        solution(n);
    }

    public static String solution(int n) {
        StringBuilder answer = new StringBuilder();
        int[] num = {4, 1, 2};

        while (n > 0) {
            answer.insert(0, num[n % 3]);
            if (n % 3 == 0)// n이 3의 배수일 경우 자릿수가 하나 올라감(?) 따라서 n-1
                n--;
            n /= 3;
        }

        return answer.toString();
    }
}

