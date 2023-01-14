package programmers.level3;

public class 네트워크 {
    public static void main(String[] args) {
        int n = 3;
        int[][] computers = {{1, 1, 0}, {1, 1, 0}, {0, 0, 1}};
        solution(n, computers);
    }

    public static int solution(int n, int[][] computers) {
        boolean[] check = new boolean[n];
        int answer = 0;

        for (int i = 0; i < n; i++) {
            if (!check[i]) {
                dfs(computers, check, i);
                answer++;
            }
        }

        return answer;
    }

    private static void dfs(int[][] computers, boolean[] check, int num) {
        check[num] = true;

        for (int i = 0; i < computers[num].length; i++) {
            if (computers[num][i] == 1 && !check[i])
                dfs(computers, check, i);
        }
    }
}
