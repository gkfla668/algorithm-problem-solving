package programmers.level3;

import java.util.LinkedList;
import java.util.Queue;

public class 가장_먼_노드 {
    public static void main(String[] args) {
        int n = 6;
        int[][] edge = {{3, 6}, {4, 3}, {3, 2}, {1, 3}, {1, 2}, {2, 4}, {5, 2}};

        solution(n, edge);
    }

    public static int solution(int n, int[][] edge) {
        int[][] arr = new int[n + 1][n + 1];
        boolean[] check = new boolean[n + 1];
        int answer;

        for (int[] idx : edge) {
            arr[idx[0]][idx[1]] = 1;
            arr[idx[1]][idx[0]] = 1;
        }

        answer = bfs(arr, check);

        return answer;
    }


    private static int bfs(int[][] arr, boolean[] check) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        check[1] = true;

        int cnt = 0;
        while (true) {
            Queue<Integer> temp = new LinkedList<>();

            while (!queue.isEmpty()) {
                int node = queue.poll();

                for (int i = 1; i < arr[node].length; i++) {
                    if (!check[i] && arr[node][i] == 1) {
                        check[i] = true;
                        temp.add(i);
                    }
                }
            }

            if (temp.size() == 0) break;
            queue.addAll(temp);
            cnt = temp.size(); // 마지막으로 담겨져있던 temp 사이즈 반환
        }

        return cnt;
    }
}
