package programmers.level1;

public class 콜라츠_추측 {
    public static void main(String[] args) {
        int num = 626331;
        solution(num);
    }

    public static int solution(int num) {
        long n = (long) num;

        for (int i = 0; i < 500; i++) {
            if (n == 1)
                return i;

            n = n % 2 == 0 ? n / 2 : n * 3 + 1;
        }
        return -1;
    }
}
