package programmers.level2;

public class 타겟_넘버 {
    static int answer = 0;

    public static void main(String[] args) {
        int[] numbers = {4, 1, 2, 1};
        int target = 4;
        solution(numbers, target);
    }

    public static int solution(int[] numbers, int target) {
        dfs(numbers, numbers[0], target, 0);
        dfs(numbers, -numbers[0], target, 0);

        System.out.println(answer);

        return answer;
    }

    public static void dfs(int[] numbers, int num, int target, int depth) {
        if (depth == numbers.length - 1) {
            if (num == target)
                answer++;

            return;
        }

        dfs(numbers, num + numbers[depth + 1], target, depth + 1);
        dfs(numbers, num - numbers[depth + 1], target, depth + 1);
    }
}
