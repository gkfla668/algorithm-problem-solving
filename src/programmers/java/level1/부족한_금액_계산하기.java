package programmers.level1;

public class 부족한_금액_계산하기 {
    public static void main(String[] args) {
        int price = 3;
        int money = 20;
        int count = 4;
        solution(price, money, count);
    }

    public static long solution(int price, int money, int count) {
        /* Math.max( ,0) 함수를 이용해 0과 비교하여 큰 값 반환 */
        long sum = 0;

        for (int i = 1; i <= count; i++)
            sum += (price * i);

        return money - sum > 0 ? 0 : Math.abs(money - sum);
    }
}

