package programmers.level2;

public class 다음_큰_숫자 {
    public static void main(String[] args) {
        int n = 78;
        solution(n);
    }

    public static int solution(int n) {
        int num = Integer.bitCount(n);

        int i = n + 1;
        while (num != Integer.bitCount(i)) {
            i++;
        }

        System.out.println(i);
        return i;
    }
}
