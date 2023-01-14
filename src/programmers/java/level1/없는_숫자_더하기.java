package programmers.level1;

public class 없는_숫자_더하기 {
    public static void main(String[] args) {
        int[] numbers = {5,8,4,0,6,7,9};
        solution(numbers);
    }

    public static int solution(int[] numbers) {
        int answer = 0;
        boolean check = true;

        for (int i = 0; i < 10; i++) {
            for (int number : numbers) {
                if (number != i)
                    check = false;
                else {
                    check = true;
                    break;
                }
            }

            if (!check)
                answer += i;
        }

        System.out.println(answer);
        return answer;
    }
}
